import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Sign Up page"
          des="Complete responsive registration page with beautiful design.Created using HTML,CSS. Here I learned how to use linear gradient"
          src={projectOne}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Islam Jahid & Co."
          des="This was a company website. Here I learned how to design figma to html.This was my first figma to html."
          src={projectTwo}
          githubLink=""
          websiteLink=""

        />

        <ProjectsCard
          title="NumBee"
          des="This is my first Bootstrap project.Created using HTML, CSS and BOOTSTRAP.Here I learned how row works"
          src={projectThree}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Noyon"
          des="This is my first portfolio with bootstrap.Created using HTML,CSS and BOOTSTRAP.Here I learned Bootstrap card"
          src={projectFour}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="ToDo"
          des="This is my first project with react js.In this app you can add, delete, edit and clear all items. Here i learned hooks, passing props"
          src={projectFive}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="E-commerce"
          des="This is E-commerce app. Created HTML,CSS and REACT js. Here I learned lot of things like context API, How fetch data with api, Tailwind css and React router dom "
          src={projectSix}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects