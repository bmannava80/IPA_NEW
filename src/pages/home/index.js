import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div>
        <Header />
      </div>
      <div className="home-links">
        <div className="home-user" onClick={() => navigate('/claimsAnalyst')}>
          <img alt="img" src="https://www.mrt.if.ua/images/member.png" />
          <span>Claims Analyst(IF145)</span>
        </div>
        <div className="home-user" onClick={() => navigate('/enrollmentAnalyst')}>
          <img alt="img" src="https://www.mrt.if.ua/images/member.png" />
          <span to="/enrollmentAnalyst">Enrollment Analyst(IF144)</span>
        </div>
        <div className="home-user" onClick={() => navigate('/claimsAdmin')}>
          <img alt="img" src="https://www.mrt.if.ua/images/member.png" />
          <span to="/claimsAdmin">Claims Admin(IF145)</span>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
