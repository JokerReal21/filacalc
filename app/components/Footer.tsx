export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 w-full border-t border-white/10 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-3 text-xs text-gray-400">
        <span>Filacalc · v1.0</span>
        <span aria-hidden="true" className="opacity-40">·</span>
        <span>Hecho con cariño en Guatemala</span>
        <span aria-hidden="true" className="opacity-40">·</span>

        {/* PayPal tip button */}
        <a
          href="https://www.paypal.com/donate?business=edwin.porras1022%40gmail.com&currency_code=USD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#003087] px-3 py-1 text-[11px] font-semibold text-white transition-all duration-150 hover:bg-[#0047b3] hover:-translate-y-px active:scale-95"
        >
          {/* PayPal logo mark */}
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="currentColor"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.07 1.71C9.4.93 8.18.5 6.56.5H2.39A.75.75 0 0 0 1.65 1.1L.01 11.3a.45.45 0 0 0 .44.52h3.2l.8-5.08v-.19a.75.75 0 0 1 .74-.64h1.55c3.02 0 5.39-1.23 6.08-4.79.21-1.06.1-1.95-.75-2.51z" />
            <path
              opacity=".6"
              d="M4.5 3.3a.75.75 0 0 1 .74-.64h4.68c.55 0 1.07.04 1.53.12C11.64 2.9 11.8 3 12 3.1c-.29-1.88-1.57-3.1-4.52-3.1H3.3a.75.75 0 0 0-.74.64L.88 11.1a.45.45 0 0 0 .44.52h3.31l.88-5.6L4.5 3.3z"
            />
          </svg>
          Invítame un café ☕
        </a>
      </div>
    </footer>
  );
}
