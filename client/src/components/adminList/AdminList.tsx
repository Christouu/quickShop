import { useEffect, useState } from "react";
import "./AdminList.css";
import { userRows } from "../../dataTable";
import { Container } from "./AdminList.styles";
import { privateRequest, publicRequest } from "../../requestMethods";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const userColumns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 240 },
  {
    field: "username",
    headerName: "Username",
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
    field: "isAdmin",
    headerName: "Is Admin",
    width: 90,
  },
  {
    field: "createdAt",
    headerName: "Created",
    width: 160,
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await privateRequest.get("user");
        console.log(response.data);

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <Container>
      <DataGrid
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </Container>
  );
};

export default AdminList;
