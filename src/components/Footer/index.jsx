import { Box, Container, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"

export const Footer = () => {

    const opcoes = [
        {'id':1,
         'name':'MENU',
         'opt':[
            {'id':1,
             'name':'Home',
             'contato':''
            },
            {'id':2,
            'name':'Quem sou',
            'contato':''
            },
            {'id':3,
            'name':'O que faço',
            'contato':''
            },
            {'id':4,
            'name':'Portifólio',
            'contato':''
            },
            {'id':5,
            'name':'Contato',
            'contato':''
            },]
        },
        {'id':2,
         'name':'REDES SOCIAIS',
         'opt':[
            { 'id':1,
              'name':'Instagram',
              'contato':'https://www.instagram.com/yasminh.marcelino/'
            },
            { 'id':1,
              'name':'Linkedin',
              'contato':'https://www.linkedin.com/in/yasminmarcelino/'  
            },
            { 'id':1,
              'name':'GitHub',
              'contato':'https://github.com/YasminMartinsDeBrito'    
           }
         ]
        },
        {'id':3,
         'name':'CONTATOS',
         'opt':[
            {'id':1,
             'name':'Celular/WhatsApp',
             'contato':'19 9 9149-5069'
            },
            {'id':2,
             'name':'Email',
             'contato':'yasminmartinsdebrito@gmail.com'
            }
         ]
        }
    ] 

     
    return(
        <Container bg='#000' color='#fff'>
            <UnorderedList>
                {opcoes.map((item)=> (
                    <ListItem listStyleType='none' key={item.id}>
                        <Text>{item.name}</Text>
                        <Box>
                            {item.opt.map((item) => (
                                <ListItem>
                                   <Text>{item.name}</Text> 
                                   <Link href={item.contato}>{item.contato}</Link>
                                </ListItem>
                            ))}
                        </Box>
                    </ListItem>
                ))}
            </UnorderedList>
        </Container>
    )
}