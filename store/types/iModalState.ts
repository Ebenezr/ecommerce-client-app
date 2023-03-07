interface ModalState {
  isModalOpen: boolean;
  isEditable: boolean;
  CloseModal: () => void;
  setIsEditable: () => void;
  resetIsEditable: () => void;
  OpenModal: () => void;
}
export default ModalState;
