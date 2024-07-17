import React from "react";
import News from "./news";
import Job from "./job/Job";
import Service from "./service/Service";
import Category from "./category/Category";

const Home = () => {
    return (
        <div>
            <Category />
            <Service />
            <Job />
            <News />
        </div>
    );
};

export default Home;
