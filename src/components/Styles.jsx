import styled from "styled-components";

export const Header = styled.h4`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
        background: rgba(51, 51, 255, 1) !important;
        }
`;


