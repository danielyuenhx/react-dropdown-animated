# react-dropdown-animated
A customizable dropdown button with simple animations for React. For those who like a little movment on your React app add a little spice.

![Alt Text](./public/demo.gif)

## Installation

```bash
npm install react-animated-dropdown-button
```

## Usage
Default styling can be used with the component by including the [style.css file](.src/components/main/style.css) with

```javascript
import "react-dropdown-animated/style.css"
```

## Props

The dropdown button takes the following props:

| Prop | Type | Description |
|---|---|---|
| `value` | _string_  | The value of the button text. |
| `options`  | _object[]_  | An array of objects containing the content and the callback function when the option is clicked. eg. `options=[{content: 'Option 1', onClick: (event) => console.log('Option 1 clicked!')}]` |
| `initial` | _number_ | The percentage value of the initial y position of the button. A higher value indicates the button moves in faster from a higher position. |
| `exit`         | _number_ | The percentage value of the exit y position of the button. A higher value indicates the button moves out faster to a higher position. |

## Development
Check out the component and help development with

```bash
git clone https://github.com/danielyuenhx/react-dropdown-animated.git
cd react-dropdown-animated
```

```bash
npm install
npm start
```