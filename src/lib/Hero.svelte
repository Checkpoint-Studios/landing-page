<script lang="ts">
  import CtaButton from "./CtaButton.svelte";
  import mascotColored from "../assets/images/mascot-colored.webp";
</script>

<section id="hero" class="flex justify-center mt-20 sm:mt-[8rem]">
  <div
    class="grid flex-col sm:grid sm:grid-rows-4 sm:grid-cols-2 grid-rows-4 w-2/3 gap-y-8 md:gap-x-8 xl:gap-x-32 2xl:gap-x-64"
  >
    <h1
      class="font-tusker font-bold text-main-secondary text-[36px] xs:text-[42px] sm:text-[2rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[4rem] text-center sm:text-right sm:col-start-1 row-span-4 sm:row-span-2"
    >
      Tu negocio merece un diseño legendario
    </h1>
    <div
      class="sm:col-start-1 sm:row-start-3 flex justify-center sm:justify-end"
    >
      <CtaButton href="#contact" color="secondary" />
    </div>
    <div
      class="sm:col-start-2 sm:row-start-1 sm:row-span-2 flex justify-center sm:justify-start p-4"
    >
      <img
        src={mascotColored}
        alt="Hero"
        class="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[400px]" 
      />
    </div>
    <div class="sm:col-start-2 sm:row-start-3 flex justify-center">
      <h2
        class="inline-block w-3/4 text-main-neutral text-lg lg:text-2xl 2xl:text-[2rem] font-extrabold text-center sm:text-left"
      >
        El power-up que tu marca necesita
      </h2>
    </div>
  </div>
</section>
