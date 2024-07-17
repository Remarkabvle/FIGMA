import React from "react";
import "./service.scss";
import { CiLocationOn } from "react-icons/ci";
import { SERVICE } from "../../../static";

function Service() {
    const serviceData = SERVICE?.map((el) => (
        <div key={el?.id} className="services__item">
            <div className="services__item__header">
                <div className="services__item__location">
                    <CiLocationOn />
                    <p>{el?.state}</p>
                </div>
                <button style={{ backgroundColor: el?.btnCl }}>{el.btn}</button>
            </div>
            <div className="services__item__details">
                <h3>{el?.title}</h3>
            </div>
            <div className="services__item__footer">
                <img src={el?.logo} alt="" />
                <div className="services__item__footer__info">
                    <h3>{el?.name}</h3>
                    <p>{el?.hours}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <section className="services">
            <div className="services__header container">
                <h2>Find a job that you love</h2>
                <button>See All 2359 Jobs</button>
            </div>
            <div className="services__list container">{serviceData}</div>
        </section>
    );
}

export default Service;
