import React from 'react'
import styled, { css } from 'styled-components'

import DeliveryMan from '../../assets/images/delivery-man-runs.png'
import RightArrow from '../../assets/images/rightArrow.svg'
import Button from '../button/Button';

const DeliveryStyle = styled.div`
    position: relative;
`;

const CircleStyle = styled.div`
    border-radius: 50%;
    position: absolute;
    ${({wh}) => wh && css`
        width: ${wh}px;
        height: ${wh}px;
    `}
    
    ${({bg}) => bg && css`
        background-color: ${bg};
    `}
    ${({z}) => z && css`
        z-index: ${z};
    `}
    ${({x, y}) => x && css`
        /* transform: translate(${x}px, ${y}px); */
        top: ${y}%;
        left: ${x}%;
    `}
    
`;

const BoxStyle = styled.div`
    border-radius: 25px;
    background-color: white;
    height: 160px;
    padding: 11px 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const BoxStyle2 = styled.div`
    border-radius: 25px;
    background: none;
    height: 120px;
    position: relative;
`;

const Man = styled.img`
    position: absolute;
    z-index: 12;
`;

const Title = styled.div`
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
    color: #000;
`;
const Des = styled.div`
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    color: #000;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
`;
const Delivery = () => {
    return (
        <DeliveryStyle>
            <BoxStyle2>
                <CircleStyle wh={12} bg={'#fff'} x={11} y={8}/>
                <CircleStyle wh={7} bg={'#fff'} x={38} y={29} z={10}/>
                <CircleStyle wh={40} bg={'#fff'} x={13} y={34} />
                <CircleStyle wh={76} bg={'#B080FF'} x={25} y={14} z={3}/>
                <CircleStyle wh={60} bg={'#80D1FF'} x={49} y={62} z={2}/>
                <CircleStyle wh={17} bg={'#FF5454'} x={11} y={130} z={1}/>
                <Man src={DeliveryMan}/>
            </BoxStyle2>
            <BoxStyle>
                <Title>Faster <br/> delivery!</Title>
                <Des>
                    Know More 
                    <Button>
                        <img src={RightArrow} alt="" />
                    </Button>
                </Des>
                
            </BoxStyle>
        </DeliveryStyle>
    )
}

export default Delivery
