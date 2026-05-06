<script lang="ts">
  import { onMount } from "svelte";

  let {
    id = "px-canvas",
    density = 4,
    palette = ["#f77f00","#eae2b7","#003049","#ff914d","#ffffff"],
    speed = 1,
    interactive = false,
  }: {
    id?: string;
    density?: number;
    palette?: string[];
    speed?: number;
    interactive?: boolean;
  } = $props();

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let W = 0, H = 0;
    let particles: any[] = [];
    const mouse = { x: -9999, y: -9999 };
    const SIZES = [2, 2, 2, 4, 4, 6];

    function makeParticle() {
      const size = SIZES[Math.floor(Math.random() * SIZES.length)];
      const isBullet = Math.random() < 0.06;
      return {
        x: Math.random() * W, y: Math.random() * H, size,
        color: palette[Math.floor(Math.random() * palette.length)],
        vx: isBullet ? (Math.random() > 0.5 ? 1 : -1) * (1.5 + Math.random() * 2.5) * speed
                     : (Math.random() - 0.5) * 0.35 * speed,
        vy: isBullet ? (Math.random() - 0.5) * 0.2 * speed
                     : (Math.random() - 0.5) * 0.35 * speed,
        alpha: 0.15 + Math.random() * 0.55,
        flicker: Math.random() < 0.3,
        flickerSpeed: 0.02 + Math.random() * 0.04,
        flickerPhase: Math.random() * Math.PI * 2,
        isBullet,
        trail: isBullet ? [] : null,
      };
    }

    function spawn() {
      const area = (W * H) / 10000;
      particles = Array.from({ length: Math.round(area * density) }, makeParticle);
    }

    function resize() {
      const rect = canvas.parentElement!.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
      spawn();
    }

    let t = 0;
    function tick() {
      ctx.clearRect(0, 0, W, H);
      t++;
      for (const p of particles) {
        let a = p.alpha;
        if (p.flicker) a *= 0.5 + 0.5 * Math.sin(t * p.flickerSpeed + p.flickerPhase);
        if (interactive) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) { p.vx += (dx / dist) * 0.4; p.vy += (dy / dist) * 0.4; }
        }
        p.vx *= 0.998; p.vy *= 0.998;
        p.x += p.vx; p.y += p.vy;
        if (p.isBullet && p.trail) {
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 6) p.trail.shift();
          for (let i = 0; i < p.trail.length; i++) {
            ctx.globalAlpha = (a * i) / p.trail.length * 0.4;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.trail[i].x, p.trail[i].y, p.size, p.size);
          }
        }
        if (p.x < -p.size * 4) p.x = W + p.size;
        if (p.x > W + p.size * 4) p.x = -p.size;
        if (p.y < -p.size * 4) p.y = H + p.size;
        if (p.y > H + p.size * 4) p.y = -p.size;
        ctx.globalAlpha = a;
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();
    raf = requestAnimationFrame(tick);

    function onMouse(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    if (interactive) canvas.parentElement!.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (interactive) canvas.parentElement!.removeEventListener("mousemove", onMouse as EventListener);
    };
  });
</script>

<canvas
  bind:this={canvas}
  {id}
  style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;"
></canvas>
