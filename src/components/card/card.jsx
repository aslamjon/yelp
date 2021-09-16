import React from 'react'
import styled, { css } from 'styled-components';
import Button from '../button/Button';

import Plus from '../../assets/images/plus.svg'
import Check from '../../assets/images/check.svg'
import Fire from '../../assets/images/flame.png'
import Like from '../../assets/images/like.png'
import Star from '../../assets/images/star.svg'

import SvgIcon from '../svg-icon/svg-icon';
import { connect } from 'react-redux';
import { changeTabs } from '../../redux/tabs/tabs.action';
import { createStructuredSelector } from 'reselect';
import { getTabs } from '../../redux/tabs/tabs.selector';
const TabsItemStyle = styled.div`
    width: 200px;
    padding: 70px 20px 15px 20px;
    border-radius: 30px;
    border: 1px solid #f2eeee;
    margin-right: 4%;
    margin-top: 90px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    &:hover {
        height: 90%;
        margin-top: 50px;
        background: #f2eeee;
    }
`;
const MainImageStyle = styled.img`
    position: absolute;
    top: -80px;
    width: 170px;
`;
const TitleOfTabsItemStyle = styled.div`
    font-weight: 800;
    font-size: 13px;
    line-height: 13px;
    color: #000;
    align-self: flex-start;
`;
const PriceOfTabsItemStyle = styled.div`
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    color: #000;
    align-self: flex-start;
    margin-top: 10px;
`;
const DesOfTabsItemStyle = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #898686;
    margin-top: 8px;
`;
const OrderOfTabsItemStyle = styled.div`
    background: #000;
    color: #fff;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    ${({ order }) => order && css`
        background: none;
        border: 2px solid #000;
    `}
`;

const IconRoundStyle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffd1d1;
    ${({color}) => color && css`
    background: ${color};
    `}
    position: absolute;
    top: -60px;
    right: 0px;
`;
const ImgOfTabsItemStyle = styled.img`
    width: 15px;
    height: 15px;
    position: static;
`;
class Card extends React.Component {
    orderHendling = (tabIndex, itemIndex) => {
        const { changeTabs, getTabs } = this.props;
        let newTabs = [...getTabs];
        newTabs[tabIndex]['items'][itemIndex].order = !newTabs[tabIndex]['items'][itemIndex].order;
        changeTabs(newTabs);
    }

    render() {
        const { item, tabIndex, itemIndex} = this.props;
        return (
            <TabsItemStyle key={item.id}>
                <MainImageStyle src={item.img} alt="" />
                <TitleOfTabsItemStyle>{item.title}</TitleOfTabsItemStyle>
                <DesOfTabsItemStyle>{item.des}</DesOfTabsItemStyle>
                <PriceOfTabsItemStyle>${item.price}</PriceOfTabsItemStyle>
                <Button onClick={this.orderHendling.bind(this, tabIndex, itemIndex)}>
                    <OrderOfTabsItemStyle order={item.order ? "order" : ''}>
                        {item.order ? <SvgIcon src={Check} /> : <SvgIcon src={Plus} color={"white"} />}
                    </OrderOfTabsItemStyle>
                </Button>
                {item.fire && <IconRoundStyle ><ImgOfTabsItemStyle src={Fire}/></IconRoundStyle>}
                {item.like && <IconRoundStyle ><ImgOfTabsItemStyle src={Like}/></IconRoundStyle>}
                {item.star && <IconRoundStyle ><ImgOfTabsItemStyle src={Star}/></IconRoundStyle>}
                
                
            </TabsItemStyle>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    getTabs,
})

const mapDispathToProps = dispatch => ({
    changeTabs: value => dispatch(changeTabs(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(Card);