import { createPortal } from 'react-dom';
import { Dialog } from './components';
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
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className="bg-blue-500 rounded shadow px-2 py-1 active:bg-blue-600 text-white"
      >
        关闭
      </button>
      asdasdasdasd
      <Dialog isShow={isOpen} setShow={setIsOpen}>adsa</Dialog>
    </div>
  );
}

export default App;
