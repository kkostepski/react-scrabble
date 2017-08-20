import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  fieldTypes
} from 'config'

const {
  FIELD_TYPE_WORD_2X,
  FIELD_TYPE_WORD_3X,
  FIELD_TYPE_LETTER_2X,
  FIELD_TYPE_LETTER_3X
} = fieldTypes

const description = (type) => {
  switch (type) {
    case FIELD_TYPE_WORD_2X:
      return 'Podwójna premia literowa'

    case FIELD_TYPE_WORD_3X:
      return 'Potrójna premia literowa'

    case FIELD_TYPE_LETTER_2X:
      return 'Podwójna premia słowna'

    case FIELD_TYPE_LETTER_3X:
      return 'Potrójna premia słowna'

    default:
      return ''
  }
}

const propTypes = {
  type: PropTypes.oneOf([
    FIELD_TYPE_WORD_2X,
    FIELD_TYPE_WORD_3X,
    FIELD_TYPE_LETTER_2X,
    FIELD_TYPE_LETTER_3X
  ])
}

const Field = ({
  className,
  type
}) => (
  <div className={className}>
    {type &&
      <div className="" />
    }

    {type &&
      <div className="description">
        {description(type)}
      </div>}
  </div>
)


Field.propTypes = propTypes

export default styled(Field)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.fieldBorder};

  ${props => props.type === FIELD_TYPE_WORD_2X && `
    background-color: #dc9082;
  `}
  
  ${props => props.type === FIELD_TYPE_WORD_3X && `
    background-color: #d91d1a;    
  `}
  
  ${props => props.type === FIELD_TYPE_LETTER_2X && `
    background-color: #abb1c6;
  `}
  
  ${props => props.type === FIELD_TYPE_LETTER_3X && `
    background-color: #2e7caf;
  `}
  
  .description {
    font-size: 10px;
    text-align: center;
  }
`
