import { Avatar } from "antd"
import type { Comment } from "../types/Comments"
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editComment } from "../services/api";


function convertToCleanTime(datetime: string): string {
  const dateObject = new Date(datetime);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

interface Props {
  comment: Comment;
}



const CommentCard: React.FC<Props> = ({ comment }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(comment.likes);

    async function handleLike(){
      const change_factor: number = liked == false ? 1 : -1
      setLiked(!liked);
      setLikeCount(likeCount + change_factor)
      
      if (!comment.id){
        console.error("Couldn't write to DB because ID is null")
        return
      }
      await editComment(comment.id, {"likes": likeCount + change_factor});
    
    }

    return (
    <div
      style={{
        backgroundColor: "#f1f1f1", // YouTube uses light gray
        padding: "1rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        width: "50rem",
        borderRadius: "15px",
        marginBottom: "1rem", // spacing between comments
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Head: avatar + author + date */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {comment.image == "" ? <Avatar>{comment.author[0]}</Avatar> : <Avatar src={comment.image}/>}
          <span style={{ fontWeight: "bold" }}>{comment.author}</span>
        </div>
        <span style={{ fontSize: "0.8rem", color: "#555" }}>{convertToCleanTime(comment.date)}</span>
      </div>

      <div>
        <p style={{ margin: 0 }}>{comment.text}</p>
      </div>
      <div style={{display: "flex", justifyContent: "end"}}>
      <span style={{ margin: "0 10px" }}>{likeCount}</span>
       <button onClick={() => handleLike()}>
          {liked ? <LikeFilled/> : <LikeOutlined/>}
        </button>
        
      </div>
    </div>
  
  )
}

export default CommentCard