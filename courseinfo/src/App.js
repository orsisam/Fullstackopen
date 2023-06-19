const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part[0]} {props.exercise[0]}
      </p>
      <p>
        {props.part[1]} {props.exercise[1]}
      </p>
      <p>
        {props.part[2]} {props.exercise[2]}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercise {props.total}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamental of React';
  const exercise1 = 10;
  const part2 = 'Using props to pass data';
  const exercise2 = 7;
  const part3 = 'State of component';
  const exercise3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1, part2, part3]}
        exercise={[exercise1, exercise2, exercise3]}
      />
      <Total total={exercise1 + exercise2 + exercise3} />
    </div>
  );
};

export default App;
