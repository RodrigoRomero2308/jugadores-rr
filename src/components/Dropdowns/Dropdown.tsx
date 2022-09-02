import { MouseEventHandler, ReactNode, useCallback, useState } from "react";

const Dropdown = ({
  dropdownContent,
  children,
}: {
  dropdownContent: ReactNode;
  children: ReactNode;
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      setDropdownVisible(true);
      const eventListener = (mouseEvent: MouseEvent) => {
        if (mouseEvent.target !== event.target) {
          setDropdownVisible(false);
          console.log("closing");
          document.removeEventListener("click", eventListener);
        }
      };
      if (!dropdownVisible) {
        document.addEventListener("click", eventListener);
      }
    },
    [dropdownVisible]
  );

  return (
    <div onClick={handleClick} className="relative group inline-block">
      {children}
      <div
        className={`absolute ${dropdownVisible ? "block" : "hidden"} w-full`}
      >
        {dropdownContent}
      </div>
    </div>
  );
};

export default Dropdown;
