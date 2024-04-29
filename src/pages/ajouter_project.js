import {
    Card,
    CardBody,
    CardFooter,
    Input,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
  } from "@material-tailwind/react";
  import { useState , useEffect , useRef  } from "react";
  import {useForm} from "react-hook-form"
import DialogeDisplay from "../component/dialoge";
const AjouterProject = () => {

  const {register , controle} = useForm()


  const [isLoading , setIsloading] = useState(false)
  const [Numero , setNumero] = useState('')
  const [titre, setTitre] = useState('')
  const [datedebut , setDatedebut] = useState('')
  const [datefin, setDatefin] = useState('')
  const [theme, setTheme] = useState('')
  const [membres , setMembers] = useState('')
  const [error , setError] = useState({})
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleOpen = () => {
    let errors = {}
    if(Numero.trim()==='' || titre.trim()==='' || datedebut.trim()==='' || datefin.trim()==='' || theme.trim()==='' || membres.trim()===''){
        if(Numero.trim()===''){
         errors.Numero = "Le numero de project est obligatoire"
        }
        if(titre.trim()===''){
            errors.titre = "Le titre de project est obligatoire"
        }
        if(datedebut.trim()===''){
            errors.datedebut = "La date de debut de project est obligatoire"
        }
        if(datefin.trim()===''){
            errors.datefin = "La date de fin de project est obligatoire"
        }
        if(theme.trim()===''){
            errors.theme = "Le theme de project est obligatoire"
        }
        if(membres.trim()===''){
            errors.membres = "La liste des membres de project est obligatoire"
        }
        setError(errors)
      //  return
    }

    setOpen(!open)
}
  const onsubmit = (e) => {
    e.preventDefault()
    console.log("subiming")
    setOpen(!open)
    setIsloading(true)
    //handling the form
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
      setAlert(true)
    }, 2000);
    setTimeout(() => {
      setAlert(false)
    }, 5000);

  } 
    return (
       
 <div className="flex  relative justify-center items-center h-screen ">
 <div className=" transition-all duration-500 items-center absolute  flex w-64 h-32 z-50 opacity-100 ">
    {/* / <Alertcomp sentence="Projet ajouté avec succés" color="green" open={alert} /> */}
     <iframe className="ease-in-out" style={{display: alert ? "block" : "none"}} src="https://lottie.host/embed/f94ae79c-4924-4a02-b7a1-39978de99c7d/zyErDRYkQL.json"></iframe>
       </div>
       <form onSubmit={onsubmit}>
      
      
<Card className="w-96 shadow-xl gray-400 " >
 
         <CardBody className="flex flex-col gap-2">
      
        <Input type="number" label="Numero" name="number" className="" size="md" error={error.Numero}  onChange={(e)=>setNumero(e.target.value)} />
          {(error.Numero)&&<p className="text-red-500 ml-5 mt-0 mb-0 text-xs" >Veuillez saisir le numéro de projet</p>}
        <Input label="Titre" size="lg"   error={error.titre} onChange={(e)=>setTitre(e.target.value)} />
        {(error.titre)&&<p className="text-red-500 ml-5 text-xs" >Veuillez saisir le titre de projet</p>}
        <Input label="Date de debut" size="lg"   error={error.datedebut} onChange={(e)=>setDatedebut(e.target.value)}/>
        {(error.datedebut)&&<p className="text-red-500 ml-5 text-xs" >Veuillez saisir la date de debut de projet</p>}
        <Input label="Date de fin" size="lg"  error={error.datefin} onChange={(e)=>setDatefin(e.target.value)} />
        {(error.datefin)&&<p className="text-red-500 ml-5 text-xs" >Veuillez saisir la de fin de projet</p>}
        <Input label="Theme" size="lg"   error={error.theme} onChange={(e)=>setTheme(e.target.value)}/>
        {(error.theme)&&<p className="text-red-500 ml-5 text-xs" >Veuillez saisir le theme de projet</p>}
        <Input label="liste des membres " size="lg"   error={error.membres} onChange={(e)=>setMembers(e.target.value)} />
        {(error.membres)&&<p className="text-red-500 ml-5 text-xs" >Veuillez saisir la liste des membres de projet</p>}

       
       
      </CardBody>
      <CardFooter className="pt-0  flex justify-center">
      <Button  loading={isLoading} variant="gradient" onClick={handleOpen} className="" >
          Ajouter
        </Button>
       <DialogeDisplay open={open} handleOpen={handleOpen} onsubmit={onsubmit} />
      </CardFooter>
    </Card>
    </form>
        </div>
    )

}

export default AjouterProject;