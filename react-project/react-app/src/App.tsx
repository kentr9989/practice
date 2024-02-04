import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsCalendar } from "react-icons/bs";
// import { MouseEvent } from "react";
import produce from 'immer'; // for change state object array

function App() {
  let items = ["Tokyo", "Singapore", "Japan", "New York"];
  // Hook for the alert
  const [alertVisible, setAlertVisibility] = useState(false);
  
  // More complex state structure
  // const[firstName, setFirstName] = useState('');
  // const[lastName, setLastName] = useState('');
  // Instead of doing the below, we can do this 
  // const [person,setPerson] = useState({
      //firstName:'Mosh',
      //lastName:'Mo'
  //});
  // To update the state of this object, we can do this
  // const newPerson = {
  //  firstName : person.firstName or ...person (will copy all the properties)
  //  lastName : 'Huu'
  //}
  // setPerson(newPerson);
  // State of array of state
  // const [tags, setTags] = useState(['happy','sad']);
  // To update this we do this 
  // setTags([...tags,'exciting'])
  // Or setTags(tags.filter(tag => tag !== 'happy'));
  // Or setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  // Array of object : 
  // const [bugs, setBugs] = useState([
  //  { id : 1, title: 'Bug 1', fixed: false },
  //  { id : 2, title: 'Bug 2', fixed: true }
  //]); 
  // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed : true} : bug))
  // or we can use immer : 
  //setBugs(produce(draft => {
      // const bug = draft.find(bug => bug.id === 1)
      // if (bug) bug.fixed = true
  //})) 

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <span>Building a ListGroup component</span>
      <div>
        <ListGroup
          items={items}
          heading={"Cities"}
          onSelectItem={handleSelectItem}
        />
      </div>

      <br></br>
      <span>Building an Alert component</span>
      <div>
        <Alert
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {/* children */}
          Hello <span>World</span>
        </Alert>
      </div>

      <br></br>
      <span>Building an Button component click and delete to show alert</span>
      <div>
        {alertVisible ? (
          <Alert
            onClose={() => {
              setAlertVisibility(false);
            }}
          >
            {/* children */}
            The alert after button is clicked
          </Alert>
        ) : null}
        <Button
          children={"click me"}
          onClick={() => {
            setAlertVisibility(true);
          }}
        ></Button>
      </div>

      <br></br>
      <span>Implement icons from reacts-icon </span>
      <div>
        <BsCalendar color="red" size="40"></BsCalendar>
      </div>
    </>
  );
}

export default App;
