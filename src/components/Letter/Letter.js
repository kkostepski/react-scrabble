import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  score: PropTypes.number,
  value: PropTypes.string.isRequired
}

const Letter = ({
  className,
  connectDragSource,
  score,
  value
}) => connectDragSource(
  <div className={className}>
    {value}

    {score &&
      <div className="score">
        {score}
      </div>}
  </div>
)

Letter.propTypes = propTypes

export default styled(Letter)`
  width: 70px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 36px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.theme.Letter.background};
  
  .score {
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
  }
`
