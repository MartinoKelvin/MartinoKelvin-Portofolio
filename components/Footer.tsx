export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-surface-border py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between text-foreground relative z-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Martino Kelvin All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}
