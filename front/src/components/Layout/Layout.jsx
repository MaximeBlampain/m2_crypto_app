import { useMemo } from "react"
import { Flex } from "@chakra-ui/react"

import Header from "./Header"

import getTranslation from "../../utils/getTranslation"

export default function Layout({
  children,
  LANGUAGE_KEY,
  onLogout,
}) {
  const translation = useMemo(() => getTranslation(LANGUAGE_KEY),[LANGUAGE_KEY])
  
  return (
    <Flex id="layout_container" direction="column">
      <Header 
        translation={translation} 
        onLogout={onLogout}
      />
      {children}
    </Flex>
  )
}