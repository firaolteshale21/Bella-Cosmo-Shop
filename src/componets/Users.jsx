import React, { useState } from "react";
import UpdateUser from "./UpdateUser";

const ProductManagement = ({ handleClosePage }) => {
  const [activePage, setActivePage] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, name: "Abebe", phone: "+251964783457" },
    { id: 2, name: "Meron", phone: "+251927363457" },
    { id: 3, name: "Jhon", phone: "+251927363457" },
  ]);

  const handleRemoveUser = (userId) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this user?"
    );
    if (confirmRemove) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  const handleUpdateUserClick = (userId) => {
    setActivePage({ type: "updateUser", userId });
  };

  const handleClosePage2 = () => {
    setActivePage(null);
  };

  return (
    <div className="bg-gray-200">
      {activePage === null ? (
        <div className="bg-gray-200 min-h-screen container-users m-6 rounded-3xl p-9">
          <div className="flex justify-between items-center gap-10  mb-4">
            <div className=" text-gray-900  inline-block  text-4xl  w-1/5  ">
              <h1 className="users-heading">USERS</h1>
            </div>

            <div className="flex justify-end hover:text-gray-700">
              <button onClick={handleClosePage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {users.map((user) => (
            <div
              key={user.id}
              className="bg-blue-100 mb-12 shadow-md rounded-2xl overflow-hidden flex justify-between p-10 pr-16 user-container"
            >
              <div className="flex flex-col gap-4 users-detail">
                <h1 className="text-4xl text-left text-gray-900 user-name">
                  {user.name}
                </h1>
                <p className="text-2xl text-left text-gray-700 user-phone">
                  {user.phone}
                </p>
              </div>
              <div className="flex flex-col gap-3  w-2/5 self-center btn-user">
                <div
                  className="bg-yellow-600 text-gray-100 hover:bg-yellow-700 inline-block py-2 text-2xl rounded-2xl cursor-pointer shadow-md  w-3/4 self-end update-user"
                  onClick={() => handleUpdateUserClick(user.id)}
                >
                  <h1>Update User</h1>
                </div>
                <div
                  className="bg-red-600 text-gray-100 hover:bg-red-700 inline-block py-2 text-2xl rounded-2xl cursor-pointer shadow-md update-user w-3/4 self-end remove-user"
                  onClick={() => handleRemoveUser(user.id)}
                >
                  <h1>Remove User</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : activePage.type === "updateUser" ? (
        <UpdateUser
          userId={activePage.userId}
          handleClosePage2={handleClosePage2}
        />
      ) : null}
    </div>
  );
};

export default ProductManagement;
