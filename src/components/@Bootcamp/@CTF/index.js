import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoCTF from 'assets/logo/ctf.png';
import Munir from 'assets/photos/munir.png';

import SectionTitle from '../SectionTitle';
import './index.scss';

export default class BootcampCTF extends Component {
  render() {
    return (
      <div className="bootcamp-ds">
        <Helmet>
          <title> Bootcamp HMIF - CTF </title>
        </Helmet>

        <Header
          logo={LogoCTF}
          title="Capture The Flag"
          quote="Our goals are simple: safety and security. IoT without security = Internet of Threats." />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Munir} size="large" name="M Abdullah Munir" title="Head of Capture The Flag Community" />
          </div>

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
                <li>Saturday, March 23rd, 2019 (1 pm - 6 pm) </li>
                <li>Sunday, March 24th, 2019 (1 pm - 6 pm) </li>
                <li>Saturday, March 30th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, March 31st, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, April 14th, 2019 (1 pm - 6 pm) </li>
              </ol>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <Link to={ROUTE_BOOTCAMP}>
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
