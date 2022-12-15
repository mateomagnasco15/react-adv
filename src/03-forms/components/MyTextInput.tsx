import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    id?: string;
    type?: string;
    placeholder? : string
    
}


export const MyTextInput = ({ label, ...props }: Props) => {
    
    const [field] = useField(props);




  return (
      <>
          <label htmlFor={props.name || props.id}>{label}</label>
          <input {...field} {...props} />
          <ErrorMessage name={props.name} component="span"/>
          
      </>
  )
}
