<script lang="ts">
  import PixelParticles from "./ui/PixelParticles.svelte";
  import CornerRunes from "./ui/CornerRunes.svelte";

  interface Service {
    num: string;
    title: string;
    desc: string;
    tags: string[];
    icon: string;
  }

  const services: Service[] = [
    {
      num: "01", title: "Ilustración & Diseño Gráfico",
      desc: "Desde branding que te hace un ícono hasta ilustraciones originales y posts virales para redes. Creamos visuales que son pura victoria.",
      tags: ["Branding", "Ilustración", "Social Media", "Print"],
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor"><circle cx="20" cy="20" r="18" stroke-width="2.5"/><path d="M12 28 Q16 16 20 14 Q24 12 26 20 Q28 24 26 28" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.5"/></svg>`,
    },
    {
      num: "02", title: "Video & Motion Graphics",
      desc: "Edición de video cinematográfica y motion graphics 2D que convierten tus ideas en narrativas dinámicas que capturan la atención al instante.",
      tags: ["Motion 2D", "Edición", "VFX", "Reels"],
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor"><rect x="4" y="10" width="32" height="22" rx="3" stroke-width="2.5"/><path d="M16 15l10 6-10 6V15z" fill="currentColor" opacity="0.7" stroke="none"/></svg>`,
    },
    {
      num: "03", title: "Marketing Digital",
      desc: "Diseñamos tu estrategia completa, planeamos tu contenido y gestionamos tus campañas. Domina el juego online y que cada ad sea un headshot.",
      tags: ["Ads", "Estrategia", "Contenido", "Analytics"],
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor"><path d="M6 30 L14 20 L20 26 L26 12 L34 18" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="34" cy="10" r="4" fill="currentColor" opacity="0.6" stroke="none"/></svg>`,
    },
    {
      num: "04", title: "Desarrollo Web",
      desc: "Desde landing pages veloces hasta e-commerces listos para la batalla. Construimos tu fortaleza digital con código a medida o plataformas populares.",
      tags: ["Web", "E-commerce", "CMS", "Performance"],
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor"><rect x="4" y="8" width="32" height="26" rx="3" stroke-width="2.5"/><path d="M4 14h32" stroke-width="2"/><circle cx="10" cy="11" r="1.5" fill="currentColor" opacity="0.6" stroke="none"/><circle cx="15" cy="11" r="1.5" fill="currentColor" opacity="0.6" stroke="none"/><path d="M14 22l-4 4 4 4M26 22l4 4-4 4M18 30l4-8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
    },
    {
      num: "05", title: "Gestión de Redes Sociales",
      desc: "Tu comunidad es tu gremio. Gestionamos tus redes con estrategia editorial, creatividad diaria y métricas reales para que tu audiencia crezca.",
      tags: ["Community", "Calendario", "Stories", "Análisis"],
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor"><circle cx="20" cy="14" r="6" stroke-width="2.5"/><circle cx="8" cy="30" r="4" stroke-width="2"/><circle cx="32" cy="30" r="4" stroke-width="2"/><path d="M14 18 Q10 22 10 28M26 18 Q30 22 30 28" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`,
    },
  ];

  let hoveredIndex = $state<number | null>(null);
</script>

<section
  id="services"
  style="padding:clamp(80px,10vw,140px) clamp(24px,8vw,160px);position:relative;overflow:hidden;"
>
  <PixelParticles id="px-services" density={3} speed={0.7} />
  <CornerRunes />

  <div style="position:relative;z-index:1;">
    <!-- Header -->
    <div style="margin-bottom:clamp(40px,5vw,64px);">
      <span style="display:inline-block;font-family:var(--font-tusker);font-weight:600;font-size:clamp(0.75rem,1.2vw,0.95rem);letter-spacing:0.16em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.12);border:2px solid var(--color-main-secondary);border-radius:9999px;padding:4px 16px;margin-bottom:20px;">Lo que sabemos hacer</span>
      <h2 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(2.5rem,5vw,5rem);line-height:0.95;color:var(--color-main-secondary);letter-spacing:-0.02em;">
        Servicios<br/><span style="color:var(--color-main-neutral);">con estilo</span>
      </h2>
    </div>

    <!-- Service cards -->
    <div style="display:flex;flex-direction:column;gap:16px;">
      {#each services as service, i}
        {@const isEven = i % 2 === 0}
        {@const hovered = hoveredIndex === i}
        <div
          role="article"
          style="display:grid;grid-template-columns:{isEven ? 'auto 1fr' : '1fr auto'};gap:0;align-items:stretch;border:4px solid {hovered ? 'var(--color-secondary-600)' : 'var(--color-main-secondary)'};border-radius:16px;overflow:hidden;background:{hovered ? 'rgba(247,127,0,0.06)' : 'rgba(0,48,73,0.5)'};transition:border-color 300ms ease,background 300ms ease;cursor:default;"
          onmouseenter={() => hoveredIndex = i}
          onmouseleave={() => hoveredIndex = null}
        >
          <!-- Number badge — left for even -->
          {#if isEven}
            <div style="width:clamp(80px,10vw,120px);background:{hovered ? 'var(--color-main-secondary)' : 'rgba(247,127,0,0.12)'};display:flex;align-items:center;justify-content:center;transition:background 300ms ease;flex-shrink:0;">
              <span style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(2.5rem,4vw,3.5rem);color:{hovered ? 'var(--color-main-primary)' : 'var(--color-main-secondary)'};transition:color 300ms ease;letter-spacing:-0.02em;">{service.num}</span>
            </div>
          {/if}

          <!-- Content -->
          <div style="padding:clamp(24px,3vw,40px);display:flex;flex-direction:column;gap:16px;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div style="color:var(--color-main-secondary);">{@html service.icon}</div>
              <h3 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(1.4rem,2.5vw,2rem);color:var(--color-main-neutral);line-height:1.05;">{service.title}</h3>
            </div>
            <p style="font-family:var(--font-delight);font-size:clamp(0.95rem,1.4vw,1.1rem);color:var(--color-dark-text);line-height:1.6;margin:0;">{service.desc}</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
              {#each service.tags as tag}
                <span style="font-family:var(--font-delight);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.1);border:1.5px solid rgba(247,127,0,0.35);border-radius:9999px;padding:3px 12px;">{tag}</span>
              {/each}
            </div>
          </div>

          <!-- Number badge — right for odd -->
          {#if !isEven}
            <div style="width:clamp(80px,10vw,120px);background:{hovered ? 'var(--color-main-secondary)' : 'rgba(247,127,0,0.12)'};display:flex;align-items:center;justify-content:center;transition:background 300ms ease;flex-shrink:0;">
              <span style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(2.5rem,4vw,3.5rem);color:{hovered ? 'var(--color-main-primary)' : 'var(--color-main-secondary)'};transition:color 300ms ease;letter-spacing:-0.02em;">{service.num}</span>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
