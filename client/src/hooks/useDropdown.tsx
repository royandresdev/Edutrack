import { FC, ReactNode, useEffect, useRef, useState } from "react";

function useDropdown(label: string, options: string[]) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  // Maneja la apertura y cierre del dropdown
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Maneja la selección de una opción del dropdown
  const handleSetOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Cierra el dropdown al hacer clic fuera de él
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Agrega el event listener al documento
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  interface DropdownComponentProps {
    children: ReactNode;
    className?: string;
  }
  // Componente que renderiza el dropdown
  const Component: FC<DropdownComponentProps> = ({ children, className }) => (
    <div className="relative w-max">
      {/* Botón dropdown */}
      <button
        ref={dropdownRef}
        onClick={handleOpen}
        id={`btn-${label}`}
        className={`dropdown ${className}`}
        aria-haspopup="true"
      >
        <span>{children}</span> {selectedOption} <img src="/arrow-down.svg" title="Arrow down icon" />
      </button>

      {/* Lista de opciones del dropdown */}
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={`id_${index}`}
              onClick={() => handleSetOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return { Component, selectedOption };
}

export default useDropdown;
