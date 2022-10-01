import { useContext, useState } from 'react';
import { Button, Input } from 'reactstrap';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { findIndex } from 'lodash';
import AppContext from '../../../../../../../context/appContext';

const cols = ['Extract Parameter', 'Select'];

export default function DefaultParameters() {
  const { fileLayoutParameters, setFileLayoutParameters } = useContext(AppContext);
  const [layoutParameters, setData] = useState(fileLayoutParameters);

  const changeFileLayoutParameters = (newFileLayoutParameter) => {
    const index = findIndex(layoutParameters, { label: newFileLayoutParameter.label });
    setData([
      ...layoutParameters.slice(0, index),
      newFileLayoutParameter,
      ...layoutParameters.slice(index + 1, layoutParameters.length),
    ]);
  };

  return (
    <div>
      <div className="tab-new-extract-button">
        <Button
          onClick={() => setFileLayoutParameters(layoutParameters)}
          style={{ margin: '10px 5px', width: 'auto' }}
        >
          Save
        </Button>
        <Button
          onClick={() => setData(fileLayoutParameters)}
          style={{ margin: '10px 5px', width: 'auto' }}
        >
          Reset
        </Button>
      </div>
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
          {layoutParameters.map((data) => (
            <CTableRow key={data.id}>
              <CTableDataCell
                style={{
                  maxWidth: '300px',
                  minWidth: '150px',
                  height: '40px',
                  padding: '5px',
                }}
              >
                {data.label}
              </CTableDataCell>
              <CTableDataCell
                style={{
                  maxWidth: '300px',
                  minWidth: '150px',
                  height: '40px',
                  textAlign: 'center',
                  padding: '5px',
                }}
              >
                <Input
                  type="checkbox"
                  onChange={({ target: { checked } }) =>
                    changeFileLayoutParameters({ ...data, selected: checked })
                  }
                  checked={data.selected}
                />
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}
