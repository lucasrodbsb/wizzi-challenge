import React from "react";
import * as C from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router";

type Props = {
  links: {
    title: string;
    url: string;
  }[];
  customStyle?: React.CSSProperties
};

const Header = ({ links, customStyle }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [menuButton, setMenuButton] = React.useState<"close" | "open">("close");
  const menuBtnRef = React.useRef() as React.RefObject<HTMLDivElement>;

  const navigate = useNavigate();

  const content = links.map((item, index) => (
    <li>
      <p key={index} onClick={()=> navigate(item.url)}>
        {item.title}
      </p>
    </li>
  ));
  return (
    <C.NavContainer>
      <C.Area>
        <C.LogoContainer />
        <C.NavLinks>
          <C.List>{content}</C.List>
          <C.MenuButtonWrapper ref={menuBtnRef}>
            {menuButton !== `open` ? (
              <AiOutlineMenu
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (menuBtnRef.current) {
                    menuBtnRef.current.style.transform = "rotate(-90deg)";
                  }
                  setMenuButton("open");
                }}
              />
            ) : (
              <MdClose    
                onClick={(e) => {
                  if (menuBtnRef.current) {
                    menuBtnRef.current.style.transform = "rotate(0deg)";
                  }
                  setIsOpen(!isOpen);
                  setMenuButton("close");
                }}
              />
            )}
          </C.MenuButtonWrapper>
        </C.NavLinks>
      </C.Area>

      <Sidebar isOpened={isOpen} links={links} />
    </C.NavContainer>
  );
};

export default Header;
