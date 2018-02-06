import React from 'react'
import { DropTarget } from 'react-dnd'
import styled from 'styled-components'

import {
  board,
  itemTypes
} from 'config'
import { Field } from 'components'

const squareTarget = {
  canDrop(props) {
    return true
  },

  drop(props) {
    return true
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

const Board = ({className}) => (
  <div className={className}>
    {board.map(fields => (
      <div className="row">
        {fields.map(fieldType => (
          <Field type={fieldType}/>
        ))}
      </div>
    ))}
  </div>
)

export default DropTarget(itemTypes.BOARD, squareTarget, collect)(
  styled(Board)`
    .row {
      display: flex;
      
      .cell {
        width: 60px;
        height: 60px;
      }
    }
`)
