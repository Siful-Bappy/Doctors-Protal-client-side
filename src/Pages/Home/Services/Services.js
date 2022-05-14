import React from "react";
import Service from "./Service/Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            discription: " ",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            discription: " ",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            discription: " ",
            img: whitening,
        },
    ]
  return (
    <div className="my-28 container mx-auto">
      <div className="text-center ">
        <h3 className="text-primary text-2xl font-bold">Our services</h3>
        <h2 className="text-4xl">Services we Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* {
            services.map(service => <Service
                key={service._id}
                service={service}
            ></Service>)
        } */}
      </div>
    </div>
  );
};

export default Services;
