import React from "react";
import {Menu} from "@headlessui/react";

const CategoriesItem = (props) => {
    return (
            <div>
            <Menu.Item>
                {({active}) => (
                    <button
                        className={`${
                            active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm flex`}
                    >
                        {props.item}
                    </button>
                )}
            </Menu.Item>
        </div>
    );
};

export default CategoriesItem;