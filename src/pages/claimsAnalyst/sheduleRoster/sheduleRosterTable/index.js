import Table from '../../../../components/table';
import { usersSheduleRosterData } from '../../../../utils/mockData';

const cols = [
  'Shedule ID',
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
  'shedule_id',
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

export default function SheduleRosterTable({ openModal }) {
  const userData = JSON.parse(usersSheduleRosterData);
  return <Table items={userData} rows={rows} cols={cols} openModal={openModal}></Table>;
}
