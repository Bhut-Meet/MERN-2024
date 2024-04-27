    import { useEffect, useState } from "react";
    import { useAuth } from "../store/auth";
    import {Link} from "react-router-dom"

    export const AdminUsers = () => {
        const [users, setUsers] = useState([]);
        const { authorizationToken,API } = useAuth();

        const getAllUsersData = async () => {
            try {
                const response = await fetch(`${API}/api/admin/users`, {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("users", data);
                    setUsers(data);
                } else {
                    console.log("Failed to fetch user data");
                }
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        };

        const deleteUser = async (id) => {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
                if (response.ok) {
                    console.log("User deleted successfully");
                    // Optionally, update the user list to reflect the deletion
                    getAllUsersData();
                } else {
                    console.log("Failed to delete user");
                }
            } catch (error) {
                console.log("Error deleting user:", error);
            }
        };

        useEffect(() => {
            getAllUsersData();
        },[]);

        return (
            <div className="container">
                <h2 className="my-4">Admin User Data</h2>
                <Link className="btn btn-primary shadow-sm mb-4" to="#">Add User</Link>
                <div className="table-responsive">
                    {users ? (
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr className="text-center">
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((curUser, index) => (
                                    <tr key={index} className="text-center">
                                        <td>{curUser.username}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.phone}</td>
                                        <td className="d-flex justify-content-evenly">
                                            <button className="btn btn-success btn-sm mr-2 px-3 rounded-5"><Link style={{color:"white",textDecoration:"none"}} to={`/admin/users/${curUser._id}/edit`}>Edit</Link> </button>
                                            <button onClick={() => deleteUser(curUser._id)} className="btn btn-danger btn-sm px-4 rounded-3">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center my-4">Loading...</div>
                    )}
                </div>
            </div>
        );
    };
