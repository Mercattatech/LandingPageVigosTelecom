import vigosLogo from "figma:asset/ac4dbebbc389b3a989fdeb433304f09f7ea0026c.png";

export function HeaderLP() {
  return (
    <header className="bg-white border-b-4 shadow-sm" style={{ borderColor: 'var(--vigos-blue-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={vigosLogo} 
            alt="Vigos Soluções" 
            className="h-16 lg:h-20"
          />
        </div>

        {/* Elemento decorativo azul */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex flex-col items-end gap-1">
            <div 
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: 'var(--vigos-blue-primary)' }}
            />
            <div 
              className="h-1 w-12 rounded-full"
              style={{ backgroundColor: 'var(--vigos-blue-dark)' }}
            />
            <div 
              className="h-1 w-8 rounded-full"
              style={{ backgroundColor: 'var(--vigos-green-accent)' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
