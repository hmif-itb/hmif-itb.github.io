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
          quote={<>In this era of technology, cyber security becomes undeniably important. Want to know how to exploit unsafe systems and build safer ones? Join us and we'll show you how to be the hackerman you know you want to be!</>}
          borderColor='#FF5722' />

        <div className="page container mt-4">
          <div className="row mb-3">
            <div className="col-12">
              <p className="text-small">
                <span className="font-italic">
                  If you think technology can solve your security problems, then you don't understand the problems and you don't understand technology.
                </span> ~ Bruce Schneier
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What You Will Learn</SectionTitle>
              <ul className="ml-4">
                <li>Introduction to Capture The Flag</li>
                <li>Website : Header, SQL Injection, Cross Site Scripting, SSTI</li>
                <li>Reverse : Uncompyle, Basic Assembly, SMT Solver</li>
                <li>Forensics : Magic Number, Binwalk, Network Dump</li>
                <li>Pwn : Buffer Overflow, Format String Attack, Shellcode</li>
                <li>Crypto : Simple Crypto, Pseudorandom, RSA, Block Cipher</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Familiar with Linux OS</li>
                <li>Programming Language (Python)</li>
                <li>Curious to learn new things and explore creative solutions</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Timeline</SectionTitle>
              Capture The Flag Bootcamp will be held in 5 days:
              <ol className="ml-4">
                <li>Sunday, Oct 13th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Oct 20th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Oct 27th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Nov 3rd, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Nov 10th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Nov 17th, 2019 (8 am - 12 pm)</li>
              </ol>
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
