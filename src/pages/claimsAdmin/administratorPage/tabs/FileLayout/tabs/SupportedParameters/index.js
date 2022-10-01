import { Col, Button, Input, FormGroup, Label } from 'reactstrap';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

const cols = ['Extract Parameter', 'Select'];

export default function SupportedParameters() {
  return (
    <div>
      <div>
        <FormGroup row>
          <Label for="fileLayout" sm={2} style={{ fontWeight: 'bold' }}>
            File Layout
          </Label>
          <Col sm={3}>
            <Input type="text" name="fileLayout" id="fileLayout" />
          </Col>
        </FormGroup>
        <div className="tab-new-extract-button">
          <Button style={{ margin: '10px 5px', width: 'auto' }}>Save</Button>
          <Button style={{ margin: '10px 5px', width: 'auto' }}>Reset</Button>
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
          <CTableBody style={{ backgroundColor: 'rgb(246, 244, 247)' }}>
            <CTableRow>
              <CTableDataCell style={{ padding: '5px' }}>No data to display.</CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}
