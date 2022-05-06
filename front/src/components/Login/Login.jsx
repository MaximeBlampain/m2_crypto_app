import { useMemo } from "react"
import { NavLink } from "react-router-dom"

import SignTemplate from "../Generics/SignTemplate"

import { EMAIL_REGEX } from "../../utils/globalConstants"

import getTranslation from "../../utils/getTranslation"

import useForm from "../../hooks/useForm"

import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack, 
  Text,
} from "@chakra-ui/react"
import {
  EmailIcon, 
  LockIcon,
} from "@chakra-ui/icons"


const initialForm = {
  email: "",
  password: "",
}

export default function Login({ login }) {

  const { form, onChangeInput } = useForm(initialForm)
  
  const translation = useMemo(() => getTranslation("en"),[])

  function onLogin() {
    const emailExist = form?.email && form?.email.length > 0
    const emailHaveGoodShape = emailExist && EMAIL_REGEX.test(form.email)

    const passwordExist = form?.password && form?.password.length > 0

    if(!emailHaveGoodShape || !passwordExist){
      return;
    }
    
  }

  return (
    <SignTemplate>
      <Heading mb="55"> {translation.CRYPTO_APP}</Heading>

      <Stack spacing="4" display="flex" align="center">
        <InputGroup w="200">
          <InputLeftAddon bg="yellow.400" children={<EmailIcon color='white'/>} />
          <Input 
            type='email' 
            placeholder={translation.EMAIL} 
            onChange={e => onChangeInput(e, "email")}
          />
        </InputGroup>
        <InputGroup w="200">
          <InputLeftAddon bg="yellow.400" children={<LockIcon color='white'/>} />
          <Input 
            type='password' 
            placeholder={translation.PASSWORD} 
            onChange={e => onChangeInput(e, "password")}
          />
        </InputGroup>

        <Flex direction="column" justify="center" align="center">
          <Text>{translation.LOGIN.NO_ACCOUNT}</Text>
          <Text textDecoration="underline" fontStyle="italic">
            <NavLink to="/signup">{`${translation.LOGIN.REGISTER}...`} </NavLink>
          </Text>
        </Flex>
      </Stack>

      <Button w="200px" colorScheme="yellow" color="white">
        {translation.LOGIN.LOGIN}
      </Button>
    </SignTemplate>
  )
}