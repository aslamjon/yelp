import React from 'react'
import styled, { css } from 'styled-components';

import avatar from './../../assets/images/avatar.png';

const AvatarStyle = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  margin: 0 auto;
  ${({dark}) => dark && css`
    background-color: ${dark};
  `};
`;

const FullNameStyle = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-top: 13px;
  color: #000000;
  display: flex;
  justify-content: center;
`;


const Avatar = ({fullName, dark, ...other}) => {
  return (
    <div>
    <AvatarStyle dark={() => dark || '#fff'}>
      <img src={avatar} alt="avatar" />
    </AvatarStyle>
    
    <FullNameStyle>{fullName || 'Alka Yagik'}</FullNameStyle>
    
    </div>
  )
}

export default Avatar
