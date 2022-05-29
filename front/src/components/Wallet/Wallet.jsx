
import {
  Flex,
  Text,
  Button,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react"

export default function Wallet() {

  return (
    <Flex
      p="50"
      h="calc(100vh - 80px)"
      direction="column"
      align="center"
    >
      <Text as="b" fontSize="2xl"> PORTEFEUILLE </Text>
      <Flex width="100%" justify="flex-end">
        <Button borderRightRadius="0" colorScheme="yellow"> Ajouter une monnaie</Button>
        <Button borderLeftRadius="0" colorScheme="red"> Supprimer une monnaie</Button>
      </Flex>
      <TableContainer mt="10" >
        <Table variant="striped" colorScheme="yellow">
          <Thead>
            <Tr>
              <Th> SYMBOLE </Th>
              <Th> PRIX D'ACHAT </Th>
              <Th> EVOL 7 JOURS </Th>
              <Th> EVOL 24H </Th>
              <Th> PRU </Th>
              <Th> VALEUR DANS LE PORTEFEUILLE </Th>
              <Th> ACTIONS </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td> SYMBOLE </Td>
              <Td> PRIX D'ACHAT </Td>
              <Td> EVOL 7 JOURS </Td>
              <Td> EVOL 24H </Td>
              <Td> PRU </Td>
              <Td> VALEUR DANS LE PORTEFEUILLE </Td>
              <Td> ACTIONS </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
    
  )
}
