<template>
    <div class="Table">
        <table>
            <Thead
                :headers="customerOrdersHeaders"
                :sortDirection="sortDirection"
                :sortColumn="sortColumn"
                @sortTable="handleClickSortTable"
            />
            <Body :tableData="tableData" :headers="customerOrdersHeaders" />
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Thead from "../table/Thead.vue";
import Body from "../table/Body.vue";
import { compareValues } from "../../utils/compareValues";
import {
    TDirectionSort,
    TColumn,
    ICustomerOrdersHeaders,
    IData,
} from "../../types/tableTypes";

// Направление сортировки (возрастание/убывание)
const sortDirection = ref<TDirectionSort>("asc");
// Столбец, по которому сортируются данные
const sortColumn = ref<TColumn>("");

//массив объектов для шапки таблицы
const customerOrdersHeaders: ICustomerOrdersHeaders[] = [
    { fieldName: "number", displayName: "Number" },
    { fieldName: "developer", displayName: "Developer" },
    { fieldName: "deadline", displayName: "Deadline" },
    { fieldName: "type", displayName: "Type" },
    { fieldName: "floor", displayName: "Floor" },
    { fieldName: "square", displayName: "Square" },
];

//массив с данными для тела таблицы
const tableData = ref<IData[]>([
    {
        id: 1,
        number: 421,
        developer: "PRINZIP",
        deadline: "2005-08-09T18:31:42",
        type: "Студия",
        floor: 2,
        square: 100.3,
    },
    {
        id: 2,
        number: 73,
        developer: "Брусника",
        deadline: "2005-08-09T18:31:42",
        type: "2-к",
        floor: 2,
        square: 10.3,
    },

    {
        id: 3,
        number: 122,
        developer: "TEN",
        deadline: "2005-08-09T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
    {
        id: 4,
        number: 1,
        developer: "PRINZIP",
        deadline: "2005-08-09T18:31:42",
        type: "Студия",
        floor: 2,
        square: 100.3,
    },
    {
        id: 5,
        number: 72,
        developer: "Брусника",
        deadline: "2005-08-09T18:31:42",
        type: "2-к",
        floor: 2,
        square: 10.3,
    },
    {
        id: 6,
        number: 23,
        developer: "TEN",
        deadline: "2005-08-09T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
    {
        id: 7,
        number: 5,
        developer: "PRINZIP",
        deadline: "2005-08-09T18:31:42",
        type: "Студия",
        floor: 2,
        square: 100.3,
    },
    {
        id: 8,
        number: 2,
        developer: "Брусника",
        deadline: "2005-08-09T18:31:42",
        type: "2-к",
        floor: 2,
        square: 10.3,
    },
    {
        id: 9,
        number: 97,
        developer: "TEN",
        deadline: "2005-08-09T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
    {
        id: 10,
        number: 34,
        developer: "PRINZIP",
        deadline: "2005-08-09T18:31:42",
        type: "Студия",
        floor: 2,
        square: 100.3,
    },
    {
        id: 11,
        number: 1,
        developer: "Брусника",
        deadline: "2005-08-09T18:31:42",
        type: "2-к",
        floor: 2,
        square: 10.3,
    },
    {
        id: 12,
        number: 88,
        developer: "TEN",
        deadline: "2005-08-09T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
    {
        id: 13,
        number: 45,
        developer: "TEN",
        deadline: "2005-08-09T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
    {
        id: 14,
        number: 43,
        developer: "TEN",
        deadline: "2005-08-21T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
    {
        id: 15,
        number: 34,
        developer: "TEN",
        deadline: "2005-08-09T18:31:42",
        type: "3-к",
        floor: 2,
        square: 103,
    },
]);

// сортировка данных по выбранному столбцу
const handleClickSortTable = (column: TColumn, direction?: TDirectionSort) => {
    if (sortColumn.value === column && direction) {
        // Если столбец сортировки совпадает с текущим столбцом и мы передали направление, то сортировка будет в этом столбце по переданному направлению
        sortDirection.value = direction;
    } else if (sortColumn.value === column && direction === undefined) {
        // Если столбец сортировки совпадает с текущим столбцом и мы НЕ передали направление, то сортировка будет по этому столбцу и противоположному направлению
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else if (sortColumn.value !== column && direction === undefined) {
        // Если столбец сортировки НЕ совпадает с текущим столбцом и мы НЕ передали направление, устанавливаем новый столбец, который указали и направление 'asc'
        sortColumn.value = column;
        sortDirection.value = "asc";
    } else if (sortColumn.value !== column && direction) {
        // Если столбец сортировки НЕ совпадает с текущим столбцом и мы передали направление, устанавливаем новый столбец, который указали и указанное направление
        sortColumn.value = column;
        sortDirection.value = direction;
    }
    sortTableData();
};

const sortTableData = () => {
    const sortedData = tableData.value.sort((a, b) => {
        const directionNumber = sortDirection.value === "asc" ? 1 : -1;
        return compareValues(a, b, directionNumber, sortColumn.value);
    });
    tableData.value = sortedData;
};
</script>

<style scoped lang="scss">
.Table {
    flex-wrap: wrap;
    max-height: 600px;
    display: inline-block;
    overflow-y: auto;
    margin-left: 50px;
    border: 1px solid teal;
}
</style>
