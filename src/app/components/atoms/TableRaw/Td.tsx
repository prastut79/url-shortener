export default function Td({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<td className={`p-4 max-w-sm ${className ? className : ""}`} {...props}>
			{children}
		</td>
	);
}
// text-tp font-bold
