// const h1 = document.createElement('h1');

// h1.style.backgroundColor = 'orange';
// h1.style.color = 'black';
// h1.style.fontSize = '30px';
// h1.id = 'first';
// h1.className = 'ele1';
// h1.textContent = 'Hello Coder Army';

// document.body.appendChild(h1); // 👈 THIS was missing
// const react = {
//   createElement: (tag, attribute, content) => {
//     const component = document.createElement(tag);
//     for (const key in attribute) {
//       if (key === 'style') {
//         Object.assign(component.style, attribute[key]);
//       } else {
//         component[key] = attribute[key];
//       }
//     }
//     component.textContent = content;
//     return component;
//   },
// };

// const ReactDOM = {
//   render: (root, element) => {
//     root.appendChild(element);
//   },
// };
const React = {
  createElement: (type, props, children) => {
    return {
      type: type,
      props: {
        ...props,
        children: children,
      },
    };
  },
};

const ReactDOM = {
  createRoot: (container) => {
    return (render = (element) => {
      const component = document.createElement(element.type);
      for (const key in element.props) {
        if (key === 'style') {
          Object.assign(component[key], element.props[key]);
        } else if (key === 'children') {
          component.textContent = element.props[key];
        } else {
          component[key] = element.props[key];
        }
      }
      container.appendChild(component);
    });
  },
};

const result = React.createElement(
  'h1',
  {
    id: 'abc',
    className: 'xyz',
    style: {
      color: 'red',
      backgroundColor: 'green',
    },
  },
  'Hi Hello There'
);

// const result2 = React.createElement(
//   'h1',
//   {
//     id: 'abc',
//     className: 'xyz',
//     style: {
//       color: 'yellow',
//       backgroundColor: 'green',
//     },
//   },
//   'Hi Hello There hellow g'
// );
//console.log(result);

const root = ReactDOM.createRoot(document.body);
console.log(root);
root(result);

// ReactDOM.render(result, document.body);
// ReactDOM.render(result2, document.body);

// console.log('hi');

// console.log(React);
