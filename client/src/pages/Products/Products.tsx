import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

import ChipInput from "material-ui-chip-input";
import { TextField, Button } from "@material-ui/core";

import Line from "../../components/line/Line";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { Container2, H1, WrapperInput, Wrapper } from "./Products.styles";
import { InfoContainer } from "../../components/productsContainer/ProductsContainer.styles";
import SingleProductContainer from "../../components/singleProductContainer/SingleProductContainer";

import axios from "axios";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const Products = () => {
  const [search, setSearch] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [products, setProducts] = useState([]);

  const history = useNavigate();

  // const query = useQuery();
  // const page = query.get("page") || 1;
  // const searchQuery = query.get("searchQuery");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await publicRequest.get("product/find");

        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const searchProducts = async () => {
    if (search.trim() || tags) {
      try {
        let response = await axios.get(
          `http://localhost:5000/api/product/search?searchQuery=${
            search || "none"
          }&tags=${tags.join(",")}`
        );

        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<object>) => {
    if (e.key === "Enter") {
      //search posts
      searchProducts();
    }
  };

  const handleAdd = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <Container2>
      <Navigation />
      <H1>Продукти</H1>
      <Line />
      <WrapperInput>
        <TextField
          name="search"
          variant="outlined"
          label="Търси продукти"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />

        <ChipInput
          style={{ margin: "10px 0px" }}
          value={tags}
          onAdd={handleAdd}
          onDelete={handleDelete}
          label="Търси продукти по таг"
          variant="outlined"
        />
        <Button onClick={searchProducts} color="primary" variant="contained">
          Намери
        </Button>
      </WrapperInput>

      <Wrapper>
        <InfoContainer>
          {products.map((p: any) => (
            <SingleProductContainer key={p._id} product={p} />
          ))}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container2>
  );
};

export default Products;
