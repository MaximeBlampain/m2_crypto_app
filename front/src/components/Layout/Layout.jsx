import {Flex} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({
  children,
}) {
  return (
    <Flex id="layout_container">
      <Sidebar />
      <Flex direction="column">
        <Header />
        { children }
      </Flex>
    </Flex>
  )
}