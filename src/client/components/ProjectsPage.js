import { dividerClasses } from '@mui/material';
import React, { useEffect, useState} from 'react';
import DeleteProject from './DeleteProject';
import Navbar from './Navbar';
import ProjectsGrid from './ProjectsGrid';

const ProjectsPage = (props) => {
    const [projects, updateProjects] = useState([]);
    const [deletePopup, setDeletePopup] = useState(false);
    const {currentUserId, setTreeData, dbSchemaDataOnChange, setResolverData, projectId, setProjectId, setProjectName} = props;
  
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

console.log('projects:', projects); //need to pass navbar props?

    return (
       
           
        <div id='project-page'> 
            <Navbar /> 
          <div>
          {/* <DeleteProject trigger={deletePopup} setDeletePopup={setDeletePopup} deleteProjectFunc={deleteProjectFunc} id={projectId}/> */}
          </div>
          <div id='projectTable'>
          
            <ProjectsGrid projects={projects} setTreeData={setTreeData} dbSchemaDataOnChange={dbSchemaDataOnChange} 
            setResolverData={setResolverData} projectId={projectId} setProjectId={setProjectId} setProjectName={setProjectName}
            deletePopup={deletePopup} setDeletePopup={setDeletePopup}/>
          </div>
        </div>  
       
    )
};

export default ProjectsPage;