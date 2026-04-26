import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contacto · Filacalc',
  description: 'Ponte en contacto con el equipo de Filacalc.',
};

const contactEmail = 'edwin.porras1022@gmail.com';

export default function ContactPage() {
  return (
    <div className="page">
      {/* Background decorations */}
      <div className="bg-grain" aria-hidden="true" />
      <div className="bg-blob bg-blob--1" aria-hidden="true" />
      <div className="bg-blob bg-blob--2" aria-hidden="true" />

      {/* Topbar */}
      <header className="topbar">
        <Link href="/" className="brand" style={{ textDecoration: 'none' }}>
          <div className="brand__mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="12" rx="8" ry="3.5" />
              <path d="M4 12v4c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-4" />
              <circle cx="12" cy="12" r="1.4" />
            </svg>
          </div>
          <div>
            <div className="brand__name">Filacalc</div>
            <div className="brand__tag">Calculadora de costos 3D</div>
          </div>
        </Link>
        <Link href="/" className="ghost-btn">
          ← Volver al inicio
        </Link>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* Title card */}
        <div className="card" style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--accent-soft)', color: 'var(--accent)',
              display: 'grid', placeItems: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400,
                letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0, lineHeight: 1.1,
              }}>
                Contacto
              </h1>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--ink-3)' }}>
                ¿Tienes una pregunta, sugerencia o encontraste un bug?
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
            Filacalc es un proyecto personal hecho con cariño. Si quieres comunicarte,
            puedes hacerlo directamente por correo electrónico — leo todos los mensajes.
          </p>
        </div>

        {/* Email card */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--surface-2)', color: 'var(--accent)',
              display: 'grid', placeItems: 'center', flexShrink: 0,
              border: '1px solid var(--line)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
              color: 'var(--ink)', margin: 0,
            }}>
              Correo electrónico
            </h2>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, margin: '0 0 16px' }}>
            Escríbeme directamente a:
          </p>
          <a
            href={`mailto:${contactEmail}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 18px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-soft)', color: 'var(--accent-ink)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
              border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)',
              transition: 'filter 0.15s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {contactEmail}
          </a>
        </div>

        {/* Topics card */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--surface-2)', color: 'var(--accent)',
              display: 'grid', placeItems: 'center', flexShrink: 0,
              border: '1px solid var(--line)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
              color: 'var(--ink)', margin: 0,
            }}>
              ¿Sobre qué puedes escribirme?
            </h2>
          </div>
          <ul style={{
            color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7,
            margin: 0, paddingLeft: 20,
          }}>
            {[
              '🐛 Reportar un bug o comportamiento inesperado',
              '💡 Sugerir una nueva funcionalidad o mejora',
              '🌐 Proponer una traducción a otro idioma',
              '📣 Colaboraciones o menciones en contenido',
              '🔒 Consultas sobre privacidad o datos',
              '☕ Simplemente saludar',
            ].map((item) => (
              <li key={item} style={{ marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Response time card */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--surface-2)', color: 'var(--accent)',
              display: 'grid', placeItems: 'center', flexShrink: 0,
              border: '1px solid var(--line)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 1.8" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
              color: 'var(--ink)', margin: 0,
            }}>
              Tiempo de respuesta
            </h2>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>
            Hago mi mejor esfuerzo para responder en <strong style={{ color: 'var(--ink)' }}>1–3 días hábiles</strong>.
            Filacalc es un proyecto personal, así que agradezco tu paciencia. 🙌
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
