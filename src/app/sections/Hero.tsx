"use client";
import React, { useEffect } from "react";
import "./hero.css";
import HeroBtn from "../components/HeroBtn";
import GLightbox from "glightbox";
export default function Hero() {
  useEffect(() => {
    new GLightbox({
      selector: ".glightbox",
    });
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Lezzetli Restoranımıza <span>Hoşgeldiniz!</span>
            </h1>
            <h2>Kaliteli yemeğin 10 yıllık adresi</h2>
            <div className="btns">
            <HeroBtn name="Menümüz" target="menu" />
            <HeroBtn name="İletişime geç" target="book-a-table" />
          </div>
          </div>
          
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://vimeo.com/115041822"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
