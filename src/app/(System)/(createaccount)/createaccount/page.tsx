"use client"
import { TypeJob } from "@/app/modules/createaccount/enums";
import { InputPasswordForm } from "@/components/Input/InputPasswordForm";
import { InputSelectForm } from "@/components/Input/InputSelectForm";
import { InputText } from "@/components/Input/InputTextForm";
import { Form, Formik } from "formik";
import { useState } from "react";
import { HiUserAdd } from "react-icons/hi";

// Tipagem dos valores do formulário
export type FormValuesType = {
  username: string
  password: string
}

export default function CreateAccount() {
  const onSubmit = (values: FormValuesType) => {
    console.log(values)
  }

  const [formValues, setFormValues] = useState<FormValuesType>({
    username: '',
    password: '',
  })

  return (
    <div className="bg-[#210210] h-[1300px] grid grid-cols-3 grid-rows-5">
      <div className="grid col-start-2 row-start-1 mt-24 ">
        <div className=" bg-[#FFF] h-[900px] rounded-3xl">
          <div className="grid grid-cols-3 grid-rows-3 m-3">
            <div className="col-start-2 flex items-center justify-center">
              <HiUserAdd className="h-[60px] w-[60px] object-cover" />
            </div>
            <div className="col-span-3 col-start-1 row-start-2 m-2">
              <p className="flex flex-row justify-center items-center">Cadastre-se e desfrute do gerenciador digital</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Formik
              initialValues={formValues}
              onSubmit={onSubmit}
            >
              <Form className="flex flex-col">
                <div className="bg-slate-400 max-w-[300px] rounded-xl p-4">
                  <InputText
                    type="text"
                    name="username"
                    label="Nome de Usuário"
                    placeholder="Digite seu nome de usuario"
                  >

                  </InputText>

                  <InputPasswordForm
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                  >

                  </InputPasswordForm>

                  <InputPasswordForm
                    name="confirmPassword"
                    type="password"
                    label="Confirme sua senha"
                    placeholder="Confirme sua senha"
                  >

                  </InputPasswordForm>
                </div>

                <div className="bg-slate-400 max-w-[300px] rounded-xl p-4 m-8">
                  {/* Select de Profissão ?Quais profissões colocar, talvez trocar o campo?

                  */}
                  <InputSelectForm
                    items={TypeJob}
                    name=""
                    type="text"></InputSelectForm>
                </div>

                <div className="">
                  {/* Seção com Radio para confirmar ou não a existência de funcionário */}
                </div>

              </Form>
            </Formik>

          </div>

        </div>
      </div>
    </div>
  );
}