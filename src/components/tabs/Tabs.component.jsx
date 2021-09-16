import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { setCurrentTabs, changeTabs } from '../../redux/tabs/tabs.action';
import { getTabs, showTab } from '../../redux/tabs/tabs.selector';
import Button from '../button/Button';

import Card from '../card/card';

const TabsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    img {
        transform: translateY(-20px);
    }
`;
const TitleOfTabs = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 65px;
    color: #585858;
    position: absolute;
    bottom: 0px;
`;
const TabsItemsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    margin-top: 20px;
`;

class Tabs extends Component {
    clickHendling = (setTabId) => {
        const {setCurrentTab} = this.props;
        setCurrentTab(setTabId);
    }
    
    render() {
        const {showTab, getTabs} = this.props;
        return (
            <div>
                <TabsStyle>
                {getTabs.map((value) => <Button key={value.id} onClick={this.clickHendling.bind(this, value.id)} activeTab={showTab === value.id} tabBtn>
                    <img src={value.img} alt={value.title} />
                    <TitleOfTabs>{value.title}</TitleOfTabs>
                </Button>)}
                </TabsStyle>
                <TabsItemsStyle>
                    {   (showTab === 1) ? 
                            getTabs.map((value, index) => 
                                value.items.map((item, itemIndex) => 
                                    <Card key={item.id} item={item} itemIndex={itemIndex} tabIndex={index} changeTabs={changeTabs} getTabs={getTabs}/>))
                        :
                            getTabs.map((value, index) => 
                            (showTab === value.id) ? 
                                value.items.map((item, itemIndex) => 
                                    <Card key={item.id} item={item} itemIndex={itemIndex} tabIndex={index} changeTabs={changeTabs} getTabs={getTabs}/>) 
                        : null)
                    }
                </TabsItemsStyle>
            </div>
        )
    }
    componentDidMount() {
        const {getTabs} = this.props;
        fetch('http://192.168.1.125:3001/api/data')
        .then(res => res.json()).then(res => console.log("RES",res))
        
        console.log(getTabs);
    }
}
const mapStateToProps = createStructuredSelector({
    showTab,
    getTabs,
})

const mapDispathToProps = dispatch => ({
    setCurrentTab: value => dispatch(setCurrentTabs(value)),
    changeTabs: value => dispatch(changeTabs(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(Tabs);
