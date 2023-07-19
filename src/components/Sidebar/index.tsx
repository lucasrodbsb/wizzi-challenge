import React from "react";
import { useNavigate } from "react-router";
import * as C from "./styles";

type Props = {
  isOpened: boolean;
  links: {
    title: string;
    url: string;
  }[];
};

const Sidebar = ({ links, isOpened }: Props) => {

    const navigate = useNavigate()

    const content = links.map((item, index) => (

        <li>
          <p key={index} onClick={()=> navigate(item.url)}>
            {item.title}
          </p>
        </li>
      ));

  return (
    <C.SidebarContainer isOpen={isOpened}>
      <C.SidebarHeader>
        <C.LogoContainer />
      </C.SidebarHeader>
      <C.SidebarList>
        {content}
      </C.SidebarList>
    </C.SidebarContainer>
  );
};

export default Sidebar;
