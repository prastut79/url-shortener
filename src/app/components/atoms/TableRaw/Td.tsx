export default function Td({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<td
			className={`p-4 max-w-xs truncate  ${className ? className : ""}`}
			{...props}
		>
			{children}
		</td>
	);
}
