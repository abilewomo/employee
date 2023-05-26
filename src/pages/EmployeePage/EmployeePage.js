import Header from "../../components/Header"
import employees from "../../employee"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function EmployeePage(){
    const params = useParams()
    const id = params.id
    return(
        <div className="employee">
            <div className="header"><h1 className="left"> <Link to="/">&#10216;</Link>  </h1><Header title=" Employee"></Header></div>
            <div className="details">
                <div><img src={require(`../../assets/images/${employees[id].img}`)} alt={employees[id].name} />
                <div><h2>{employees[id].name}</h2><p>{employees[id].title}</p></div></div>
                <div><h2>Call Office</h2> <p>{employees[id].office}</p></div>
                <div><h2>Call Mobile </h2><p>{employees[id].mobile}</p></div>
                <div><h2>SMS</h2> <p>{employees[id].mobile}</p></div>
                <div><h2>Email</h2> <p>{employees[id].email}</p></div>
            </div>
        </div>
    )
}