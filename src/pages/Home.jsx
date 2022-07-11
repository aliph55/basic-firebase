import { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { UserAuth } from "./../context/AuthContext";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const getCollectionRef = collection(db, "posts");
  const getPost = async () => {
    const data = await getDocs(getCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getPost();
  }, []);

  const { user } = UserAuth();

  const deletePost = async (id) => {
    console.log("ID ", id);
    const postDoc = doc(db, "posts", id);
    try {
      await deleteDoc(postDoc);
      await getPost();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBtn = (id, postId) => {
    return (
      id === user.uid && (
        <button
          onClick={() => deletePost(postId)}
          className="p-2 rounded-lg bg-[#0b0b0b] text-[#ffffff] shadow-xl"
        >
          Delete
        </button>
      )
    );
  };

  return (
    <div className="pt-12 flex flex-col items-center">
      {postList.map((post) => {
        return (
          <div className="py-4 w-full scroll-auto mx-auto" key={post.id}>
            <div className="bg-gray-100 rounded-xl shadow-xl p-4 w-[450px] mx-auto mt-8">
              <div className="flex items-center justify-between">
                <div className="p-4 text-3xl font-bold">
                  <h2>{post.title}</h2>
                </div>
                <div className="">
                  {user && deleteBtn(post.author.id, post.id)}
                </div>
              </div>
              <div className="h-[350px] overflow-y-scroll">
                <p className="font-bold">{post.postTset}</p>
              </div>
              <div className="bg-gray-200 h-[2px] mt-2" />
              <div className="">
                <p className="font-bold pt-2">@{post.author.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
