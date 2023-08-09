import React, { useState, useEffect, useCallback } from "react";
import getUser from "./helpers/getUser";
import getPosts from "./helpers/getPosts";

// const initialUser = {
//     name: "Luis",
//     email: "correo@correo.com"
// }

// const initalPosts = [
//     { id: 1, title: "Post 1"},
//     { id: 2, title: "Post 2"},
// ]

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setsPosts] = useState([]);

  const updateUser = () => {
    getUser().then((newUser) => {
      console.log('newUser', newUser);  
      setUser(newUser);
    });
  };

  const updatePosts = useCallback(() => {
    getPosts(user.id).then((newPosts) => {
      console.log('newPosts', newPosts);  
      setsPosts(newPosts);
    });
  }, [user.id]);

  useEffect(() => {
    console.log("useEffect user []");
    updateUser();
  }, []);

  useEffect(() => {
    console.log("useEffect posts [user, updatePosts]");
    if (user?.id) {
      updatePosts();
    }
  }, [user, updatePosts]);

  return (
    <div>
      <button onClick={updateUser}>Another User</button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <br />
      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCard;
