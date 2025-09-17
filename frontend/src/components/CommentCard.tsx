import { Card } from "antd"
import type { Comment } from "../types/Comments"


const CommentCard = (comment: Comment) => {
  return (
    <Card title={comment.author} variant="borderless">
        {comment.text}
      </Card>
  )
}

export default CommentCard