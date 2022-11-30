import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import DeleteProject from './DeleteProject';
const ProjectsGrid = props => {

    const { projects, setTreeData, dbSchemaDataOnChange, setResolverData, projectId, setProjectId, setProjectName, deletePopup, setDeletePopup } = props;
    const navigate = useNavigate();
    // const [deletePopup, setDeletePopup] = useState(false);

const columns = [
  { field: 'name', headerName: 'Project Name', minWidth: 250 },
  { field: 'date', headerName: 'Last Updated', minWidth: 500 },
  {
    field: 'open',
    headerName: '',
    sortable: false,
    width: 250,
    renderCell: (params) => {
        console.log(params);
      const openProject = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        // console.log('schema', params.row.schema)
        // console.log('tree', JSON.parse(params.row.tree))
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
        console.log(params);
      const deletePop = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        const id = params.row.id;
        setDeletePopup(true);
        // return (
        //   <DeleteProject trigger={deletePopup} setDeletePopup={setDeletePopup} id={id} />
        // )
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
      <DeleteProject trigger={deletePopup} setDeletePopup={setDeletePopup} id={projectId}/>
      <DataGrid sx={{ height: 1000, width: '90%' }} rows={rows} columns={columns} pageSize={20} />
    </div>
    
  );
  };
  export default ProjectsGrid;