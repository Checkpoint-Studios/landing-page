<script lang="ts">
  import Modal from "./ui/Modal.svelte";
  import { termsModal } from "./stores/terms-modal.svelte";
</script>

<section class="w-screen">
  <Modal bind:showModal={termsModal.isOpen}>
    {#snippet header()}
      <h1 class="text-2xl">Términos y Condiciones</h1>
      <p class="text-sm text-main-secondary">Última actualización: 28 de junio de 2025</p>
    {/snippet}
    <div class="mt-6">
      Bienvenido/a al sitio web de Checkpoint Studios. Al navegar por este
      sitio, aceptas los presentes Términos y Condiciones. Si no estás de
      acuerdo con alguno de ellos, por favor no utilices este sitio.

      <ol class="flex flex-col gap-4 mt-6">
        <li>
          <h2 class="text-base">Uso del sitio</h2>
          <p>
            Este sitio tiene fines informativos y promocionales. Puedes explorar
            el contenido libremente, pero no debes usarlo con fines ilegales,
            dañinos o que afecten el funcionamiento del sitio o la experiencia
            de otros usuarios.
          </p>
        </li>
        <li>
          <h2 class="text-base">Formulario de contacto</h2>
          <p>
            Contamos con un formulario para que puedas ponerte en contacto con
            nosotros. La información que decidas enviarnos (como tu nombre,
            correo y mensaje) será utilizada únicamente para responder a tu
            solicitud. No almacenamos esta información más allá de lo necesario
            para responder, ni la compartimos con terceros.
          </p>
        </li>
        <li>
          <h2 class="text-base">Propiedad intelectual</h2>
          <p>
            Todo el contenido de este sitio (textos, imágenes, diseño,
            logotipos, etc.) es propiedad de Checkpoint Studios o de quienes nos
            han dado permiso para usarlo. No está permitido copiar, modificar o
            distribuir nada de este contenido sin autorización previa.
          </p>
        </li>
        <li>
          <h2 class="text-base">Enlaces a otros sitios</h2>
          <p>
            Es posible que incluyamos enlaces a páginas externas. No tenemos
            control sobre su contenido ni somos responsables de su
            funcionamiento, políticas o prácticas.
          </p>
        </li>
        <li>
          <h2 class="text-base">Cookies</h2>
          Este sitio no utiliza cookies ni herramientas de seguimiento para recolectar
          información personal.
        </li>
        <li>
          <h2 class="text-base">Cambios a estos términos</h2>
          <p>
            Nos reservamos el derecho de actualizar estos Términos y Condiciones
            en cualquier momento. Si hacemos cambios importantes, los
            indicaremos en esta página. El uso continuo del sitio implica que
            aceptas dichas modificaciones.
          </p>
        </li>
        <li>
          <h2 class="text-base">Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes vigentes en los Estados Unidos
            Mexicanos. Cualquier disputa será resuelta en los tribunales
            competentes de Puebla, México.
          </p>
        </li>
      </ol>
    </div>
  </Modal>
</section>
