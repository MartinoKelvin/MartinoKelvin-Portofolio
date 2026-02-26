export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-surface-border py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between text-foreground relative z-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} K.P. All rights reserved.
        </p>
        <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-foreground transition">Twitter</a>
          <a href="#" className="hover:text-foreground transition">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
