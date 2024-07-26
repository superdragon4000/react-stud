import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function addNewPost(e) {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">
      <form>
        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="название поста" />
        <MyInput type="text" placeholder="описание поста" />
        <MyButton onClick={e => addNewPost(e)}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
