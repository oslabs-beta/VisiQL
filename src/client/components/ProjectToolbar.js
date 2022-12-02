import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import UpgradeIcon from '@mui/icons-material/Upgrade'; 
import SaveProject from './SaveProject';
import ProjectSaved from './ProjectSaved';
import UpdateProject from './UpdateProject';
import ProjectUpdated from './ProjectUpdated';
import NotSignedIn from './NotSignedIn';

const ProjectToolbar = (props) => {
  const {
    currentUserId,
    schemaData,
    treeData,
    resolverData,
    projectId,
    projectName,
    setProjectName,
  } = props;

  const [saveProjExpand, setSaveProjExpand] = useState(false);
  const [projectSaved, setProjectSaved] = useState(false);
  const navigate = useNavigate();

  const [updateProjExpand, setUpdateProjExpand] = useState(false);
  const [projectUpdated, setProjectUpdated] = useState(false);

  const useInput = (e) => {
    //click event from saveproject
    setProjectName(e.target.value);
  };

  const saveProjectFunc = () => {
    if (projectName === '') return alert('Please enter a project name');
    if (
      props.schemaData === 'Enter a Postgres DB link to generate your schema...'
    )
      return alert('Please enter a database link to start your project');
    if (!props.currentUserId)
      return alert('You must be signed in to save a project');

    const date = new Date().toString();
    const body = {
      user: currentUserId,
      projectName: projectName,
      schemaData: schemaData,
      treeData: treeData,
      date: date,
      resolverData: resolverData,
    };
    console.log('post body', body);
    fetch('/projects/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('dbLink fetch /project/save: ERROR:', err));
    setProjectSaved(true);
    setSaveProjExpand(false);
    setProjectName(''); //clear projectname after save. not necessary?
  };

  const updateProjectFunc = async (newName) => {
    if (newName === '' || newName === ' ') {
      newName = projectName;
    }
    const date = new Date().toString();
    const body = {
      id: projectId,
      name: newName,
      schema: schemaData,
      date: date,
      resolver: resolverData,
    };
    const request = await fetch('/projects/update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const response = await request.json();
    console.log(response.success);
    if (response.success) setProjectUpdated(true);
    else alert("couldn't update project");
    setUpdateProjExpand(false);
  };

  const actions = [
    {
      icon: <SaveIcon fontSize='large' />,
      name: 'Save Project',
      function: function () {
        if (props.loggedIn) {
          return setSaveProjExpand(true);
        } else {
          props.setNotSignedInPop(true);
          return;
        }
      },
    },
    {
      icon: <FolderOpenIcon fontSize='large' />,
      name: 'View Projects',
      function: function () {
        console.log(props.loggedIn);
        if (props.loggedIn) {
          console.log('in true');
          navigate('/myprojects');
        } else {
          console.log('in false');
          props.setNotSignedInPop(true);
          return;
        }
      },
    },
    {
      icon: <UpgradeIcon fontSize='large' />,
      name: 'Upate Project',
      function: function () {
        if (!projectId) return alert('Plese load a saved project.');
        return setUpdateProjExpand(true);
      },
    },
  ]; 
  const actionSize = {
    width: 90,
    height: 90,
    tooltip: {
      fontSize: 90,
    },
  };
  const classes = {
    tooltip: {
      fontSize: 90,
    },
  };

  return (
    <div>
      <SpeedDial
        ariaLabel='SpeedDial openIcon example'
        sx={{
          '& .MuiFab-primary': {
            width: 100,
            height: 100,
            backgroundColor: '#ed6a5a',
            '&:hover': { backgroundColor: '#f1887b' },
          },
          position: 'absolute',
          bottom: 96,
          right: 66,
        }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={actionSize}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            TooltipClasses={classes}
            onClick={() => {
              return action.function();
            }}
          />
        ))}
      </SpeedDial>
      <SaveProject
        trigger={saveProjExpand}
        close={setSaveProjExpand}
        saveProjectFunc={saveProjectFunc}
        projectName={projectName}
        useInput={useInput}
      />
      <ProjectSaved trigger={projectSaved} close={setProjectSaved} />
      <UpdateProject
        trigger={updateProjExpand}
        close={setUpdateProjExpand}
        updateProjectFunc={updateProjectFunc}
        projectName={projectName}
      />
      <ProjectUpdated trigger={projectUpdated} close={setProjectUpdated} />
      <NotSignedIn
        trigger={props.notSignedInPop}
        close={props.setNotSignedInPop}
      />
    </div>
  );
};

export default ProjectToolbar;
