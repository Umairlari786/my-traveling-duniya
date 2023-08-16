import React from 'react';
import insta from "../assets/instagram_logo.png";
import linkedIn from "../assets/linkedin_logo.png";
import gitHub from "../assets/github_logo.png";
const SocialLinksSection = () => {
  return (
    <section style={{ backgroundColor: 'white', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://instagram.com/lari._umair?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" style={{ width: '50px', height: '50px', margin: '0 1rem' }} />
        </a>
        <a href="https://www.linkedin.com/in/mohd-umair-lari-746b771b9/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn" style={{ width: '50px', height: '50px', margin: '0 1rem' }} />
        </a>
        <a href="https://github.com/Umairlari786" target="_blank" rel="noopener noreferrer">
          <img src={gitHub} alt="GitHub" style={{ width: '50px', height: '50px', margin: '0 1rem' }} />
        </a>
      </div>
    </section>
  );
};

export default SocialLinksSection;