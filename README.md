# react dialog components learn

### learn react

## install

- npm

```sh
npm i react-dialog-mxy
```

- yarn

```sh
yarn add react-dialog-mxy
```

- pnpm

```sh
pnpm add react-dialog-mxy
```

## example

```jsx
import { Dialog } from 'react-dialog-mxy';
import { useState } from 'react';
// import { Dialog } from '../es';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="bg-blue-500 rounded shadow px-2 py-1 active:bg-blue-600 text-white"
      >
        打开
      </button>
      content
      <Dialog isShow={isOpen} setShow={setIsOpen} title={<h2>标题</h2>}>
        <div>content</div>
      </Dialog>
    </div>
  );
}

export default App;
```
