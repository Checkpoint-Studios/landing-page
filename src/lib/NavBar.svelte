<script lang="ts">
  import logo from "../assets/images/logo.webp";
  import CtaButton from "./CtaButton.svelte";

  function preload(src: string) {
    return new Promise<string>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = () => resolve("");
    });
  }
</script>

<nav class="flex justify-center items-start">
  <div
    class="flex justify-center md:justify-between bg-main-neutral py-4 px-6 w-full h-21 rounded-b-[40px] sm:min-w-[600px] sm:w-1/2"
  >
    <a href="/" class="flex items-center" aria-label="Home">
      {#await preload(logo) then logo}
      <img
        src={logo}
        alt=""
        class="w-48 sm:w-auto sm:max-w-64 object-contain"
      />
      {/await}
    </a>
    <div class="hidden md:flex">
      <CtaButton />
    </div>
  </div>
</nav>
