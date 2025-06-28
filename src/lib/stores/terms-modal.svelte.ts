export const termsModal = $state({
  isOpen: false,
})

export function openModal() {
  termsModal.isOpen = true;
}

export function closeModal() {
  termsModal.isOpen = false;
}

