import { Flex, Layout } from 'antd';
import CustomHeader from './CustomHeader';
import CommentSection from './CommentSection';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  return (
    <Layout>
        <CustomHeader/>
            <Content>
            <CommentSection/>
            </Content>
        <Footer/>
    </Layout>
  )
}

export default Home