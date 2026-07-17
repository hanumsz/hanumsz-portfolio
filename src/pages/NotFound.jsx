import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-cream">
      <div className="container-edit py-40 text-center">
        <p className="font-display text-sm italic text-stone">404</p>
        <h1 className="mt-4 font-display text-3xl italic text-ink sm:text-4xl">This page took a wrong turn.</h1>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="outline">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
