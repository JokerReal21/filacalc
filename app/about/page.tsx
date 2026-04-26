import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Acerca de · Filacalc',
  description:
    'Filacalc es una calculadora gratuita de costos para impresión 3D. Conoce el proyecto, su propósito y a quién está detrás.',
};

export default function AboutPage() {
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
                <ellipse cx="12" cy="12" rx="8" ry="3.5" />
                <path d="M4 12v4c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-4" />
                <circle cx="12" cy="12" r="1.4" />
              </svg>
            </div>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400,
                letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0, lineHeight: 1.1,
              }}>
                Acerca de Filacalc
              </h1>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--ink-3)' }}>
                Una herramienta honesta para impresores 3D
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
            <strong>Filacalc</strong> nació de una necesidad real: saber exactamente cuánto cuesta
            imprimir en 3D, sin adivinar. Es una calculadora gratuita, rápida y sin registro,
            pensada para makers, emprendedores y entusiastas de la impresión 3D.
          </p>
        </div>

        {/* What it does */}
        <Section
          title="¿Qué hace Filacalc?"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
            </svg>
          }
        >
          <p style={{ margin: '0 0 10px' }}>
            Con Filacalc puedes calcular el costo real de cada impresión tomando en cuenta:
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20, lineHeight: 1.8 }}>
            {[
              'Costo del filamento usado (por gramos)',
              'Consumo eléctrico (kWh · potencia · tiempo)',
              'Porcentaje de desperdicio y fallos',
              'Depreciación de la impresora',
              'Conversión automática entre quetzales y dólares',
            ].map((item) => (
              <li key={item} style={{ marginBottom: 4 }}>{item}</li>
            ))}
          </ul>
          <p style={{ margin: 0 }}>
            Todo el cálculo ocurre en tu navegador — ningún dato sale de tu dispositivo.
          </p>
        </Section>

        {/* Who made it */}
        <Section
          title="¿Quién está detrás?"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        >
          <p style={{ margin: '0 0 10px' }}>
            Filacalc es un proyecto personal creado y mantenido por{' '}
            <strong style={{ color: 'var(--ink)' }}>Edwin Porras</strong>, desarrollador
            y entusiasta de la impresión 3D desde Guatemala 🇬🇹.
          </p>
          <p style={{ margin: 0 }}>
            Es un proyecto <em>indie</em> hecho con cariño en tiempo libre. Si te resulta útil,
            puedes apoyarlo con un tip o simplemente compartiéndolo con alguien que lo necesite.
          </p>
        </Section>

        {/* Values */}
        <Section
          title="Principios del proyecto"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          }
        >
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
            {[
              '🆓 Siempre gratuito — sin muros de pago ni registros',
              '🔒 Privado — ningún dato se envía a servidores',
              '⚡ Rápido — funciona al instante, sin carga inicial pesada',
              '🎨 Cuidado — diseño limpio y pensado para ser agradable de usar',
              '🌍 Accesible — funciona en cualquier dispositivo y navegador moderno',
            ].map((item) => (
              <li key={item} style={{ marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </Section>

        {/* Tech stack */}
        <Section
          title="Tecnologías usadas"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          }
        >
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
            {[
              'Next.js 16 (App Router)',
              'React 19',
              'TypeScript',
              'Tailwind CSS v4',
              'Desplegado en Vercel',
            ].map((item) => (
              <li key={item} style={{ marginBottom: 4 }}>{item}</li>
            ))}
          </ul>
        </Section>

        {/* CTA */}
        <div className="card" style={{ marginBottom: 16, textAlign: 'center' }}>
          <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, margin: '0 0 16px' }}>
            ¿Tienes una sugerencia o encontraste un error? Me encantaría escucharte.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 20px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-soft)', color: 'var(--accent-ink)',
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)',
            }}
          >
            Contactar →
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}

/* ─── Reusable section ─────────────────────────────────────────────────── */
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="card" style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'var(--surface-2)', color: 'var(--accent)',
          display: 'grid', placeItems: 'center', flexShrink: 0,
          border: '1px solid var(--line)',
        }}>
          {icon}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
          color: 'var(--ink)', margin: 0,
        }}>
          {title}
        </h2>
      </div>
      <div style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}
