import "../styles/styles.css"
import { Form, Formik} from "formik"
import * as Yup from "yup";
import { MyCheckbox, MyTextInput, MySelect } from "../components";


export const FormikAbstract = () => {

  return (
        <div>
          <h1>Formik Abstract</h1>
          <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                terms: false,
                jobType: ""
              }}
              onSubmit={(values) => {
                  console.log(values)
              }}
              validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, "Maximo 15 caracteres")
                        .required("Requerido"),
                    lastName: Yup.string()
                        .max(15, "Maximo 15 caracteres")
                        .required("Requerido"),
                    email: Yup.string()
                        .required("Es requerido")
                        .email("Ingrese un mail valido"),
                    terms: Yup.boolean()
                        .oneOf([true], "Requerido"),
                    jobType: Yup.string()
                        .required("Requerido")


                })   
              }
          >
              {formik => (
                    <Form>
                    <MyTextInput label="First Name" name="firstName"/>
                    <MyTextInput label="Last Name" name="lastName"/>
                    <MyTextInput label="Email" name="email" type="email" placeholder="ej@gmail.com"/>
                    <MySelect name="jobType" label="Job Type">
                      <option value="">Eliga su profesion</option>    
                      <option value="developer">Developer</option>    
                      <option value="futbolista">Futbolista</option>    
                      <option value="musico">Musico</option>    
                    </MySelect>
                    <MyCheckbox label="Terms and conditions" name="terms"/>
                    <button type="submit">Submit</button>
                </Form>
                  )
                      
                  
              }
              
          </Formik>
          
        </div>
  )
}
