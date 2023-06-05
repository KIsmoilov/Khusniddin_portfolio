import React from 'react';
import Title from '../layouts/Title';
import {
  carRental, hpChar, math, space, foodApp, leaderboard,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => (
  <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
        title="Rental Car App"
        des="This app allows users to reserve a car, add new cars and delete existing ones."
        src={carRental}
        githubLink="https://github.com/wassimchakib/Car-Rental-Front-End"
        demoLink="https://car-rental-front-end.vercel.app/"
      />
      <ProjectsCard
        title="Space Traveler`s Hub"
        des=" This is a React Web App with the real live data from the SpaceX API.
        The application allows users to book rockets and join selected space missions."
        src={space}
        githubLink="https://github.com/KIsmoilov/Space-Traveler-s-Hub"
        demoLink="https://space-travelers-hub-astn.onrender.com/"
      />
      <ProjectsCard
        title="Harry Potter"
        des="This is a single-page application (SPA) with data from the HP Characters API.
        It allows users to search and read details about different HP characters."
        src={hpChar}
        githubLink="https://github.com/KIsmoilov/React-Capstone_Harry-Potter-Characters"
        demoLink="https://hp-characters-qmdj.onrender.com/"
      />
      <ProjectsCard
        title="Leaderboard App"
        des="This is a leaderboard website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved by the external Leaderboard API service."
        src={leaderboard}
        githubLink="https://github.com/KIsmoilov/Leaderboard"
        demoLink="https://kismoilov.github.io/Leaderboard/"
      />
      <ProjectsCard
        title="Food App"
        des="The app allows the user to see various kinds of meal categories with the functionalities of like and comment features.
        The MEALDB API has been used to provide meal category data for our Food App and built the web app around it."
        src={foodApp}
        githubLink="https://github.com/KIsmoilov/JS-Capstone-Project"
        demoLink="https://kismoilov.github.io/JS-Capstone-Project/"
      />
      <ProjectsCard
        title="Math Magicians"
        des="'Math magicians' is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote."
        src={math}
        githubLink="https://github.com/KIsmoilov/math-magicians"
        demoLink="https://calculator-by-math-magicians.onrender.com/"
      />
    </div>
  </section>
);

export default Projects;
