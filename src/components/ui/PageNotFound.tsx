import LinkButton from "@/components/ui/LinkButton";

function PageNotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-20">
      <h1 className="text-8xl">404 Not Found</h1>
      <p className="font-light">
        Your visited page not found. You may go home page.
      </p>
      <LinkButton to="/">Go Home</LinkButton>
    </section>
  );
}

export default PageNotFound;
