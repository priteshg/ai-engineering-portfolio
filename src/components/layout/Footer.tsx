export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="font-mono">
          Built with Next.js, TypeScript &amp; Framer Motion.
        </p>
        <p>&copy; {new Date().getFullYear()} Pritesh Gandhi. All rights reserved.</p>
      </div>
    </footer>
  );
}
