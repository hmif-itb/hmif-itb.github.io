import React from 'react';
import { Helmet } from 'react-helmet';

import PageComponent from 'components/PageComponent';
import Navbar from 'components/Navbar';
import Photo from 'components/Photo';
import Albert from 'assets/photos/compete-and-share/albert.png';
import Ardy from 'assets/photos/compete-and-share/ardy.png';
import Balya from 'assets/photos/compete-and-share/balya.png';
import Bimo from 'assets/photos/compete-and-share/bimo.png';
import Fahmi from 'assets/photos/compete-and-share/fahmi.png';
import Fajar from 'assets/photos/compete-and-share/fajar.png';
import Fikhaf from 'assets/photos/compete-and-share/fikhaf.png';
import Gery from 'assets/photos/compete-and-share/gery.png';
import Ilham from 'assets/photos/compete-and-share/ilham.png';
import Irfan from 'assets/photos/compete-and-share/irfan.png';
import Iwang from 'assets/photos/compete-and-share/iwang.png';
import Josal from 'assets/photos/compete-and-share/josal.png';
import Munir from 'assets/photos/compete-and-share/munir.png';
import Nicho from 'assets/photos/compete-and-share/nicho.png';
import Rifda from 'assets/photos/compete-and-share/rifda.png';
import Teo from 'assets/photos/compete-and-share/teo.png';
import Thoriq from 'assets/photos/compete-and-share/thoriq.png';
import './index.scss';

export default class CompeteAndShare extends PageComponent {
  render() {
    return (
      <div className="compete">
        <Navbar activeMenu="Compete &amp; Share" />

        <div className="container">
          <Helmet>
            <title>Compete &amp; Share HMIF Tech</title>
          </Helmet>


          <div className="row my-5">
            <h1 className="mt-3 text-center font-weight-bold">Compete &amp; Share!</h1>
          </div>

          <div className="container desc">
            <div className="row my-2">
              <p className="text-center">
                In the past 6 months, up to 100 competitions were recorded. <br/>
                &plusmn; 278 HMIF students were qualified to go to the finals. <br/>
                &plusmn; 149 of them became the winners.
              </p>

              <p className="text-center">
                How can I win like them? <br/>
                What informatics competitions can I join? <br/>
                How does it feel to participate in the competition, what are the tips &amp; tricks, and even ... why do I need to compete?
              </p>

              <p className="text-center">
                Come to our event <span className="font-weight-bold font-italic">Compete &amp; Share</span> by HMIF! <br/>
                We invited the winners of past competitions to tell a story about their experiences. <br/>
                Mark the date!<br/>
              </p>
            </div>
          </div>

          <div className="row my-2">
            <p className="text-center text-xlarge">
              Sept, 24th 2019. 7 - 9 pm. 7602,<br/>
              Labtek V 3rd floor ITB
            </p>
          </div>

          <div className="my-5 d-flex flex-row justify-content-center">
            <a href="https://forms.gle/bdNkym3wH6Mxgg5G6">
              <button className="button-register font-weight-semibold">
                Register Now!
              </button>
            </a>
          </div>

          <div className="row my-5">
            <h2 className="mt-3 text-center font-weight-bold">Meet The Speakers!</h2>
          </div>

          <div className="head left mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Albert}
                name="Albert Sahala T"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Rifda}
                name="Rifda Annelies"
                // title="?"
              />
            </div>
            <div className="text-center text-md-left caption">
              <h2 className="text-xlarge">Idea Challenge</h2>
              <div className="line"></div>
              <span className="font-italic wins">
                1st Winner L’Oréal Brandstorm National 2019<br/>
                1st Winner L’Oréal Brandstorm International 2019<br/>
                3rd Winner Business IT Case IT Fest 3.0
              </span>
            </div>
          </div>

          <div className="head right mb-5">
            <div className="ml-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Balya}
                name="Balya Ibnu Sulistiyono"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Teo}
                name="Teo Wijayarto"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Fikhaf}
                name="M Fikri Hafiya"
                // title="?"
              />
            </div>
            <div className="text-center text-md-right caption">
              <h2 className="text-xlarge">Business IT Case</h2>
              <div className="line"></div>
              <span className="font-italic wins">
                2nd Winner Business IT Case ITFest 3.0<br/>
                1st Winner Business IT Case Compfest X<br/>
                2nd Winner Information System Case Competition 2018<br/>
              </span>
            </div>
          </div>

          <div className="head left mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Fahmi}
                name="Ahmad Fahmi P"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Gery}
                name="Putu Gery W N"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Josal}
                name="Joseph Salimin"
                // title="?"
              />
            </div>
            <div className="text-center text-md-left caption">
              <h2 className="text-xlarge">Hackathon</h2>
              <div className="line"></div>
              <span className="font-italic wins">
                3rd Winner Hackathon Pertamina <br/>
                3rd Winner BNCC Hackathon 2.0 <br/>
                1st Winner Vacathon
              </span>
            </div>
          </div>

          <div className="head right mb-5">
            <div className="ml-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxxsmall"
                imageSrc={Ilham}
                name="Ilham F Putra"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxxsmall"
                imageSrc={Ardy}
                name="Ardysatrio Fakhri H"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxxsmall"
                imageSrc={Fajar}
                name="Fajar Muslim"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxxsmall"
                imageSrc={Thoriq}
                name="Marsha Thoriq"
                // title="?"
              />
            </div>
            <div className="text-center text-md-right caption">
              <h2 className="text-xlarge">Data Science</h2>
              <div className="line"></div>
              <span className="font-italic wins">
                1st Winner EY NextWave Data Science Challenge<br/>
                1st &amp; 3rd Winner Data Mining Joints UGM
              </span>
            </div>
          </div>

          <div className="head left mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Munir}
                name="Muhammad A Munir"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Josal}
                name="Joseph Salimin"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Nicho}
                name="Nicholas Rianto P"
                // title="?"
              />
            </div>
            <div className="text-center text-md-left caption">
              <h2 className="text-xlarge">Cyber Security</h2>
              <div className="line"></div>
              <span className="font-italic wins">
                1st &amp; 2nd Winner Capture The Flag Compfest XI <br/>
                2nd Winner ITToday 2019 <br/>
                3rd Winner Cyber Jawara 2018 <br/>
              </span>
            </div>
          </div>

          <div className="head right mb-5">
            <div className="ml-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Irfan}
                name="Irfan Sofyana P"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Iwang}
                name="Adyaksa Wisanggeni"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Bimo}
                name="Bimo A Wiraputra"
                // title="?"
              />
            </div>
            <div className="text-center text-md-right caption">
              <h2 className="text-xlarge">Competitive Programming</h2>
              <div className="line"></div>
              <span className="font-italic wins">
                2nd Winner Competitive Programming Compfest XI <br/>
                3rd Winner Competitive Programming Vocomfest
              </span>
            </div>
          </div>

          {/* <div className="page contribute">
            <div className="mb-3 font-italic">Dare to contribute?</div>
            <div className="d-flex">
              <Link to={ROUTE_JOIN}><div className="button text-xlarge">Join Us!</div></Link>
            </div>
          </div> */}

        </div>
      </div>
    );
  }
}
