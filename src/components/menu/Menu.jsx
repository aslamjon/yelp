import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { changeSidebar, setCurrentSidebar, setMenuData } from '../../redux/sidebar/sidebar.action';
import Button from '../button/Button'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { viewCurrentSidebar, viewMenuData, viewSidebarCondition } from '../../redux/sidebar/sidebar.selector';
import ReactHtmlParser from 'react-html-parser';

const LiStyle = styled.li``;
const UlStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NameStyle = styled.div`
  width: 110px;
  color: #919191;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ active }) => active && css`
    color: #fff;
  `};
  &:hover {
    color: #fff;
  }
`;

const SvgStyle = styled.div`
  stroke: #909090;
  transition: 0.3s;
  width: 46px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: -2px;
  &:hover {
      stroke: #fff;
      background-color: #DF4545;
    }
  ${({ active }) => active && css`
    background-color: #DF4545;
    stroke: #fff;
  `}
`;


class Menu extends Component {
  render() {
    const { sidebarCondition, changeSidebar, currentSidebar, setCurrentSidebarCondition, viewMenu, setMenu } = this.props;
    return (
      <>
        <UlStyle>
          {viewMenu.map((value) => <LiStyle key={value.id}>
            <Button key={value.id} onClick={setCurrentSidebarCondition.bind(this, value.id)} bg={currentSidebar === value.id ? '#DF4545' : 'none'} wActiv={sidebarCondition} sidebar>
              {/* <SvgIcon stroke="red" src={} /> */}
              <SvgStyle active={currentSidebar === value.id}> {ReactHtmlParser(value.img)} </SvgStyle>
              <NameStyle active={currentSidebar === value.id}>{value.title}</NameStyle>
            </Button>
          </LiStyle>)
          }
        </UlStyle>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sidebarCondition: viewSidebarCondition,
  currentSidebar: viewCurrentSidebar,
  viewMenu: viewMenuData
})

const mapDispathToProps = dispatch => ({
  changeSidebar: value => dispatch(changeSidebar(value)),
  setCurrentSidebarCondition: value => dispatch(setCurrentSidebar(value)),
  setMenu: value => dispatch(setMenuData(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(Menu);

