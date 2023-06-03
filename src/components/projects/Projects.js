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
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={carRental}
        githubLink="https://github.com/wassimchakib/Car-Rental-Front-End"
        demoLink="https://car-rental-front-end.vercel.app/"
      />
      <ProjectsCard
        title="Space Traveler`s Hub"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={space}
        githubLink="https://github.com/KIsmoilov/Space-Traveler-s-Hub"
        demoLink="https://space-travelers-hub-astn.onrender.com/"
      />
      <ProjectsCard
        title="Harry Potter Characters"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hpChar}
        githubLink="https://github.com/KIsmoilov/React-Capstone_Harry-Potter-Characters"
        demoLink="https://hp-characters-qmdj.onrender.com/"
      />
      <ProjectsCard
        title="Leaderboard App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={leaderboard}
        githubLink="https://github.com/KIsmoilov/Leaderboard"
        demoLink="https://kismoilov.github.io/Leaderboard/"
      />
      <ProjectsCard
        title="Food App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={foodApp}
        githubLink="https://github.com/KIsmoilov/JS-Capstone-Project"
        demoLink="https://kismoilov.github.io/JS-Capstone-Project/"
      />
      <ProjectsCard
        title="Math Magicians"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={math}
        githubLink="https://github.com/KIsmoilov/math-magicians"
        demoLink="https://calculator-by-math-magicians.onrender.com/"
      />
    </div>
  </section>
);

export default Projects;
