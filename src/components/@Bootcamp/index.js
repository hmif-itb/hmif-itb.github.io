import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  ROUTE_BOOTCAMP_BP,
  ROUTE_BOOTCAMP_CP,
  ROUTE_BOOTCAMP_CTF,
  ROUTE_BOOTCAMP_DS,
  ROUTE_BOOTCAMP_GAME,
  ROUTE_BOOTCAMP_UX
} from 'routes';
import LogoCP from 'assets/logo/cp.png';
import LogoCTF from 'assets/logo/ctf.png';
import LogoBP from 'assets/logo/bp.png';
import LogoDS from 'assets/logo/ds.png';
import LogoGD from 'assets/logo/gd.png';
import LogoUX from 'assets/logo/ux.png';

import SectionTitle from './SectionTitle';
import './index.scss';

const categories = [
  { name: 'Business Plan', link: ROUTE_BOOTCAMP_BP, logo: LogoBP },
  { name: 'Capture The Flag', link: ROUTE_BOOTCAMP_CTF, logo: LogoCTF },
  { name: 'Competitive Programming', link: ROUTE_BOOTCAMP_CP, logo: LogoCP },
  { name: 'Data Science', link: ROUTE_BOOTCAMP_DS, logo: LogoDS },
  { name: 'Game Development', link: ROUTE_BOOTCAMP_GAME, logo: LogoGD },
  { name: 'UI / UX', link: ROUTE_BOOTCAMP_UX, logo: LogoUX },
];

export default class Bootcamp extends Component {
  renderCategoryCard(category) {
    return (
      <div key={category.link} className="category col-6 col-md-4">
        <Link to={category.link}>
          <div className="card">
            <img alt={category.name} src={category.logo} width="50%"/>
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

  render() {
    return (
      <div className="bootcamp">
        <Helmet>
          <title> Bootcamp HMIF </title>
        </Helmet>

        <div className="page py-5 bg-black w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="font-weight-bold text-center">HMIF #Bootcamp</h1>
          <div className="d-flex flex-row justify-content-center my-3">
            <img alt="CP" src={LogoCP} className="logo-small"/>
            <img alt="CTF" src={LogoCTF} className="logo-small"/>
            <img alt="DS" src={LogoDS} className="logo-small"/>
            <img alt="GD" src={LogoGD} className="logo-small"/>
            <img alt="BP" src={LogoBP} className="logo-small"/>
            <img alt="UX" src={LogoUX} className="logo-small"/>
          </div>
          <div className="text-center font-italic text-white mb-2">Dare to achieve more?</div>
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
            Bootcamp will be held in 6 days: March 23-24, 30-31, and April 13-14.
          </p>

          <SectionTitle>The Categories</SectionTitle>
          <p>We have 6 categories. Click on the category to see the details.</p>

          <div className="row">
            {this.renderCategoriesCards()}
          </div>

          <SectionTitle>How Can I Join?</SectionTitle>
          <p>
            Fill this form below! This bootcamp is <span className="font-weight-semibold">free</span>.
            The seat is limited (around 20 persons), so we want to limit this bootcamp only for those who have commitment.
            So, if it is necessary, we will conduct a selection (we will contact you as soon as possible, after you fill this form).
            Additionally, there will be commitment fee 100k.
            This commitment fee <span className="font-weight-semibold">will be returned</span> by the end of Bootcamp if you attend all of our agenda (or you have good reasons to not attend).
          </p>

          <iframe
            className="my-3"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf-pjaV51_Kuhg8BYcBzBgpQQcf8SIswYkVDbe71keH0RjQMQ/viewform?embedded=true"
            height="1500"
            title="Pendaftaran Bootcamp"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0">Loading...</iframe>

          <p className="mb-5 font-italic text-center">If you want to achieve what you never achieve, you have to be ready to do what you never do.</p>
        </div>
      </div>
    );
  }
}
