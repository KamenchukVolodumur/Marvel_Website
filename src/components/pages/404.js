import { Link, useHistory, useNavigate } from "react-router-dom"
import ErrorMessage from "../errorMessage/ErrorMessage"
const Page404=()=>{
    let navigate = useNavigate();
    const getBack=()=>{
        navigate(-1)
    }
    return(
        <div>
           <button onClick={()=>getBack()}>Back to main Page</button>
            <ErrorMessage/>
        </div>
    )
}
export default Page404