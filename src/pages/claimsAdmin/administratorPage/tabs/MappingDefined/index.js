import { useState } from 'react';
import { Button } from 'reactstrap';
import MappingDefinedModal from './MappingDefinedModal';
import MappingDefinedTable from './MappingDefinedTable';

export default function MappingDefined({ clickBack }) {
  const [isOpen, setModals] = useState(false);

  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <div>
      <div className="tab-new-extract-button align-right">
        <Button style={{ width: 'auto' }}>Add New Mapping</Button>
        <Button onClick={clickBack} style={{ width: 'auto' }}>
          Back
        </Button>
        <Button style={{ width: 'auto' }}>Save</Button>
      </div>

      <MappingDefinedTable openModal={openModal} />
      <MappingDefinedModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
