import React, { useEffect, useRef, useState } from "react";
import SectionLayout from "section/common/section-layout";
import styled from "styled-components";
import GlitchText from "../glitch-text";

export default function SectionHome({ index }) {
  return (
    <SectionLayout index={index} bg={"green"}>
      <GlitchText text={"SectionHome"} />
    </SectionLayout>
  );
}
