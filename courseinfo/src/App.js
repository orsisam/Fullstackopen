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
      <Part part={props.parts[0].name} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercise} />
    </>
  );
};

const Total = (props) => {
  console.log(props);
  let total = 0;
  props.parts.forEach((val, key) => {
    total += val.exercise;
  });
  return (
    <>
      <p>Number of exercise {total}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamental of React',
      exercise: 10,
    },
    {
      name: 'Using props to pass data',
      exercise: 7,
    },
    {
      name: 'State of component',
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
