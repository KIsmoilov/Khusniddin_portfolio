import React from 'react';
import Title from '../layouts/Title';
import {
  carRental, hpChar, math, projectThree, space, foodApp, memorySummit,
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
      />
      <ProjectsCard
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hpChar}
      />
      <ProjectsCard
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={math}
      />
      <ProjectsCard
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={space}
      />
      <ProjectsCard
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={foodApp}
      />
      <ProjectsCard
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={memorySummit}
      />
    </div>
  </section>
);

export default Projects;
