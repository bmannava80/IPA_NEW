import { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import AppContext from '../../../context/appContext';
import StepFour from './newExtractSteps/StepFour';
import StepOne from './newExtractSteps/stepOne';
import StepThree from './newExtractSteps/stepThree';
import StepTwo from './newExtractSteps/stepTwo';

export default function NewExtract() {
  const { addExtractData } = useContext(AppContext);
  const [currentStep, setStep] = useState(1);
  const [description, setDescription] = useState('');
  const generate4DightCode = () => Math.floor(1000 + Math.random() * 9000);
  const [newField, setNewField] = useState({
    extract_id: generate4DightCode(),
    description: 'DDSTD GRP 03',
    interface_ID: 'IF145',
    active_status: 'active',
    shedule_status: 'Y',
    created_on: '11/28/2018 15:10',
    created_by: 'ca31453',
    updated_on: '11/28/2018 22:40',
    updated_by: 'ca31453',
    file_layout: 'DDSTD',
    groups: '03272',
    divisions: '',
    tpa_name: 'AON HEWITT/T',
  });

  const getStep = (step) => {
    switch (step) {
      case 1:
        return <StepOne description={description} setDescription={setDescription}></StepOne>;
      case 2:
        return <StepTwo description={description} />;
      case 3:
        return <StepThree description={description} />;
      case 4:
        return <StepFour newField={newField} />;
      default:
        return null;
    }
  };

  return (
    <div className="tab-new-extract-container">
      <div className="tab-new-extract-steps">
        {' '}
        {currentStep > 3 ? null : `Step ${currentStep} of 3. General Setthings`}
      </div>
      {getStep(currentStep)}
      <div className="tab-new-extract-buttons">
        {currentStep !== 1 ? (
          <>
            <div className="tab-new-extract-button">
              <Button onClick={() => setStep(1)}>{'<<'} Start Over </Button>
            </div>
          </>
        ) : null}
        {currentStep === 3 ? (
          <>
            <div className="tab-new-extract-button">
              <Button onClick={() => setStep(currentStep - 1)}>{'<<'} Previous</Button>
            </div>
          </>
        ) : null}
        <div className="tab-new-extract-button">
          <Button onClick={() => setStep(1)}>Cancel</Button>
        </div>
        <div className="tab-new-extract-button">
          <Button
            onClick={() => {
              if (currentStep === 3) {
                addExtractData(newField);
              }
              !description
                ? (currentStep = 1)
                : setStep(currentStep >= 4 ? currentStep : currentStep + 1);
            }}
          >
            Next {'>>'}{' '}
          </Button>
          {/* <Button onClick={() => addExtractData(newField)}></Button> */}
        </div>
      </div>
    </div>
  );
}
