# CustomHooks Docs/Notes

Here i write things like docs about the code and why i did that with this way and explanations, I'll try to focus in important tings.

---

## useProducts.ts

1. `useProducts` Hook: takes 2 arguments (limit, skip):

   The hook is to make sure the data is not duplicated (without it, the data will be the same in the small section 'e.g. FlashSales, BestSelling Sections'),

Some FAQ's:

Q: Why i didn't rely on the `loading`, `error` that are returned from `seProductsStore`.

A: well, if the data is fethcing in another component in the same page, that will delay other data that are should be displayed, its like i'm making every component has it's own loading, error .. in the store this values are globals, maybe i'll use them in products page bc I'll need to fetc the whole data, better ux and error handling.

> Last Update : 20/08/2025.
