import { FC, PropsWithChildren, ReactNode } from 'react';
import './styles/index.css';
export interface DragProps extends PropsWithChildren {
    onClose?: (returnValue?: any) => void;
    isShow?: boolean;
    setShow?: (status: boolean) => void;

    title?: ReactNode;
}
declare const Dialog: FC<DragProps>;
export default Dialog;
