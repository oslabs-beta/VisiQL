import { dividerClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ProjectsGrid from './ProjectsGrid';

const ProjectsPage = (props) => {
  const [projects, updateProjects] = useState([]);
  const { id, setTreeData, dbSchemaDataOnChange } = props;

  useEffect(() => {
    const fetchData = async () => {
      console.log('id:', id);
      const data = await fetch(`/projects/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      const projectList = await data.json();
      updateProjects(projectList);
    };
    fetchData();
  }, []);
  console.log('projects:', projects);
  return (
    <div>
      <div id='projectTable'>
        <ProjectsGrid
          projects={projects}
          setTreeData={setTreeData}
          dbSchemaDataOnChange={dbSchemaDataOnChange}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
