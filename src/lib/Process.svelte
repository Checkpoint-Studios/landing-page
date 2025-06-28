<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import Card from "./ui/Card.svelte";
</script>

<section id="process" class="mx-8 sm:mx-24 xl:mx-50 mt-20 sm:mt-40">
  <SectionTitle orientation="right">Nuestro modo cooperativo</SectionTitle>
  <div class="flex justify-center">
    <div
      class="grid items-end lg:grid-cols-3 lg:gap-2 xl:gap-8 2xl:gap-16 py-8 xl:w-fit"
    >
      <Card title=" La Reunión Inicial" type="text-first">
        <p>
          Nos sentamos contigo para comprender a fondo tu misión. Evaluamos tus
          necesidades y hacia dónde quieres llevar tu proyecto. Es el punto de
          partida clave para planear tu victoria.
        </p>
      </Card>
      <Card title="El Plan de Juego" type="text-first">
        <p>
          Juntos, diseñamos la estrategia. Establecemos los objetivos, los
          checkpoints y las expectativas claras. Así, todos sabemos qué esperar
          en cada fase de la misión.
        </p>
      </Card>
      <Card title="Ejecución y Feedback" type="text-first">
        <p>
          Trabajamos en iteraciones rápidas, entregando avances y recibiendo tu
          feedback constante. Nos enfocamos en la calidad para asegurar que cada
          fase sea una victoria
        </p>
      </Card>
    </div>
  </div>
</section>
