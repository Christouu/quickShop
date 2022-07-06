import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fecthProductsBySearch } from "../../api";

import ChipInput from "material-ui-chip-input";
import { TextField, Button } from "@material-ui/core";

import Line from "../../components/line/Line";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { Container2, H1, WrapperInput, Wrapper } from "./Products.styles";
import { InfoContainer } from "../../components/productsContainer/ProductsContainer.styles";
import SingleProductContainer from "../../components/singleProductContainer/SingleProductContainer";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const [search, setSearch] = useState<string>("");
  const [tags, setTags] = useState<any>([]);

  const { products, isLoading } = useSelector((state: any) => state.products);

  const query = useQuery();
  const history = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const dispatch = useDispatch();

  const searchProducts = async () => {
    if (search.trim() || tags) {
      //@ts-ignore
      dispatch(fecthProductsBySearch({ search, tags: tags.join(",") }));
      history(
        `/post/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history("/login");
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
    setTags(tags.filter((t: any) => t !== tag));
  };

  useEffect(() => {});

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
            <SingleProductContainer key={p._id} info={p} />
          ))}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container2>
  );
};

export default Products;
