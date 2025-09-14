import { createPortal } from "react-dom";

function Modal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
      <div className="w-4/5 max-w-fit rounded-lg bg-white p-5 shadow-md">
        <button className="cursor-pointer px-4 py-2">Close</button>
        <p>{children}</p>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
