import { TColumn, TDirectionSort } from "../types/tableTypes";

export function generateDinamicColorArrow(
    key: string,
    sortColumn: TColumn,
    sortDirection: TDirectionSort,
    direction: TDirectionSort
) {
    const color =
        key === sortColumn && sortDirection === direction ? "#29277d" : "red";

    return color;
}
