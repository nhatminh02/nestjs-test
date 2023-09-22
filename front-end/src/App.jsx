import { useState } from "react";
import { createUser, deleteUser, fectchUsers, updateUser } from "./api";
// import { useQuery } from "@tanstack/react-query";
function App() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  /*const { isLoading, isError, data, refetch } = useQuery(
    ["get-users"],
    () => {
      return fectchUsers();
    },
    { enabled: false }
  );*/

  // console.log("Loading", isLoading);
  // console.log("Error", isError);
  // console.log("Data", data);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleFetchUsers = async () => {
    const { data } = await fectchUsers();
    setUsers(data);
  };

  const handleUpadteUsers = async () => {
    updateUser(id, { name, email });
  };
  const handleDeleteUsers = () => {
    deleteUser(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ id, name, email });
  };
  console.log(users);
  return (
    <>
      <form>
        <label>Id</label>
        <input type="number" onChange={handleId} />
        <br />
        <label>Name</label>
        <input type="text" onChange={handleName} />
        <br />
        <label>Email</label>
        <input type="email" onChange={handleEmail} />
      </form>
      <div className="btn-container">
        <button type="submit" onClick={handleSubmit}>
          Add user
        </button>
        <button onClick={handleFetchUsers}>Fetch users</button>
        <button onClick={handleUpadteUsers}>Upadate users</button>
        <button onClick={handleDeleteUsers}>Delete users</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
