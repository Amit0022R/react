// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";

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

import Greeting from "./components/Greeting";

const App = () => {
  return (
    <Greeting timeOfDay = "morning" />
  )
}

export default App; 