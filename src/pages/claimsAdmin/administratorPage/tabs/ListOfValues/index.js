import { useState } from 'react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import ListOfValuesModal from './ListOfValuesModal';
import ListOfValuesTable from './ListOfValuesTable';

export default function ListOfValues({ clickBack }) {
  const [isOpen, setModals] = useState(false);

  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <>
      <div className="list-values-container">
        <div className="list-values-box">
          <div>List of Values List</div>
          <div>
            <UncontrolledDropdown style={{ marginLeft: '10px' }}>
              <DropdownToggle style={{ backgroundColor: 'white', textAlign: 'start' }} caret>
                File Layout
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Some Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="tab-new-extract-button ">
          <Button style={{ width: 'auto' }}>Add New</Button>
          <Button onClick={clickBack} style={{ width: 'auto' }}>
            Save
          </Button>
          <Button onClick={clickBack} style={{ width: 'auto' }}>
            Reset
          </Button>
          <Button onClick={clickBack} style={{ width: 'auto' }}>
            Back
          </Button>
        </div>
      </div>
      <ListOfValuesTable openModal={openModal} />
      <ListOfValuesModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
