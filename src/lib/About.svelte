<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import Card from "./ui/Card.svelte";
  import UserCard from "./ui/UserCard.svelte";
</script>

<section id="about" class="mx-8 sm:mx-24 xl:mx-50 mt-20 sm:mt-40">
  <SectionTitle orientation="right">Los Pilares de Nuestro Gremio</SectionTitle>
  <div class="flex justify-center">
    <div
      class="grid items-start lg:grid-cols-3 lg:gap-2 xl:gap-8 2xl:gap-16 py-8 xl:w-fit"
    >
      <Card title="¿Quiénes somos?" type="text-only">
        <p>
          Checkpoint Studios es tu equipo de élite para diseño y marketing
          digital. Subimos el nivel de tu negocio con experiencias senior,
          creatividad épica y resultados que son victoria asegurada.
        </p>
      </Card>
      <Card title="Misión" type="text-only">
        <p>
          Nuestra misión es darle un power-up a tu negocio con diseño y
          estrategia. Activamos el co-op mode para crear soluciones innovadoras,
          haciendo que cada proyecto sea una aventura exitosa
        </p>
      </Card>
      <Card title="Visión" type="text-only">
        <p>
          Queremos ser los que rompen el juego con soluciones creativas. Seremos
          los innovadores que redefinen el éxito digital, ¡llevando tu marca más
          allá de lo imaginable!
        </p>
      </Card>
    </div>
  </div>
  <h2 class="text-center text-[2rem] mt-8">Los bosses detrás de todo</h2>
  <div class="flex justify-center">
    <div
      class="grid grid-cols-1 items-center-safe 2xl:items-end md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-8 w-fit"
    >
      <UserCard name="Eduardo Rodríguez" role="Master of Frames & Feels" />
      <UserCard name="Emmanuel
González" role="Code Conjurer" />
      <UserCard name="Irais López" role="Hype Architect" />
      <UserCard name="Miguel Guerra" role="Pixel Overlord" />
    </div>
  </div>
</section>
