import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return <>
    <UserHeader />
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about threads." />
    <UserPost likes={451} replies={23} postImg="/post2.png" postTitle="nice tutorial." />
    <UserPost likes={482} replies={92} postImg="/post3.png" postTitle="I love this guy." />
  
    <UserPost likes={927} replies={188} postTitle="This is my first thread." />
  
  </>
}

export default UserPage