console.log('hi');
const root = ReactDOM.createRoot(document.querySelector('#root'));

function Header({ name }) {
  console.log(name);

  return <div>Welcom {name}</div>;
}

function Footer({ name }) {
  console.log(name);

  return <div>Good Bye {name}</div>;
}

function Main({ data }) {
  console.log(data);

  return (
    <div>
      Hi! {data.name}{' '}
      {data.age > 18 ? (
        <div>You are eligible for vote in {data.city}</div>
      ) : (
        <div>You are not eligible for vote</div>
      )}
    </div>
  );
}

function App({ name, age, city }) {
  console.log(name, age, city);

  return (
    <>
      <Header name={name} />
      <Main data={{ name: name, age: age, city }} />
      <Footer name={name} />
    </>
  );
}

root.render(<App name="Ali Haider" age={19} city={'Pir Mahal'} />);
