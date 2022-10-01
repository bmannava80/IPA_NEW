import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import SheduleRosterTable from '../sheduleRosterTable';

export default function SheduleRosterModal({ isOpen, closeModal }) {
  return (
    <div>
      <Modal isOpen={isOpen} fullscreen>
        <ModalHeader toggle={closeModal}>
          <div className="extract-table-modal-nav">
            <h3>Detached Table</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <SheduleRosterTable />
        </ModalBody>
      </Modal>
    </div>
  );
}
