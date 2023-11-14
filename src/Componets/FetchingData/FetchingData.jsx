import { useEffect } from "react";
import { useState } from "react";

const apiUrl = "https://api.chucknorris.io/jokes/random";
const githubApi = "https://api.github.com/users";
function FetchingData() {
  const [jokes, setJokes] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchJokes = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setJokes(data.value));
  };

  const fetchUsers = () => {
    fetch(githubApi)
      .then((response) => response.json())
      .then((info) => setUsers(info));
  };

  useEffect(() => {
    fetchJokes();
    fetchUsers();
  }, []);

  console.log(jokes);
  console.log(users);
  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      <p>{jokes}</p>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <div>
            <h3>{user.login}</h3>
            <p>{user.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchingData;
