<script lang="ts">
  import PixelParticles from "./ui/PixelParticles.svelte";
  import CornerRunes from "./ui/CornerRunes.svelte";

  const steps = [
    { num: "01", title: "La Reunión Inicial", sub: "BRIEFING", desc: "Nos sentamos contigo para comprender tu misión a fondo. Evaluamos tus necesidades y mapeamos la ruta hacia la victoria." },
    { num: "02", title: "El Plan de Juego", sub: "ESTRATEGIA", desc: "Diseñamos la estrategia juntos. Establecemos objetivos, checkpoints y expectativas claras para cada fase." },
    { num: "03", title: "Ejecución & Feedback", sub: "PRODUCCIÓN", desc: "Iteraciones rápidas, entrega constante. Tu feedback es nuestro combustible hasta que cada asset sea perfecto." },
    { num: "04", title: "¡Victoria!", sub: "ENTREGA", desc: "Deploy completo, archivos entregados, métricas activadas. La misión se completó — ¡a celebrar el win!" },
  ];
</script>

<section
  id="process"
  style="padding:clamp(80px,10vw,140px) clamp(24px,8vw,160px);background:var(--color-primary-900);position:relative;overflow:hidden;"
>
  <PixelParticles id="px-process" density={3.5} speed={0.5} palette={["#f77f00","#ff914d","#eae2b7","#003049"]} />
  <CornerRunes opacity={0.22} />

  <div style="position:relative;z-index:1;">
    <!-- Header -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:clamp(40px,5vw,64px);">
      <div style="text-align:right;">
        <span style="display:inline-block;font-family:var(--font-tusker);font-weight:600;font-size:clamp(0.75rem,1.2vw,0.95rem);letter-spacing:0.16em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.12);border:2px solid var(--color-main-secondary);border-radius:9999px;padding:4px 16px;margin-bottom:20px;">Nuestro modo cooperativo</span>
        <h2 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(2.5rem,5vw,5rem);line-height:0.95;color:var(--color-main-secondary);letter-spacing:-0.02em;">
          Así se<br/><span style="color:var(--color-main-neutral);">gana el juego</span>
        </h2>
      </div>
    </div>

    <!-- Steps -->
    <div style="display:flex;gap:clamp(12px,2vw,24px);flex-wrap:wrap;">
      {#each steps as step, i}
        <div style="display:flex;flex-direction:column;gap:0;align-items:stretch;flex:1;min-width:200px;">
          <!-- Connector line with node -->
          <div style="display:flex;align-items:center;margin-bottom:24px;">
            <div style="width:56px;height:56px;border-radius:9999px;flex-shrink:0;border:4px solid var(--color-main-secondary);background:var(--color-surface);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 8px rgba(247,127,0,0.1);z-index:1;position:relative;">
              <span style="font-family:var(--font-tusker);font-weight:700;font-size:18px;color:var(--color-main-secondary);">{step.num}</span>
            </div>
            {#if i < steps.length - 1}
              <div style="flex:1;height:4px;background:repeating-linear-gradient(to right,var(--color-main-secondary) 0,var(--color-main-secondary) 8px,transparent 8px,transparent 16px);opacity:0.5;"></div>
            {/if}
          </div>
          <!-- Content box -->
          <div style="border:2px solid rgba(247,127,0,0.3);border-radius:12px;padding:clamp(16px,2vw,24px);display:flex;flex-direction:column;gap:10px;background:rgba(0,48,73,0.4);">
            <span style="font-family:var(--font-tusker);font-size:11px;letter-spacing:0.16em;color:var(--color-main-secondary);opacity:0.8;">{step.sub}</span>
            <h4 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(1.1rem,1.8vw,1.4rem);color:var(--color-main-neutral);line-height:1.1;">{step.title}</h4>
            <p style="font-family:var(--font-delight);font-size:clamp(0.875rem,1.2vw,1rem);color:var(--color-dark-text);line-height:1.55;margin:0;">{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
