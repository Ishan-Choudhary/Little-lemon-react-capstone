import { useState, useEffect } from "react";

const Results = ({ person }) => <h1>{person.name.first}</h1>;

const Testimonials = () => {
  const [usersData, setUsersData] = useState([]);

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
    ];

    Promise.all(promises).then((res) => setUsersData(res));
  }, []);

  return (
    <article>
      <h2>Testimonials</h2>
      {usersData.map((curr, i) => (
        <Results key={i} person={curr} />
        // JUST FORMAT ABOVE DATA NOW EFFECT HOOK RUN TWICE
      ))}
    </article>
  );
};

export default Testimonials;
