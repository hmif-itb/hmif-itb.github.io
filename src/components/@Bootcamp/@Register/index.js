import React from 'react';
import { Helmet } from 'react-helmet';

import PageComponent from 'components/PageComponent';

import './index.scss';

export default class BootcampRegister extends PageComponent {
  render() {
    return (
      <div className="bootcamp-registration">
        <Helmet>
          <title> Bootcamp HMIF - Register </title>
        </Helmet>

        <div className="page container">
          <div className="row mb-3">
            <div className="col-12">
              <div className="title" align="center">
                  Register for Bootcamp!
              </div>
              <div className="registration-loader" id="register" align="center">
                  <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScn-ElfR6wGDroNpYN2zX8tg45gLKGmtay9GH_4sR2dnzp_tQ/viewform?embedded=true"
                      width="100%" className="registration-iframe" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                  </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
