import { InputEmailForm } from "@/app/components/Input/InputEmailForm";
import { Form, Formik } from "formik";


export default function Login() {
  return (
    <div className="bg-[#210210] h-[730px] grid grid-cols-3">
      <div className="bg-[#ee2853] max-w-[500px] h-[500px] mt-16 col-start-2 rounded-xl">
        <div className="bg-white rounded-tl-xl rounded-tr-xl p-3">
          <h1 className="flex justify-center items-center">Log-In</h1>
          <p className="flex justify-center items-center p-3">Entre na sua conta ou faça seu registro</p>
        </div>
        <div className="">
          <Formik onSubmit={ } initialValues={ }>
            <Form>
              <InputEmailForm
                name=""
                label="E-mail"
              >
              </InputEmailForm>
            </Form>
          </Formik>
        </div>
      </div>
    </div>

  )
}