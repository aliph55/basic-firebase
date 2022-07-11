import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import { UserAuth } from "./../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [postTset, setPostTest] = useState("");
  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postTset,
      author: {
        name: user.displayName,
        id: user.uid,
      },
    });
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center  items-center">
      <div className="bg-black relative w-[320px] h-[300px] text-white rounded-xl flex flex-col justify-around">
        <label className=" absolute top-[-30px] left-[30%] text-red-500 text-xl font-bold pt-1">
          Create a Post
        </label>
        <div className="flex flex-col pt-2 mx-2">
          <label>Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title..."
            className="rounded px-2 text-black"
          />
        </div>
        <div className="flex flex-col mx-2 flex-1">
          <label>Post: </label>
          <textarea
            onChange={(e) => setPostTest(e.target.value)}
            type="text"
            className="flex-1 rounded px-2 text-black"
            placeholder="Title..."
          />
        </div>
        <button
          onClick={createPost}
          className="m-2 bg-white text-black rounded font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
