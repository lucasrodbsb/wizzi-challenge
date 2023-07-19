import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router";
import { TravelMock } from "../../mock/TravelMock";

const PacotesPage = () => {
  const navigate = useNavigate();
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Ver Pacotes",
      url: "/ver-pacotes",
    },
  ];

  const travelData = TravelMock.map((item, index) => (
    <C.ItemContainer onClick={()=> navigate(`/ver-pacotes/detalhes/${item.id}`, {replace: true})}>
      <p>{item.place}</p>
      <img src={item.imgPoster} style={{ height: "100px" }} />
    </C.ItemContainer>
  ));
  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
      <C.Container>
        <C.Area>
          <C.Content>
            <PageTitle title="Nossos Pacotes" />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{travelData}</div>
            <C.BackToHome onClick={() => navigate("/")}>
              Voltar para a homepage
            </C.BackToHome>
          </C.Content>
        </C.Area>
      </C.Container>

      <C.HeaderPlaceholder />
    </>
  );
};

export default PacotesPage;
