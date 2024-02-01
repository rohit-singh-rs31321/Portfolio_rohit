import React, { useState } from 'react';
import "./qualification.css";


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel jouney</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Internship
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master of Computer Application</h3>
                <span className="qualification__subtitle">DAYANANDA SAGAR COLLEGE OF ENGINEERING</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor of Computer Application</h3>
                <span className="qualification__subtitle">ACHARYA INSTITUTE OF GRADUATE STUDIES</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">12th</h3>
                <span className="qualification__subtitle">Dr. B.P.YADAV SS SCHOOL, BABHNAIYA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>

               {/*<span className="qualification__line"></span>*/}
              </div>

              <div>
                <h3 className="qualification__title">10th</h3>
                <span className="qualification__subtitle">CHILDREN ACADEMY, SALARPUR VARANASI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2014 - 2015
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
          <div>
            <h3 className="qualification__title">Java FullStack Developer Trainee</h3>
            <span className="qualification__subtitle">PALLE TECHNOLOGIES</span>
            <div className="qualification__calender">
              <i className="uil uil-calender-alt"></i> 06/2023 - 12/2023
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>

            <span className="qualification__line"></span>
          </div>
        </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>

               { /* <span className=""></span>*/}
              </div>

              <div>
                <h3 className="qualification__title">Devops Intern</h3>
                <span className="qualification__subtitle">ENHANCE KNOWLEDGEWORKS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 04/2023 - 06/2023
                </div>
              </div>
            </div>

            


          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;
