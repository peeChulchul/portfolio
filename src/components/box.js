import { styled, css } from "styled-components";

export const Section = styled.section`
  position: fixed;
  height: 130vh;
  width: 100%;
  transition: all 1s cubic-bezier(0.22, 0.44, 0, 1);
  transform: translateY(20vh);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${({ bg }) => bg};
  ${({ isView }) =>
    isView &&
    css`
      transform: translateY(-15vh);
    `}
`;

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  transition: all 1s cubic-bezier(0.22, 0.44, 0, 1);
  transform: translateY(80vh);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: ${({ toggle }) => (toggle ? "12.5rem" : "70px")};
`;
