import { Button } from 'reactstrap';

export default function StepFour({ newField }) {
  return (
    <>
      <div>Information about new Extract has been added: {newField.extract_id}</div>
      <div className="tab-new-extract-button">
        <Button style={{}}>OK</Button>
      </div>
    </>
  );
}
