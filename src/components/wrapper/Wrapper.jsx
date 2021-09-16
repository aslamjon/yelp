import React from 'react'
import styled, {css} from 'styled-components'

const StyledWrapper = styled.div`
    background-color: #EAF1FE;
    border-radius: 40px;
    width: 100%;
    height: 100%;
    padding: 30px 35px;
    overflow: hidden;
    ${({flex}) => flex && css`
      display: flex;
    `};
`;

const Wrapper = (props) => {
  return <StyledWrapper {...props}/>
}

export default Wrapper;
