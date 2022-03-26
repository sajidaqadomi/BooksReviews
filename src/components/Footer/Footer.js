import { Link } from '@material-ui/core'
import React from 'react'

import Container from '../Container'
import { CategoryItems, FooterContainer, FooterContent, FooterItem, FooterList, ListItem, Title } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterContent>
                    <FooterItem>
                        <Title>navigation</Title>
                        <FooterList className='navigation'>
                            <ListItem><Link>Home</Link></ListItem>
                            <ListItem><Link>Books</Link></ListItem>
                            <ListItem><Link>Reviess</Link></ListItem>
                            <ListItem><Link>News</Link></ListItem>
                            <ListItem><Link>Contacts</Link></ListItem>
                        </FooterList>

                    </FooterItem>
                    <FooterItem className='center'>
                        <Title>categories</Title>
                        <CategoryItems>
                            <FooterList>
                                <ListItem><Link>Art</Link></ListItem>
                                <ListItem><Link>Biography</Link></ListItem>
                                <ListItem><Link>Business</Link></ListItem>
                                <ListItem><Link>chick list</Link></ListItem>
                                <ListItem><Link>children's</Link></ListItem>
                                <ListItem><Link>christian</Link></ListItem>
                                <ListItem><Link>classics</Link></ListItem>
                                <ListItem><Link>comics</Link></ListItem>
                            </FooterList>
                            <FooterList className='centerCats'>
                                <ListItem><Link>conetemporay</Link></ListItem>
                                <ListItem><Link>cookbooks</Link></ListItem>
                                <ListItem><Link>ebooks</Link></ListItem>
                                <ListItem><Link>Fantasy</Link></ListItem>
                                <ListItem><Link>fiction</Link></ListItem>
                                <ListItem><Link>Gray and lesbian</Link></ListItem>
                                <ListItem><Link>graohic novels</Link></ListItem>
                            </FooterList>
                            <FooterList >
                                <ListItem><Link>historical fiction</Link></ListItem>
                                <ListItem><Link>history</Link></ListItem>
                                <ListItem><Link>hummer and comedy</Link></ListItem>
                                <ListItem><Link>manage</Link></ListItem>
                                <ListItem><Link>memoir</Link></ListItem>
                                <ListItem><Link>music</Link></ListItem>
                            </FooterList>
                        </CategoryItems>


                    </FooterItem>
                    <FooterItem>
                        <Title>follow us</Title>
                        <FooterList className='media'>
                            <ListItem className='mediaLink'><Link>facebook</Link></ListItem>
                            <ListItem className='mediaLink'><Link>twitter</Link></ListItem>
                            <ListItem className='mediaLink'><Link>RSS</Link></ListItem>
                        </FooterList>
                    </FooterItem>

                </FooterContent>
            </Container>
        </FooterContainer>
    )
}

export default Footer