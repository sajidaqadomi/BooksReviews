import styled from "styled-components"

export const Root = styled.div`
& .slick-slider{
    margin :0 -8px;
    & .slick-next:before , & .slick-prev:before {
       display:none;
    }
    & .slick-track{
        display:flex;
        padding:8px 0;
        & .slick-slide{
            height:auto;
            & > div{
                height:100%;
                margin :0 8px;
                overflow:hidden;
                transition:all .3s ease-in-out;
                &:hover{
                  transform:scaleY(1.01)
                }
            }
           
        }
    }
}


`
