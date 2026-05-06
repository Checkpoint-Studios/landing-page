<script lang="ts">
  import CtaButton from "./CtaButton.svelte";
  import HamburgerMenu from "./HamburgerMenu.svelte";

  let { active = "hero" }: { active?: string } = $props();

  const items = [
    { id: "hero", label: "Inicio" },
    { id: "services", label: "Servicios" },
    { id: "process", label: "Proceso" },
    { id: "projects", label: "Proyectos" },
    { id: "about", label: "Nosotros" },
  ];
</script>

<nav class="flex w-full px-8 xl:p-0 xl:justify-center">
  <div
    class="hidden xl:flex items-center justify-between 2xl:max-w-2/5 p-3 bg-primary-700/70 rounded-full gap-x-4 backdrop-blur-lg shadow-lg border-4 border-main-secondary"
  >
    <ul class="flex font-tusker font-semibold text-lg gap-x-1">
      {#each items as item}
        <li>
          <a
            href="#{item.id}"
            class="inline-block px-4 py-1.5 rounded-full transition-all duration-200 {active === item.id ? 'bg-secondary-700/20 text-main-secondary' : 'text-dark-text hover:text-main-secondary'}"
          >{item.label}</a>
        </li>
      {/each}
    </ul>
    <CtaButton href="#contact" color="secondary" />
  </div>
  <div class="xl:hidden">
    <HamburgerMenu />
  </div>
</nav>
