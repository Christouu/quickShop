import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import {
  Product,
  ProductContainer,
  ProductTitle,
  ProductAddButton,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
  ProductTopInfo,
  ProductTopInfoItem,
  ProductTopInfoKey,
  ProductTopInfoValue,
  ProductBottom,
  ProductForm,
  ProductFormLeft,
  ProductLabel,
  ProductInput,
  ProductSelect,
  ProductFormRight,
  ProductUpload,
  ProductImage,
  ProductButton,
  ProductName,
  ProductTopInfoImg,
  ProductTopInfoBottom,
  ProdcutOption,
  ProductTextarea,
} from "./AdminProductForm.styles";

import PublishIcon from "@mui/icons-material/Publish";

const AdminProductForm = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const product = useSelector((state: any) =>
    state.product.products.find((product: any) => product._id === productId)
  );

  console.log(product);

  return (
    <Product>
      <ProductContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to={"/newProduct"}>
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductContainer>
      <ProductTop>
        <ProductTopLeft>chart</ProductTopLeft>
        <ProductTopRight>
          <ProductTopInfo>
            <ProductTopInfoImg src={product.image} />
            <ProductName>{product.title}</ProductName>
          </ProductTopInfo>
          <ProductTopInfoBottom>
            <ProductTopInfoItem>
              <ProductTopInfoKey>id: </ProductTopInfoKey>
              <ProductTopInfoValue>{product._id}</ProductTopInfoValue>
            </ProductTopInfoItem>
            <ProductTopInfoItem>
              <ProductTopInfoKey>On Sale</ProductTopInfoKey>
              <ProductTopInfoValue>
                {product.onSale ? "true" : "false"}
              </ProductTopInfoValue>
            </ProductTopInfoItem>
            <ProductTopInfoItem>
              <ProductTopInfoKey>PRice</ProductTopInfoKey>
              <ProductTopInfoValue>{product.price}</ProductTopInfoValue>
            </ProductTopInfoItem>
            <ProductTopInfoItem>
              <ProductTopInfoKey>Quantity</ProductTopInfoKey>
              <ProductTopInfoValue>{product.quantity}</ProductTopInfoValue>
            </ProductTopInfoItem>
            <ProductTopInfoItem>
              <ProductTopInfoKey>Categories: </ProductTopInfoKey>
              <ProductTopInfoValue>
                {product.categories.join(", ")}
              </ProductTopInfoValue>
            </ProductTopInfoItem>
            <ProductTopInfoItem>
              <ProductTopInfoKey>Description</ProductTopInfoKey>
              <ProductTopInfoValue>{product.description}</ProductTopInfoValue>
            </ProductTopInfoItem>
          </ProductTopInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductLabel>Product Name</ProductLabel>
            <ProductInput type={"text"} defaultValue={product.title} />
            <ProductLabel>Product Description</ProductLabel>
            <ProductTextarea defaultValue={product.description} />
            <ProductLabel>Product Categories</ProductLabel>
            <ProductInput
              type={"text"}
              defaultValue={product.categories.join(", ")}
            />
            <ProductLabel>Price</ProductLabel>
            <ProductInput type={"text"} defaultValue={product.price} />
            <ProductLabel>On Sale</ProductLabel>
            <ProductSelect name="onSale" id="onSale">
              <ProdcutOption value={"true"}>Yes</ProdcutOption>
              <ProdcutOption value={"false"}>No</ProdcutOption>
            </ProductSelect>
            <ProductLabel>All Kinds</ProductLabel>
            <ProductSelect name="allKinds" id="allKinds">
              <ProdcutOption value={"true"}>Yes</ProdcutOption>
              <ProdcutOption value={"false"}>No</ProdcutOption>
            </ProductSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductImage src={product.image} />
              <ProductLabel htmlFor="file">
                <PublishIcon />
              </ProductLabel>
              <ProductInput
                type={"file"}
                id="file"
                style={{ display: "none" }}
              />
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Product>
  );
};

export default AdminProductForm;
