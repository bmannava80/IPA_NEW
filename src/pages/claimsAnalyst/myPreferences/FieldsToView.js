import { useEffect, useState } from 'react';
import vertArrow from '../../../assets/icons/vertArrow.svg';
import vertHrArrow from '../../../assets/icons/vertHrArrow.svg';

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

export default function FieldsToView({ title, numberOfItems, isReset, setIsReset, fieldsToView }) {
  const [sortedFieldsToViewByMaxNumber, setSortedFieldsToViewByMaxNumber] = useState(fieldsToView);
  const [activeSelectExtractArrowId, setActiveSelectExtractArrowId] = useState(selectArrows[1].id);
  const [activeExtractFieldId, setActiveExtractFieldId] = useState('');
  const [activeSelectedExtractFieldId, setActiveSelectedExtractFieldId] = useState('');
  const [selectedSeduleList, setSelectedSheduleList] = useState([]);

  const handleReset = () => {
    setSortedFieldsToViewByMaxNumber(fieldsToView);
    setActiveSelectExtractArrowId(selectArrows[1].id);
    setActiveExtractFieldId('');
    setActiveSelectedExtractFieldId('');
    setSelectedSheduleList([]);
  };

  useEffect(() => {
    if (isReset) {
      handleReset();
      setIsReset(false);
    }
  }, [isReset]);

  useEffect(() => {
    setSortedFieldsToViewByMaxNumber(
      fieldsToView.filter((field, index) => {
        return index <= +numberOfItems && !selectedSeduleList.includes(field) && field;
      })
    );
  }, [numberOfItems, selectedSeduleList]);

  const handleSelectSheduleList = (name) => {
    switch (name) {
      case 'add_single':
        return (
          !!activeExtractFieldId &&
          setSelectedSheduleList([
            ...selectedSeduleList,
            sortedFieldsToViewByMaxNumber.find((field) => field.id === activeExtractFieldId),
          ])
        );

      case 'add_all':
        return setSelectedSheduleList([...sortedFieldsToViewByMaxNumber, ...selectedSeduleList]);
      case 'remove_single':
        return (
          !!activeSelectedExtractFieldId &&
          setSelectedSheduleList(
            selectedSeduleList.filter((field) => field.id !== activeSelectedExtractFieldId)
          )
        );
      case 'remove_all':
        return setSelectedSheduleList([]);
      default:
        return;
    }
  };

  useEffect(() => {
    setActiveExtractFieldId('');
  }, [selectedSeduleList]);

  const onSelectExtractArrowClick = (name, id) => {
    setActiveSelectExtractArrowId(id);
    handleSelectSheduleList(name);
  };

  const selectArrowSection = (content, activeArrow, onArrowClick) => {
    return (
      <div className="arrow-button-section">
        {content.map((arrow) => {
          return (
            <span
              key={arrow.id}
              className={arrow.id === activeArrow ? 'active-arrow' : 'arrow'}
              onClick={() => onArrowClick(arrow.name, arrow.id)}
            >
              {arrow.content}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <span>{title}</span>
      <div className="my-preferences-wrapper">
        <div className="my-preferences-box">
          {sortedFieldsToViewByMaxNumber.map((field, index) => {
            return (
              <div
                key={field.id}
                className={field.id === activeExtractFieldId ? 'field-name-active' : 'field-name'}
                onClick={() => setActiveExtractFieldId(field.id)}
              >
                {field.name}
              </div>
            );
          })}
        </div>
        {selectArrowSection(selectArrows, activeSelectExtractArrowId, onSelectExtractArrowClick)}
        <div className="my-preferences-box">
          {selectedSeduleList.map((field, index) => {
            if (index <= +numberOfItems) {
              return (
                <div
                  key={field.id}
                  className={
                    field.id === activeSelectedExtractFieldId ? 'field-name-active' : 'field-name'
                  }
                  onClick={() => setActiveSelectedExtractFieldId(field.id)}
                >
                  {field.name}
                </div>
              );
            }
          })}
        </div>
        {selectArrowSection(positionArrows)}
      </div>
    </div>
  );
}
