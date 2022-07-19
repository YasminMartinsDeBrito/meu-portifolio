// import "../styles.css"

import { Container, ListItem, UnorderedList } from "@chakra-ui/react"

export const Header  = () => {
    return(
        <>
         <Container
         m='0'
         w='100vw'
         h='80px'
         bg='
         #369046'
         >
                <UnorderedList
                display='flex'
                justifyContent='space-around'
                listStyleType='none'
                pt='25px'
                >
                    <ListItem
                    border='1px solid #000'
                    p='5px 10px'
                    borderRadius='6px'
                    cursor='pointer'
                    bg='#8ae461'
                    >
                        <a href="#about">About</a>
                    </ListItem>
                    <ListItem 
                    border='1px solid #000'
                    p='5px 10px'
                    borderRadius='6px'
                    cursor='pointer'
                    bg='#8ae461'
                    >
                        <a href="#skills">Skill</a>
                    </ListItem>
                    <ListItem border='1px solid #000'
                    p='5px 10px'
                    borderRadius='6px'
                    cursor='pointer'
                    bg='#8ae461'
                    >
                        <a href="#projects">Projects</a>
                    </ListItem>
  
                </UnorderedList>
        </Container>
        </>
    )
}