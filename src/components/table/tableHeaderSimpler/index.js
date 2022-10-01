import { Button } from 'reactstrap';

export default function TableHeaderSimpler({ openModal, showMenu }) {
  return (
    <div className="table-header-simpler">
      {showMenu && (
        <div>
          <Button style={{ border: 'none', backgroundColor: 'white' }}>Menu ▼</Button>
        </div>
      )}
      <div>
        <Button style={{ border: 'none', backgroundColor: 'white' }}>View ▼</Button>
      </div>
      <div className="table-header-simpler-button">
        <Button
          onClick={openModal}
          style={{
            backgroundColor: '#43b02a',
            color: 'white',
            minHeight: '25px',
            marginRight: '5px',
          }}
        >
          ▼ Detach
        </Button>
      </div>
    </div>
  );
}
