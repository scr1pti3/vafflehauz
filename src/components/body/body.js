import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Services from './services.js';
import Portoflio from './portfolio.js';
import About from './about.js';
import Team from './team.js';
import Contact from './contact.js';
import './body.css';

function Body(props) {
  const [serviceData, setServiceData] = useState({});
  const [portfolioData, setPortfolioData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [teamData, setTeamData] = useState({});
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get('/section-services'),
      axios.get('/section-portfolios'),
      axios.get('/section-about'),
      axios.get('/section-teams'),
      axios.get('/section-contact'),
    ])
    .then(values => {
      setServiceData(values[0].data);
      setPortfolioData(values[1].data);
      setAboutData(values[2].data);
      setTeamData(values[3].data);
      setContactData(values[4].data);
    })
    .catch(err => console.error('GET /sections-*', err));
  }, []);

  console.log('called', 1+1)
  return (
    <>
      <Services subheading={serviceData.subheading}/>
      <Portoflio subheading={portfolioData.subheading}/>
      <About subheading={aboutData.subheading}/>
      <Team heading={teamData.heading} subheading={teamData.subheading}/>
      <Contact heading={contactData.heading} subheading={contactData.subheading}/>
    </>
);
}

export default Body;
