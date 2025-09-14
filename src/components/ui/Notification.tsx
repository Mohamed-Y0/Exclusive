import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = { show: boolean; children: ReactNode };

function Notification({ show, children }: Props) {
  if (!show) return null;

  return createPortal(<div className="">{children}</div>, document.body);
}

export default Notification;
