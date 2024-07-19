"use client";
import React, { useEffect } from "react";
import "./hero.css";
import Glightbox from "glightbox";
export default function Hero() {
  useEffect(() => {
    new Glightbox({
      selector: ".glihtbox",
    });
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="cotainer position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Lezzetli Restoranımıza Hoşgeldiniz!
            </h1>
            <h2>Kaliteli yemeğin 10 yıllık adresi</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
