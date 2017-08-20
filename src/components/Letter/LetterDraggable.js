import { DragSource } from 'react-dnd';

import { itemTypes } from 'config'
import Letter from './Letter.js'

const letterSource = {
  beginDrag(props) {
    return {
      text: props.text
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource(itemTypes.LETTER, letterSource, collect)(Letter)
