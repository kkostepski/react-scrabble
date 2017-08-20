import React from 'react'
import {
  Flex,
  Box
} from 'reflexbox'
import { withTheme } from 'styled-components'

import {
  ActionsPanel,
  Board
} from 'components'

const MainPage = ({theme}) => (
  <div style={{backgroundColor: theme.backgroundColor}}>
    <Flex>
      <Box>
        <Board />
      </Box>
      <Box>
        <ActionsPanel />
      </Box>
    </Flex>
  </div>
)

export default withTheme(MainPage)
