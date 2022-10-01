import { Button } from 'reactstrap';

export default function PaginationTableMapping() {
  return (
    <div className="pagination-mapping-container">
      <div className="pagination-mapping-flex pagination-mapping-pages">
        <div className="font-weight">Page</div>
        <div>
          <input value={1}></input>
        </div>
        <div>of 6 {'(1-6 of 36 items)'}</div>
      </div>
      <div className="pagination-mapping-flex">
        <div>
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#d8d6da' }}>
            {'|<'}
          </Button>
        </div>
        <div>
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#d8d6da' }}>
            {'<'}
          </Button>
        </div>
        <div className="pagination-mapping-item"></div>
        <div className="pagination-mapping-item">
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#2f8a1a' }}>
            1
          </Button>
        </div>
        <div className="pagination-mapping-item">
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#2f8a1a' }}>
            2
          </Button>
        </div>
        <div className="pagination-mapping-item">
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#2f8a1a' }}>
            3
          </Button>
        </div>
        <div className="pagination-mapping-item">
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#2f8a1a' }}>
            4
          </Button>
        </div>
        <div className="pagination-mapping-item">
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#2f8a1a' }}>
            5
          </Button>
        </div>
        <div className="pagination-mapping-item">
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none', color: '#2f8a1a' }}>
            6
          </Button>
        </div>
        <div>
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none' }}>{'>'}</Button>
        </div>
        <div>
          <Button style={{ backgroundColor: '#f6f4f7', border: 'none' }}>{'>|'}</Button>
        </div>
      </div>
    </div>
  );
}
