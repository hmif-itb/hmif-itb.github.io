import React from 'react';
import { Helmet } from 'react-helmet';

import PageComponent from 'components/PageComponent';
import Logo from 'assets/weblogo.png';
import RightBackground from 'assets/qmarkbg.svg';

import './index.scss';

export default class About extends PageComponent {
  render() {
    return (
      <div className="coming-soon">
        <div className="container">
          <Helmet>
            <title>Coming Soon - HMIF Tech</title>
          </Helmet>

          <div className="main">
            <div className="content">
              <div className="logo">
                <img src={Logo} height={15} />
              </div>
              <div className="primary">
                <div className="yellow-line"></div>
                <h1>Coming Soon</h1>
                <div>
                  <b>Penasaran?</b> Dateng muker. Maret 2020.
                </div>
              </div>
              <div className="footer">
                <a href="https://hmif.itb.ac.id" target="_blank">HMIF ITB</a>
                <a href="https://medium.com/hmif-itb" target="_blank">Medium</a>
                <a href="https://mint.hmif.tech" target="_blank">Mint by HMIF Tech</a>
              </div>
            </div>
            <div className="right-image" style={{background: `url(${RightBackground})`, backgroundSize: 'cover'}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
