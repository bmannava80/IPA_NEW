import { Button } from 'reactstrap';
import { CTableRow } from '@coreui/react';
import ExtractTableModal from '../../../pages/claimsAnalyst/extractRoster/extractTableModal';
import Pagination from '../pagination';

export default function TableHeader({ openModal }) {
  return (
    <>
      <CTableRow style={{ padding: '0px' }}>
        <div className="table-header-container">
          <div className="table-header-border table-header-margin">View ▼</div>
          <div className="table-header-view table-header-border table-header-margin">
            <div>
              <span>
                Printable<br></br> View{' '}
              </span>
            </div>
            <div>
              <span>
                | PDF<br></br> View
              </span>
            </div>
          </div>
          <div className="table-header-border table-header-margin">
            <Button style={{ backgroundColor: '#43b02a', color: 'white', marginRight: '5px' }}>
              ▼
            </Button>
          </div>
          <div className="table-header-border table-header-margin">
            <Button
              onClick={openModal}
              style={{
                backgroundColor: '#43b02a',
                color: 'white',
                minHeight: '25px',
                marginRight: '5px',
              }}
            >
              Detach
            </Button>
          </div>
          <Pagination />
        </div>
      </CTableRow>
      <ExtractTableModal />
    </>
  );
}
