import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import DeleteProject from './DeleteProject';
import ProjectDeleted from './ProjectDeleted';
const ProjectsGrid = props => {

    const { projects, setTreeData, dbSchemaDataOnChange, setResolverData, projectId, setProjectId, setProjectName, deletePopup, setDeletePopup, setGetData } = props;
    const [projectDeleted, setProjectDeleted ] = useState(false);
    const navigate = useNavigate();
    

    const deleteProjectFunc = async () => {
      console.log('projectid in deletefunc', projectId);
      const request = await fetch(`/projects/delete/${projectId}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      const response = await request.json();
      if (response.success) setProjectDeleted(true)
      else alert('unable to delete project');
      props.setDeletePopup(false);
  }  

const columns = [
  { field: 'name', headerName: 'Project Name', width: 300 },
  { field: 'date', headerName: 'Last Updated', width: 500 },
  {
    field: 'open',
    headerName: '',
    sortable: false,
    width: 200,
    renderCell: (params) => {
      const openProject = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        setTreeData(JSON.parse(params.row.tree));
        dbSchemaDataOnChange(params.row.schema);
        setResolverData(params.row.resolver);
        setProjectId(params.row.id);
        setProjectName(params.row.name);
        navigate('/'); 
        
      };

      return <Button onClick={openProject}>Open Project</Button>;
    },
  },
  {
    field: 'delete',
    headerName: '',
    sortable: false,
    width: 250,
    renderCell: (params) => {
      const deletePop = async (e) => {
        console.log('params',params);
        e.stopPropagation(); // don't select this row after clicking
        setProjectId(params.id);
        setDeletePopup(true);
      };

      return <Button onClick={deletePop}>Delete Project</Button>;
    },
  },
];

const rows = [];

function makeData(project) {
    const schema = project.schema_data;
    const tree = project.tree_data;
    const id = project.id;
    const name = project.project_name;
    const date = project.last_updated;
    const resolver = project.resolver_data;
    return { id, name, date, schema, tree, resolver }
  }
projects.forEach(proj => {
    rows.push(makeData(proj))
   });

  return (
   
    <div>
      <h1 id='projectTitle'>My Projects</h1>
      <div>
      <DataGrid sx={{ m: 2, border: 2, width:'100em', borderColor: '#ed6a5a', height: 1000, }} rows={rows} columns={columns} pageSize={20} />
      </div>
       <div id='deletePopup'>
         <DeleteProject trigger={deletePopup} close={setDeletePopup} projectId={projectId} deleteProjectFunc={deleteProjectFunc} />
         <ProjectDeleted trigger={projectDeleted} close={setProjectDeleted} setGetData={setGetData}/>
        </div>
    </div>
    
  );
  
  };
  export default ProjectsGrid;