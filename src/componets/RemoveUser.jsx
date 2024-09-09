import React, { useState } from "react";

const RemoveUser = ({ users, removeUser, handleClosePage2 }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleRemoveClick = () => {
    if (selectedUserId !== null) {
      removeUser(selectedUserId);
    }
  };

  return (
    <div className="bg-gray-200 h-screen py-28 rounded-lg ">
      <h1 className="text-2xl mb-4">Select User to Remove</h1>
      <div className="flex gap-5 justify-center items-center">
        <select
          className="px-4 py-2  rounded"
          onChange={(e) => setSelectedUserId(parseInt(e.target.value))}
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.phone})
            </option>
          ))}
        </select>
        <button
          className="bg-red-600 text-gray-100 hover:bg-red-700 px-4 py-2 rounded"
          onClick={handleRemoveClick}
        >
          Remove User
        </button>
        <button
          className="bg-gray-600 text-gray-100 hover:bg-gray-700 px-4 py-2 rounded "
          onClick={handleClosePage2}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RemoveUser;
