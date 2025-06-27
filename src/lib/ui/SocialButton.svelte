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
    linkedin: LinkedinIcon,
    instagram: InstagramIcon,
  };

  let selectedIcon = { component: iconMap[icon] || LinkedinIcon };
</script>

<a href={href} target="_blank" class="flex items-center justify-center rounded-full bg-primary-500/30 p-2">
  <selectedIcon.component {size} class="text-main-secondary"/>
</a>

