import React from 'react'
import PropTypes from 'prop-types'

import { Letter } from 'components'

const propTypes = {}
const defaultProps = {}

const ActionsPanel = () => (
  <div>
    <Letter score={1} value="A" />
    <Letter score={2} value="B" />
    <Letter score={3} value="C" />
  </div>
)

ActionsPanel.propTypes = propTypes
ActionsPanel.defaultProps = defaultProps

export default ActionsPanel
