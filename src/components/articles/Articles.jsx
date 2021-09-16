import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setArticle, setDiscount } from '../../redux/articles/article.action'
import { getArticles, getDiscount } from '../../redux/articles/article.selector'
import Article from '../article/Article'
import styled from 'styled-components';

import Button from '../button/Button';
import SvgIcon from '../svg-icon/svg-icon';
import RightArrow from "../../assets/images/rightArrow.svg";

const TitleStyle = styled.div`
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;


const Articles = ({ getArticles }) => {
    return (
        <>
            <TitleStyle>
                Articles
                <Button bg={'#f5f6f7'} w={50} h={50} aticleButton>
                    <SvgIcon src={RightArrow} w={25} h={25}/>
                </Button>    
            </TitleStyle>
            {getArticles.map((value) => <Article key={value.id} getArticle={value}/>)}
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    getDiscount: getDiscount,
    getArticles: getArticles
})

const mapDispathToProps = dispatch => ({
    setDiscount: value => dispatch(setDiscount(value)),
    setArticle: value => dispatch(setArticle(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(Articles);