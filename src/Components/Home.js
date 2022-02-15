import hero from "../util/hero.jpg"
import vid from "../util/headache.mp4"
import vidStars from "../util/stars.mp4"
import deez from "../util/deez.mp4"
import { Link } from "react-router-dom";

const Home = (props) => {

  const linkStyle = {
    "text-decoration": "none"
  }

  return (
    <>
    <video autoPlay muted loop playsInline id="bg-vid">
      <source src={deez} type="video/mp4"/>
    </video>
    
    <div className="Home-container">
      <div className="Home">
        <div className="Home-left">
          <img src={hero} alt="hero image"/>
        </div>
        <div className="Home-right">
          <h2>Cosmic Darlings</h2>
          <p>Cosmic Darlings are a carefully curated collection of 10,000 cyborgs on the Ethereum blockchain. Each Darling is unique and consists of both hand-drawn and real world traits.</p>
          <h3 id="two">/ Galaxies</h3>
          <p>In this genesis launch, all darlings are spawned from the void and deployed to the Milky Way. Owners can chose to stay in their galaxy or burn their darling to teleport to another galaxy.</p>
          <h3 id="two">/ Gateway</h3>
          <p>Darlings gain exclusive access to all future @Lurch projects. Lurch is a collective of 1 artist and 1 developer. </p>
          <h3 id="two">/ Mint & Whitelist</h3>
          <p id="last">The mint date has not been announced. Join us on Discord & follow us on Twitter to stay up to date. Whitelist spots will be distributed on both mediums.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
