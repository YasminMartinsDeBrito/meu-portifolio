import {
  Box,
  Container,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const Skill = () => {
  const skills = [
    {
      id: 1,
      name: "javascript",
      img: "https://logospng.org/download/javascript/logo-javascript-1024.png",
    },
    {
      id: 2,
      name: "HTML5",
      img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/167_Html5_logo_logos-512.png",
    },
    {
      id: 3,
      name: "CSS3",
      img: "https://logospng.org/download/css-3/logo-css-3-2048.png",
    },
    {
      id: 4,
      name: "React.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      id: 5,
      name: "Api Rest",
      img: "https://images.velog.io/images/hjkdw95/post/ca8c63d9-66c3-42da-8fb2-79f3a27c6876/api_rest.png",
    },
    {
      id: 6,
      name: "Styled-components",
      img: "https://cdn.worldvectorlogo.com/logos/styled-components-1.svg",
    },
    {
      id: 7,
      name: "Node.js",
      img: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
    },
    {
      id: 8,
      name: "Git",
      img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      id: 9,
      name: "Chakra UI",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 10,
      name: "PostgreSQL",
      img: "https://brandlogos.net/wp-content/uploads/2021/11/postgresql-logo-512x512.png",
    },
    {
      id: 11,
      name: "Context API",
      img: "https://blog.azagatti.dev/static/209c7bf9d82339f86090771a3e4da9ef/07a9c/banner.png",
    },
  ];

  return (
    <Container bg="#e5a0a0">
      <UnorderedList
        display="flex"
        overflowX="auto"
        scrollBehavior="smooth"
        h="150px"
      >
        {skills.map((item) => (
          <ListItem
            listStyleType="none"
            bg="#ddd"
            p="10px"
            w="120px"
            h="120px"
            m="10px"
            key={item.id}
          >
            <Box>
              <Image
                bg="#d806d833"
                w="100%"
                h="100%"
                objectFit="cover"
                src={item.img}
                alt={item.name}
              />
            </Box>
            <Box
              h="140px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text display='block' textAlign='center' p='5px'>{item.name}</Text>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
};
