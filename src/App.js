import React, { Component } from 'react'
import './App.css';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import purple from '@material-ui/core/colors/purple';
import MenuDrawer from './components/drawer/MenuDrawer';
import { Grid } from '@material-ui/core';
import Historico from './module/historico/Historico'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
      acao: purple[100],
      lote: purple[500],
    },
    secondary: {
      main: blueGrey[700],
    },
  },
});


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box display="flex"  height="100vh" width="100%" bgcolor="primary.main" >
          <MenuDrawer />
          <Grid container spacing={3} style={{ margin: 10 }}>
            <Grid item sm={6} >
              <Historico />
            </Grid>
            <Grid item sm={6}>
              <Box width="100%" height="100%" bgcolor="secondary.main">
                Status das ações
                Periodo de vida da ação()
                quantas vezes foi comprada

                Totais
                Custo
                Lucro
                Quantidade
              </Box>
            </Grid>
          </Grid>

        </Box>
      </ThemeProvider>
    );
  }
}