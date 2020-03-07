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

              <div className="registration-loader" id="register">
                <iframe
                  src="https://services.cognitoforms.com/f/OqqZCFInXUWhnPSWgSoulA?id=1"
                  style={{
                    position: 'relative',
                    minWidth: '100%',
                    width: '100%',
                  }}
                  title="Pendaftaran Bootcamp"
                  frameBorder="0"
                  scrolling="yes"
                  seamless="seamless"
                  height="466"
                  width="100%"
                >
                  Loading Registration Form ...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
