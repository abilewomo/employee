import EmployeeListItems from "./EmployeeListItem"
export default function EmployeeList(props){
    return(
        <div>
            <EmployeeListItems employees={props.employees}></EmployeeListItems>
        </div>
    )
}