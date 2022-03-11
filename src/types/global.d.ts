/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

interface AlertProps {
	color: "green" | "red";
	msg: string;
}

interface ListProps {
	list: { id: string; val: string }[];
	setList: (list: { id: string; val: string }[]) => void;
	setAlert: (alert: ["green" | "red", string]) => void;
	setEditId: (index: string) => void;
	setDeleteId: (index: string) => void;
}
