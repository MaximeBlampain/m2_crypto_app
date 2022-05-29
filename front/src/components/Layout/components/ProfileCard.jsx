import {useState} from "react";
import {
  Avatar,
  Button,
} from "@chakra-ui/react";

export default function ProfileCard({ userName }){
  return (
    <Button colorScheme="yellow">
      <Avatar mr="3" size='sm' name={userName} />
      {userName}
    </Button>
  )
}