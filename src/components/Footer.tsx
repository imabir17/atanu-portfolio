export function Footer() {
  return (
    <footer className="bg-background py-24 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 max-w-4xl mx-auto leading-tight">
          Let&apos;s create something beautiful.
        </h2>
        <a 
          href="mailto:hello@atanusengupta.com"
          className="font-inter text-lg md:text-xl text-accent hover:text-white transition-colors duration-300 tracking-wider mb-16"
        >
          hello@atanusengupta.com
        </a>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-foreground/60">
          <a href="https://www.facebook.com/share/1Dsdfb8GXM/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
          <a href="https://www.instagram.com/films.by_atanu_?igsh=am0waDgycmp3NGoy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
          <a href="https://www.behance.net/atanusengupta4" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Behance</a>
        </div>
        <p className="mt-16 text-xs text-foreground/30 font-inter tracking-wider">
          © {new Date().getFullYear()} ATANU SENGUPTA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
