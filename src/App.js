import React, {useState} from 'react';
import {Switch} from 'react-native';
import {StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import Navigation from './navigation';

const Container = styled.View`
  flex: 0.2;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
 
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
