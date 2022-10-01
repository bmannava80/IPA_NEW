export default function StepThree({ description }) {
  return (
    <>
      <div className="tab-new-extract-info">
        <span> Interface ID</span>
        <div>IF(145) - BODY extraction</div>
      </div>
      <div className="tab-new-extract-description">
        <span> Extract Description</span>
        <div>{description}</div>
      </div>

      <div className="new-extract-finally-info">
        <div>File Layout</div>
        <div className="new-extract-finally-name">Aetna</div>
      </div>
    </>
  );
}
