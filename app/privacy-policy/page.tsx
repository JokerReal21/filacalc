import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad · Filacalc',
  description: 'Política de privacidad de Filacalc — cómo manejamos tu información.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = '25 de abril de 2026';
  const siteName = 'Filacalc';
  const siteUrl = 'https://filacalc.com';
  const contactEmail = 'edwin.porras1022@gmail.com';

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
            <div className="brand__name">{siteName}</div>
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
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--accent-soft)', color: 'var(--accent)',
              display: 'grid', placeItems: 'center', flexShrink: 0
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400,
                letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0, lineHeight: 1.1
              }}>
                Política de Privacidad
              </h1>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--ink-3)' }}>
                Última actualización: {lastUpdated}
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
            En <strong>{siteName}</strong> (<a href={siteUrl} style={{ color: 'var(--accent)' }}>{siteUrl}</a>)
            nos tomamos tu privacidad en serio. Esta política describe qué información recopilamos,
            cómo la usamos y qué derechos tienes sobre ella.
          </p>
        </div>

        {/* Sections */}
        {sections(contactEmail, siteName).map((s) => (
          <Section key={s.title} title={s.title} icon={s.icon}>
            {s.content}
          </Section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

/* ─── Section component ────────────────────────────────────────────────── */
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

/* ─── Content ──────────────────────────────────────────────────────────── */
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: '0 0 10px' }}>{children}</p>;
}
function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 4 }}>{item}</li>
      ))}
    </ul>
  );
}

function sections(contactEmail: string, siteName: string) {
  return [
    {
      title: '1. Información que recopilamos',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
      content: (
        <>
          <P>{siteName} es una calculadora que funciona completamente en tu navegador. <strong>No recopilamos datos personales</strong> de forma directa. Sin embargo, algunos servicios de terceros que usamos pueden recopilar información de manera automática:</P>
          <Ul items={[
            'Dirección IP y datos de geolocalización aproximada',
            'Tipo de navegador, sistema operativo y resolución de pantalla',
            'Páginas visitadas y tiempo de permanencia',
            'Fuente de referencia (de dónde llegaste al sitio)',
          ]} />
        </>
      ),
    },
    {
      title: '2. Cookies y tecnologías similares',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1"/><circle cx="14.5" cy="10" r="1"/><circle cx="11.5" cy="15" r="1"/></svg>,
      content: (
        <>
          <P>Usamos cookies propias para recordar tus preferencias (tema oscuro/claro, densidad de la interfaz). Además, los servicios de terceros listados abajo pueden instalar sus propias cookies con fines publicitarios y analíticos.</P>
          <P>Puedes controlar o deshabilitar las cookies desde la configuración de tu navegador, aunque algunas funciones del sitio pueden verse afectadas.</P>
        </>
      ),
    },
    {
      title: '3. Google AdSense y publicidad',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
      content: (
        <>
          <P>Este sitio utiliza <strong>Google AdSense</strong> para mostrar anuncios. Google puede usar cookies para mostrar anuncios personalizados basados en tus visitas previas a este y otros sitios web.</P>
          <Ul items={[
            'Google usa la cookie DART para mostrar anuncios según tus visitas.',
            'Puedes optar por no recibir anuncios personalizados en: ',
          ]} />
          <P>
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}>
              google.com/settings/ads
            </a>
            {' '}— Configuración de anuncios de Google.
          </P>
          <P>Para más información sobre cómo Google maneja los datos, visita la{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}>
              Política de Privacidad de Google
            </a>.
          </P>
        </>
      ),
    },
    {
      title: '4. Google Analytics',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
      content: (
        <>
          <P>Utilizamos <strong>Google Analytics</strong> para entender cómo los usuarios interactúan con el sitio (páginas más visitadas, tiempo de sesión, etc.). Estos datos son agregados y anónimos.</P>
          <P>Puedes optar por no ser rastreado instalando el{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}>
              complemento de inhabilitación de Google Analytics
            </a>.
          </P>
        </>
      ),
    },
    {
      title: '5. Uso de la información',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>,
      content: (
        <>
          <P>La información recopilada se utiliza exclusivamente para:</P>
          <Ul items={[
            'Mejorar la experiencia de uso del sitio',
            'Analizar el tráfico y comportamiento de usuarios de forma agregada',
            'Mostrar publicidad relevante a través de Google AdSense',
            'Mantener la seguridad y el correcto funcionamiento del sitio',
          ]} />
          <P>No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales propios.</P>
        </>
      ),
    },
    {
      title: '6. Tus derechos',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      content: (
        <>
          <P>Dependiendo de tu ubicación, puedes tener los siguientes derechos sobre tus datos:</P>
          <Ul items={[
            'Acceder a los datos que tenemos sobre ti',
            'Solicitar la corrección de datos incorrectos',
            'Solicitar la eliminación de tus datos',
            'Oponerte al procesamiento de tus datos con fines publicitarios',
          ]} />
          <P>Para ejercer cualquiera de estos derechos, contáctanos en{' '}
            <a href={`mailto:${contactEmail}`} style={{ color: 'var(--accent)' }}>{contactEmail}</a>.
          </P>
        </>
      ),
    },
    {
      title: '7. Cambios a esta política',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
      content: (
        <>
          <P>Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio significativo será notificado mediante un aviso visible en el sitio. Te recomendamos revisar esta página periódicamente.</P>
          <P>El uso continuado del sitio tras la publicación de cambios implica la aceptación de la nueva política.</P>
        </>
      ),
    },
    {
      title: '8. Contacto',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      content: (
        <P>Si tienes preguntas o dudas sobre esta política de privacidad, puedes escribirnos a{' '}
          <a href={`mailto:${contactEmail}`} style={{ color: 'var(--accent)' }}>{contactEmail}</a>.
        </P>
      ),
    },
  ];
}
