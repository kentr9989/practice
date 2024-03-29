import { useState } from "react";

// { items : [], heading : string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem  }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] //variable (selectedIndex)
  // arr[1] //updater function

  const getMessage = () => {
    items.length === 0 ? <p>No item found</p> : null;
  };

  // Event handler function
  // const handleClick = () => {
  //   (event: MouseEvent) => console.log(event);
  // };

  return (
    <>
      <h1>List</h1> 
      {getMessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
