import React from 'react'
import styled from 'styled-components'
import Avatar from '../avatar/Avatar';
import Delivery from '../delivery';
import Menu from '../menu/Menu';


const StyledSidebar = styled.div`
  background-color: ${({bgColor}) => bgColor || '#EAF1FE'};
`;

const Sidebar = (props) => {
  return <>
    <StyledSidebar {...props}> 
      <Avatar fullName = {"Alka Yagik"}/>
      <Menu />
      <Delivery />
    </StyledSidebar>
  </>;
}

export default Sidebar
