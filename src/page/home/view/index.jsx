import React from "react";
import react, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { viewerScrollActions } from "redux/modules/viewer";
import SectionHome from "section/Home/view";
import SectionProject from "section/Project/view";
import SectionAbout from "section/About/view";
const Viewer = styled.div`
  perspective: 1px;
  height: 100vh;
  overflow: hidden;
`;
const Background = styled.section`
  position: fixed;
  height: 130vh;
  width: 100%;
  transition: all 1s cubic-bezier(0.22, 0.44, 0, 1);
  transform: translateY(20vh);
  font-size: 30px;
  font-weight: bold;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  & .content {
    height: 100vh;
    width: 100%;
    transition: all 1s cubic-bezier(0.22, 0.44, 0, 1);
    transform: translateY(80vh);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-left: ${({ toggle }) => (toggle ? "12.5rem" : "70px")};
    @media screen and (max-width: 600px) {
      padding-left: unset;
    }
  }

  &:first-child {
    transform: translateY(-15vh);
    background-color: #1a1a1a;
    z-index: 10;
    .content {
      transform: translateY(15vh);
    }
  }
  &:nth-child(2) {
    z-index: 9;
    background: linear-gradient(to top, #1a1a1a 0%, #382d21 32%, #04343a 100%);
  }

  &:nth-child(3) {
    z-index: 8;
    background: linear-gradient(to right, rgba(36, 31, 31, 1) 0%, rgba(36, 31, 31, 1) 32%, rgba(74, 71, 70, 1) 100%);
  }

  &.scroll-down {
    transform: translateY(-130vh);
  }

  &.scroll-down > .content {
    transform: translateY(20vh);
  }

  &.scroll-down + &:not(.scroll-down) {
    transform: translateY(-15vh);
  }

  &.scroll-down + &:not(.scroll-down) > .content {
    transform: translateY(15vh);
  }
`;

const TestBtn = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 100;
  cursor: pointer;
  width: 300px;
  height: 300px;
  background-color: white;
`;

const sections = [SectionHome, SectionProject, SectionAbout];
export default function PageHome() {
  const { pageChange } = viewerScrollActions;
  const dispatch = useDispatch();

  useEffect(() => {
    const maxPage = sections.length;
    dispatch(pageChange({ maxPage }));
  }, []);

  return (
    <>
      <Viewer>
        {/* <TestBtn as="div">
          <button onClick={() => dispatch(pageChange({ currentPage: 0 }))}>0</button>
          <button onClick={() => dispatch(pageChange({ currentPage: 1 }))}>1</button>
          <button onClick={() => dispatch(pageChange({ currentPage: 2 }))}>2</button>
        </TestBtn> */}
        {sections.map((section, index) => (
          <react.Fragment key={section}>{section({ index })}</react.Fragment>
        ))}
      </Viewer>
    </>
  );
}
