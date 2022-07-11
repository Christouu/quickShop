import styled from "styled-components";

export const Navbar = styled.div`
  height: 59px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  position: relative;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Counter = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: -8px;
  right: -5px;
`;
