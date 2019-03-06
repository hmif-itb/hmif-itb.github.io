import React, { Component } from "react";
import { Helmet } from "react-helmet";

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

import Photo from "./Photo";
import "./index.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about pb-5">
        <Helmet>
          <title>Who We Are</title>
        </Helmet>

        <Navbar activeMenu="About" />

        <div className="row my-5">
          <h1 className="text-center">Kenalan Yuk!</h1>
        </div>

        <div className="row mb-3">
          <Photo imageSrc={Izzan} name="Ahmad Izzan" title="Head of HMIF Tech" size="large" />
        </div>

        <div className="division mb-3">
          <div className="row">
            <Photo className="mx-3 mb-3" imageSrc={Ody} name="Adylan Roaffa" title="Head of Careers &amp; Issues" size="medium" />
            <Photo className="mx-3 mb-3" imageSrc={Didit} name="Aditya Hilmy" title="Vice of Careers &amp; Issues" size="small" />
          </div>
          <div className="row">
            <Photo className="mx-3 mb-3" imageSrc={Yonas} name="Yonas Adiel" title="Head of Competition &amp; Community" size="medium" />
            <Photo className="mx-3 mb-3" imageSrc={Iwang} name="Adyaksa Wisanggeni" title="Vice of Competition &amp; Community" size="small" />
          </div>
        </div>

        <div className="community mb-3">
          <div className="row">
            <Photo className="mx-3 mb-3" imageSrc={Irfan} name="Irfan Sofyana" title="Competitive Programming" size="xsmall" />
            <Photo className="mx-3 mb-3" imageSrc={Munir} name="Abdullah Munir" title="Capture The Flag" size="xsmall" />
            <Photo className="mx-3 mb-3" imageSrc={Christian} name="Christian W" title="Data Science" size="xsmall" />
          </div>
          <div className="row">
            <Photo className="mx-3 mb-3" imageSrc={Fahmi} name="Ahmad Fahmi" title="UI / UX" size="xsmall" />
            <Photo className="mx-3 mb-3" imageSrc={Timothy} name="Timothy T S" title="Business Plan" size="xsmall" />
            <Photo className="mx-3 mb-3" imageSrc={Fiqri} name="Fiqri Fatriansyah" title="Game Development" size="xsmall" />
          </div>
        </div>

      </div>
    );
  }
}
