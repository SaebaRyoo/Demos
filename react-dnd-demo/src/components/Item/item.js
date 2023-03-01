import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
const DefaultStyles = {
  border: '1px solid #ccc',
  width: '100%',
  height: '50px'
}

const Item = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name: 'item' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{...DefaultStyles, opacity}} data-testid="item-comp">

    </div>
  )
}

export default Item
