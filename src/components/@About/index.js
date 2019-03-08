import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Navbar from "components/Navbar";

import Christian from "assets/photos/christian.png";
import Didit from "assets/photos/didit.png";
import Fahmi from "assets/photos/fahmi.png";
import Fiqri from "assets/photos/fiqri.png";
import Irfan from "assets/photos/irfan.png";
import Iwang from "assets/photos/iwang.png";
import Izzan from "assets/photos/izzan.png";
import Munir from "assets/photos/munir.png";
import Ody from "assets/photos/ody.png";
import Timothy from "assets/photos/timothy.png";
import Yonas from "assets/photos/yonas.png";

import { ROUTE_JOIN } from "routes";

import Photo from "./Photo";
import "./index.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Navbar activeMenu="About" />

        <div className="container">
          <Helmet>
            <title>About HMIF Tech</title>
          </Helmet>


          <div className="page">
            <div className="row mb-5">
              <h1 className="text-center font-weight-bold">Meet The Team!</h1>
            </div>

            <div className="head">
              <div className="mr-md-5 mb-5">
                <Photo imageSrc={Izzan} name="Ahmad Izzan" title="Head of HMIF Tech" size="large" />
              </div>
              <div className="text-center text-md-left caption">
                <h2 className="text-xlarge">HMIF Tech</h2>
                <div className="line"></div>
                <span className="font-italic">
                  Technology has immensely impacted our life.
                  So let&#39;s join the movement to advance our knowledge in technology and sharing with others.
                </span>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="head">
              <div className="mr-md-5 mb-5 d-flex flex-row align-items-end">
                <Photo className="mx-2" imageSrc={Ody} name="Adylan Roaffa" title="Head of Careers &amp; Issues" size="medium" />
                <Photo className="mx-2" imageSrc={Didit} name="Aditya Hilmy" title="Vice of Careers &amp; Issues" size="small" />
              </div>
              <div className="text-center text-md-left caption">
                <h2 className="text-xlarge">Tech Careers and Issues</h2>
                <div className="line"></div>
                <p className="font-italic">
                  At Tech Careers and Issues, we believe that you have the potential to go above and beyond expectations.
                  We encourage you to develop your skills, and prepare you for your professional careers.
                </p>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="head">
              <div className="mr-md-5 mb-5 d-flex flex-row align-items-end">
                <Photo className="mx-2" imageSrc={Yonas} name="Yonas Adiel" title="Head of Competition &amp; Community" size="medium" />
                <Photo className="mx-2" imageSrc={Iwang} name="A. Wisanggeni" title="Vice of Competition &amp; Community" size="small" />
              </div>
              <div className="text-center text-md-left caption">
                <h2 className="text-xlarge">Competition &amp; Community</h2>
                <div className="line"></div>
                <p className="font-italic">
                  Competition is not only about winning; it&#39;s about the journey to improve, be better, and achieve more.
                  You are the only limit to yourself.
                </p>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="row">
              <Photo className="col-6 col-md-4 col-lg-2 mb-3" imageSrc={Irfan} name="Irfan Sofyana" title="Competitive Programming" size="xsmall" />
              <Photo className="col-6 col-md-4 col-lg-2 mb-3" imageSrc={Munir} name="Abdullah Munir" title="Capture The Flag" size="xsmall" />
              <Photo className="col-6 col-md-4 col-lg-2 mb-3" imageSrc={Christian} name="Christian W" title="Data Science" size="xsmall" />
              <Photo className="col-6 col-md-4 col-lg-2 mb-3" imageSrc={Fahmi} name="Ahmad Fahmi" title="UI / UX" size="xsmall" />
              <Photo className="col-6 col-md-4 col-lg-2 mb-3" imageSrc={Timothy} name="Timothy T S" title="Business Plan" size="xsmall" />
              <Photo className="col-6 col-md-4 col-lg-2 mb-3" imageSrc={Fiqri} name="Fiqri Fatriansyah" title="Game Development" size="xsmall" />
            </div>
          </div>

          <div className="page contribute">
            <div className="mb-3 font-italic">Dare to contribute?</div>
            <div className="d-flex">
              <Link to={ROUTE_JOIN}><div className="button text-xlarge">Join Us!</div></Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
