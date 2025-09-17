import { Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
const { Title, Paragraph, Text, Link } = Typography;

import React from 'react'

function CustomHeader() {
  return (
    <Header style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height:"18vh",
  }}>
    <Typography>
        <Title style={{color:"white"}}>Bobyard Chatroom</Title>
        <Paragraph style={{color:"white"}}>How are you building applications at Bobyard?</Paragraph>
    </Typography>
        
    </Header>
  )
}

export default CustomHeader