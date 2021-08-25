import React from "react";
import Header from './header';
import Banner from './Banner';
import About from './About';
import '../task.min.css'
class Home extends React.Component {



  render() {
    return (
      <div>
        <div style={{ background: "#ffffff" }} className="Home">
        </div>
        <div>
          <img
            alt='The Rant'
            src={'../image/nsey-benajah-5_gku5Usbzk-unsplash.jpg'}
            ClassName="home-rant-image"
            style={{ float: 'middle' }}
          />
        </div>
        <Header />
        <br />
        <Banner />
        <br />
        <About />
        <br />
      </div>

    );
  }
}
Headers.defaultProps = {
  title: 'hows the day',
}

export default Home;
