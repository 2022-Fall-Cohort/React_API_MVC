import App from './App';

function xyz() {
  const xname = 'Josh Perez';

  return xname;
}

// const xname = 'Josh Perez';

const element = <h1>Hello, {xyz()}</h1>;

console.log(element);

console.log(App());
