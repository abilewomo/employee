import Header from "../../components/Header"
import SearchBar from "./components/SearchBar"
import EmployeeList from "./components/EmployeeList"
export default function HomePage(){
    
    return(
        <div className="home">
            <Header title="Employee Directory"></Header>
            <SearchBar></SearchBar>
            <EmployeeList ></EmployeeList>           
        </div>
    )
}