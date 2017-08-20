import React  from 'react'
import { ThemeProvider } from 'styled-components'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'

import { standard } from 'config/themes'
import { MainPage } from 'pages'

const App = () => (
  <ThemeProvider theme={standard}>
    <MainPage />
  </ThemeProvider>
)

export default DragDropContext(HTML5Backend)(App)
