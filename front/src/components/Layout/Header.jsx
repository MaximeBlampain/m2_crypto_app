import {NavLink} from "react-router-dom";
import {Button, Flex, Center} from "@chakra-ui/react";

import ProfileCard from "./components/ProfileCard";

export default function Header({ translation, onLogout }) {
  return(
    <Flex 
      p="5"
      bg="#353535"
      justifyContent="space-between"
    >
      <Center 
        color="yellow.400" 
        fontWeight="bold" 
        fontSize="2xl"
      >
        {translation.CRYPTO_APP}
      </Center>
      <NavLink to="/" >
        <Button colorScheme="yellow">{translation.DASHBOARD}</Button>
      </NavLink>
      <NavLink to="/wallet">
        <Button colorScheme="yellow">{translation.CRYPTO_APP}</Button>
      </NavLink>
      <NavLink to="/profile">
        <ProfileCard />
      </NavLink>
      <Button 
        colorScheme='red' 
        onClick={onLogout}
      >
        {translation.DISCONNECT}
      </Button>
    </Flex>
  )
}