import "./posts.css"
import Post from "../post/Post"
import { BrowserRouter, Routes,Route,Link } from "react-router-dom"

export default function Posts  () {
  return (
    <div className="posts">
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </div>
  )
}
