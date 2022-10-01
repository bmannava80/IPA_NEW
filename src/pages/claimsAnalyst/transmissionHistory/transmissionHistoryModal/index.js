import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import TransmissionHistoryTable from '../transmsissionHistoryTable';

export default function TransmissionHistoryModal({ isOpen, closeModal }) {
  return (
    <>
      <Modal isOpen={isOpen} fullscreen>
        <ModalHeader toggle={closeModal}>
          <div className="extract-table-modal-nav">
            <h3>Detached Table</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <TransmissionHistoryTable />
        </ModalBody>
      </Modal>
    </>
  );
}
