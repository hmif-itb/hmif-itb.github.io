import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  ROUTE_BOOTCAMP_CP,
  ROUTE_BOOTCAMP_CTF,
  ROUTE_BOOTCAMP_DS,
  ROUTE_BOOTCAMP_GAME,
  ROUTE_BOOTCAMP_UX,
  ROUTE_BOOTCAMP_REGISTER,
} from 'routes';
import PageComponent from 'components/PageComponent';
import LogoBootcamp from 'assets/logo/bootcamp.png';
import LogoCP from 'assets/logo/cp.svg';
import LogoCTF from 'assets/logo/ctf.svg';
import LogoDS from 'assets/logo/ds.svg';
import LogoGD from 'assets/logo/gd.svg';
import LogoUX from 'assets/logo/ux.svg';

import SectionTitle from './SectionTitle';
import './index.scss';

const categories = [
  { name: 'Capture The Flag', link: ROUTE_BOOTCAMP_CTF, logo: LogoCTF },
  { name: 'Competitive Programming', link: ROUTE_BOOTCAMP_CP, logo: LogoCP },
  { name: 'Data Science', link: ROUTE_BOOTCAMP_DS, logo: LogoDS },
  { name: 'Game Development', link: ROUTE_BOOTCAMP_GAME, logo: LogoGD },
  { name: 'UI / UX', link: ROUTE_BOOTCAMP_UX, logo: LogoUX },
];

export default class Bootcamp extends PageComponent {
  renderCategoryCard(category) {
    return (
      <div key={category.link} className="category col-6 col-md-4">
        <Link to={category.link}>
          <div className="card">
            <img alt={category.name} src={category.logo} height="50%" />
            <div className="font-weight-semibold text-center">{category.name}</div>
          </div>
        </Link>
      </div>
    );
  }

  renderCategoriesCards() {
    let categoriesCards = [];
    for (let i = 0; i < categories.length; i++) {
      categoriesCards.push(this.renderCategoryCard(categories[i]));
    }
    return categoriesCards;
  }

  componentDidMount() {
    super.componentDidMount();
    const scriptCognito = document.createElement("script");
    const scriptFormLoader = document.createElement("script");

    scriptCognito.src = "https://services.cognitoforms.com/scripts/embed.js";
    scriptFormLoader.innerHTML = "Cognito.load(\"forms\", { id: \"1\" }); alert(1)";

    document.body.appendChild(scriptCognito);
    // document.body.appendChild(scriptFormLoader);
  }

  render() {
    return (
      <div className="bootcamp">
        <Helmet>
          <title> Bootcamp HMIF </title>
        </Helmet>

        <div className="page py-5 w-100 d-flex flex-column justify-content-center align-items-center heading">
          <div className="bootcamp-hero">
            <img alt="Bootcamp" src={LogoBootcamp} />
          </div>
          <div className="d-flex flex-row justify-content-center my-3">
            <img alt="CP" src={LogoCP} className="logo-small"/>
            <img alt="CTF" src={LogoCTF} className="logo-small"/>
            <img alt="DS" src={LogoDS} className="logo-small"/>
            <img alt="GD" src={LogoGD} className="logo-small"/>
            <img alt="UX" src={LogoUX} className="logo-small"/>
          </div>
          <div className="text-center font-italic mb-2">Dare to achieve more?</div>
          <p className="text-center text-small">Scroll to learn more!</p>
        </div>

        <div className="page pt-4 container">
          <SectionTitle>What is Bootcamp?</SectionTitle>
          <p>
            Some say that Institut Teknologi Bandung is one of the best college in Indonesia.
            How? One of the reasons is us, the students and our achievements.
            So if you want our college stay on top, it's time to participate in making it better than ever.
            There is no "them" or "others". It's your turn.
          </p>
          <p>
            But where do you start?
            Where can you learn and compete against others?
            In Competition &amp; Community, we want you to be a champion.
            Learn like you are ready to compete.
            Compete like you are ready to win.
          </p>
          <p>
            So we initiate this bootcamp.
            A place where you can learn, struggle, and compete together.
            A small start to bigger achievements.
          </p>

          <SectionTitle>Who Can Join?</SectionTitle>
          <p>
            All students in Institut Teknologi Bandung can participate to make our almamater great again.
            If you have the will to compete, surpass others, and achieve what you have never achieve, this bootcamp is for you.
          </p>

          <SectionTitle>Save The Date!</SectionTitle>
          <p>
            Bootcamp will be held in 4 to 6 days (depending on the category):
            13 Feb 2022, 20 Feb 2022, 27 Feb 2022, 6 Mar 2022, &amp; 13 Mar 2022.
          </p>

          <SectionTitle>The Categories</SectionTitle>
          <p>We have 5 categories. Click on the category to see the details.</p>

          <div className="row">
            {this.renderCategoriesCards()}
          </div>

          <SectionTitle>How Can I Join?</SectionTitle>
          <p>
            This bootcamp is held <span className="font-weight-semibold">online</span> and <span className="font-weight-semibold">free</span>.
            The seat is limited, so we want to limit this bootcamp only for those who have commitment.
            So, if it is necessary, we will conduct a selection (we will contact you as soon as possible, after you fill this form).
          </p>

          <SectionTitle>Contact Person?</SectionTitle>
          <p>
            Hasan: WA 085956064292 / LINE m.hasan01 / Email 13518012@std.stei.itb.ac.id
          </p>

          <div className="my-5 d-flex flex-row justify-content-center">
            <Link to={ROUTE_BOOTCAMP_REGISTER}>
              <button className="button-register font-weight-semibold">
                Register Now!
              </button>
            </Link>
          </div>

          <p className="my-5 font-italic text-center">If you want to achieve what you never achieve, you have to be ready to do what you never do.</p>
        </div>
      </div>
    );
  }
}
