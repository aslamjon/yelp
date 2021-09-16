import React from 'react'
import styled, { css } from 'styled-components';

const Card = styled.div`
    display: flex;
    margin-top: 20px;
`;
const ImgOfCard = styled.div`
    width: 25%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    ${({bg}) => bg && css`
        background: ${bg};
    `}
`;
const BodyOfCard = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000;
    padding: 0 10px;

`;
const TitleOfCard = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
`;
const FooterOfCard = styled.div`
    display: flex;
    align-items: center;
`;
const ImgFooter = styled.div`
    img:nth-child(2) {
        margin-left: -5px;
    }
`;
const LikeFooter = styled.div`
    background: #fff8d5;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 3px 8px;
    margin-left: -5px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    img {
        margin-right: 3px;
    }
`;
const Article = ({getArticle}) => {
    return (
        <Card>
            <ImgOfCard bg={getArticle.bg}>
                <img src={getArticle.img} alt="" />
            </ImgOfCard>
            <BodyOfCard>
                <TitleOfCard>{getArticle.title}</TitleOfCard>
                <FooterOfCard>
                    <ImgFooter>
                        <img src={getArticle.lastLike.img1} alt="" />
                        <img src={getArticle.lastLike.img2} alt="" />
                    </ImgFooter>
                    <LikeFooter>
                        <img src={getArticle.lastLike.likeImg} alt="" />
                        {getArticle.lastLike.likes}+
                    </LikeFooter>
                </FooterOfCard>
            </BodyOfCard>
        </Card>
    )
}


export default Article;