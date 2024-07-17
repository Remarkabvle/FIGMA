import google from "../../../assets/category/google-logo.svg";
import slack from "../../../assets/category/slack-logo.svg";
import microsoft from "../../../assets/category/microsoft-logo.svg";
import facebook from "../../../assets/category/facebook-logo.svg";
import amazon from "../../../assets/category/ammazon-logo.svg";
import left from "../../../assets/category/Left.svg";
import right from "../../../assets/category/Right.svg";

import "./Category.scss";
import { categoryData } from "../../../static";

const Category = () => {
    return (
        <section className="job-category">
            <div className="container">
                <div className="job-category__wrapper">
                    <div className="job-category__header">
                        <h2 className="job-category__header-title">
                            Popular tech companies who are seeking talents
                            in our website
                        </h2>
                        <ul className="job-category__header-list">
                            <li className="job-category__header-item">
                                <a
                                    href="#"
                                    className="job-category__header-link"
                                >
                                    <img
                                        src={google}
                                        alt="google site logo"
                                    />
                                </a>
                            </li>
                            <li className="job-category__header-item">
                                <a
                                    href="#"
                                    className="job-category__header-link"
                                >
                                    <img src={slack} alt="Slack site img" />
                                </a>
                            </li>
                            <li className="job-category__header-item">
                                <a
                                    href="#"
                                    className="job-category__header-link"
                                >
                                    <img
                                        src={microsoft}
                                        alt="Microsoft site log"
                                    />
                                </a>
                            </li>
                            <li className="job-category__header-item">
                                <a
                                    href="#"
                                    className="job-category__header-link"
                                >
                                    <img
                                        src={facebook}
                                        alt="facebook site logo"
                                    />
                                </a>
                            </li>
                            <li className="job-category__header-item">
                                <a
                                    href="#"
                                    className="job-category__header-link"
                                >
                                    <img
                                        src={amazon}
                                        alt="amazon site logo"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="job-category__bottom">
                        <div className="job-category__content-section">
                            <h2 className="job-category__main-title">
                                Explore by category{" "}
                            </h2>
                            <div className="job-category__navigation">
                                <button>
                                    <img
                                        src={left}
                                        alt="left navigate svg"
                                    />
                                </button>
                                <button>
                                    <img
                                        src={right}
                                        alt="right navigate svg"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="job-category__cards">
                            {categoryData?.map((category) => (
                                <div
                                    key={category.id}
                                    className="job-category__card"
                                >
                                    <img
                                        src={category.img}
                                        alt={category.title}
                                    />
                                    <h3 className="job-category__card-title">
                                        {category.title}
                                    </h3>
                                    <p className="job-category__card-text">
                                        {category.job}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
