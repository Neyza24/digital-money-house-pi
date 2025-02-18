import { useAuth } from '@/hooks/useAuth';
import React, { useState } from 'react'
import MenuItem from './menuItem';
import { Button } from './ui/button';

export interface MenuItemProps {
	href: string
	name: string
}

const SideMenu = ({menuItems}: {menuItems: MenuItemProps[]}) => {

    const [isOpen, setIsOpen] = useState(false);
    const {logoutUser} = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <div
        className={`fixed md:static top-0 right-0 z-40 md:z-0 w-64 h-screen transition-transform ${
          isOpen ? "" : "translate-x-full"
        } md:translate-x-0 md:w-1/5 md:h-auto bg-custom-green text-custom-dark-gray flex flex-col font-semibold`}
      >
        <div className="bg-custom-dark-gray flex h-16 px-5 w-full md:hidden">
          {/* <FontAwesomeIcon
            className="text-custom-green my-auto ml-auto text-3xl"
            icon={faTimes}
            onClick={() => toggleMenu()}
          /> */}
          <Button onClick={() => toggleMenu()} variant="link">
            icon
          </Button>
        </div>

        <ul className="flex-grow px-5 py-6">
          {menuItems.map((menuItem) => (
            <MenuItem
              href={menuItem.href}
              name={menuItem.name}
              key={menuItem.href}
            />
          ))}

          <li>
            <button
              onClick={logoutUser}
              className="block px-5 py-3 hover:font-bold"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed md:hidden top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={() => toggleMenu()}
        ></div>
      )}
    </>
  );
}

export default SideMenu