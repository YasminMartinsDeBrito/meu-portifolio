import {
  Box,
  Container,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const Projects = () => {
  const myProjects = [
    {
      id: 1,
      name: "Jogo Bola8",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/jogo-de-azar-YasminMartinsDeBrito",
      deploy:
        "https://kenzie-academy-brasil-developers.github.io/jogo-de-azar-YasminMartinsDeBrito",
      img: "https://cf.shopee.com.br/file/fbdb8214e590f4f678e9adcb85a42340",
    },
    {
      id: 2,
      name: "Clone Instagram",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/rede-social-sprint-2-YasminMartinsDeBrito",
      deploy:
        "https://kenzie-academy-brasil-developers.github.io/rede-social-sprint-2-YasminMartinsDeBrito/",
      img: "https://camo.githubusercontent.com/59da733aebf4815adebda2792045f33e41a80b66d3afd4ae1f9ac30cc7c7e9dd/68747470733a2f2f66696c65732d6b656e7a69652d61636164656d792d62726173696c2e73332e616d617a6f6e6177732e636f6d2f71312f737072696e74322f656e74726567612d457374696c697a61722d756d2d4c61796f75742d64652d756d612d706c617461666f726d612d64652d73747265616d696e672f726174696e672d7374796c697a652d65787472612d736f6369616c2d6e6574776f726b2e706e67",
    },
    {
      id: 3,
      name: "ApexCharts",
      github: "https://github.com/YasminMartinsDeBrito/minehr",
      deploy: "https://minehr.herokuapp.com/",
      img: "https://i1.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/definicao-de-grafico.jpg?fit=750%2C405&ssl=1",
    },
    {
      id: 4,
      name: "Rick and Morty",
      github: "https://github.com/YasminMartinsDeBrito/azs-web-rickandmorty",
      deploy:
        "https://azs-web-rickandmorty-1umqz9c0m-yasminmartinsdebrito.vercel.app/",
      img: "https://br.web.img3.acsta.net/pictures/17/11/06/14/13/5164749.jpg?coixp=50&coiyp=47",
    },
    // { 'id':5,
    //   'name':'',
    //   'github': '',
    //   'deploy': '',
    //   'img':'' ,
    // },
    // { 'id':6,
    //   'name':'',
    //   'github': '',
    //   'deploy':'' ,
    //   'img': '',
    // },
    // { 'id':7,
    //   'name':'',
    //   'github': '',
    //   'deploy': '',
    //   'img':'' ,
    // },
    // { 'id':8,
    //   'name':'',
    //   'github':'' ,
    //   'deploy':'' ,
    //   'img':'' ,
    // },
  ];

  return (
    <Container>
      <UnorderedList
        display="flex"
        overflowX="auto"
        scrollBehavior="smooth"
        h="300px"
      >
        {myProjects.map((project) => (
          <ListItem
            listStyleType="none"
            bg="#ddd"
            p="10px"
            m="10px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            key={project.id}
          >
            <Box>
              <Image w="150px" h="150px" src={project.img} alt={project.name} />
            </Box>
            <Box  display="block" textAlign="center" p="5px" borderRadius="10px">
              <Text fontSize="1.2rem" fontWeight="bold" m="10px 0">
                {project.name}
              </Text>
              <Link
                border="1px solid #000"
                p='5px'
                borderRadius='6px'
                textDecoration="none"
                fontSize="1.2rem"
                m="10px"
                target="_blank"
                href={project.deploy}
              >
                Vercel
              </Link>
              <Link
                border="1px solid #000"
                p='5px'
                borderRadius='6px'
                textDecoration="none"
                fontSize="1.2rem"
                m="10px"
                target="_blank"
                href={project.github}
              >
                GitHub
              </Link>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
};
