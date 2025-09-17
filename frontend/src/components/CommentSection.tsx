import { useEffect, useState } from 'react'
import { getComments } from '../services/api';
import { Col, Row } from 'antd';
import type { Comment as CommentType } from '../types/Comments'; // TypeScript interface
import CommentCard from './CommentCard';

function CommentSection() {
    const [comments, setComments] = useState<CommentType[]>([]);

    // get all comments
    useEffect(() => {
    const fetchComments = async () => {
      try {
        const resp = await getComments();
        setComments(resp);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, []);

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "80vw", margin: "2rem auto"}}>
        <Row gutter={16}>
            {comments.map((comment, key)=>{
                return (<Col span={24} key={key}>{<CommentCard comment={comment} />}</Col> )
            })}
        </Row>
    </div>
  ) 
}

export default CommentSection