import { useMemo } from "react"
import { NavLink } from "react-router-dom"

import SignTemplate from "../Generics/SignTemplate"

import { EMAIL_REGEX } from "../../utils/globalConstants"

import getTranslation from "../../utils/getTranslation"

import useForm from "../../hooks/useForm"

import {
  Button,
  Flex,
  Select,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack, 
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react"

import {
  EmailIcon, 
  LockIcon,
} from "@chakra-ui/icons"
import {
  FaUserAlt,
  FaFlag,
} from "react-icons/fa"

const initialForm = {
  firstname : "",
  lastname : "",
  email: "",
  password: "",
  language_key: "en",
}

export default function Signup({ signup }) {

  const { form, onChangeInput } = useForm(initialForm)

  const translation = useMemo(() => getTranslation(form?.language_key),[form?.language_key])

  function onSignup() {
    const emailExist = form?.email && form?.email.length > 0
    const emailHaveGoodShape = emailExist && EMAIL_REGEX.test(form.email)

    const passwordExist = form?.password && form?.password.length > 0

    if(!emailHaveGoodShape || !passwordExist){
      return;
    }
    
  }
  return (
    <SignTemplate>
      <Flex mb="55" direction="column" align="center"> 
        <Heading mb="15">{translation.CRYPTO_APP}</Heading>
        <Text fontSize="1.2rem" fontStyle="italic">{translation.SIGNUP.SIGN_UP_NOW}</Text>
      </Flex>

      <Stack spacing="4" display="flex" align="center">
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaUserAlt} color='white'/>} />
          <Input 
            type='email' 
            placeholder={`${translation.FIRSTNAME}*`}
            onChange={e => onChangeInput(e, "firstname")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaUserAlt} color='white'/>} />
          <Input 
            type='email' 
            placeholder={translation.LASTNAME} 
            onChange={e => onChangeInput(e, "lastname")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<EmailIcon color='white'/>} />
          <Input 
            type='email' 
            placeholder={`${translation.EMAIL}*`}
            onChange={e => onChangeInput(e, "email")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<LockIcon color='white'/>} />
          <Input 
            type='password' 
            placeholder={`${translation.PASSWORD}*`}
            onChange={e => onChangeInput(e, "password")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaFlag} color='white'/>} />
          <Select isFullWidth borderRadius="0 0.375rem 0.375rem 0"
            onChange={e => onChangeInput(e, "language_key")}
            defaultValue="en"
          >
            <option value="en">{translation.EN}</option>
            <option value="fr">{translation.FR}</option>
          </Select>
        </InputGroup>

        <Flex direction="column" justify="center" align="center">
          <Text>{translation.SIGNUP.ALREADY_HAVE_AN_ACCOUNT}</Text>
          <Text textDecoration="underline" fontStyle="italic">
            <NavLink to="/login">{`${translation.LOGIN.LOGIN}...`} </NavLink>
          </Text>
        </Flex>
      </Stack>

      <Button w="200px" colorScheme="yellow" color="white">
        {translation.LOGIN.REGISTER}
      </Button>
    </SignTemplate>
  )
}
