// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";

import BasicEffect from "./components/BasicEffect";
import ComponentA from "./components/ComponentA";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";


// function App() {

//   return <div>

//     <Header/>
//     <Main />
//     <Footer />

//   </div>

// }

// export default App;


// const ValidPass = () => <h1>Valid</h1>
// const InvalidPass = () => <h1>InValid</h1>

// const Password = ({isValid}) => {
//   return isValid ? <ValidPass /> : <InvalidPass />
// }

// const App = () => {
//   return <section>
//     <Password isValid={true} />
//   </section>
// }

// export default App;



// Conditional Rendering in React

// const Cart = () => {

//   const items = ["amit", "anuj", "kumar", "singh"];
//   // Rendering <h2> If Condition is True
//   return <div>
//     <h1>Cart</h1>
//     {items.length > 0 && <h2>You have {items.length} itme in ur Cart</h2> }
//     {/* {items.length > 0 ? <h2>You have {items.length} items in your Cart</h2> : null}
//  */}

//       <ul>
//         <h4>Products</h4>
//         {items.map((item) => (
//           <li key={Math.random()} >{item}</li>
//         ))}
//       </ul>
//   </div>
// }

// const App = () => {
//   return <Cart />
// }

// export default App;

/*
Create a Weather Component with if, else if, and else
Create a new file called Weather.jsx.
Inside this file, create a functional component called Weather.
The component should:
Take a temperature prop.
Use if, else if, and else statements to conditionally render different messages based on the temperature value:
If the temperature is below 15, display: "It's cold outside!"
If the temperature is between 15 and 25, display: "It's nice outside!"
If the temperature is above 25, display: "It's hot outside!"
*/

// const App = () =>{
//   return (
//     <Weather temperature={30} />
//   )
// }

// export default App;

/*
Create a UserStatus Component with the && Operator
Create a new file called UserStatus.jsx.
Inside this file, create a functional component called UserStatus.
The component should:
Take two boolean props loggedIn, isAdmin
Use the && operator to display a message for Admin & Normal User:
If loggedIn is true and isAdmin display: "Welcome Admin!"
If it's just loggedIn and not admin then display "Welcome User".
*/


// const App = () => {
//   return (
//     <UserStatus loggedIn={true} isAdmin = {false}  />
//   )
// }

// export default App;


/*
: Create a Greeting Component with a Ternary Operator
Create a new file called Greeting.jsx.
Inside this file, create a functional component called Greeting.
The component should:
Take a timeOfDay prop (e.g., "morning", "afternoon", or "evening").
Use the ternary operator to conditionally display different greetings based on the time of day:
If timeOfDay is "morning", display: "Good morning!"
If timeOfDay is "afternoon", display: "Good afternoon!"
*/

// import Greeting from "./components/Greeting";

// const App = () => {
//   return (
//     <Greeting timeOfDay = "morning" />
//   )
// }

// export default App; 



/*
Basic Usage of useState
Create a new file called Counter.jsx.
Inside this file, create a functional component called Counter.
Use useState to manage a simple counter state.
Initialize the state with a value of 0.
Create a button to increment the counter by 1 when clicked.
Display the current value of the counter.
*/

// import Counter from "./components/Counter";
// const App = () => {
//   return (
//     <div>
//     <Counter />
//   </div>
//   )
// }

// export default App;



/*
useState with an Array of Data
Create a new file called TodoList.jsx.
Inside this file, create a functional component called TodoList.
Use useState to manage an array of todo items.
Initialize the state with an empty array.
Create a form to add new todo items to the list.
Display the list of todo items.
*/

// const App = () => {
//   return (
//     <div>
//     <TodoList />
//   </div>
//   )
// }

// export default App;




/*
useState with an Object of Data
Create a new file called Profile.jsx.
Inside this file, create a functional component called Profile.
Use useState to manage an object with user profile information.
Initialize the state with an object containing name and age.
Provide input fields to update the name and age.
Display the updated profile information.
*/


// const App = () => {
//   return (
//     <div>
//     <Profile />
//   </div>
//   )
// }

// export default App;






/*
useState with an Array of Objects
Create a new file called ShoppingList.jsx.
Inside this file, create a functional component called ShoppingList.
Use useState to manage an array of objects, where each object represents a shopping item with name and quantity.
Initialize the state with an empty array.
Create a form to add new items to the list.
Display the list of shopping items.
*/


// const App = () => {
//   return (
//     <div>
//     <ShoppingList />
//   </div>
//   )
// }

// export default App;


// ->>>>>>>>>USEEFFECT HOOK<<<<<<<<<<<<<-
// import { useState, useEffect } from "react";
/*
Basic Usage of useEffect
Create a new file called BasicEffect.jsx.
Inside this file, create a functional component called BasicEffect.
Use useEffect to log a message to the console whenever the component mounts (i.e., when it’s rendered the first time).
*/

// const App = () => {
//   return (
//     <div>
//     <BasicEffect />
//   </div>
//   )
// }

// export default App;


/*
useEffect with Dependencies
Create a new file called CounterEffect.jsx.
Inside this file, create a functional component called CounterEffect.
Use useEffect to update the document title whenever a counter value changes.
Initialize a count state with 0 using useState.
Render a button that increments the count.
Use useEffect to update the document title whenever count changes.
*/

// const App = () => {
//   return (
//     <div>
//     <CounterEffect />
//   </div>
//   )
// }

// export default App;


/*
useEffect for Fetching Data
Create a new file called FetchDataEffect.jsx.
Inside this file, create a functional component called FetchDataEffect.
Use useEffect to fetch data from an API when the component mounts.
Use the API endpoint https://jsonplaceholder.typicode.com/posts to fetch some data.
Store the data in a state variable and display the title of the first post.
*/

// const App = () => {
//   return (
//     <div>
//     <FetchDataEffect />
//   </div>
//   )
// }
// export default App;


// -------------->>> PROP DRILLING <<------------------\\

const App = () => {

  const name = "AMiT Kumar";

  return <div>

    <ComponentA name = {name} />


  </div>;
}

export default App;
















