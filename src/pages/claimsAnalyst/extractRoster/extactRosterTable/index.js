import { useContext } from 'react';
import { Button } from 'reactstrap';
import Table from '../../../../components/table';
import AppContext from '../../../../context/appContext';
// import { usersExtractData } from '../../../../utils/mockData';

const cols = [
  'Extract ID',
  'Description',
  'Active Status',
  'Interface ID',
  'Shedule Status',
  'Created On',
  'Created By',
  'Updated On',
  'Updated By',
  'File Layout',
  'Groups',
  'Divisions',
  'Tpa Name',
];
const rows = [
  'extract_id',
  'description',
  'active_status',
  'interface_ID',
  'shedule_status',
  'created_on',
  'created_by',
  'updated_on',
  'updated_by',
  'file_layout',
  'groups',
  'divisions',
  'tpa_name',
];

export default function ExtractRosterTable({ openModal }) {
  const { userExtractData, addExtractData } = useContext(AppContext);
  return (
    <>
      <Table items={userExtractData} rows={rows} cols={cols} openModal={openModal}></Table>
    </>
  );
}
