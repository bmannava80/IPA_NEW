import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ExtractRosterTable from '../extactRosterTable';

export default function ExtractTableModal({ isOpen, closeModal }) {
  return (
    <div>
      <Modal isOpen={isOpen} fullscreen>
        <ModalHeader toggle={closeModal}>
          <div className="extract-table-modal-nav">
            <h3>Detached Table</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <ExtractRosterTable></ExtractRosterTable>
        </ModalBody>
      </Modal>
    </div>
  );
}
