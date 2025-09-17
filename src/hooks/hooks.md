# Hooks Reference (src/hooks/)

This document summarizes the custom hooks in `src/hooks/`. It focuses on what each hook does, inputs/outputs, behavior (loading, error, caching), and how to use them in components.

- `useProducts.tsx`
- `useProductById.tsx`
- `useCategories.ts`

---

## useProducts

- **File**: `src/hooks/useProducts.tsx`
- **Purpose**: Fetch a list of products with optional pagination (`limit`, `skip`).
- **Data Source**: `getProducts(limit?, skip?)` from `src/services/productsApi.ts`.
- **Caching Key**: `['products', limit, skip]` (changes trigger refetch).

### Signature
```ts
function useProducts(limit?: number, skip?: number)
  => UseQueryResult<ProductTypes[], Error>
```

### Parameters
- **limit?** number — Limit number of returned products.
- **skip?** number — Offset for pagination.

### Returns
From React Query `useQuery` result:
- **data**: `ProductTypes[] | undefined` — Extracted as `data.products` from the API.
- **isLoading**: `boolean`
- **error**: `Error | null`
- Other fields available if needed: `refetch`, `isError`, `isFetching`, etc.

### Behavior
- Runs immediately when mounted and when `limit/skip` change.
- Errors from the service are surfaced as `error`.

### Usage
```tsx
import useProducts from '@/hooks/useProducts';

function Example() {
  const { data, isLoading, error } = useProducts(12, 0);

  if (isLoading) return <Loading />;
  if (error) return <Error err={error} />;

  return <ProductGrid items={data ?? []} />;
}
```

---

## useProductById

- **File**: `src/hooks/useProductById.tsx`
- **Purpose**: Fetch a single product by ID derived from the current route params.
- **Data Source**: `getProductById(id)` from `src/services/productsApi.ts`.
- **Caching Key**: `['product', id]`.

### Signature
```ts
function useProductById()
  => UseQueryResult<ProductTypes, Error>
```

### Parameters
- None. The hook reads `id` from `react-router-dom`'s `useParams()`.

### Returns
- **data**: `ProductTypes | undefined`
- **isLoading**: `boolean`
- **error**: `Error | null`
- Optional: `refetch`, etc., if you destructure them.

### Behavior
- `enabled: !!id` — Only fetch when an `id` is present in the route.
- Surfaces API failures as `error`.

### Usage
```tsx
import useProductById from '@/hooks/useProductById';

function ProductDetails() {
  const { data, isLoading, error } = useProductById();

  if (isLoading) return <Loading />;
  if (error) return <Error err={error} />;
  if (!data) return <ProductNotFound />;

  return <Details data={data} />;
}
```

---

## useCategories

- **File**: `src/hooks/useCategories.ts`
- **Purpose**: Fetch products for the selected top-level category (from the URL), then filter by selected sub-categories and optionally sort by price if requested via URL.
- **Data Source**: `getCategoryProducts(urls, opts?)` from `src/services/productsApi.ts`.
- **Caching Key**: `['category', category]` (category is taken from the URL via `useParams`).

### Signature
```ts
function useCategories()
  => { isLoading: boolean; error: Error | null; data: ProductTypes[] }
```

### Inputs (derived internally)
- **category**: from the current route using `useParams()`.
- **search params** via `useSearchParams()`:
  - `c`: multiple values used to filter by sub-category(s).
  - `order`: optional `'asc' | 'desc'` — when present, client-side sort by price is applied; otherwise data remains unsorted (API order).

### Returns
- **isLoading**: `boolean`
- **error**: `Error | null`
- **data**: `ProductTypes[]`
  - Starts from API results for the active category group.
  - Filters by `c` (if any).
  - Conditionally sorts by price when `order` is `'asc'` or `'desc'`.

### Behavior
- `enabled: !!categoryName` — The query runs only when the category slug matches a configured group.
- Uses `useMemo` to recompute filters/sort only when relevant inputs change.

### Usage
```tsx
import useCategories from '@/hooks/useCategories';

function CategoryView() {
  const { isLoading, error, data } = useCategories();

  if (isLoading) return <Loading />;
  if (error) return <Error err={error} />;

  return <ProductGrid items={data} />;
}
```

### Controlling filtering and sorting via URL
- Filter by sub-categories: `?c=smartphones&c=laptops`
- Sort by price ascending: `?order=asc`
- Sort by price descending: `?order=desc`
- Remove `order` to show unsorted (original API order).

---

## Notes & Conventions
- Prefer destructuring only what you need from React Query: `{ data, isLoading, error }`.
- Error UI: use the shared `src/components/ui/Error.tsx` component as `<Error err={error} />`.
- Loading UI: use a shared `<Loading />` component where available.
- When adding new hooks, follow the same patterns:
  - Use meaningful `queryKey`s.
  - Gate queries with `enabled` when derived inputs may be undefined.
  - Keep hooks focused on data concerns; leave display logic to components.
