import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useMenu } from '@/hooks/useMenu';
import { MenuItemProps } from '@/types/auth';
import MenuItem from './menuItem';
import { DeleteIcon } from 'lucide-react';


const SideMenu = ({ menuItems }: { menuItems: Omit<MenuItemProps, "closeMenu">[] }) => {
  const { isOpen, closeMenu, toggleMenu } = useMenu();
  const { user, logoutUser } = useAuth();

  return (
    <>
      <div
        className={`fixed md:static top-0 right-0 z-40 md:z-0 w-64 h-screen transition-transform ${
          isOpen ? "" : "translate-x-full"
        } md:translate-x-0 md:w-1/5 md:h-auto bg-primary text-custom-dark-gray flex flex-col font-semibold`}
      >
        <div className="bg-dark-01 flex flex-col h-28 px-5 py-5 w-full md:hidden">
          <DeleteIcon
            size={28}
            className="text-primary ml-auto my-auto"
            onClick={closeMenu}
          />
          <Link href="/home" className="text-sm font-bold text-primary">
            Hola, {user?.firstname} {user?.lastname}
          </Link>
        </div>

        <ul className="flex-grow px-5 py-6">
          {menuItems.map((menuItem) => (
            <MenuItem
              href={menuItem.href}
              name={menuItem.name}
              key={menuItem.href}
              closeMenu={closeMenu}
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
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default SideMenu;



