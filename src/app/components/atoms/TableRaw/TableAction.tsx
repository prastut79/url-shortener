"use client";
import DialogBox from "@components/DialogBox/DialogBox";
import Link from "next/link";
import React, { useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

export default function TableAction({
	onEdit,
	onDelete,
}: {
	onEdit: string;
	onDelete: () => any;
}) {
	return (
		<div className="fc_x gap-x-4 text-base">
			<Link
				href={onEdit}
				prefetch={false}
				className="action-btn tooltip-top "
				data-tooltip="Edit"
			>
				<HiOutlinePencil className="text-sky-500" />
			</Link>

			<ActionDelete onDelete={onDelete} />
		</div>
	);
}
export function ActionDelete({ onDelete }: { onDelete: () => any }) {
	const [open, setOpen] = useState(false);

	function onClose() {
		setOpen((p) => !p);
	}

	return (
		<>
			{open && (
				<DialogBox
					onConfirm={onDelete}
					open={open}
					onClose={onClose}
					title="Confirm Delete"
				/>
			)}
			<button
				onClick={(e) => {
					e.stopPropagation();
					setOpen(true);
				}}
				className="action-btn tooltip-top "
				data-tooltip="Delete"
			>
				<RiDeleteBin3Line className="text-red-500" />
			</button>
		</>
	);
}
