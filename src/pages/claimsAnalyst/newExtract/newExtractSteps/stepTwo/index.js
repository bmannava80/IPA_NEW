import { useState } from 'react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import NewExtractModal from '../../newExtractModal';
import Extract from "./Extract"

export default function StepTwo({ description }) {
  const [isOpen, setModals] = useState(false);
  const [nameLayout, setNameLayout] = useState('Aetna');
  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <>
      <div className="tab-new-extract-info">
        <span> Interface ID</span>
        <div>IF(145) - BODY extraction</div>
      </div>
      <div className="tab-new-extract-description">
        <span> Extract Description</span>
        <div>{description}</div>
      </div>

      <div className="new-extract-selector">
        <div>
          <span>The following parameters are required</span>
        </div>
        <div className="new-extract-parameter">* File Layout</div>
        <div>
          <Extract/>
          <div className="new-extract-info-button">
            <div className="tab-new-extract-button">
              <Button>Save</Button>
            </div>
            <div className="tab-new-extract-button">
              <Button>Ignore</Button>
            </div>
          </div>
        </div>
      </div>
      <NewExtractModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
