import "../styles/styles.css";
import {FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const {formData, onChange, name, password1, password2, mail, resetForm, isValidEmail} = useForm({
        name: "",
        mail: "",
        password1: "",
        password2: "",
    });

   
    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
      <div>
          <h1>Register Page</h1>

          <form noValidate onSubmit={(e) => onSubmit(e)}>
              <input
                  type="text"
                  placeholder='Name'
                  value={name}
                  onChange={onChange}
                  name= "name"
              />
              <input
                  type="email"
                  placeholder='Email'
                  value={mail}
                  onChange={onChange}
                  name= "mail"
              />
              {!isValidEmail(mail) && <span>Este email no es valido</span>}
              <input
                  type="password"
                  placeholder='Password'
                  value={password1}
                  onChange={onChange}
                  name= "password1"
              />
              <input
                  type="password"
                  placeholder='Repeat Password'
                  value={password2}
                  onChange={onChange}
                  name= "password2"
              />

              <button type='submit'>Create</button>
              <button onClick={resetForm} >Reset Form</button>
          </form>
          
    </div>
  )
}
