import { ICustomerOrdersHeaders, IData } from "../types/tableTypes";
import { transformData } from "./transformData";

// метод по проверке, стоит ли применять transformData.
export const renderCell = (row: IData, col: ICustomerOrdersHeaders) => {
    const fieldValue = row[col.fieldName];
    return col.fieldName === "deadline"
        ? transformData(fieldValue)
        : fieldValue;
};
