import styledComponents from "styled-components";
import colors from "../../config/colors";

export const FooterContainer = styledComponents.footer`
 padding:18px 0 12px 0;
 background:${colors.dark};
 @media (min-width:1024px) {
    padding:24px 0 12px 0;
    
    }
`;
export const FooterContent = styledComponents.div`
display:flex;
flex-direction: column;
@media (min-width:1024px) {
    flex-direction: row;
    
    }

 
`;
export const FooterItem = styledComponents.div`
width:100%;
margin-bottom: 16px;
@media (min-width:1024px) {
    margin-bottom: 0;
    flex:1;
    &.center{
        flex:3;
    }

    
    }
 
`;
export const Title = styledComponents.h4`
text-align:center;
color:${colors.white};
text-transform: uppercase;
margin-bottom: 16px;
@media (min-width:1024px) {
    text-align:left;
}

 `;
export const CategoryItems = styledComponents.div`
display: flex;
justify-content: center;
width:75%;
margin:auto;
& .centerCats{
    flex:2;
    margin:0 16px;
}
@media (min-width:1024px) {
    width:100%;
   
    & .centerCats{
        flex:1;
        margin:0 
    }
    
    
    }
`;
export const FooterList = styledComponents.ul`
list-style-type: none;
display: flex;
flex-direction: column;
flex:1;
padding:0;

&.navigation{
    align-items: center;
    @media (min-width:1024px) {
        align-items: start;
        
        }
}

&.media{
    flex-direction:row;
    justify-content:center;
    @media (min-width:1024px) {
        flex-direction: column;
        
        }
}


 `
export const ListItem = styledComponents.li`
text-align:center;
margin-bottom: 12px;
&.mediaLink{
    margin:0 8px;
},
& a{
    color:${colors.white};
    opacity:.6;
    text-transform: capitalize;
    line-height: 1;
    letter-spacing: .62px
    transition:all .3s ease-in;
    cursor: pointer;
    &:hover{
        text-decoration: none;
        color:${colors.spring};
        opacity:.9;

    }
}
@media (min-width:1024px) {
    text-align:left;
    &.mediaLink{
        margin:0 0 12px 0;
    
    } 
}



 `;
