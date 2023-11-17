import { Section } from "components/box";
import React from "react";
import { useSelector } from "react-redux";

export default function SectionProject({ index }) {
  const { currentPage, maxPage } = useSelector((modules) => modules.viewerReducer);

  return <Section>SectionProject</Section>;
}
