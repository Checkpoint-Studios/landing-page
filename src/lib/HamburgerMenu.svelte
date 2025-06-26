<script>
  import { AlignJustify, ArrowBigUp } from "@lucide/svelte";
  import { onMount } from "svelte";

  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  const linkList = [
    { href: "#services", label: "Servicios" },
    { href: "#process", label: "Proceso" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Nosotros" },
    { href: "#contact", label: "Contacto" },
  ];

  onMount(() => {
    // Close the menu when clicking outside
    isOpen = false;
  });
</script>

<div
  id="hamburger-menu"
  class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full backdrop-blur-md shadow-lg"
>
  <button
    type="button"
    class="w-full h-full flex items-center justify-center"
    on:click={toggleMenu}
  >
    {#if isOpen}
      <ArrowBigUp />
    {:else}
      <AlignJustify />
    {/if}
  </button>
  {#if isOpen}
    <div class="absolute left-0 bottom-full mb-2">
      <div
        class="flex flex-col py-4 items-center justify-center w-[50vw] bg-white/10 backdrop-blur-md shadow-lg rounded-lg"
      >
        <ul class="flex flex-col gap-4 w-full">
          {#each linkList as { href, label }}
            <li class="w-full text-center">
              <a
                href={href}
                class="inline-block w-full font-tusker font-semibold hover:bg-neutral-300/10 py-2"
                on:click={() => (isOpen = false)}
              >
                {label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>
