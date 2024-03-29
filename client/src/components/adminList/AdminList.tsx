import "./AdminList.css";
import { Container } from "./AdminList.styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const AdminList = ({ data, type }: any) => {
  const dispatch = useDispatch();

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
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
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
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <Link
                to={`/admin/products/${params.row._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View
              </Link>
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const handleDelete = (id: any) => {
    deleteProduct(dispatch, id);
  };

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={type === "users" ? userColumns : productColumns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </Container>
  );
};

export default AdminList;
