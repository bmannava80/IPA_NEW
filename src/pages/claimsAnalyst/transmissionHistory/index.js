import { useState } from 'react';
import TransmissionHistoryModal from './transmissionHistoryModal';
import TransmissionHistoryTable from './transmsissionHistoryTable';

export default function TransmissionHistory() {
  const [isOpen, setModals] = useState(false);

  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <>
      <div className="transmission-searcn">
        <span className="transmission-searcn-title">Search box</span>
        <div className="transmission-searcn-inputs-wrapper">
          <div className="transmission-input-item">
            <span className="transmission-input-title">Exteract ID</span>
            <input className="transmission-input" type="text" />
          </div>
          <div className="transmission-input-item">
            <span className="transmission-input-title">Destination File Name</span>
            <input className="transmission-input" type="text" />
          </div>
        </div>

        <div className="transmission-searcn-inputs-wrapper">
          <div className="transmission-input-item">
            <span className="transmission-input-title">EAction</span>
            <input className="transmission-input" type="text" />
          </div>
          <div className="transmission-input-item">
            <span className="transmission-input-title">Message</span>
            <input className="transmission-input" type="text" />
          </div>
        </div>

        <div className="transmission-searcn-inputs-wrapper">
          <div className="transmission-input-item">
            <span className="transmission-input-title">Source File Name</span>
            <div>
              <input className="transmission-input" type="text" />
              <div className="transmission-button-section">
                <span className="transmission-button">search</span>
                <span className="transmission-button">reset</span>
              </div>
            </div>
          </div>
          <div className="transmission-input-item">
            <span className="transmission-input-title">Transmission Date</span>
            <div className="transmission-input-date-wrapper">
              <input className="transmission-input-date" placeholder="" type="date" />
              <input className="transmission-input-date" type="date" />
            </div>
          </div>
        </div>
      </div>
      <TransmissionHistoryTable openModal={openModal} />
      <TransmissionHistoryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
