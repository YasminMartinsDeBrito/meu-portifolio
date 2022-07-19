import yasmin from "../../assets/yasmin.jpg";

import { Avatar, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

export const About = () => {
  return (
    <div id="about">
      <Wrap>
        <WrapItem display="flex" flexWrap="wrap" justifyContent="center">
          <Avatar
            borderRadius="50%"
            w="300px"
            h="320px"
            m="50px auto"
            name="yasmin"
            src={yasmin}
            alt="yasmin"
          />
          <Box
            w="50%"
            m="15px"
            display="flex"
            flexDirection="column"
          >
            <Text fontSize="50px">Yasmin Martins de Brito Marcelino</Text>
            <Text fontSize='30px' fontWeight='700' m='20px 0 '>Desenvolvedora Front End</Text>
            <Text fontSize="20px" mt="15px">
              Meu contato com tecnologia começou quando eu tinha 8 anos, quando
              vi pela primeira vez uma chamada de vídeo pelo computador e fiquei
              impressionada com a tecnologia, nunca tinha visto uma coisa tão
              maravilhosa como aquela.
            </Text>
            <Text fontSize="20px" mt="15px">
              Foi então que eu quis aprender mais e logo após terminar o ensino
              médio, comecei a faculdade de
              <strong> Análise e Desenvolvimento de Sistemas </strong>.
              Atualmente estou me especializando na área de desenvolvimento.
              Meus objetivos são ingressar no mercado de trabalho, aperfeiçoar
              minha técnicas, crescer junto com a empresa e quem sabe ser
              referência para outras mulher que também querem entrar nessa área.
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#369046"
          fill-opacity="1"
          d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,208C672,181,768,139,864,112C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      
        ></path>
      </svg>

      <div className="resume"></div>
    </div>
  );
};
