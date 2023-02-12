import {useState} from "react";
import MyList from "./MyList";
const MyContainer = ({keyword}) => {
    const [items, setItems] = useState([{
      "id": "1", "text": "First text", "clicked": false
    },
    {"id": "2", "text": "Second text", "clicked": false}
  ]);
  const [text, setText] = useState('');

  const updateItem = (id) => {
    const nextItems = items.map((item) => {
        if(item.id === id) {
            return {
            ...item,
            clicked: !item.clicked
            }
        } else {
            return item
        }
    })

    setItems(nextItems)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random()*10000);
    const clicked = false;
    const newItem = {id, text, clicked};
    setItems([...items, newItem])
    setText("")

  }

  return (
    <div>
      <MyList
      updateItem={updateItem} 
      header="Really epic list component"
      items = {items}/>

      <textarea placeholder="Add item." onChange={(e => setText(e.target.value))}></textarea>
      <button onClick={onSubmit}>Add item</button>
    </div>
  )
}

export default MyContainer
