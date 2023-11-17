import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.div.attrs(({ $clipPath }) => ({
  style: {
    transform: `skew(${$clipPath.skew}deg)`
  }
}))`
  position: relative;
  font-size: 3rem;
  font-weight: bold;
`;

const TitleBefore = styled.div.attrs(({ $clipPath }) => ({
  style: {
    clipPath: `polygon(0 ${$clipPath.beforeTop}%,100% ${$clipPath.beforeTop}%,100% ${$clipPath.beforeBottom}%,0 ${$clipPath.beforeBottom}%)`
  }
}))`
  position: absolute;
  top: 0;
  left: -5px;
  text-shadow: 2px -2px ${({ theme }) => theme.color.accent_alt};
`;

const TitleAfter = styled.div.attrs(({ $clipPath }) => ({
  style: {
    clipPath: `polygon(0 ${$clipPath.afterTop}%,100% ${$clipPath.afterTop}%,100% ${$clipPath.afterBottom}%,0 ${$clipPath.afterBottom}%)`
  }
}))`
  position: absolute;
  top: 0;
  left: 5px;
  text-shadow: 2px -2px ${({ theme }) => theme.color.accent};
`;

export default function GlitchText({ text }) {
  const savedCallback = useRef(null);
  const [clipPath, setClipPath] = useState({
    afterTop: 0,
    beforeTop: 0,
    afterBottom: 0,
    beforeBottom: 0,
    skew: 0
  });

  const callback = () => {
    setClipPath({
      afterTop: Math.random() * 200,
      beforeTop: Math.random() * 200,
      afterBottom: Math.random() * 200,
      beforeBottom: Math.random() * 200,
      skew: Math.random() * 10
    });
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, []);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const timer = setInterval(tick, 100);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <Title $clipPath={clipPath}>
        {text}
        <TitleAfter $clipPath={clipPath}> {text}</TitleAfter>
        <TitleBefore $clipPath={clipPath}> {text}</TitleBefore>
      </Title>
    </div>
  );
}
