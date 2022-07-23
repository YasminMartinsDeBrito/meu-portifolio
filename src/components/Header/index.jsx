// import "../styles.css"

import { Container, Link, ListItem, UnorderedList } from "@chakra-ui/react"

export const Header  = () => {

    const headerList = [
        'About', 'Skill', 'Projects'
    ]
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
                    {headerList.map((item, index) => (
                    <ListItem key={index} border='1px solid #000'
                    p='5px 10px'
                    borderRadius='6px'
                    cursor='pointer'
                    bg='#8ae461'>
                       <Link href={`#${item}`}>{item}</Link>
                    </ListItem>))}
                    
                </UnorderedList>
        </Container>
        </>
    )
}