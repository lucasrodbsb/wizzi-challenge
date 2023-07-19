import React from "react";
import { Fade } from "react-awesome-reveal";
import * as C from "./styles";

interface ISectionContainer {
  title: string;
  children: React.ReactFragment | any;
  wrap?: string;
  mobileWrap?: string;
  customStyle?: React.CSSProperties;
}

const SectionConatiner = ({
  title,
  children,
  wrap,
  mobileWrap,
  customStyle,
}: ISectionContainer) => {
  return (
    <C.Container>
      <C.Area>
          <C.Title>{title}</C.Title>
          <C.Content style={customStyle} mobileWrap={mobileWrap} wrap={wrap}>
            {children}
          </C.Content>
      </C.Area>
    </C.Container>
  );
};

export default SectionConatiner;
