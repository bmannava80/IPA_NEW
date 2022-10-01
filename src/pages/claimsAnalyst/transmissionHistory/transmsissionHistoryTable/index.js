import Table from '../../../../components/table';
import TableHeaderSimpler from '../../../../components/table/tableHeaderSimpler';
import { transmissionHistoryData } from '../../../../utils/mockData';

const cols = [
  'Extract ID',
  'Transmission Date',
  'Action',
  'Source File Name',
  'Destination Host',
  'Destination Name',
  'Size',
  'Result',
  'Message',
];
const rows = [
  'extract_id',
  'transmission_date',
  'action',
  'source_name',
  'destination_host',
  'destination_name',
  'size',
  'result',
  'message',
];

export default function TransmissionHistoryTable({ openModal }) {
  const transmissionHistoryDataItems = JSON.parse(transmissionHistoryData);
  return (
    <>
      <TableHeaderSimpler openModal={openModal} />
      <Table
        showHeaderInput={false}
        showHeader={false}
        items={transmissionHistoryDataItems}
        rows={rows}
        cols={cols}
        openModal={openModal}
      ></Table>
    </>
  );
}
