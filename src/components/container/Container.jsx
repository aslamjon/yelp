import React from 'react'
import styled, {css} from 'styled-components'
const ContainerStyle = styled.div`
    padding: 15px;
    ${({px}) => px && css`
        padding: ${px}px;
    `};
`;
const Container = (props) => {
  
  return <ContainerStyle  {...props} />
}

export default Container;
