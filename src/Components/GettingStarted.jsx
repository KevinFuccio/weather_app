import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
const GettingStarted = () =>{
    const dispatch = useDispatch
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <Link to='/home' className="d-flex  "><Button>Get Started</Button></Link>
        </div>
    )
}
export default GettingStarted