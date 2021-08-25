import React from "react";

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
        <hr />

        <br />
        <Banner />
        <About />
        <br />
        <hr />
        <h1 className="skillheader">Rants</h1>
        <hr />

        <hr />

        <hr />
        <h1 id="contactnav" className="contact"></h1>
        <hr />
      </div>

    );
  }
}
Headers.defaultProps = {
  title: 'hows the day',
}

export default Home;
