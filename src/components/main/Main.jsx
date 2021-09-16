import React from 'react'
import styled, { css } from 'styled-components'

import DroolingFace from '../../assets/images/drooling-face.png'
import SearchSvg from '../../assets/images/search.svg'
import OrderSvg from '../../assets/images/order.svg'
import Button from '../button/Button';
import SvgIcon from '../svg-icon/svg-icon';
import Tabs from '../tabs/Tabs.component';
import Discount from '../discount/Discount'
import Articles from '../articles/Articles'

const MainStyle = styled.div`
    background-color: #fff;
    margin-left: 35px;
    border-radius: 25px;
    width: 84%;
    padding: 40px;
    display: flex;
    ${({ width }) => width && css`
        width: ${width}px;
    `}
`;
const FirstSection = styled.div`
    width: 70%;
`;
const SecondSection = styled.div`
    width: 30%;
    padding-left: 20px;
`;
const SectionOfTitile = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        div {
            transition: 0.3s;
        }
    }

`;
const TitleSectionOfTitile = styled.div`
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    color: #000;
`;
const OrdersStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 102px;
    button {
        div {
            transition: 0.3s;
        }
    }
`;

const Main = ({...otherProps}) => {
    return <MainStyle {...otherProps}>
        <FirstSection>
            <SectionOfTitile>
                <TitleSectionOfTitile>Welcome To <br />Lucknow <img src={DroolingFace} alt="" /></TitleSectionOfTitile>
                <Button w={50} h={50} bg={'#F3F3F3'} center search><SvgIcon src={SearchSvg} /></Button>
            </SectionOfTitile>
            <Tabs />
        </FirstSection>
        <SecondSection>
            <OrdersStyled>
                <Button w={50} h={50} bg={'#666'} center order>
                    <SvgIcon src={OrderSvg} color={"white"} />
                    <span></span>
                </Button>
            </OrdersStyled>
            <Discount />
            <Articles />
        </SecondSection>
    </MainStyle>
}


export default Main;
