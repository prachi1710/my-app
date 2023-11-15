import React, { useState } from 'react';
import './UserDetails.css';
const UserDetails = () => {
  const [users] = useState([
    { id: 1, username: 'user1', email: 'user1@gmail.com', phone: '7898986569', creationDate: '2023-11-14' },
    { id: 2, username: 'user2', email: 'user2@gmail.com', phone: '9434546657', creationDate: '2023-11-14' },
    { id: 3, username: 'user3', email: 'user3@gmail.com', phone: '9434473857', creationDate: '2023-11-13' },
    { id: 4, username: 'user4', email: 'user4@gmail.com', phone: '8904546657', creationDate: '2023-11-12' },
    { id: 5, username: 'user5', email: 'user5@gmail.com', phone: '9434246657', creationDate: '2023-11-12' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenerateReport = (user) => {
    console.log(`Generating report for user with ID ${user.id}`);
    setSelectedUser(null);
  };

  const openModal = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User Details</h2>
      <input type="text" className="search" placeholder="Search by username" value={searchTerm} onChange={handleSearch} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Creation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.username.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.creationDate}</td>
                <td>
                  <button onClick={() => openModal(user)}>Generate Report</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Modal for generating a report */}
      {selectedUser && (
        <div className="modal">
          <p>User ID: {selectedUser.id}</p>
          <p>Username: {selectedUser.username}</p>
          <button onClick={() => handleGenerateReport(selectedUser)}>Generate Report</button>
          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
