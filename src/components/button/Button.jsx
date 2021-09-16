import styled, { css } from 'styled-components'


const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color};
  border-radius: ${({ borderRadius }) => borderRadius || '15px'};
  /* padding: 11px 14px; */
  transition: 0.3s;
  border: none;
  color: #000;
  overflow: hidden;
  
  ${({ h }) => h && css`
    height: ${h}px;
  `};

  ${({ w }) => w && css`
    width: ${w}px;
  `};

  ${({ danger }) => danger && css`
    background-color: #DF4545;
  `};
  ${({ bg }) => bg && css`
    background: ${bg};
  `};
  ${({ circle }) => circle && css`
    border-radius: 50%;
  `};
  ${({ dark }) => dark && css`
    background-color: #000;
    color: #fff;
  `};
  ${({ outlined }) => outlined && css`
    border: 2px solid ${outlined};
    color: ${outlined};
  `};

  ${({ sidebar }) => sidebar && css`
    width: 46px;
    height: 44px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      background-color: #DF4545;
    }
  `};

  ${({ wActiv }) => wActiv && css`
    width: 160px;
  `};
  ${({ center }) => center && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
  ${({ search }) => search && css`
    &:hover {
      background-color: #666;
      div {
        background-color: #fff;
      }
    }
  `};
  ${({ order }) => order && css`
    position: relative;
    overflow: inherit;
    z-index: 3;
    span {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ff5454;
      position: absolute;
      top: -1px;
      right: -3px;
    }
    &:hover {
      background-color: #f3f3f3;
      div {
        background-color: #666;
      }
    }
  `};
  ${({tabBtn}) => tabBtn && css`
    padding: 10px;
    background: #f3f3f3;
    border-radius: 60px;
    width: 100px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    &:hover {
      background: #fff;
      box-shadow: 0px 4px 46px rgba(0,0,0,0.1);
    }
  `}
  ${({activeTab}) => activeTab && css`
      background: #fff;
      box-shadow: 0px 4px 46px rgba(0,0,0,0.1);
  `}
  ${({aticleButton}) => aticleButton && css`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #666;
      div {
        background: #fff;
      }
    }
  `}
`;

const Button = ({...props}) => {
    return <StyledButton {...props} />
}

export default Button
