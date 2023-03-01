import { useCallback, useState } from 'react'
import { HTMLContent } from './HTMLContent.js'
import { TargetBox } from './TargetBox.js'
import Materiel from './Materiel'
import './Container.css'
export const Container = () => {
  const [droppedHTML, setDroppedHTML] = useState('')
  const handleHTMLDrop = useCallback(
    (item) => {
      if (item) {
        setDroppedHTML(item.html)
      }
    },
    [setDroppedHTML],
  )
  return (
    <div className='container'>
      <Materiel/>
      <TargetBox onDrop={handleHTMLDrop} />
      <HTMLContent html={droppedHTML} />
    </div>
  )
}
