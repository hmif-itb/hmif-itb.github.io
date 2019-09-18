import React from 'react';
import { Helmet } from 'react-helmet';

import PageComponent from 'components/PageComponent';
import Navbar from 'components/Navbar';
import Photo from 'components/Photo';
import Who from 'assets/photos/who.png';
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
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
            </div>
            <div className="text-center text-md-left caption">
              <h2 className="text-xlarge">Competitive Programming</h2>
              <div className="line"></div>
              <span className="font-italic">
                Will be revealed Sept 18th, 2019 6.00 pm
              </span>
            </div>
          </div>

          <div className="head right mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
            </div>
            <div className="text-center text-md-right caption">
              <h2 className="text-xlarge">Cyber Security</h2>
              <div className="line"></div>
              <span className="font-italic">
                Will be revealed Sept 19th, 2019 6.00 pm
              </span>
            </div>
          </div>

          <div className="head left mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
            </div>
            <div className="text-center text-md-left caption">
              <h2 className="text-xlarge">Data Science</h2>
              <div className="line"></div>
              <span className="font-italic">
                Will be revealed Sept 20th, 2019 6.00 pm
              </span>
            </div>
          </div>

          <div className="head right mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
            </div>
            <div className="text-center text-md-right caption">
              <h2 className="text-xlarge">Hackathon</h2>
              <div className="line"></div>
              <span className="font-italic">
                Will be revealed Sept 21st, 2019 6.00 pm
              </span>
            </div>
          </div>

          <div className="head left mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
            </div>
            <div className="text-center text-md-left caption">
              <h2 className="text-xlarge">Business Case</h2>
              <div className="line"></div>
              <span className="font-italic">
                Will be revealed Sept 22nd, 2019 6.00 pm
              </span>
            </div>
          </div>

          <div className="head right mb-5">
            <div className="mr-md-5 mb-3 d-flex flex-row align-items-end">
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
              <Photo
                className="mx-2" size="xxsmall"
                imageSrc={Who}
                name="?"
                // title="?"
              />
            </div>
            <div className="text-center text-md-right caption">
              <h2 className="text-xlarge">Apps Innovation</h2>
              <div className="line"></div>
              <span className="font-italic">
                Will be revealed Sept 23rd, 2019 6.00 pm
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
