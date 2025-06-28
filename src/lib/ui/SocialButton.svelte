<script lang="ts">
  import { LinkedinIcon, InstagramIcon } from "@lucide/svelte"

  type iconType = "linkedin" | "instagram";
  let {
    size = "24",
    href = "",
    icon = "linkedin",
  }: {
    size?: string;
    href?: string;
    icon?: iconType;
  } = $props();

  let iconMap = {
    linkedin: { component: LinkedinIcon, name: "LinkedIn" },
    instagram: { component: InstagramIcon, name: "Instagram" },
  };

  let selectedIcon = iconMap[icon] || iconMap.linkedin;
</script>

<a href={href} target="_blank" class="flex items-center justify-center rounded-full bg-primary-500/30 p-2" aria-label={selectedIcon.name}>
  <selectedIcon.component {size} class="text-main-secondary"/>
</a>

