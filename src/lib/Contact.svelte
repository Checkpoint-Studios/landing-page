<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import FormSubmitButton from "./ui/FormSubmitButton.svelte";
</script>

<section id="contact" class="mx-8 md:mx-24 xl:mx-50 my-20 sm:my-40">
  <SectionTitle>Get in touch</SectionTitle>
  <p class="inline-block text-main-neutral text-lg lg:w-1/2 my-4">
    We would love to hear from you! Whether you have a question, want to start a
    project, or just want to say hello, feel free to reach out.
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
        >Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Your Name"
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
        placeholder="Your Email"
        class="p-2 rounded bg-dark-text text-main-primary h-16 text-2xl w-full"
      />
    </div>
    <div>
      <label
        for="message"
        class="font-tusker font-semibold text-main-secondary lg:text-[1.5rem] text-[1.25rem]"
      >
        Message</label
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
    <FormSubmitButton color="secondary"/>
    </div>
    </form>
  </div>
</section>
