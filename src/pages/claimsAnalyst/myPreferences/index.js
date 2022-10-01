import { useEffect, useState } from 'react';
import vertArrow from '../../../assets/icons/vertArrow.svg';
import vertHrArrow from '../../../assets/icons/vertHrArrow.svg';
import FieldsToView from './FieldsToView';

const fieldsToView = [
  {
    id: 1,
    name: 'Extract ID',
  },
  {
    id: 2,
    name: 'Description',
  },
  {
    id: 3,
    name: 'Interface ID',
  },
  {
    id: 4,
    name: 'Groups',
  },
  {
    id: 5,
    name: 'Divisions',
  },
  {
    id: 6,
    name: 'TPA Name',
  },
  {
    id: 7,
    name: 'File Layout',
  },
  {
    id: 8,
    name: 'Active status',
  },
  {
    id: 9,
    name: 'Shedule Status',
  },
  {
    id: 10,
    name: 'Created On',
  },
  {
    id: 11,
    name: 'Created By',
  },
  {
    id: 12,
    name: 'Updated On',
  },
  {
    id: 13,
    name: 'Updated By',
  },
];

const selectArrows = [
  {
    id: 1,
    content: '>',
    name: 'add_single',
  },
  {
    id: 2,
    content: '>>',
    name: 'add_all',
  },
  {
    id: 3,
    content: '<',
    name: 'remove_single',
  },
  {
    id: 4,
    content: '<<',
    name: 'remove_all',
  },
];

const positionArrows = [
  {
    id: 1,
    content: <img src={vertArrow} />,
  },
  {
    id: 2,
    content: <img src={vertHrArrow} />,
  },
  {
    id: 3,
    content: <img className="rotate-arrov" src={vertHrArrow} />,
  },
  {
    id: 4,
    content: <img className="rotate-arrov" src={vertArrow} />,
  },
];

export default function MyPreferences() {
  const [numberOfItems, selectNumberOfItems] = useState(fieldsToView.length);
  const [isReset, setIsReset] = useState(false);

  const handleChangeSelect = (e) => {
    selectNumberOfItems(e.target.value);
  };

  const handleReset = () => {
    setIsReset(true);
  };

  return (
    <div>
      <div>
        <div className="my-preferences-wrapper">
          <FieldsToView
            title={'Extract Field to view'}
            numberOfItems={numberOfItems}
            isReset={isReset}
            fieldsToView={fieldsToView}
            setIsReset={setIsReset}
          />
          <FieldsToView
            title={'Shedule Field to view'}
            numberOfItems={numberOfItems}
            isReset={isReset}
            fieldsToView={fieldsToView}
            setIsReset={setIsReset}
          />
        </div>

        <div className="my-preferences-select-title">Number of items per page to display</div>
        <select name="select" className="my-preferences-select" onChange={handleChangeSelect}>
          {fieldsToView.map((field, index) => {
            return (
              <option key={field.id} value={index}>
                {index + 1}
              </option>
            );
          })}
        </select>

        <div className="my-preferences-button-section">
          <span className="my-preferences-button">save</span>
          <span className="my-preferences-button" onClick={handleReset}>
            reset
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
