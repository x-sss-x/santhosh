import React, { useState } from 'react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <HeadlessMenu>
        {({ open }) => (
          <>
            <HeadlessMenu.Button className="p-2" onClick={handleClick}>
              <FiMenu className="h-6 w-6" />
            </HeadlessMenu.Button>
            <Transition
              show={open}
              enter="transition duration-300 transform ease-out"
              enterFrom="opacity-0 translate-x-2"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-200 transform ease-in"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-2"
            >
              <HeadlessMenu.Items
                static
                className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg focus:outline-none"
              >
                <HeadlessMenu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-400' : 'bg-gray-200'
                      } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                    >
                      Customer Review
                    </button>
                  )}
                </HeadlessMenu.Item>
                <HeadlessMenu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-400' : 'bg-gray-200'
                      } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                    >
                      Service Providers
                    </button>
                  )}
                </HeadlessMenu.Item>
                <HeadlessMenu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-400' : 'bg-gray-200'
                      } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                    >
                      Review
                    </button>
                  )}
                </HeadlessMenu.Item>
                <HeadlessMenu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-400' : 'bg-gray-200'
                      } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                    >
                      History
                    </button>
                  )}
                </HeadlessMenu.Item>
              </HeadlessMenu.Items>
            </Transition>
          </>
        )}
      </HeadlessMenu>
    </div>
  );
};

export default Menu;
