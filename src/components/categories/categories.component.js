import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CategoriesItem from "../categoriesItem/categoriesItem.component";
import generateKey from "../../utils/generateKey.helper";
import { Link } from "react-router-dom";

const Categories = (props) => {
  const render = () => {
    return props.items.map((item) => {
      if (item.link == null) {
        return <CategoriesItem item={item.name} key={generateKey()} />;
      } else {
        return (
          <Link to={item.link}>
            <CategoriesItem item={item.name} key={generateKey()} />
          </Link>
        );
      }
    });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center border-none rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {props.title}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-screen mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 h-48 overflow-y-auto">{render()}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Categories;
