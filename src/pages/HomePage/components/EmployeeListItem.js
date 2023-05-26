import { Link } from "react-router-dom"
import employees from "../../../employee"

export default function EmployeeListItems(props){
    const JSX=employees.map((employee, i)=>{
        return(
          <li key={i}>
           <Link to={`/employee/${i}`}> 
             <img src={require(`../../../assets/images/${employee.img}`)} alt={employee.name} />
                <div><h2>{employee.name}</h2><p>{employee.title}</p></div>
            </Link></li>
        )
      })
    return(
        <div className="employeelist">
            <ul>
                {JSX}
            </ul>
        </div>
    )
}