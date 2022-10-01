import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

export default function StepOne({ description, setDescription }) {
  return (
    <>
      <div className="tab-new-extract-select">
        <span>* Interface ID</span>
        <div className="tab-new-extract-dropdown">
          <UncontrolledDropdown>
            <DropdownToggle style={{ backgroundColor: '#b3d69c' }} caret>
              IF(145) - BODY extraction
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Some Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className="tab-new-extract-description-one">
        <span>* Extract Description</span>
        <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </div>
    </>
  );
}
