<script lang="ts">
  import { AlignJustify, ArrowBigUp } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { fade, fly, scale } from "svelte/transition";
  
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
  class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full backdrop-blur-md shadow-lg border-main-secondary border-2"
>
  <button
    type="button"
    class="w-full h-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
    onclick={toggleMenu}
  >
    {#if isOpen}
        <ArrowBigUp />
    {:else}
        <AlignJustify />
    {/if}
  </button>
  
  {#if isOpen}
    <div 
      class="absolute left-0 bottom-full mb-2"
      in:fly={{ y: 20, duration: 300, opacity: 0 }}
      out:fly={{ y: 10, duration: 200, opacity: 0 }}
    >
      <div
        class="flex flex-col py-4 items-center justify-center w-[80vw] sm:w-[50vw] bg-surface border-4 border-main-secondary backdrop-blur-lg shadow-lg rounded-lg"
        in:scale={{ duration: 250, start: 0.95 }}
        out:scale={{ duration: 200, start: 0.95 }}
      >
        <ul class="flex flex-col gap-4 w-full">
          {#each linkList as { href, label }, i}
            <li 
              class="w-full text-center"
              in:fade={{ duration: 200, delay: i * 50 }}
              out:fade={{ duration: 150 }}
            >
              <a
                href={href}
                class="inline-block w-full font-tusker font-semibold hover:bg-main-secondary hover:text-main-primary py-2 transition-colors duration-200 rounded"
                onclick={() => (isOpen = false)}
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
