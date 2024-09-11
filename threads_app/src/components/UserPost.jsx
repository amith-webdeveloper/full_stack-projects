import { Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const UserPost = () => {
  return (
    <Link to={"/markzuckerberg/post/1"}>
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={"column"} ></Flex>

        </Flex>
    </Link>
  )
}

export default UserPost

// 46:47