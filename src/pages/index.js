import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/avatar.png';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="two">
        <a href="#two" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    {/*<section id="one" className="wrapper style1 special">*/}
    {/*  <div className="inner">*/}
    {/*    <header className="major">*/}
    {/*      <h2>*/}
    {/*        Arcu aliquet vel lobortis ata nisl*/}
    {/*        <br />*/}
    {/*        eget augue amet aliquet nisl cep donec*/}
    {/*      </h2>*/}
    {/*      <p>*/}
    {/*        Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet*/}
    {/*        eleifend*/}
    {/*        <br />*/}
    {/*        fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus*/}
    {/*        ullamcorper.*/}
    {/*      </p>*/}
    {/*    </header>*/}
    {/*    <ul className="icons major">*/}
    {/*      <li>*/}
    {/*        <span className="icon fa-gem major style1">*/}
    {/*          <span className="label">Lorem</span>*/}
    {/*        </span>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <span className="icon fa-heart major style2">*/}
    {/*          <span className="label">Ipsum</span>*/}
    {/*        </span>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <span className="icon solid fa-code major style3">*/}
    {/*          <span className="label">Dolor</span>*/}
    {/*        </span>*/}
    {/*      </li>*/}
    {/*    </ul>*/}
    {/*  </div>*/}
    {/*</section>*/}

    <section id="two" className="wrapper alt style2">
      {/*<section className="spotlight">*/}
      {/*  <div className="image">*/}
      {/*    <img src={pic1} alt="" />*/}
      {/*  </div>*/}
      {/*  <div className="content">*/}
      {/*    <h2>*/}
      {/*      Magna primis lobortis*/}
      {/*      <br />*/}
      {/*      sed ullamcorper*/}
      {/*    </h2>*/}
      {/*    <p>*/}
      {/*      Aliquam ut ex ut augue consectetur interdum. Donec hendrerit*/}
      {/*      imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="spotlight">
        <div className="content">
          <h2>
            Hey, I'm Abhijeet.
            <br />
          </h2>
          <p>{config.about}</p>

          <p>
            <div>HIGHLIGHTS</div><br />
            <ul>
              {
                config.highlights.map(item => <li>{item}</li>)
              }
            </ul>
          </p>
        </div>
        <div className="image">
          <img src={pic2} alt="" />
        </div>
      </section>

      <section className="experience-section">
        {/*<div className="bg" data-anchor-target="#experience-section"*/}
        {/*     data-bottom-top="transform: translate3d(0px, -150px, 0px);"*/}
        {/*     data-top-bottom="transform: translate3d(0px, 150px, 0px);"*/}
        {/*></div>*/}
        <div className="overlay-wrapper">
        <div className="content">
              <h1 className="section-heading">Education</h1>
              <span className="divider center"></span>
            <div className="experience-wrapper">
              <div id="timeline">
                {
                  config.education.map(item => {
                    return (
                        <div className="timeline-block">
                          <div className="timeline-content">
                            <h2 className="position">{item.degree}</h2>
                            <h3 className="company"><a href="{{item.url}}" target="_blank">{item.university}</a></h3>
                          </div>
                          <div className="timeline-img">
                            <div className="sprite university"></div>
                          </div>
                          <span className="date">{item.year}</span>
                        </div>
                    )
                  })
                }
              </div>
              <i className="down-arrow"></i>
            </div>
        </div>

        <div className="content">
          <h1 className="section-heading">Experience</h1>
          <span className="divider center"></span>
          <div className="experience-wrapper">
            <div id="timeline">
              {
                config.experience.map(item => {
                  return (
                      <div className="timeline-block">
                        <div className="timeline-content">
                          <h2 className="position">{item.role}</h2>
                          <h3 className="company"><a href="{{item.url}}" target="_blank">{item.client}</a></h3>
                          <p className="job-desc">{item.description}</p>
                        </div>
                        <div className="timeline-img">
                          <div className="sprite industry"></div>
                        </div>
                        <span className="date">{item.year}</span>
                      </div>
                  )
                })
              }
            </div>
            <i className="down-arrow"></i>
          </div>
        </div>
        </div>

      </section>



      {/*<section className="spotlight">*/}
      {/*  <div className="image">*/}
      {/*    <img src={pic3} alt="" />*/}
      {/*  </div>*/}
      {/*  <div className="content">*/}
      {/*    <h2>*/}
      {/*      Augue eleifend aliquet*/}
      {/*      <br />*/}
      {/*      sed condimentum*/}
      {/*    </h2>*/}
      {/*    <p>*/}
      {/*      Aliquam ut ex ut augue consectetur interdum. Donec hendrerit*/}
      {/*      imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </section>

    <section id="skill" className="skill-spotlight wrapper alt style2">

      <div className="skill-wrapper">
      <h1 style={{textAlign: "center"}}>
        Skills
        <br />
      </h1>

      <div className="skill-content">
          <div style={{padding: "2em"}}>
            <div>Language/ Environment</div><br/>
            <ul>
              {config.skills.language.map(item => <li id={item.id}>{item.value}</li>)}
            </ul>
          </div>
          <div style={{padding: "2em"}}>
            <div>Web Technologies</div><br/>
            <ul>
              {config.skills.technology.map(item => <li id={item.id}>{item.value}</li>)}
            </ul>
          </div>
          <div style={{padding: "2em"}}>
            <div>Framework</div><br/>
            <ul>
              {config.skills.framework.map(item => <li id={item.id}>{item.value}</li>)}
            </ul>
          </div>
          <div style={{padding: "2em"}}>
            <div>IDE/ Tools</div><br/>
            <ul>
              {config.skills.tools.map(item => <li id={item.id}>{item.value}</li>)}
            </ul>
          </div>
      </div>
      </div>
    </section>


    <section className="certification-section">
      {/*<div className="bg" data-anchor-target="#experience-section"*/}
      {/*     data-bottom-top="transform: translate3d(0px, -150px, 0px);"*/}
      {/*     data-top-bottom="transform: translate3d(0px, 150px, 0px);"*/}
      {/*></div>*/}
      <div className="overlay-wrapper">
        <div className="certification-content">
          <h1 className="section-heading">Certifications</h1>
          <span className="divider center"></span>
          <div className="certification-wrapper">
            <ul>
              {config.certification.map(item => <li id={item.id} className="certificate-logo">{item.name}</li>)}
            </ul>

          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
