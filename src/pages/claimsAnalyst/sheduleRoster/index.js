import { useState } from 'react';
import SheduleRosterModal from './sheduleRosterModal';
import SheduleRosterTable from './sheduleRosterTable';

export default function SheduleRoster() {
  const [isOpen, setModals] = useState(false);

  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <div>
      <SheduleRosterTable openModal={openModal} />
      <SheduleRosterModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
