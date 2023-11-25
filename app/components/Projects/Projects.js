'use client';

import ProjectList from "../ProjectList/ProjectList";
import Filters from "../Filters/Filters";
import { useState } from "react";
import data from '../../data.json';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const projects = data.sort((a, b) => b.id - a.id);
  const filteredProjects = selectedCategory === 'Все'
    ? projects
    : projects.filter(project => project.category === selectedCategory);
  return (
    <section id="projects" className="projects">
      <div className='container'>
        {/* <h2 className="title">Проекты</h2> */}
        <Filters selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}></Filters>
        <ProjectList projects={filteredProjects}></ProjectList>
      </div>
    </section>
  )
}

export default Projects
