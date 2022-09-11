import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import bookingApp from "../../assets/bookingapp.png";
import IMG4 from "../../assets/Newyork.jpg";
import blogApp from "../../assets/blogapp.png";

const datas = [
  {
    id: 1,
    image: blogApp,
    title: "Blog App",
    language: "ReactJS, Redux, Node.js, mongoose",
    feature:
      "Register/Login authentication with JWT Cookies, Search by key word, Pagination, CRUD User/Post, Contact Form, Responsive",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: bookingApp,
    title: "Booking App",
    language: "ReactJS, Redux, Node.js, mongoose",
    feature:
      "Register/Login authentication with JWT Cookies, CRUD",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: IMG1,
    title: "Gym Website",
    language: "Html/Css",
    feature:
      "Register/Login authentication with JWT Cookies, Search by key word, Pagination, CRUD",
    github: "",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "W3School Website",
    language: "Html/Css, JavaScript",
    feature:
      "Register/Login authentication with JWT Cookies, Search by key word, Pagination, CRUD",
    github: "",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio_container">
        {datas.map((data, index) => (
          <article key={index} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={data.image} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio_item-desc">
              <div>
                <h4>Technologies: </h4>
                <div className="portfolio_item-detail">{data.language}</div>
              </div>
              <div>
                <h4>Feature description: </h4>
                <div className="portfolio_item-detail">{data.feature}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
