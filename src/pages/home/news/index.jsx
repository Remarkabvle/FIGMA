import React from "react";
import { NEWS_DATA } from "../../../static";
import "./news.scss";

const News = () => {
    let cards = NEWS_DATA.map((item) => (
        <div key={item.id} className="updates__item">
            <div className="updates__item__image">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="updates__item__details">
                <h3>{item.title}</h3>
                <div className="updates__item__details__time">
                    <p>{item.day}</p>
                    <p>{item.min}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <section id="news">
            <div className="container updates">
                <h2 className="section__title">Latest news about job trends</h2>
                <div className="updates__list">{cards}</div>
                <button className="updates__button">See all blog posts</button>
            </div>
        </section>
    );
};

export default News;
