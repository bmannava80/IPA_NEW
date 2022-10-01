import { Button } from 'reactstrap';

export default function Pagination() {
  return (
    <div className="table-header-pagination ">
      <div>
        <Button
          style={{
            backgroundColor: '#f6f4f7',
            minHeight: '25px',
            borderRadius: '5px',
            marginLeft: '10px',
          }}
        >
          {'|<'}
        </Button>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: '#f6f4f7',
            minHeight: '25px',
            borderRadius: '5px',
            marginLeft: '10px',
          }}
        >
          {'<'}
        </Button>
      </div>
      <div className="table-header-margin">
        <div>
          <span>Page</span>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <span>of 24</span>
        </div>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: '#43b02a',
            minHeight: '25px',
            borderRadius: '5px',
            marginLeft: '10px',
            color: 'white',
          }}
        >
          {'>'}
        </Button>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: '#43b02a',
            minHeight: '25px',
            borderRadius: '5px',
            marginLeft: '10px',
            color: 'white',
          }}
        >
          {'>|'}
        </Button>
      </div>
    </div>
  );
}
