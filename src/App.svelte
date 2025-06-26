<script lang="ts">
  import Nav from './lib/NavBar.svelte';
  import BottomBar from './lib/BottomBar.svelte';
  import Hero from './lib/Hero.svelte';
</script>

<main>
  <Nav />
  <Hero />
  <div class="sticky bottom-16 z-50">
    <BottomBar />
  </div>
</main>
