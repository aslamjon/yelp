import React, { Component } from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Spartan', sans-serif;
  color: #898686;
  font-size: 14px;
}
`;


export default class Theme extends Component {

    render() {
        const {children} = this.props;
        return <ThemeProvider theme={{dark: true, color: '#fff'}}><GlobalStyle/>{children}</ThemeProvider>
    }
}

