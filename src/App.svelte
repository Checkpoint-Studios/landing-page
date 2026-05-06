<script lang="ts">
  import Nav from "./lib/NavBar.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import Hero from "./lib/Hero.svelte";
  import Services from "./lib/Services.svelte";
  import Footer from "./lib/Footer.svelte";
  import Process from "./lib/Process.svelte";
  import Projects from "./lib/Projects.svelte";
  import About from "./lib/About.svelte";
  import Contact from "./lib/Contact.svelte";
  import PixelDivider from "./lib/ui/PixelDivider.svelte";

  let activeSection = $state("hero");

  $effect(() => {
    const ids = ["hero", "services", "process", "projects", "about", "contact"];
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) activeSection = e.target.id; }); },
      { threshold: 0.3 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  });
</script>

<main id="home">
  <Nav />
  <Hero />
  <PixelDivider />
  <Services />
  <PixelDivider />
  <Process />
  <PixelDivider />
  <Projects />
  <PixelDivider />
  <About />
  <PixelDivider />
  <Contact />
  <Footer />
  <div class="w-screen fixed z-50 bottom-6">
    <BottomBar active={activeSection} />
  </div>
</main>
