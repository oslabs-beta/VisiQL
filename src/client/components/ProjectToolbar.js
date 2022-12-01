import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SaveProject from './SaveProject';
import ProjectSaved from './ProjectSaved';
import NotSignedIn from './NotSignedIn';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const ProjectToolbar = (props) => {
  const [projectName, setProjectName] = useInput('');
  const [saveProjExpand, setSaveProjExpand] = useState(false);
  const [projectSaved, setProjectSaved] = useState(false);
  const navigate = useNavigate();

  const saveProjectFunc = () => {
    if (projectName === '') return alert('Please enter a project name');
    if (
      props.schemaData === 'Enter a Postgres DB link to generate your schema...'
    )
      return alert('Please enter a database link to start your project');
    if (!props.currentUserId)
      return alert('You must be signed in to save a project');

    const date = new Date().toString(); //date variable
    const body = {
      user: props.currentUserId,
      projectName: projectName,
      schemaData: props.schemaData,
      treeData: props.treeData,
      date: date, //add date column to table
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
        setProjectName={setProjectName}
      />
      <ProjectSaved trigger={projectSaved} close={setProjectSaved} />
      <NotSignedIn
        trigger={props.notSignedInPop}
        close={props.setNotSignedInPop}
      />
    </div>
  );
};

export default ProjectToolbar;
