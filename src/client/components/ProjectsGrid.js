import React from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const ProjectsGrid = props => {

    const { projects, setTreeData, dbSchemaDataOnChange, setResolverData } = props;
    const navigate = useNavigate();
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
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        // console.log('schema', params.row.schema)
        // console.log('tree', JSON.parse(params.row.tree))
        setTreeData(JSON.parse(params.row.tree));
        dbSchemaDataOnChange(params.row.schema);
        setResolverData(params.row.resolver);
        navigate('/'); 
        
      };

      return <Button onClick={onClick}>Open Project</Button>;
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
    <div style={{ height: 1000, width: '90%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={20} />
    </div>
  );
  };
  export default ProjectsGrid;