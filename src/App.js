import "./App.css";

//import components
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";

//import hooks
import { WriteMachine } from "./components/WriteMachine/WriteMachine.js";
import { useEffect, useState } from "react";

//import images

import code01 from "./assets/code01.png";
import code02 from "./assets/code02.png";
import me from "./assets/eu.png";
import Instagram from "./assets/instagram.png";
import Gmail from "./assets/gmail.png";
import Linkedin from "./assets/linkedin.png";
import Whatsapp from "./assets/whatsapp.png";

//import icons

// import { BsFillTelephoneFill } from "react-icons/bs";
// import { BsFillEnvelopeFill } from "react-icons/bs";
// import { TbMessageCircle2Filled } from "react-icons/tb";
// import { SlSocialInstagram } from "react-icons/sl";
// import { IconContext } from "react-icons";

function App() {
  const [images] = useState([
    // headset,
    code01,
    code02,
    code01,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headsetName] = useState([
    // 'HeadSet',
    "HeadSet2",
    "HeadSet3",
    "HeadSet4",
  ]);

  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setCurrentIndex((currentIndex + 1) % headsetName.length);
      }, 1500);

      return () => {
        clearInterval(intervalId);
      };
    },
    [currentIndex, images.length],
    [currentIndex, headsetName.length]
  );

  return (
    <div className="div-app">
      <div className="container-app">
        <div className="content">
          <NavBar />
          <WriteMachine text="Hello, I'm Camila" />
          <div className="first-p">
            <p>
              Full-stack Developer and <br /> Computer Vision. <br /> <br />
              Full-stack developer, applying knowledge in React JS,
              <br /> Node JS, TypeScript, and Computer Vision in Python. <br />
              Contributing to assistive technology.
              {/* <img src={me} alt="" /> */}
            </p>
          </div>

          <div className="button-done">
            <button>Done</button>
          </div>
          <div className="image-container">
            <div className="Image-headset">
              <img src={images[currentIndex]} alt="" />
              <h3 className="headset-h3">{headsetName[currentIndex]}</h3>
            </div>
            <div className="contact-div">
              <ul className="contact-ul">
                <li>
                  <a href="">
                    <img src={Linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Gmail} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Whatsapp} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Instagram} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="headset-button">
              <button>See</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
