import { Section } from "components/box";
import React from "react";
import { useSelector } from "react-redux";

export default function SectionHome({ index }) {
  const { currentPage, maxPage } = useSelector((modules) => modules.viewerReducer);

  return <Section>SectionHome</Section>;
}
