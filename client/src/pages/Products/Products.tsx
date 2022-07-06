import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ChipInput from "material-ui-chip-input";
import { TextField, Button } from "@material-ui/core";

import Line from "../../components/line/Line";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { Container2, H1, WrapperInput, Wrapper } from "./Products.styles";
import { InfoContainer } from "../../components/productsContainer/ProductsContainer.styles";
import SingleProductContainer from "../../components/singleProductContainer/SingleProductContainer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const [search, setSearch] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const query = useQuery();
  const history = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const searchProducts = () => {
    if (search.trim() || tags) {
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
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
          <SingleProductContainer />
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container2>
  );
};

export default Products;
