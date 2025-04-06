import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [posts, setPosts] = useState([]);
  const friends = ['Siddharth', 'Apoorv', 'Shanky', 'Gaurav'];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async (content) => {
    try {
      const response = await axios.post(`${API_URL}/posts`, { content });
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleLike = async (postId, friendName) => {
    try {
      const response = await axios.post(`${API_URL}/posts/${postId}/like`, {
        friendName
      });
      setPosts(posts.map(post =>
        post._id === postId ? response.data : post
      ));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Facebook Lite</h1>
      </header>
      <div className="main-content">
        <main>
          <CreatePost onCreatePost={handleCreatePost} />
          <PostList
            posts={posts}
            onLike={handleLike}
            friends={friends}
          />
        </main>
        <Sidebar friends={friends} />
      </div>
    </div>
  );
}

export default App;
