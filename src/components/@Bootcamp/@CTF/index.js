import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Header from '../Header';
import LogoCTF from 'assets/logo/ctf.svg';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampCTF extends PageComponent {
  render() {
    return (
      <div className="bootcamp-ctf">
        <Helmet>
          <title> Bootcamp HMIF - Capture The Flag </title>
        </Helmet>

        <Header
          logo={LogoCTF}
          title={<>Capture The <span style={{color: '#FF5722'}}>Flag</span></>}
          quote={<>No System is Safe!</>}
          borderColor='#FF5722' />

        <div className="page container mt-4">

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What to Expect</SectionTitle>
              <ul className="ml-4">
                <li>Website Exploitation</li>
                <li>Digital Forensic</li>
                <li>Cryptography</li>
                <li>Pwn / Binary Exploitation</li>
                <li>Reverse Engineering</li>
                <li>Scripting</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Familiar with Linux OS (Virtual Machine / Dual Boot)</li>
                <li>Programming Language (Python)</li>
                <li>Curious to learn new things and explore creative solutions</li>
              </ul>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <Link to={ROUTE_BOOTCAMP_REGISTER}>
                <button className="button-register font-weight-semibold">
                  Register!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
