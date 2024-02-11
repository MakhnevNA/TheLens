<template>
    <tbody class="Table__body">
        <transition-group name="Table__body">
            <tr class="Table__row" v-for="row in props.tableData" :key="row.id">
                <td
                    v-for="col in props.headers"
                    :key="col.fieldName"
                    class="Table__cell"
                >
                    {{ renderCell(row, col) }}
                </td>
            </tr>
        </transition-group>
    </tbody>
</template>

<script setup lang="ts">
import { renderCell } from "../../utils/renderCell";
import { IBodyProps } from "../../types/tableTypes";
const props = defineProps<IBodyProps>();
</script>

<style scoped lang="scss">
.Table__body-move {
    transition: transform 1s;
}

.Table {
    &__row {
        height: 45px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(even) {
            background-color: rgb(239, 237, 237);
        }
    }

    &__cell {
        height: 100%;
        color: grey;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid teal;
        width: 120px;
    }
}
</style>
