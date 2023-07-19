import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Button from "../../components/Button";


const CompraFinalizadaPage = () => {
  const navigate = useNavigate();
  const id = useParams().id ?? "0";

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

  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
      <C.Container>
        <C.Area>
          <C.Content>
            <PageTitle title="Compra Finalizada Com Sucesso!" />
            <Button submit={()=> navigate('/')} title="Voltar para Homepage" />
          </C.Content>
        </C.Area>
      </C.Container>
      <C.HeaderPlaceholder />
    </>
  );
};

export default CompraFinalizadaPage;
