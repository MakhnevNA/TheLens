export interface ICustomerOrdersHeaders {
    fieldName: string;
    displayName: string;
}

export interface IData {
    [key: string]: any;
}

export type TDirectionSort = "asc" | "desc";

export type TColumn =
    | "id"
    | "number"
    | "developer"
    | "deadline"
    | "type"
    | "floor"
    | "square"
    | "";

export interface ITheadProps {
    sortDirection: TDirectionSort;
    sortColumn: TColumn;
    headers: ICustomerOrdersHeaders[];
}

export interface IBodyProps {
    tableData: IData[];
    headers: ICustomerOrdersHeaders[];
}

export interface IButtonArray {
    class: string;
    direction: TDirectionSort;
    childrenClass: string;
}

export interface ISortButton {
    header: ICustomerOrdersHeaders;
    button: IButtonArray;
    sortDirection: TDirectionSort;
    sortColumn: TColumn;
}

export interface IRoomOrder {
    [key: string]: number;
}
