"use client"
import {useEffect, useState} from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const endpoint = 'http://localhost:3004/user';

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const UsersList = () => {
    return users.map((user, index) => {
      const {firstName, lastName, phone, email, password} = user;
      return (
        <tr key={index}>
          <td className="border px-4 py-2">{firstName}</td>
          <td className="border px-4 py-2">{lastName}</td>
          <td className="border px-4 py-2">{phone}</td>
          <td className="border px-4 py-2">{email}</td>
          <td className="border px-4 py-2">{password}</td>
        </tr>
      )
    })
  }

  return (
    <table className="table-auto">
      <thead>
      <tr>
        <th className="px-4 py-2">First Name</th>
        <th className="px-4 py-2">Last Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Phone</th>
        <th className="px-4 py-2">Password</th>
      </tr>
      </thead>
      <tbody>
      <UsersList/>
      </tbody>
    </table>
  )
}

export default Users;
