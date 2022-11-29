import { dividerClasses } from '@mui/material';
import React, { useEffect, useState} from 'react';
import Navbar from './Navbar';
import ProjectsGrid from './ProjectsGrid';

const ProjectsPage = (props) => {
    const [projects, updateProjects] = useState([])
    const {currentUserId, setTreeData, dbSchemaDataOnChange, setResolverData, setProjectId, setProjectName} = props;
  
    useEffect(() =>{
    const fetchData = async () => {
        console.log('id:', currentUserId)
    const data = await fetch(`/projects/${currentUserId}`, {
        headers: {'Content-Type': 'application/json'},
    });
    const projectList = await data.json();
    updateProjects(projectList);
  
};
fetchData();
}, []);
console.log('projects:', projects);
    return (
        
        <div id='projectTable'>
        
            <ProjectsGrid projects={projects} setTreeData={setTreeData} dbSchemaDataOnChange={dbSchemaDataOnChange} 
            setResolverData={setResolverData} setProjectId={setProjectId} setProjectName={setProjectName}/>
        </div>
       
      
    )
};

export default ProjectsPage;