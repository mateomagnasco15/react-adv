import "../styles/styles.css"
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup";

export const FormikComponents = () => {

  return (
        <div>
          <h1>Formik Components</h1>
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
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text"/>
                    <ErrorMessage name="firstName" component="span" />
                      
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text"/>
                    <ErrorMessage name="lastName" component="span" />
                 
                    <label htmlFor="Email">Email</label>
                    <Field name="email" type="email"/>
                      <ErrorMessage name="email" component="span" />
                      
                    <label htmlFor="jobType">Job Type</label>
                    <Field name="jobType" as="select">
                      <option value="">Eliga su profesion</option>    
                      <option value="developer">Developer</option>    
                      <option value="futbolista">Futbolista</option>    
                      <option value="musico">Musico</option>    
                    </Field>
                    <ErrorMessage name="jobType" component="span" />
                      
                    <label>Terminos y condiciones
                    <Field name="terms" type="checkbox"/> 
                    </label>
                    <ErrorMessage name="terms" component="span" />
                      
                    <button type="submit">Submit</button>
                </Form>
                  )
                      
                  
              }
              
          </Formik>
          
        </div>
  )
}
