"use client"

import { Button } from "@/app/components/button";
import { InputEmailForm } from "@/app/components/Input/InputEmailForm";
import { InputPasswordForm } from "@/app/components/Input/InputPasswordForm";
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
    <div className="bg-[#210210] h-[930px] grid grid-cols-4">
      <div className="bg-[#ee2853] max-w-[500px] h-[600px] mt-32 col-start-3 rounded-xl">
        <div className=" rounded-tl-xl rounded-tr-xl p-3 grid grid-cols-1 grid-rows-2">
          <div className="">
            <TbUserFilled />
          </div>
          <p className="flex justify-center items-center p-3">Seja bem-vindo ao projeto barbearia, faça seu log-in.</p>
        </div>
        <Formik onSubmit={onSubmit}
          initialValues={formValues}
        >
          <Form className="grid grid-cols-1 grid-rows-6">
            <div className="row-start-3">
              <InputEmailForm
                name="email"
                label="E-mail"
                className=""
              >
              </InputEmailForm>
            </div>

            <div className="row-start-4 pt-4">
              <InputPasswordForm
                name="senha"
                label="Senha"
              >
              </InputPasswordForm>

            </div>

            <div className="row-start-6 mx-10">
              <Button type="submit" classname="" label="enviar">Enviar</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}