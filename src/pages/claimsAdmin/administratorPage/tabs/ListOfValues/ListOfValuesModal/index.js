import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ListOfValuesTable from '../ListOfValuesTable';

export default function ListOfValuesModal({ isOpen, closeModal }) {
  return (
    <div>
      <Modal isOpen={isOpen} fullscreen>
        <ModalHeader toggle={closeModal}>
          <div className="extract-table-modal-nav">
            <h3>Detached Table</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <ListOfValuesTable />
        </ModalBody>
      </Modal>
    </div>
  );
}
