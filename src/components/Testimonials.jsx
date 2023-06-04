import "../assests/styles/TestimonialStyle.css";

import { useState, useEffect } from "react";

const Results = ({ person, message }) => {
  const testimonialCardBg = {
    width: "200px",
    padding: "20px",
    backgroundColor: "#fff",
  };

  const testimonialCardIntro = {
    display: "flex",
    margin: "20px 0px",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  return (
    <div style={testimonialCardBg}>
      <h4>Rating: ⭐️⭐️⭐️⭐️⭐️</h4>
      <div style={testimonialCardIntro}>
        <img
          src={person.picture.thumbnail}
          alt={`${person.name.first} photos`}
          style={{ border: "solid #000 1px" }}
        />
        <h4 style={{ marginLeft: "10px" }}>{person.name.first}</h4>
      </div>
      <p>{message}</p>
    </div>
  );
};

const Testimonials = () => {
  const [usersData, setUsersData] = useState([]);

  const testimonials = [
    "Amazing food by the restaurant",
    "Absolutely scrumptious dishes",
    "The chefs did a fabulous job with the food",
    "Will definitely eat here again",
  ];

  useEffect(() => {
    const promises = [
      fetch("https://randomuser.me/api/?inc=name,picture")
        .then((resp) => resp.json())
        .then((data) => data.results[0]),
      fetch("https://randomuser.me/api/?inc=name,picture")
        .then((resp) => resp.json())
        .then((data) => data.results[0]),
      fetch("https://randomuser.me/api/?inc=name,picture")
        .then((resp) => resp.json())
        .then((data) => data.results[0]),
      fetch("https://randomuser.me/api/?inc=name,picture")
        .then((resp) => resp.json())
        .then((data) => data.results[0]),
    ];

    Promise.all(promises)
      .then((res) => {
        setUsersData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className={"testimonial-bg"}>
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {usersData.map((curr, i) => (
          <Results key={i} person={curr} message={testimonials[i]} />
        ))}
      </div>
    </article>
  );
};

export default Testimonials;
