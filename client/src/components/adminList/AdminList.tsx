import "./AdminList.css";
import { userRows } from "../../dataTable";
import { Container } from "./AdminList.styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 180,
    renderCell: (params: GridValueGetterParams) => (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar" />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

const actionColumn: GridColDef[] = [
  {
    field: "action",
    headerName: "Action",
    width: 180,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];
const AdminList = () => {
  return (
    <Container>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
      />
    </Container>
  );
};

export default AdminList;
