import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { BsCalendar } from "react-icons/bs";
// import { MouseEvent } from "react";
import produce from "immer"; // for change state object array
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import UpdateStateExercise from "./components/UpdateStateExercise";
import Expendable from "./components/Expendable";
import Form from "./components/Form";
import ProjectExpense from "./components/ProjectExpense";
import ProductList from "./components/ProductList";
import axios from "axios";
import apiClient, { CanceledError } from "./services/api-client";
import userSevice, { User } from "./services/user-service";
import useUser from "./hooks/useUsers";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

// interface User {
//   id: number;
//   name: string;
// }

function App() {
  const { users, error, isLoading, setUsers, setError } = useUser();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userSevice.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);

    userSevice
      .create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userSevice.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  // connect to back end

  // Clean up fetching
  useEffect(() => {
    connect;

    return () => disconnect(); // this is use for clean up
  });

  let items = ["Tokyo", "Singapore", "Japan", "New York"];
  // Hook for the alert
  const [alertVisible, setAlertVisibility] = useState(false);
  // Share state between component
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // State exercise
  // When user click the button
  // we going to set the name of the player to something else
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [category, setCategory] = useState("");

  const [playerName, changeName] = useState(true);

  const [read, setRead] = useState(false);
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
  //  firstName : person.firstName or ...person (will copy all the properties),
  //  lastName : 'Huu'
  //}
  // setPerson(newPerson); or setPerson({...person,lastName : 'Mosh'})
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

      <br></br>
      <span>Sharing state between components </span>
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>

      <br></br>
      <span>Exercise Sharing state between components </span>
      <div>
        <UpdateStateExercise
          display={game.player.name}
          changeName={() => {
            playerName!
              ? setGame({ ...game, player: { name: "Bob" } })
              : setGame({ ...game, player: { name: "John" } });
          }}
          checkName={() => {
            const newName = !playerName;
            // console.log(newName);
            changeName(newName);
          }}
        />{" "}
        <p> Player name : {game.player.name}</p>
      </div>

      <br></br>
      <span>Exercise Expendable text </span>
      <div>
        <Expendable
          maxChars={10}
          children={"fdsfsfsdfsdfsdfdsfsdfsdfsdfsdfsdfsdfsdfsfsdfsf"}
          changeRead={() => {
            setRead(!read);
          }}
          currentRead={read}
        ></Expendable>
      </div>

      <br></br>
      <span>Create Form </span>
      <div>
        <Form></Form>
      </div>

      <br></br>
      <span>Exercise : Create Form Project Expense </span>
      <div>
        <ProjectExpense></ProjectExpense>
      </div>

      <br></br>
      <span>Use Effect Hook </span>
      <div>
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category={category} />
      </div>

      <br></br>
      <span>Connect to backend </span>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"> </div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        {" "}
        Add
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
