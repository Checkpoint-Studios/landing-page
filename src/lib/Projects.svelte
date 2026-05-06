<script lang="ts">
  import PixelParticles from "./ui/PixelParticles.svelte";
  import CornerRunes from "./ui/CornerRunes.svelte";

  const tiles = [
    { label: "Branding Corporativo", cat: "Diseño", cols: 2, rows: 2, bg: "rgba(247,127,0,0.12)" },
    { label: "Campaña Disney+", cat: "Motion", cols: 1, rows: 1, bg: "rgba(0,105,154,0.25)" },
    { label: "Landing Page SaaS", cat: "Web Dev", cols: 1, rows: 1, bg: "rgba(247,127,0,0.08)" },
    { label: "Rebranding Netflix MX", cat: "Diseño", cols: 1, rows: 1, bg: "rgba(0,75,111,0.3)" },
    { label: "Motion Reel 2024", cat: "Video", cols: 2, rows: 1, bg: "rgba(247,127,0,0.1)" },
    { label: "Social Media Strategy", cat: "Marketing", cols: 1, rows: 1, bg: "rgba(0,105,154,0.2)" },
  ];

  let hoveredIndex = $state<number | null>(null);
</script>

<section
  id="projects"
  style="padding:clamp(80px,10vw,140px) clamp(24px,8vw,160px);position:relative;overflow:hidden;"
>
  <PixelParticles id="px-projects" density={2.5} speed={0.6} palette={["#f77f00","#ff914d","#ffffff","#eae2b7"]} interactive={true} />
  <CornerRunes opacity={0.15} />

  <div style="position:relative;z-index:1;">
    <!-- Header -->
    <div style="margin-bottom:clamp(40px,5vw,64px);">
      <span style="display:inline-block;font-family:var(--font-tusker);font-weight:600;font-size:clamp(0.75rem,1.2vw,0.95rem);letter-spacing:0.16em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.12);border:2px solid var(--color-main-secondary);border-radius:9999px;padding:4px 16px;margin-bottom:20px;">Galería de victorias</span>
      <h2 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(2.5rem,5vw,5rem);line-height:0.95;color:var(--color-main-secondary);letter-spacing:-0.02em;">
        Nuestros<br/><span style="color:var(--color-main-neutral);">mejores raids</span>
      </h2>
    </div>

    <!-- Project grid -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,clamp(200px,22vw,320px));gap:clamp(10px,1.5vw,20px);">
      {#each tiles as tile, i}
        {@const hovered = hoveredIndex === i}
        <div
          role="button"
          tabindex="0"
          style="grid-column:span {tile.cols};grid-row:span {tile.rows};background:{tile.bg};border:3px solid {hovered ? 'var(--color-main-secondary)' : 'rgba(247,127,0,0.2)'};border-radius:12px;cursor:pointer;overflow:hidden;position:relative;min-height:200px;transition:border-color 300ms ease;"
          onmouseenter={() => hoveredIndex = i}
          onmouseleave={() => hoveredIndex = null}
          onkeydown={(e) => { if (e.key === 'Enter') hoveredIndex = i; }}
        >
          <!-- Dot grid background -->
          <div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(247,127,0,0.2) 1px,transparent 1px);background-size:20px 20px;opacity:0.5;"></div>
          <!-- Number watermark -->
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--font-tusker);font-weight:700;font-size:clamp(64px,8vw,120px);line-height:1;color:rgba(247,127,0,0.08);user-select:none;transition:opacity 300ms;opacity:{hovered ? 0 : 1};">{String(i + 1).padStart(2, "0")}</div>
          <!-- Hover overlay -->
          <div style="position:absolute;inset:0;background:rgba(0,36,56,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;opacity:{hovered ? 1 : 0};transition:opacity 300ms ease;padding:24px;">
            <span style="font-family:var(--font-tusker);font-weight:600;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-main-secondary);border:2px solid rgba(247,127,0,0.4);border-radius:9999px;padding:3px 12px;">{tile.cat}</span>
            <h4 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(1.1rem,2vw,1.6rem);color:var(--color-main-neutral);text-align:center;line-height:1.1;">{tile.label}</h4>
          </div>
        </div>
      {/each}
    </div>

    <p style="margin-top:24px;font-family:var(--font-delight);font-size:14px;color:var(--color-neutral-700);text-align:center;">
      Portafolio completo disponible bajo solicitud — <a href="#contact" style="color:var(--color-main-secondary);text-decoration:underline;">¡contáctanos!</a>
    </p>
  </div>
</section>
