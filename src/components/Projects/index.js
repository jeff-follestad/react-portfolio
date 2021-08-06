import React from 'react';
<<<<<<< HEAD

function Projects() {
  return (
    <section>
      <h1>NAME</h1>
      <p>DESCRIPTION</p>
=======
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Projects(props) {
  const currentCategory = {
    name: "commercial",
    description: 
    "Photos of grocery stores and whatnot...",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.Category.name}</p>
      <div>
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"
        />
      </div>
>>>>>>> c976524aa1f047d1b83e1e1d6e2d8b529f6bcb6e
    </section>
  );
}
export default Projects;