import "./main.css";

function Main() {
  return (
    <div className="">
      <div className="row">
        <div className="col-5 section">
          <a href="https://react.dev/">
            <img className="mainImg" src="logo192.png"></img>
          </a>
          <h1 className="text-light">React</h1>

        </div>


        <div className="col-7 section2 text-light">
          <div></div>

          <h1>React Introduction</h1>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. Developed and maintained by Facebook,
            React allows developers to create interactive and dynamic UI
            components that update efficiently in response to data changes. Its
            component-based architecture promotes modular and reusable code,
            enhancing the maintainability of large-scale applications. React
            employs a virtual DOM (Document Object Model) to optimize rendering,
            updating only the necessary parts of the actual DOM, leading to
            improved performance. The library's unidirectional data flow
            simplifies state management, making it easier to reason about the
            application's behavior. With a rich ecosystem and strong community
            support, React has become a popular choice for frontend development,
            enabling developers to build engaging and responsive user
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
