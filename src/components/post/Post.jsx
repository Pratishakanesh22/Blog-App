import "./post.css"
import { Link } from "react-router-dom"

export default function Post  ()  {
  return (
    <div className ="post">
      <Link to='/post/:postID'><img className="postImg" src="pp2.jpg" alt="" /></Link>
      <div className= "postInfo">
        <div className="postCats">
            
            <span className="postCat">Music</span>
<span className="postCat">Life</span>
<span className="postCat">health</span>
<span className="postCat">Love</span>
<span className="postCat">Nature</span>
      </div>
    
        
        <span calssName="postTitle">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
</span>

<hr/>
<span className="postDate">1 hr ago</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime itaque? Eveniet, voluptatibus iure doloremque excepturi perferendis, magnam incidunt suscipit aspernatur qui eius quia, non debitis dignissimos aut similique temporibus.</p>
      </div>
  )
}



