import Table from '../../../../../../components/table';
import Pagination from '../../../../../../components/table/pagination';
import TableHeaderSimpler from '../../../../../../components/table/tableHeaderSimpler';
import { extractParametersData } from '../../../../../../utils/mockData';

const cols = [
  'Extract Parameter Name',
  'Extract Parameter Description',
  'Extract Parameter Data Type',
  'Extract Parameter Data Length',
  'Extract Parameter Hint',
  'Created On',
  'Created By',
  'Updated On',
  'Updated By',
];
const rows = [
  'extract_parameter_name',
  'extract_parameter_description',
  'extract_parameter_data_type',
  'extract_parameter_data_length',
  'extract_parameter_hint',
  'created_on',
  'created_by',
  'updated_on',
  'updated_by',
];

export default function ExtractParametersTable({ openModal }) {
  const extractParameters = JSON.parse(extractParametersData);
  return (
    <>
      <TableHeaderSimpler showMenu={false} openModal={openModal} />
      <Table
        showHeaderInput={false}
        showHeader={false}
        items={extractParameters}
        rows={rows}
        cols={cols}
        openModal={openModal}
      ></Table>
      <Pagination />
    </>
  );
}
