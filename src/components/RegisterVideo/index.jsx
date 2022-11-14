import { StyledRegisterVideo } from "./Styles";
import React from "react";

function useForm(props){
    const [values, setValues] = React.useState(props.initialValues)
    return{ values ,
        handleChage: (e)=> setValues({...values,[ e.target.name]: e.target.value}),
        clearForm(){ setValues({})}
}}
//botao adicionar
//modal
// state
//form

export default function RegisterVideo(){
    const formSubmit = useForm({initialValues:{title: 'initialTitle', url: "Initial Url"}})
    const [isVisibleForm, setIsVisibleForm] = React.useState(false)
   
   
    return(
        <StyledRegisterVideo>
           <button className="add-video" onClick={()=>setIsVisibleForm(true)}>
            +
           </button>
          {isVisibleForm? <form onSubmit={(e)=>{e.preventDefault();
        formSubmit.clearForm; setIsVisibleForm(false); console.dir(formSubmit.clearForm())}  }> <div>
           <button className="close-modal" onClick={()=>setIsVisibleForm(false)}>x</button>
           <input  placeholder="Video title" name="title" value={formSubmit.values.title} onChange={formSubmit.handleChage} />
           {console.log(formSubmit.values)}
           <input placeholder="URL" value={formSubmit.values.url} name="url" onChange={formSubmit.handleChage}  />
           <button type="submit">Submit</button>
           </div>
           
           </form>:false}
        </StyledRegisterVideo>
    )
}