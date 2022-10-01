import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <div className="header-logo">
          <h2>DELTA DENTAL</h2>
        </div>
        <div>
          <h1>Interface Parameter Application</h1>
        </div>
      </div>
      <div className="header-link">
        <div>August 24, 2022</div>
        <div>DELTADS\ca31453</div>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
      </div>
    </div>
  );
}
