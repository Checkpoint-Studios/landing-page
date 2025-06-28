<script>
  import { XCircleIcon } from "@lucide/svelte";
  let { showModal = $bindable(), header, children } = $props();

  let dialog = $state(); // HTMLDialogElement

  $effect(() => {
    if (showModal) {
      dialog.showModal();
      document.body.classList.add("overflow-hidden!");
    } else {
      document.body.classList.remove("overflow-hidden!");
    }
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  class="p-8 bg-surface text-dark-text rounded-lg border-1 border-main-secondary shadow-lg backdrop-blur-sm fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
>
  <div>
    <div class="flex items-center justify-between">
      <div>
      {@render header?.()}
      </div>
      <button class="cursor-pointer" onclick={() => dialog.close()} aria-label="Cerrar modal">
        <XCircleIcon class="text-main-secondary hover:text-secondary-500 transition-colors duration-200" size="32" />
      </button>
    </div>
    <hr class="my-4" />
    {@render children?.()}
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }
</style>
