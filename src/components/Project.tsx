/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { MouseEventHandler, useEffect, useState } from "react";

import Alert from "./Alert";
import List from "./List";

const Project = () => {
	const [item, setItem] = useState("");
	const [list, setList] = useState<{ id: string; val: string }[]>([]);
	const [alert, setAlert] = useState<["green" | "red", string]>();
	const [deleteId, setDeleteId] = useState<string>();
	const [editId, setEditId] = useState<string>();

	useEffect(() => {
		const remove = setTimeout(() => setAlert(undefined), 2000);
		return () => clearTimeout(remove);
	}, [alert]);
	useEffect(() => {
		if (editId !== undefined)
			setItem(list[list.findIndex(g => g.id === editId)].val);
	}, [editId]);
	useEffect(() => {
		if (deleteId !== undefined) {
			setList(list.filter(g => g.id !== deleteId));
			if (editId === deleteId) setEditId(undefined);
			setDeleteId(undefined);
		}
	}, [deleteId]);

	const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault();
		if (!item.length) return setAlert(["red", "Please enter an item!"]);
		setItem("");

		if (editId !== undefined) {
			setList(
				list.map(g => {
					if (g.id === editId) return { ...g, val: item };
					return g;
				})
			);
			setEditId(undefined);
			setAlert(["green", "Value changed!"]);
		} else {
			setList(
				list.concat({
					id:
						(
							new Date().getTime() +
							Math.random() * Number.MAX_SAFE_INTEGER
						).toString() + item,
					val: item,
				})
			);
			setAlert(["green", "Item added to list!"]);
		}
	};

	return (
		<>
			<h1 className="relative py-4 mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-cyan-500">
				grocery bud
			</h1>
			<div className="p-4 rounded shadow-lg max-w-[40rem] w-full">
				{alert && <Alert color={alert[0]} msg={alert[1]} />}
				<form className="flex items-center justify-center">
					<input
						className="flex-grow px-2 py-1 text-lg rounded-l outline-none text-cyan-900 caret-cyan-500 placeholder:text-cyan-700 indent-2 bg-slate-100"
						placeholder="E.g. eggs"
						type="text"
						value={item}
						onChange={e => setItem(e.target.value)}
					/>
					<button
						className="px-2 py-1 text-lg text-white capitalize transition rounded-r bg-cyan-500 hover:bg-cyan-700"
						onClick={handleClick}>
						{editId !== undefined ? "edit" : "submit"}
					</button>
				</form>
				<List
					list={list}
					setList={setList}
					setAlert={setAlert}
					setEditId={setEditId}
					setDeleteId={setDeleteId}
				/>
			</div>
		</>
	);
};

export default Project;
