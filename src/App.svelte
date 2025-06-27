<script lang="ts">
  import Nav from "./lib/NavBar.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import Hero from "./lib/Hero.svelte";
  import Services from "./lib/Services.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Nav />
  <Hero />
  <Services />
  <div class="w-screen fixed z-50 bottom-6">
    <BottomBar />
  </div>
  <Footer />
</main>
