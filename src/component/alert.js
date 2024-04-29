import { Alert } from "@material-tailwind/react";
 
const Alertcomp = ( {sentence , open , color}) =>{
  return (
    
      
      <Alert color={color}  open={open}> {sentence} 
      
      </Alert>
      
   
  )
}

export default Alertcomp;