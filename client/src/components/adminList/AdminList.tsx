import "./AdminList.css";
import { Container } from "./AdminList.styles";
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

const productColumns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 240 },
  {
    field: "title",
    headerName: "Title",
    width: 250,
    renderCell: (params: GridValueGetterParams) => (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.image} alt="avatar" />
        {params.row.title}
      </div>
    ),
  },
  { field: "price", headerName: "Price", width: 90 },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 90,
  },
  {
    field: "onSale",
    headerName: "On Sale",
    width: 90,
  },
  {
    field: "allKinds",
    headerName: "All Kinds",
    width: 90,
  },
  {
    field: "categories",
    headerName: "Categories",
    width: 350,
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
const AdminList = ({ data, type }: any) => {
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={
          type === "users"
            ? userColumns.concat(actionColumn)
            : productColumns.concat(actionColumn)
        }
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </Container>
  );
};

export default AdminList;
