export const RESET_SHOW_MODAL = 'RESET_SHOW_MODAL';
export const SAVE_MESSAGE_MODAL = 'SAVE_MESSAGE_MODAL';

export const resetShowModal = () => ({
  type: 'RESET_SHOW_MODAL',
});

export const saveMessageModal = (message) => ({
  type: 'SAVE_MESSAGE_MODAL',
  content: message,
})