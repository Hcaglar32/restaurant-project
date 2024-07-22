"use client"
import BreadCrumb from "@/app/components/BreadCrumb";
import Image from "next/image";
import React from "react";

async function getFoodData(id: string) {
  const res = await fetch(`http://localhost:3000/api/menu/${id}`);
  console.log(`Fetching data for id: ${id}`);
  return res.json();
}

export default async function MenuSingle({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  console.log(`MenuSingle component with id: ${id}`); // Gelen id'yi kontrol etmek için

  const food = await getFoodData(id);
  console.log(food); // Gelen veriyi kontrol etmek için
  return (
    <div id="main">
      <BreadCrumb page="Menu" />
      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={food.preview}
                alt=""
                height={500}
                width={500}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mt-3">{food.name}</h2>
              <h4 className="mt-2">
                <i>{food.ingredients}</i>
              </h4>
              <p className="mt-5">{food.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
