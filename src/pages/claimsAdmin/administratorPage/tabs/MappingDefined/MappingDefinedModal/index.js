import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import MappingDefinedTable from '../MappingDefinedTable';

export default function MappingDefinedModal({ isOpen, closeModal }) {
  return (
    <>
      <Modal isOpen={isOpen} fullscreen>
        <ModalHeader toggle={closeModal}>
          <div className="extract-table-modal-nav">
            <h3>Detached Table</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <MappingDefinedTable />
        </ModalBody>
      </Modal>
    </>
  );
}
