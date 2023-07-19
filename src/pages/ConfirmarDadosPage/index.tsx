import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router";
import { TravelMock } from "../../mock/TravelMock";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import moment from "moment";
import { RootType } from "../../redux/store";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/slices/formSlice";

const ConfirmarDadosPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const id = useParams().id ?? "0";

  const dataFromInputs = useSelector(
    (store: RootType) => store.formInputs.data
  );

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
  const currentTravelMock = TravelMock.find((item) => item.id == +id);

  const handleClear = () => {
    dispatch(clearState());
    navigate('/compra-finalizada')
  }

  const dataMap = dataFromInputs.map((item, index) => (
    <>
      <p>
        Origem: <span>{item.origem}</span>
      </p>
      <p>
        Nome: <span>{item.nome}</span>
      </p>
      <p>
        Gmail: <span>{item.gmail}</span>
      </p>
      <p>
        Data de ida: <span>{moment(item.dataIda).format("DD/MM/YYYY")}</span>
      </p>
      <p>
        Data de volta:{" "}
        <span>{moment(item.dataVolta).format("DD/MM/YYYY")}</span>
      </p>
      <p>
        N. de Passageiros: <span>{item.qtPassageiros}</span>
      </p>
    </>
  ));

  const qtPassagens = dataFromInputs.map((item, index) => item.qtPassageiros);

  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
      <C.Container>
        <C.Area>
          <C.Content>
            <PageTitle title="Dados da Viagem" />
            <C.InfoContainer>
              <p>
                Destino: <span>{currentTravelMock?.place}</span>
              </p>
              {dataMap}
              <div style={{width: '100%', display: 'flex', flexDirection: 'row-reverse', marginTop: '30px'}}>
                <p style={{fontSize: 25}}>
                  Valor Total:{" "}
                  <span style={{fontSize: 25 }}>
                    {(
                      (currentTravelMock?.price ?? 0) * qtPassagens[0]
                    ).toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </span>
                </p>
              </div>
            </C.InfoContainer>
            <Button title="Confirmar Compra" submit={handleClear}/>
          </C.Content>
        </C.Area>
      </C.Container>
      <C.HeaderPlaceholder />
    </>
  );
};

export default ConfirmarDadosPage;
