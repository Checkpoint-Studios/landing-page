<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import Card from "./ui/Card.svelte";
</script>

<section id="services" class="mx-8 sm:mx-24 xl:mx-50 mt-30">
  <SectionTitle>Lo que sabemos hacer con estilo</SectionTitle>
  <div class="flex justify-center">
    <div class="grid items-end sm:grid-cols-2 gap-8 xl:gap-16 py-8 w-fit">
      <Card title="01 Diseño Gráfico" type="text-first">
        <p>
          ¿Necesitas que tu marca destaque en cada pantalla? Desde branding que
          te hace un ícono hasta posts virales para redes, creamos visuales que
          son pura victoria
        </p>
      </Card>
      <Card title="02 Video & Motion Graphics" type="text-first">
        <p>
          Con edición de video y motion graphics 2D, convertimos tus ideas en
          narrativas dinámicas que capturan la atención al instante
        </p>
      </Card>
      <Card title="03 Marketing Digital" type="text-first">
        <p>
          Diseñamos tu estrategia completa, planeamos tu contenido y gestionamos
          tus campañas de ads para que domines el juego online
        </p>
      </Card>
      <Card title="04 Desarrollo Web" type="text-first">
        <p>
          Desde landing pages hasta e-commerces listos para la batalla,
          construimos tu fortaleza digital. Usamos código a medida o plataformas
          populares
        </p>
      </Card>
    </div>
  </div>
</section>
