import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  ROUTE_BOOTCAMP_BIZPLAN,
  ROUTE_BOOTCAMP_CP,
  ROUTE_BOOTCAMP_CTF,
  ROUTE_BOOTCAMP_DS,
  ROUTE_BOOTCAMP_GAME,
  ROUTE_BOOTCAMP_UIUX
} from 'routes';
import LogoCP from 'assets/logo/cp.png';
import LogoCTF from 'assets/logo/ctf.png';
import LogoBP from 'assets/logo/bp.png';
import LogoDS from 'assets/logo/ds.png';
import LogoGame from 'assets/logo/game.png';
import LogoUX from 'assets/logo/ux.png';
import './index.scss';

const categories = [
  { name: 'Business Plan', link: ROUTE_BOOTCAMP_BIZPLAN, logo: LogoBP },
  { name: 'Capture The Flag', link: ROUTE_BOOTCAMP_CTF, logo: LogoCTF },
  { name: 'Competitive Programming', link: ROUTE_BOOTCAMP_CP, logo: LogoCP },
  { name: 'Data Science', link: ROUTE_BOOTCAMP_DS, logo: LogoDS },
  { name: 'Game Development', link: ROUTE_BOOTCAMP_GAME, logo: LogoGame },
  { name: 'UI / UX', link: ROUTE_BOOTCAMP_UIUX, logo: LogoUX },
]

export default class Bootcamp extends Component {
  renderCategoryCard(category) {
    return (
      <div className="category col-6 col-md-4">
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

        <div className="page bg-black w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-5 font-weight-bold text-center">HMIF #Bootcamp</h1>
          <div className="text-center font-italic text-white mb-2">Dare to achieve more?</div>
          <p className="text-center text-small">Scroll to learn more!</p>
        </div>

        <div className="page container">
          <h2 className="mt-5 mb-3">What is Bootcamp?</h2>
          <p>
            We believe that you, as a student in Institut Teknologi Bandung, have great potential.
            You are a winner, so act like one.
          </p>

          <h2 className="mt-5 mb-3">Who can join?</h2>
          <p>
            All students in Institut Teknologi Bandung can participate to make our almamater great again.
            If you have the will to compete, surpass others, and achieve what you have never achieve, this bootcamp is for you.
          </p>

          <h2 className="mt-5 mb-3">Save The Date!</h2>
          <p>
            Bootcamp will be held in 3 weeks: March 23-24, 30-31, and April 13-14.
          </p>

          <h2 className="mt-5 mb-3">The categories</h2>
          <p>We have 6 categories:</p>

          <div className="row">
            {this.renderCategoriesCards()}
          </div>

          <iframe
            className="my-3"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf-pjaV51_Kuhg8BYcBzBgpQQcf8SIswYkVDbe71keH0RjQMQ/viewform?embedded=true"
            height="1500"
            title="Pendaftaran Bootcamp"
            frameborder="0"
            marginheight="0"
            marginwidth="0">Loading...</iframe>

          <p className="mb-5 font-italic text-center">If you want to achieve what you never achieve, you have to be ready to do what you never do.</p>
        </div>
      </div>
    );
  }
}
