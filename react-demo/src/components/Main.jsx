
// const Main = () => {
//   return (
//     <main>
//       <h2>Main Content</h2>
//       <p>THis is main compoenent</p>
//     </main>
//   )
// }

// export default Main

const Main = () => {
  return <Amit name = "Anuj" />
};

const Amit = (props) => {
    return (
        <section>
            <h1>
                name : {props.name}
            </h1>
        </section>
    )
};

export default Main
