<script lang="ts">
  import PixelParticles from "./ui/PixelParticles.svelte";
  import CornerRunes from "./ui/CornerRunes.svelte";
  import CtaButton from "./CtaButton.svelte";
  import { InstagramIcon } from "@lucide/svelte";

  let name = $state("");
  let email = $state("");
  let service = $state("");
  let msg = $state("");
  let sent = $state(false);

  const inputStyle = "width:100%;box-sizing:border-box;background:var(--color-primary-800);color:var(--color-main-neutral);border:2px solid rgba(247,127,0,0.35);border-radius:8px;padding:12px 16px;font-family:var(--font-delight);font-size:17px;outline:none;transition:border-color 300ms ease;";
  const labelStyle = "display:block;font-family:var(--font-tusker);font-weight:600;color:var(--color-main-secondary);font-size:1.1rem;letter-spacing:0.04em;margin-bottom:6px;";

  function submit(e: Event) {
    e.preventDefault();
    sent = true;
  }

  function focusBorder(e: FocusEvent) {
    (e.target as HTMLElement).style.borderColor = "var(--color-main-secondary)";
  }
  function blurBorder(e: FocusEvent) {
    (e.target as HTMLElement).style.borderColor = "rgba(247,127,0,0.35)";
  }

  const whyItems = [
    "Equipo senior con experiencia internacional",
    "Clientes en Fortune 500 incluyendo Disney y Netflix",
    "Entregas a tiempo — sin excusas, sin game overs",
    "Creatividad que sube de nivel con cada proyecto",
  ];
</script>

<section
  id="contact"
  style="padding:clamp(80px,10vw,140px) clamp(24px,8vw,160px) clamp(120px,14vw,200px);position:relative;overflow:hidden;"
>
  <PixelParticles id="px-contact" density={2} speed={0.8} palette={["#f77f00","#ff914d","#eae2b7","#ffffff"]} interactive={true} />
  <CornerRunes opacity={0.2} />

  <div style="position:relative;z-index:1;">
    <span style="display:inline-block;font-family:var(--font-tusker);font-weight:600;font-size:clamp(0.75rem,1.2vw,0.95rem);letter-spacing:0.16em;text-transform:uppercase;color:var(--color-main-secondary);background:rgba(247,127,0,0.12);border:2px solid var(--color-main-secondary);border-radius:9999px;padding:4px 16px;margin-bottom:20px;">La misión comienza aquí</span>
    <h2 style="font-family:var(--font-tusker);font-weight:700;margin:0 0 16px;font-size:clamp(2.5rem,5vw,5rem);line-height:0.95;color:var(--color-main-secondary);letter-spacing:-0.02em;">
      ¿Listo para<br/><span style="color:var(--color-main-neutral);">subir de nivel?</span>
    </h2>
    <p style="font-family:var(--font-delight);max-width:560px;margin-bottom:clamp(32px,4vw,48px);font-size:clamp(1rem,1.4vw,1.15rem);color:var(--color-dark-text);line-height:1.6;">
      No importa si eres un veterano de mil batallas o acabas de crear tu marca. Mándanos un mensaje y empecemos esta partida juntos.
    </p>

    <div class="contact-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,64px);align-items:start;">
      <!-- Form / Victory state -->
      {#if sent}
        <div style="border:4px solid var(--color-main-secondary);border-radius:16px;padding:clamp(32px,5vw,56px);text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px;background:rgba(247,127,0,0.06);">
          <div style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(3rem,5vw,4rem);color:var(--color-main-secondary);">¡VICTORIA!</div>
          <p style="font-family:var(--font-delight);font-size:18px;color:var(--color-dark-text);margin:0;">
            Gracias, <strong style="color:var(--color-main-secondary);">{name || "jugador"}</strong>. Te respondemos pronto y arrancamos la misión.
          </p>
        </div>
      {:else}
        <form
          onsubmit={submit}
          style="border:4px solid var(--color-main-secondary);border-radius:16px;overflow:hidden;background:rgba(0,36,56,0.6);"
        >
          <!-- Terminal header -->
          <div style="background:var(--color-main-secondary);padding:10px 20px;display:flex;align-items:center;gap:8px;">
            <span style="font-family:var(--font-tusker);font-weight:700;font-size:14px;color:var(--color-main-primary);letter-spacing:0.1em;">MISSION_BRIEFING.exe</span>
            <div style="margin-left:auto;display:flex;gap:6px;">
              {#each ["#f77f00","#eae2b7","#003049"] as c}
                <div style="width:10px;height:10px;border-radius:9999px;background:{c};opacity:0.8;"></div>
              {/each}
            </div>
          </div>
          <!-- Fields -->
          <div style="padding:clamp(20px,3vw,36px);display:flex;flex-direction:column;gap:18px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div>
                <label style={labelStyle} for="contact-name">Nombre</label>
                <input style={inputStyle} id="contact-name" type="text" name="name" bind:value={name} required
                  onfocus={focusBorder} onblur={blurBorder} />
              </div>
              <div>
                <label style={labelStyle} for="contact-email">Email</label>
                <input style={inputStyle} id="contact-email" type="email" name="email" bind:value={email} required
                  onfocus={focusBorder} onblur={blurBorder} />
              </div>
            </div>
            <div>
              <label style={labelStyle} for="contact-service">Servicio de interés</label>
              <select style="{inputStyle}cursor:pointer;" id="contact-service" bind:value={service}>
                <option value="">— Elige tu misión —</option>
                <option value="design">Ilustración & Diseño</option>
                <option value="video">Video & Motion</option>
                <option value="marketing">Marketing Digital</option>
                <option value="web">Desarrollo Web</option>
                <option value="social">Gestión de Redes</option>
                <option value="full">Todo lo anterior</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} for="contact-msg">Mensaje</label>
              <textarea style="{inputStyle}height:auto;resize:vertical;min-height:100px;" id="contact-msg" name="message" rows={4}
                bind:value={msg} required placeholder="Cuéntanos sobre tu proyecto..."
                onfocus={focusBorder} onblur={blurBorder}></textarea>
            </div>
            <div class="w-1/2">
            <CtaButton size="large" color="secondary" label="¡Iniciar misión!" />
            </div>
          </div>
        </form>
      {/if}

      <!-- Info panel -->
      <div style="display:flex;flex-direction:column;gap:clamp(24px,3vw,36px);">
        <div style="border:2px solid rgba(247,127,0,0.25);border-radius:12px;padding:clamp(20px,3vw,32px);background:rgba(0,48,73,0.4);">
          <h5 style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(1.2rem,2vw,1.6rem);color:var(--color-main-secondary);margin:0 0 16px;">¿Por qué Checkpoint?</h5>
          {#each whyItems as item}
            <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
              <div style="width:20px;height:20px;border-radius:9999px;background:var(--color-main-secondary);flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-main-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <p style="font-family:var(--font-delight);font-size:clamp(0.875rem,1.2vw,1rem);color:var(--color-dark-text);line-height:1.5;margin:0;">{item}</p>
            </div>
          {/each}
        </div>

        <div style="border:2px solid rgba(247,127,0,0.25);border-radius:12px;padding:clamp(20px,3vw,32px);background:rgba(0,48,73,0.4);">
          <h5 style="font-family:var(--font-tusker);font-weight:700;font-size:clamp(1.2rem,2vw,1.5rem);color:var(--color-main-secondary);margin:0 0 16px;">Encuéntranos</h5>
          <div style="display:flex;gap:12px;">
            <a
              href="https://www.instagram.com/check.point.studios"
              target="_blank"
              style="display:flex;align-items:center;gap:8px;color:var(--color-main-neutral);text-decoration:none;font-family:var(--font-delight);font-size:15px;font-weight:500;padding:8px 16px;border:2px solid rgba(247,127,0,0.3);border-radius:9999px;transition:border-color 300ms ease;"
              onmouseenter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "var(--color-main-secondary)"}
              onmouseleave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,127,0,0.3)"}
            >
              <InstagramIcon size={18} /> @check.point.studios
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr !important; }
  }
</style>
