import {
  FC,
  useRef,
  PropsWithChildren,
  useEffect,
  ReactNode,
  Children,
} from 'react';
import './styles/index.css';
import { createPortal } from 'react-dom';

export interface DragProps extends PropsWithChildren {
  onClose?: (returnValue?: any) => void;
  isShow?: boolean;
  setShow?: (status: boolean) => void;
  /**
   * @default
   * ```jsx
   * <h2>标题</h2>
   * ```
   */
  title?: ReactNode;
  /**
   * @default
   * ```jsx
   * <div>这是内容</div>
   * ```
   */
  children?: ReactNode | undefined;
}

const Dialog: FC<DragProps> = props => {
  const el = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (props.isShow == true) {
      el.current?.showModal();
    } else {
      el.current?.close();
    }
  }, [props.isShow]);

  return createPortal(
    <dialog ref={el} className="rounded" open>
      <div className="rounded">
        <div className="flex justify-end items-center">
          <div>{props.title}</div>
          <button
            onClick={() => {
              el.current?.close();
              props?.setShow?.(false);
            }}
            className="bg-blue-500 rounded shadow px-2 py-1 active:bg-blue-600 text-white"
          >
            关闭
          </button>
        </div>
        <div className="mt-6">{props.children}</div>
      </div>
    </dialog>,
    document.body
  );
};

Dialog.defaultProps = {
  children: <div>这是内容</div>,
  title: <h2>标题</h2>,
};

export default Dialog;
