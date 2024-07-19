import React from "react";
import "./about.css";
import aboutImage from "../../../public/assets/images/about.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aous="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, quo?
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              suscipit!
            </p>
            <ul>
              <li>
                <i className="bi bi-egg-fried"></i>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, laborum?
              </li>
              <li>
                <i className="bi bi-egg-fried"></i>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, laborum?
              </li>
              <li>
                <i className="bi bi-egg-fried"></i>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, laborum?
              </li>
              <li>
                <i className="bi bi-egg-fried"></i>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, laudantium quia! Quaerat rerum neque officia numquam! Est, dolorem? Error minima dolor, impedit totam molestiae officia ipsum ex assumenda nobis nam?
              </li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia ipsa non mollitia optio, incidunt reiciendis quam possimus minima animi, quo id. Aliquid, dignissimos temporibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
