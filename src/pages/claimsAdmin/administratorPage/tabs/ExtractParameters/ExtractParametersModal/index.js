import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ExtractParametersTable from '../ExtractParametersTable';

export default function ExtractParametersModal({ isOpen, closeModal }) {
  return (
    <>
      <Modal isOpen={isOpen} fullscreen>
        <ModalHeader toggle={closeModal}>
          <div className="extract-table-modal-nav">
            <h3>Detached Table</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <ExtractParametersTable />
        </ModalBody>
      </Modal>
    </>
  );
}
