/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = (props: ListProps) => {
  const { list, setList, setAlert, setEditId, setDeleteId } = props;
  return (
    <>
      <ul className={`space-y-2 ${list.length ? "mt-4" : ""}`}>
        {list.map(({ id, val }) => {
          return (
            <li
              key={id}
              className="flex justify-between w-full gap-6 px-2 py-1 text-lg break-all transition text-cyan-900 hover:bg-slate-100">
              {val}
              <div className="flex space-x-2 items-centers">
                <button onClick={() => setEditId(id)}>
                  <FaEdit className="w-4 h-4 text-green-600" />
                </button>
                <button
                  onClick={() => {
                    setDeleteId(id);
                    setAlert(["red", "Deleted item!"]);
                  }}>
                  <FaTrash className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {!!list.length && (
        <button
          className="block mx-auto mt-6 text-lg text-red-900 capitalize w-fit"
          onClick={() => {
            setList([]);
            setAlert(["red", "Emptied list!"]);
          }}>
          clear list
        </button>
      )}
    </>
  );
};

export default List;
