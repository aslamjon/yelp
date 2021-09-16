import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';
import { getDiscount } from '../../redux/articles/article.selector';

const CardStyle = styled.div`
    background: #ab97f3;
    border-radius: 30px;
    color: #fff;
    padding: 31px 22px;
    position: relative;
    padding-top: 79px;
`;
const DiscountNumStyle = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
`;
const DiscountDesStyle = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-top: 7px;
`;
const ImgStyle = styled.img`
    position: absolute;
    ${({top}) => top && css`
        top: ${top}px;
    `}
    ${({left}) => left && css`
        left: ${left}px;
    `}
    ${({right}) => right && css`
        right: ${right}px;
    `}
`;
const ImgRoundStyle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffd1d1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -45px;
    left: 39%;
`;
const Discount = ({getDiscount, ...otherProps}) => {
    return (
        <CardStyle>
            <ImgStyle top={-35} left={15} src={getDiscount.img1}/>
            <ImgStyle top={-170} left={45} src={getDiscount.img2}/>
            <ImgStyle top={50} right={-21} src={getDiscount.img3}/>
            <ImgStyle top={18} left={100} src={getDiscount.img4}/>
            <ImgRoundStyle> <ImgStyle src={getDiscount.img5}/> </ImgRoundStyle>
            <DiscountNumStyle>-{getDiscount.num}% Off</DiscountNumStyle>
            <DiscountDesStyle>{getDiscount.des}</DiscountDesStyle>
        </CardStyle>
    )
}
const mapStateToProps = createStructuredSelector({
    getDiscount,
})


export default connect(mapStateToProps)(Discount);