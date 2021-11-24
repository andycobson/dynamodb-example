import React,  { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class EmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Empoyee List</h1>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> First Name</th>
                            <th> Last name</th>
                            <th> Email</th>
                            <th> Department Name</th>
                            <th> Department Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.employeeId}>
                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.email} </td>
                                    <td> {employee.department.departmentName} </td>
                                    <td> {employee.department.departmentCode} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeComponent