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
        console.log(resp)
        setComments(resp);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, []);

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Row gutter={16}>
            {comments.map((comment, key)=>{
                return (<Col key={key}>{CommentCard(comment)}</Col> )
            })}
        </Row>
    </div>
  ) 
}

export default CommentSection