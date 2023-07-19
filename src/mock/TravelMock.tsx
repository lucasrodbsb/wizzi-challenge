import { AiFillHome } from "react-icons/ai";
import { MdFamilyRestroom, MdOutlineHomeWork } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdPaper } from "react-icons/io";
import { BsFillCarFrontFill, BsHouses } from "react-icons/bs";
import { GiRobber } from "react-icons/gi";
import { MdOutlineElderly } from "react-icons/md";
import { MdMapsHomeWork } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

export type TravelMockType = {
  id: number;
  place: string;
  imgPoster: string;
  price: number;
};

export const TravelMock: TravelMockType[] = [
  {
    id: 1,
    place: "Rio de janeiro",
    imgPoster: "/detalhesImg/rj.png",
    price: 350
  },
  {
    id: 2,
    place: "Maranhão",
    imgPoster: "/detalhesImg/maranhao.png",
    price: 400
  },
  {
    id: 3,
    place: "Porto de Galinhas",
    imgPoster: "/detalhesImg/porto.png",
    price: 500
  },
  {
    id: 4,
    place: "Estados Unidos",
    imgPoster: "/detalhesImg/eua.png",
    price: 1000
  },
];
