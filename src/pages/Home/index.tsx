import React from "react";

import Header from "../../components/Header";
import HomeText from "../../components/HomeText";

import * as C from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Fade } from "react-awesome-reveal";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Ver Pacotes",
      url: "/ver-pacotes",
    }
  ];

  interface IImageSlide {
    url: string;
    title: string;
    body: string;
  }

  const imageSlide: IImageSlide[] = [
    {
      url: `../../../../bg1.jpg`,
      body: "Viagens para",
      title: "Rio de Janeiro",
    },
    {
      url: `../../../../bg2.jpg`,
      body: "Viagens para",
      title: "Londres",
    },
    {
      url: `../../../../bg3.jpg`,
      body: "Viagens para",
      title: "Praias Paradisíacas",
    },
    {
      url: `../../../../bg4.jpg`,
      body: "Viagens para",
      title: "Maranhão",
    },
    {
      url: `../../../../bg5.jpg`,
      body: "Viagens para",
      title: "Estados Unidos",
    },
  ];

  const navigate = useNavigate()

  const slideContent = imageSlide.map((item, index) => (
    <SwiperSlide>
     
      <C.Container backgroundImg={item.url}>
        
        <C.Area>
          <HomeText title={item.title} subtitle={item.body} />
          <Button title="Ver pacotes" submit={()=> navigate('/ver-pacotes')}/>
        </C.Area>
        
      </C.Container>

    </SwiperSlide>
  ));

  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
      <C.Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          effect={"fade"}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
        >
          {slideContent}
        </Swiper>
      </C.Container>
    </>
  );
};

export default Home;
