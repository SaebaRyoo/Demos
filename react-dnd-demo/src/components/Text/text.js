import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
const DefaultStyles = {
  border: '1px solid #ccc',
  width: '100%'
}

const Text = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name: 'text' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <p ref={drag} style={{...DefaultStyles, opacity}} data-testid="text-comp">
      请输入内容
    </p>
  )
}

export default Text
