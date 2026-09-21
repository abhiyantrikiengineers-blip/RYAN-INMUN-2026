import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="site-container flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
        404
      </p>
      <h1 className="font-display text-4xl text-ink md:text-5xl">Page not found</h1>
      <p className="max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </main>
  );
}
