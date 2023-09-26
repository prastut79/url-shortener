import React, { HTMLAttributes } from "react";

export default function TBody({
	children,
	className,
	...props
}: HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<tbody
			className={`text-sm font-semibold text-ts bg-bp ${
				className ? className : ""
			}`}
			{...props}
		>
			{children}
		</tbody>
	);
}
