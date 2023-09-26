/* Table Header*/
export type sortType = "asc" | "dec";
export type onSortType = (id: string, order: sortType) => void;

type headerObjectType = {
	id?: string;
	label: string;
	order?: sortType;
};
export type tableHeadertype = headerObjectType | string;

export interface sortableHeaderType extends headerObjectType {
	toggleSort: (id: string, order: sortType) => void;
	sortStatus: sortType | undefined;
}

export interface TableHeaderProps {
	header: tableHeadertype[];
	onSort?: onSortType;
	isSelected: boolean;
	onSelect: (value: boolean) => any;
}
