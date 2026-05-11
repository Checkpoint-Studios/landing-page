<script lang="ts">
  import CtaButton from "./CtaButton.svelte";
  import mascotColored from "../assets/images/mascot-colored.webp";

  const words = ["diseño", "marketing", "desarrollo", "video"];
  let wordIdx = $state(0);
  let wordKey = $state(0);
  let tick = $state(true);

  $effect(() => {
    const tickInterval = setInterval(() => {
      tick = !tick;
    }, 600);
    const wordInterval = setInterval(() => {
      wordIdx = (wordIdx + 1) % words.length;
      wordKey++;
    }, 2800);
    return () => {
      clearInterval(tickInterval);
      clearInterval(wordInterval);
    };
  });
</script>

<section
  id="hero"
  class="relative flex flex-col justify-center items-center overflow-hidden"
  style="min-height:100vh; padding:0 clamp(24px,8vw,160px);"
>
  <!-- Scanline overlay -->
  <div
    style="position:absolute;inset:0;pointer-events:none;z-index:1;background-image:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px);"
  ></div>
  <!-- Orange dot grid accent -->
  <div
    style="position:absolute;right:-5%;top:10%;width:clamp(260px,40vw,580px);height:clamp(260px,40vw,580px);background-image:radial-gradient(circle,var(--color-main-secondary) 1.5px,transparent 1.5px);background-size:32px 32px;opacity:0.12;pointer-events:none;z-index:0;"
  ></div>
  <!-- Large bg watermark -->
  <div
    style="position:absolute;bottom:-4%;left:-2%;font-family:var(--font-tusker);font-weight:700;font-size:clamp(120px,18vw,240px);line-height:1;color:rgba(247,127,0,0.055);letter-spacing:-0.02em;pointer-events:none;z-index:0;user-select:none;white-space:nowrap;"
  >
    CHECKPOINT
  </div>

  <div
    class="hero-grid relative grid grid-cols-2 items-center w-full max-w-[1400px]"
    style="z-index:2; gap:clamp(32px,5vw,80px);"
  >
    <!-- Left column -->
    <div
      style="display:flex;flex-direction:column;gap:32px;align-items:flex-start;"
    >
      <span
        style="display:inline-block;font-family:var(--font-tusker);font-weight:600;font-size:clamp(0.75rem,1.2vw,0.95rem);letter-spacing:0.16em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.12);border:2px solid var(--color-main-secondary);border-radius:9999px;padding:4px 16px;"
        >Puebla, MX — Est. 2025</span
      >

      <h1
        style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(3.5rem,7vw,7rem);line-height:1.05;letter-spacing:-0.02em;color:var(--color-main-secondary);margin:0;"
      >
        Tu negocio<br />merece un<br />
        <span class="word-slot">
          {#key wordKey}
            <span class="word-slot-inner">{words[wordIdx]}</span>
          {/key}
        </span><br />
        legendario
      </h1>

      <p
        style="font-family:var(--font-delight);font-weight:400;font-size:clamp(1rem,1.6vw,1.25rem);line-height:1.6;color:var(--color-dark-text);max-width:460px;margin:0;"
      >
        El power-up que tu marca necesita. Creatividad épica, resultados de
        victoria garantizada — para startups y corporaciones globales.
      </p>

      <CtaButton
        href="#contact"
        color="secondary"
        size="large"
        label="¡Iniciar misión!"
      />

      <!-- Blinking ticker -->
      <div
        style="display:flex;align-items:center;gap:12px;font-family:var(--font-tusker);font-size:clamp(0.8rem,1.2vw,1rem);color:var(--color-main-neutral);letter-spacing:0.1em;"
      >
        <span class="ticker-dot" style="opacity:{tick ? 1 : 0};"></span>
        <span>PRESS START — MISIÓN DISPONIBLE</span>
      </div>
    </div>

    <!-- Right column -->
    <div
      class="flex flex-col items-center gap-8 relative"
    >
      <!-- Halo glow -->
      <div
        style="position:absolute;width:70%;height:70%;border-radius:50%;top:10%;left:15%;background:radial-gradient(circle,rgba(247,127,0,0.18) 0%,transparent 70%);pointer-events:none;"
      ></div>
      <img
        src={mascotColored}
        alt="Checkpoint mascot"
        class="mascot"
        style="width:clamp(220px,35vw,420px);filter:drop-shadow(0 16px 40px rgba(247,127,0,0.3));position:relative;"
      />
      <!-- Client trust strip -->
      <div
        style="background:rgba(255,255,255,0.05);border:2px solid rgba(247,127,0,0.25);border-radius:12px;padding:16px 28px;display:flex;flex-direction:column;gap:10px;align-items:center;backdrop-filter:blur(8px);max-width:380px;width:100%;"
      >
        <span
          style="font-family:var(--font-delight);font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-neutral-700);font-weight:600;"
          >Hemos trabajado con</span
        >
        <div
          style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;justify-content:center;"
        >
          {#each ["DISNEY", "NETFLIX", "PHILLIP MORRIS", "GUM GUM"] as client}
            <span
              style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(0.9rem,1.6vw,1.2rem);color:var(--color-dark-text);letter-spacing:0.05em;opacity:0.75;"
              >{client}</span
            >
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div
    style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;z-index:2;opacity:0.6;"
  >
    <span
      style="font-family:var(--font-tusker);font-size:11px;letter-spacing:0.15em;color:var(--color-main-secondary);"
      >SCROLL</span
    >
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  @keyframes mascotFloat {
    0% {
      transform: translateY(0px) rotate(-1deg);
    }
    50% {
      transform: translateY(-18px) rotate(1.5deg);
    }
    100% {
      transform: translateY(0px) rotate(-1deg);
    }
  }
  @keyframes scrollPulse {
    0%,
    100% {
      opacity: 0.4;
      transform: scaleY(0.8);
    }
    50% {
      opacity: 1;
      transform: scaleY(1.2);
    }
  }
  @keyframes wordRollIn {
    0% {
      transform: translateY(-110%);
      opacity: 0;
    }
    15% {
      transform: translateY(6%);
      opacity: 1;
    }
    25% {
      transform: translateY(0%);
      opacity: 1;
    }
    75% {
      transform: translateY(0%);
      opacity: 1;
    }
    85% {
      transform: translateY(6%);
      opacity: 1;
    }
    100% {
      transform: translateY(110%);
      opacity: 0;
    }
  }
  .mascot {
    animation: mascotFloat 4s ease-in-out infinite;
  }
  .scroll-line {
    width: 2px;
    height: 36px;
    background: linear-gradient(
      to bottom,
      var(--color-main-secondary),
      transparent
    );
    animation: scrollPulse 1.5s ease-in-out infinite;
  }
  .word-slot {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
    position: relative;
    color: var(--color-main-neutral);
    min-width: 6ch;
    line-height: 1;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
  }
  .word-slot-inner {
    display: inline-block;
    animation: wordRollIn 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    line-height: 1;
  }
  .ticker-dot {
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background: var(--color-main-secondary);
    display: inline-block;
    transition: opacity 200ms;
  }
  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
    }
  }
</style>
