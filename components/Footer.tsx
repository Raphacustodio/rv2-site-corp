import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0F1A" }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image src="/logos/rv2-logo.png" alt="RV2 – Consultoria e Tecnologia para TOTVS Moda" width={0} height={0}
              style={{ height: 44, width: "auto", objectFit: "contain", marginTop: -12 }} />
            <span className="text-[13px] font-bold leading-tight">
              <span style={{ color: "#4ADE80" }}>ASSESSORIA</span>
              <span className="text-white/40 mx-1">+</span>
              <span style={{ color: "#A78BFA" }}>TECNOLOGIA</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-white text-xs">© {new Date().getFullYear()} RV2. Todos os direitos reservados.</p>

          {/* Ícones sociais */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/rv2assessoria/" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rv2assessoria/" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
