import React, { useEffect, useState } from "react";
import httpClient from "./httpClient";


function LoggedUser(user, logoutUser){
  return <div>
            <h2>Logged in {user}</h2>
            <h3>ID: {user.id}</h3>
            <h3>Email: {user.email}</h3>

            <button onClick={logoutUser}>Logout</button>
          </div>
}

function UnLoggedUser(){
  return <div>
            <p>You are not logged in</p>
            <div>
              <a href="/login">
                <button>Login</button>
              </a>
            </div>
          </div>
}

function Home(){
    const [user, setUser] = useState("");

    const logoutUser = async () => {
        await httpClient.post("//localhost:5000/logout");
        window.location.href = "/";
    };

    console.log('user: ' + user)
    const status = (user) ? LoggedUser(user, logoutUser) : UnLoggedUser();

    useEffect(() => {
        (async () => {
        try {
            const resp = await httpClient.get("//localhost:5000/@me");
            setUser(resp.data);
        } catch (error) {
            console.log("Not authenticated");
        }
        })();
    }, []);

  return (
    <div>
      <h1>Welcome to this React Application</h1>
      {/* will check if user is logged in or not */}
      {status}
    </div>

    

  );


};

export default Home;