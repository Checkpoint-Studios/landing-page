<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import FormSubmitButton from "./ui/FormSubmitButton.svelte";
</script>

<section id="contact" class="mx-8 md:mx-24 xl:mx-50 my-20 sm:my-40">
  <SectionTitle>La misión comienza aquí</SectionTitle>
  <p class="inline-block text-main-neutral text-lg xl:text-xl lg:w-1/2 my-4">
    ¿Tienes dudas, ideas o simplemente quieres saludar? No importa si eres un
    veterano de mil batallas o apenas estás empezando tu aventura, ¡estamos
    listos para ayudarte a subir de nivel! Mándanos un mensaje y empecemos esta
    partida juntos.
  </p>
  <div>
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      class="flex flex-col gap-4 max-w-md mx-auto my-8 border-4 border-main-secondary rounded-lg p-6 sm:p-16"
    >
      <div>
        <label
          for="name"
          class="font-tusker font-semibold text-main-secondary lg:text-[1.5rem] text-[1.25rem]"
          >Nombre</label
        >
        <input
          type="text"
          id="name"
          name="name"
          required
          class="p-2 rounded bg-dark-text text-main-primary h-16 text-2xl w-full"
        />
      </div>
      <div>
        <label
          for="email"
          class="font-tusker font-semibold text-main-secondary lg:text-[1.5rem] text-[1.25rem]"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          required
          class="p-2 rounded bg-dark-text text-main-primary h-16 text-2xl w-full"
        />
      </div>
      <div>
        <label
          for="message"
          class="font-tusker font-semibold text-main-secondary lg:text-[1.5rem] text-[1.25rem]"
        >
          Mensaje</label
        >
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          class="p-2 rounded bg-dark-text text-main-primary text-2xl w-full"
        ></textarea>
      </div>
      <div class="flex justify-center mt-3">
        <FormSubmitButton color="secondary" />
      </div>
    </form>
  </div>
</section>
