// src/components/CompanyLogos.js
import React from 'react';
import adobe from '../../assets/adobe.png'
import asana from '../../assets/asana.png'
import linear from '../../assets/linear.png'
import slack from '../../assets/slack.png'
import spotify from '../../assets/spotify.png'

const CompanyLogos = () => {
  return (
    <section className="py-8 bg-black flex justify-around">
      <img src={spotify} alt="Spotify" />
      <img src={slack} alt="Slack" />
      <img src={adobe} alt="Adobe" />
      <img src={asana} alt="Asana" />
      <img src={linear} alt="Linear" />
      
    </section>
  );
};

export default CompanyLogos;
