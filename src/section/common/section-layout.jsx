import { Content, Section } from "components/box";
import React from "react";
import { useSelector } from "react-redux";

export default function SectionLayout({ index, children, bg }) {
  const { currentPage, maxPage } = useSelector((modules) => modules.viewerScrollReducer);

  return (
    <Section $isPrev={index < currentPage} $isView={index === currentPage} $zIndex={10 - index} $bg={bg}>
      <Content $isPrev={index < currentPage} $isView={index === currentPage}>
        {children}
      </Content>
    </Section>
  );
}
