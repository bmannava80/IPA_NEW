import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import TableHeaderSimpler from '../../../../../../components/table/tableHeaderSimpler';
import { defaultListOfValuesMockData } from '../../../../../../utils/mockData';

const cols = ['ID', 'Description'];
const rows = ['id', 'description'];

export default function ListOfValuesTable({ openModal }) {
  const listOfValuesData = JSON.parse(defaultListOfValuesMockData);
  return (
    <>
      <TableHeaderSimpler openModal={openModal} />
      <CTable
        responsive="md"
        bordered
        tableProps={{
          hover: true,
        }}
      >
        <CTableHead>
          <CTableRow>
            {cols.map((col) => (
              <CTableHeaderCell
                style={{
                  backgroundColor: '#f6f4f7',
                  border: '1px solid #dadbdc',
                  padding: '5px',
                  fontWeight: 'bold',
                  textAlign: col === cols[1] ? 'center' : 'left',
                }}
                scope="col"
              >
                {col}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {listOfValuesData.map((data) => (
            <CTableRow key={data.id}>
              {rows.map((row) => (
                <CTableDataCell
                  // style={{ minHeight: '40px' }}
                  key={`${data.id}-${row}`}
                >
                  <input className="list-value-table-input" value={data[row]}></input>
                </CTableDataCell>
              ))}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  );
}
