import { InputEmailForm } from "@/app/components/Input/InputEmailForm";
import { InputPasswordForm } from "@/app/components/Input/InputPasswordForm";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function Login() {

  const [formValues, setFormValues] = useState({
    email: '',
    senha: ''
  })

  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="bg-[#210210] h-[730px] grid grid-cols-3">
      <div className="bg-[#ee2853] max-w-[500px] h-[500px] mt-16 col-start-2 rounded-xl">
        <div className="bg-white rounded-tl-xl rounded-tr-xl p-3">
          <h1 className="flex justify-center items-center">Log-In</h1>
          <p className="flex justify-center items-center p-3">Entre na sua conta ou faça seu registro</p>
        </div>
        <div className="">
          <Formik onSubmit={onSubmit}
            initialValues={formValues}
          >
            <Form>
              <InputEmailForm
                name="email"
                label="E-mail"
              >
              </InputEmailForm>
              <InputPasswordForm
                name=""
                label="Senha"
              >
              </InputPasswordForm>

            </Form>
          </Formik>
        </div>
      </div>
    </div>

  )
}