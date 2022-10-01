import { useState } from 'react';
import { Button } from 'reactstrap';
import ExtractParametersModal from './ExtractParametersModal';
import ExtractParametersTable from './ExtractParametersTable';

const ExtractParameters = ({ clickBack }) => {
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
        <Button style={{ width: 'auto' }}>Define new parameters</Button>
        <Button onClick={clickBack} style={{ width: 'auto' }}>
          Back
        </Button>
      </div>

      <ExtractParametersTable openModal={openModal}></ExtractParametersTable>
      <ExtractParametersModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default ExtractParameters;
