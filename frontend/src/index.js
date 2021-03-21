import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'


const theme = createMuiTheme({

  palette: {
    primary: {
      main: "#f5921f"
    },
    background: "#D3D3D3",
    contrastThreshold: 3,
    tonalOffset: 0.2,
    secondary: blue,
  } 
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


