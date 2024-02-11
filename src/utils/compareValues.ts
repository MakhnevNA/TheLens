import { IData, IRoomOrder } from "../types/tableTypes";

const roomOrder: IRoomOrder = {
    Студия: 1,
    "1-к": 1.5,
    "2-к": 2,
    "3-к": 3,
};

export const compareValues = (
    firstItem: IData,
    secondItem: IData,
    directionNumber: number,
    sortColumn: keyof IData
) => {
    const valueA = firstItem[sortColumn];
    const valueB = secondItem[sortColumn];

    if (typeof valueA === "number" && typeof valueB === "number") {
        if (valueA < valueB) return -1 * directionNumber;
        if (valueA > valueB) return 1 * directionNumber;

        return 0;
    } else if (typeof valueA === "string" && typeof valueB === "string") {
        //отдельная сортировка по type
        if (sortColumn === "type") {
            const orderA = roomOrder[firstItem.type];
            const orderB = roomOrder[secondItem.type];

            if (orderA < orderB) return -1 * directionNumber;
            if (orderA > orderB) return 1 * directionNumber;
            return 0;
        } else {
            return valueA.localeCompare(valueB) * directionNumber;
        }
    } else {
        return 0;
    }
};
