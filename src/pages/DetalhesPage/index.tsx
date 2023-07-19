import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router";
import { TravelMock } from "../../mock/TravelMock";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addFormInputsValue } from "../../redux/slices/formSlice";
import { useNavigate } from "react-router";
import moment from "moment";
import FormInput from "../../components/FormInput";
import { FormType } from "../../types/formType";

const DetalhesPage = () => {
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

  const currentTravelMock = TravelMock.find((item) => item.id == +id);

  const dispatch = useDispatch();

  interface Inputs {
    nome: string;
    gmail: string;
    dataIda: string;
    dataVolta: string;
    origem: string;
    qtPassageiros: number;
  }

  const InputsSchema = yup.object().shape({
    nome: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Apneas letras são permitidas!")
      .required("Valor Inválido!")
      .min(3, "Mínimo de 3 Caracteres!")
      .max(40, "Muitos caracteres!"),
    qtPassageiros: yup
      .number()
      .typeError("Apenas números!")
      .required("O campo é obrigatório!")
      .min(0, 'Minimo de 1 passageiro!')
      .max(100, 'Não pode passar de 100 passageiros!')
      ,
    gmail: yup
      .string()
      .email("Login Inválido")
      .required("O campo é obrigatório!")
      .min(3, "Mínimo de 3 Caracteres!")
      .max(60, "Muitos caracteres!"),
    origem: yup
      .string()
      .required("O campo é obrigatório!")
      .min(3, "Mínimo de 3 Caracteres!")
      .max(40, "Muitos caracteres!"),
    dataIda: yup.string().required("O campo é obrigatório!"),
    dataVolta: yup.string().required("O campo é obrigatório!"),
  });

  const methods = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(InputsSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitForm = (data: Inputs) => {
    console.log(data);

    dispatch(
      addFormInputsValue({
        ...data,
        dataIda: moment(data.dataIda).valueOf(),
        dataVolta: moment(data.dataVolta).valueOf(),
      })
    );

    navigate(`/confirmar-dados/${id}`);
  };

  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
      <C.Container>
        <C.Area>
          <C.Content>
            <PageTitle title={currentTravelMock?.place ?? ""} />
            <div>
              <img src={currentTravelMock?.imgPoster ?? ""} alt="" />
            </div>
            <div style={{ width: "100%" }}>
              <FormProvider {...methods}>
                <form
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                  onSubmit={handleSubmit(submitForm)}
                >
                  <FormInput<FormType>
                    errorMsg={errors.nome?.message}
                    isError={!!methods.formState.errors.nome}
                    formName="nome"
                    inputType="text"
                    placeholder="Nome"
                  />
                  <FormInput<FormType>
                    errorMsg={errors.gmail?.message}
                    isError={!!methods.formState.errors.gmail}
                    formName="gmail"
                    inputType="text"
                    placeholder="Gmail"
                  />
                  <FormInput<FormType>
                    errorMsg={errors.origem?.message}
                    isError={!!methods.formState.errors.origem}
                    formName="origem"
                    inputType="text"
                    placeholder="Origem"
                  />
                  <FormInput<FormType>
                    errorMsg={errors.dataIda?.message}
                    isError={!!methods.formState.errors.dataIda}
                    formName="dataIda"
                    inputType="date"
                    placeholder="Data de ida"
                  />
                  <FormInput<FormType>
                    errorMsg={errors.dataVolta?.message}
                    isError={!!methods.formState.errors.dataVolta}
                    formName="dataVolta"
                    inputType="date"
                    placeholder="Data de Volta"
                  />
                  <FormInput<FormType>
                    errorMsg={errors.qtPassageiros?.message}
                    isError={!!methods.formState.errors.qtPassageiros}
                    formName="qtPassageiros"
                    inputType="number"
                    placeholder="Quantidade de Passageiros"
                  />
                  <C.Btn style={{ alignSelf: "center" }} type="submit">
                    Confirmar Dados
                  </C.Btn>
                </form>
              </FormProvider>
            </div>
            <C.Btn onClick={() => navigate("/area-atuacao")}>Voltar</C.Btn>
          </C.Content>
        </C.Area>
      </C.Container>
      <C.HeaderPlaceholder />
    </>
  );
};

export default DetalhesPage;
