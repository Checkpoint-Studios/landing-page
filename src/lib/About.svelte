<script lang="ts">
  import PixelParticles from "./ui/PixelParticles.svelte";
  import CornerRunes from "./ui/CornerRunes.svelte";

  const pillars = [
    { t: "¿Quiénes somos?", d: "Checkpoint Studios es tu equipo de élite para diseño y marketing digital. Creatividad épica y resultados de victoria garantizada." },
    { t: "Misión", d: "Darle un power-up a tu negocio con diseño y estrategia. Co-op mode activado para que cada proyecto sea una aventura exitosa." },
    { t: "Visión", d: "Ser los que rompen el juego con soluciones creativas. Redefinir el éxito digital y llevar tu marca más allá de lo imaginable." },
  ];

  const team = [
    { name: "Eduardo Rodríguez", title: "Master of Frames & Feels", spec: "Diseño & Arte", level: 42, xp: 85 },
    { name: "Emmanuel González", title: "Code Conjurer", spec: "Dev & Tech", level: 38, xp: 72 },
    { name: "Irais López", title: "Hype Architect", spec: "Marketing", level: 40, xp: 90 },
    { name: "Miguel Guerra", title: "Pixel Overlord", spec: "Motion & Video", level: 44, xp: 95 },
  ];

  function initials(name: string) {
    return name.split(" ").map(n => n[0]).join("").slice(0, 2);
  }

  let hoveredCard = $state<number | null>(null);
</script>

<section
  id="about"
  style="padding:clamp(80px,10vw,140px) clamp(24px,8vw,160px);background:var(--color-primary-900);position:relative;overflow:hidden;"
>
  <PixelParticles id="px-about" density={3} speed={0.55} palette={["#f77f00","#eae2b7","#ff914d","#003049"]} />
  <CornerRunes opacity={0.2} />

  <div style="position:relative;z-index:1;">
    <!-- Header -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:clamp(40px,5vw,64px);">
      <div style="text-align:right;">
        <span style="display:inline-block;font-family:var(--font-tusker);font-weight:600;font-size:clamp(0.75rem,1.2vw,0.95rem);letter-spacing:0.16em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.12);border:2px solid var(--color-main-secondary);border-radius:9999px;padding:4px 16px;margin-bottom:20px;">Los bosses detrás de todo</span>
        <h2 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(2.5rem,5vw,5rem);line-height:0.95;color:var(--color-main-secondary);letter-spacing:-0.02em;">
          Los pilares<br/><span style="color:var(--color-main-neutral);">de nuestro gremio</span>
        </h2>
      </div>
    </div>

    <!-- Three pillars -->
    <div class="pillars-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,3vw,32px);margin-bottom:clamp(48px,6vw,80px);">
      {#each pillars as p}
        <div style="border-left:4px solid var(--color-main-secondary);padding-left:24px;display:flex;flex-direction:column;gap:10px;">
          <h5 style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(1rem,1.6vw,1.3rem);color:var(--color-main-secondary);margin:0;">{p.t}</h5>
          <p style="font-family:var(--font-delight);font-size:clamp(0.875rem,1.2vw,1rem);color:var(--color-dark-text);line-height:1.6;margin:0;">{p.d}</p>
        </div>
      {/each}
    </div>

    <!-- Team grid -->
    <div class="team-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(12px,2vw,24px);">
      {#each team as member, i}
        <div
          role="article"
          style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:clamp(20px,3vw,32px);border:3px solid {hoveredCard === i ? 'var(--color-main-secondary)' : 'rgba(247,127,0,0.25)'};border-radius:16px;background:rgba(0,48,73,0.4);transition:border-color 300ms ease;"
          onmouseenter={() => hoveredCard = i}
          onmouseleave={() => hoveredCard = null}
        >
          <!-- Avatar -->
          <div style="width:clamp(80px,10vw,120px);height:clamp(80px,10vw,120px);border-radius:9999px;background:radial-gradient(circle at 40% 35%,var(--color-primary-600) 0%,var(--color-primary-900) 100%);border:4px solid var(--color-main-secondary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(1.5rem,3vw,2.2rem);color:var(--color-main-secondary);">{initials(member.name)}</span>
          </div>
          <!-- Info -->
          <div style="text-align:center;display:flex;flex-direction:column;gap:4px;">
            <div style="font-family:var(--font-tusker);font-weight:600;font-size:11px;letter-spacing:0.14em;color:var(--color-main-secondary);text-transform:uppercase;opacity:0.8;">LVL {member.level} — {member.spec}</div>
            <h4 style="font-family:var(--font-tusker);font-weight:700;margin:0;font-size:clamp(1.1rem,1.8vw,1.4rem);color:var(--color-main-neutral);line-height:1.1;">{member.name}</h4>
            <p style="font-family:var(--font-delight);font-size:clamp(0.8rem,1.1vw,0.95rem);color:var(--color-dark-text);opacity:0.8;margin:0;">{member.title}</p>
          </div>
          <!-- XP bar -->
          <div style="width:100%;display:flex;flex-direction:column;gap:4px;">
            <div style="display:flex;justify-content:space-between;">
              <span style="font-family:var(--font-tusker);font-size:10px;letter-spacing:0.12em;color:var(--color-main-secondary);opacity:0.7;">XP</span>
              <span style="font-family:var(--font-tusker);font-size:10px;color:var(--color-main-secondary);opacity:0.7;">{member.xp}%</span>
            </div>
            <div style="height:6px;background:rgba(247,127,0,0.15);border-radius:9999px;overflow:hidden;">
              <div style="height:100%;width:{member.xp}%;background:linear-gradient(to right,var(--color-main-secondary),var(--color-secondary-600));border-radius:9999px;"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    .pillars-grid { grid-template-columns: 1fr !important; }
    .team-grid    { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 600px) {
    .team-grid { grid-template-columns: 1fr !important; }
  }
</style>
