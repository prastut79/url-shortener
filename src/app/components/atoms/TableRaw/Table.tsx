import { PropsWithChildren } from "react";

export type dataPropsType = { id: string; [key: string]: any };
export type TableDataProps = Array<{ child: any[]; props: dataPropsType }>;

export default function Table({ children }: PropsWithChildren<any>) {
	return (
		<div className="overflow-auto max-w-full max-h-[500px] shadow-md rounded">
			<table className="w-full text-left ">{children}</table>
		</div>
	);
}
