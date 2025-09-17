import { Avatar } from "antd"
import type { Comment } from "../types/Comments"

function convertToCleanTime(datetime: string): string {
  const dateObject = new Date(datetime);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const CommentCard = (comment: Comment) => {
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

      {/* Body: comment text */}
      <div>
        <p style={{ margin: 0 }}>{comment.text}</p>
      </div>
    </div>
  
  )
}

export default CommentCard