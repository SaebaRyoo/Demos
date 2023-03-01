import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import Item from './components/Item/item'
import Text from './components/Text/text'
import { useState } from 'react'
const style = {
  border: '1px solid gray',
  height: '15rem',
  width: '15rem',
  padding: '2rem',
  textAlign: 'center',
}

const BoxMap = new Map();
BoxMap.set('item', Item);
BoxMap.set('text', Text);


export const TargetBox = (props) => {
  const [boxes, setBoxes] = useState('')
  const { onDrop } = props
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        if (onDrop) {
          setBoxes(item.name)
          onDrop(item)
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [props],
  )
  const Box = BoxMap.get(boxes)
  return (
    <div ref={drop} style={style}>
      {Box && <Box/>}
    </div>
  )
}
