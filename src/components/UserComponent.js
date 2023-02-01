import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";


function UserComponent() {

    const [user, setUser] = useState([]);
    useEffect(() => {
        UserService.getUsers().then((response) => {
            // setUser(response.data)
            setUser(response.data)
            console.log(response.data);
        });
    }, []);

        return(
            <div>
                <h1 className="text-center"> Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(
                                user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.firstName}</td>
                                    <td> {user.lastName}</td>
                                    <td> {user.email}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
}

export default UserComponent
