import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import jobImg from "../../../assets/img/job.svg";
import "./job.scss";

const Job = () => {
    return (
        <section className="subscription">
            <div className="container subscription__container">
                <div className="subscription__image">
                    <img src={jobImg} alt="Job Illustration" />
                </div>
                <div className="subscription__details">
                    <h4 className="subscription__heading">
                        Join over 15,000+ tech people
                    </h4>
                    <h3 className="subscription__main-heading">
                        Get instant alert on your inbox
                    </h3>
                    <p className="subscription__description">
                        We receive over 50 new job submissions on our website.
                        Subscribe to our newsletter and get instant job alerts
                        on your inbox to apply.
                    </p>
                    <form action="" className="subscription__form">
                        <div className="subscription__input-container">
                            <MdOutlineMailOutline />
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button className="subscription__button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Job;
