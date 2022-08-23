import styled from "styled-components";

export const Product = styled.div`
  flex: 4;
  padding: 20px;
`;
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProductTitle = styled.h1``;
export const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export const ProductTop = styled.div`
  display: flex;
`;
export const ProductTopLeft = styled.div`
  flex: 1;
`;
export const ProductTopRight = styled.div`
  flex: 2;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductTopInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductTopInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductName = styled.span`
  font-weight: 600;
`;
export const ProductTopInfoBottom = styled.div`
  margin-top: 10px;
`;
export const ProductTopInfoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const ProductTopInfoKey = styled.span``;
export const ProductTopInfoValue = styled.span`
  font-weight: 300;
`;
export const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
export const ProductInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
export const ProductSelect = styled.select`
  margin-bottom: 10px;
`;
export const ProdcutOption = styled.option``;
export const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const ProductTextarea = styled.textarea`
  width: 400px;
  height: 250px;
`;
