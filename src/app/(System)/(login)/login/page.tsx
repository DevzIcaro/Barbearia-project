"use client"

import { Button } from "@/components/button";
import { DefaultDivision } from "@/components/divisions/divisondefault";
import { InputEmailForm } from "@/components/Input/InputEmailForm";
import { InputPasswordForm } from "@/components/Input/InputPasswordForm";
import { Form, Formik } from "formik";
import { useState } from "react";
import { TbUserFilled } from "react-icons/tb";
import * as Yup from "yup";

export default function Login() {
  const onSubmit = (values: any) => {
    console.log(values)
  }

  const [formValues, setFormValues] = useState({
    email: '',
    senha: ''
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('E-mail inválido')
      .required('O e-mail é obrigatório'),

    senha: Yup.string()
      .min(6, 'A senha está incorreta')
      .required('A senha é obrigatória')
  });

  return (
    <div className="bg-[#210210] h-[930px] grid grid-cols-3">
      <div className="bg-[#ee2853] max-w-[500px] h-[600px] mt-32 col-start-2 rounded-xl">
        <div className=" rounded-tl-xl rounded-tr-xl p-3 mb-8">
          <div className="flex justify-center m-4">
            <TbUserFilled className="h-[80px] w-[80px] p-2 object-cover bg-[#FFF] rounded-3xl" />
          </div>
          <p className="flex justify-center items-center p-3">Seja bem-vindo ao projeto barbearia, faça seu log-in.</p>
          <DefaultDivision
            classname="row-start-5
          "
          >
          </DefaultDivision>
        </div>


        <Formik onSubmit={onSubmit}
          initialValues={formValues}
        >
          <Form className="grid grid-cols-1 grid-rows-4">
            <div className="row-start-1">
              <InputEmailForm
                name="email"
                label="E-mail"
              >
              </InputEmailForm>
            </div>

            <div className="row-start-2 pt-4">
              <InputPasswordForm
                name="senha"
                label="Senha"
              >
              </InputPasswordForm>

            </div>

            <div className="row-start-4 mx-10">
              <Button type="submit" classname="" label="enviar">Enviar</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}