import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Table from '../../../../components/table';
import { newExtractModalField } from '../../../../utils/mockData';
const cols = ['File Layout Id', 'File Layout Description'];
const rows = ['file_layout_id', 'file_layout_description'];

export default function NewExtractModal({ isOpen, closeModal }) {
  const modalFieldsItems = JSON.parse(newExtractModalField);
  return (
    <Modal isOpen={isOpen} toggle={closeModal}>
      <div style={{ width: '550px' }}>
        <ModalHeader style={{ backgroundColor: '#ddd9dd' }} toggle={closeModal}>
          Search and Result Dialog
        </ModalHeader>
        <ModalBody style={{ backgroundColor: '#f6f4f7', paddingTop: '50px' }}>
          <div>◢Search</div>
          <div className="new-extract-modal-container font-weight new-extract-modal-margin">
            <div>File Layout Id</div>
            <input></input>
          </div>
          <div className="new-extract-modal-container font-weight new-extract-modal-margin">
            <div>File Layout Description</div>
            <input></input>
          </div>
          <div className="new-extract-modal-container new-extract-modal-margin">
            <div className="tab-new-extract-button">
              <Button>Search</Button>
            </div>
            <div className="tab-new-extract-button">
              <Button>Reset</Button>
            </div>
          </div>

          <Table showHeader={false} items={modalFieldsItems} rows={rows} cols={cols}></Table>
        </ModalBody>
      </div>
    </Modal>
  );
}
