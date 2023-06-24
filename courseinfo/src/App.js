const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]} exercise={props.exercise[0]} />
      <Part part={props.part[1]} exercise={props.exercise[1]} />
      <Part part={props.part[2]} exercise={props.exercise[2]} />
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
  const part1 = {
    name: 'Fundamental of React',
    exercise: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercise: 7,
  };
  const part3 = {
    name: 'State of component',
    exercise: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1.name, part2.name, part3.name]}
        exercise={[part1.exercise, part2.exercise, part3.exercise]}
      />
      <Total total={part1.exercise + part2.exercise + part3.exercise} />
    </div>
  );
};

export default App;
