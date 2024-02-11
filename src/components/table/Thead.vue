<template>
    <thead class="Table__thead">
        <tr class="Table__row">
            <th
                v-for="header in props.headers"
                :class="['Table__cell', 'Cell-' + header.fieldName]"
            >
                <button
                    class="Table__cell-button"
                    @click="$emit('sortTable', header.fieldName)"
                >
                    <div>{{ header.displayName }}</div>
                    <div class="Table__cell-arrow">
                        <SortButton
                            v-for="button in buttonArray"
                            :button="button"
                            :header="header"
                            :sortDirection="props.sortDirection"
                            :sortColumn="props.sortColumn"
                            @sortTable="
                                $emit(
                                    'sortTable',
                                    header.fieldName,
                                    button.direction
                                )
                            "
                        />
                    </div>
                </button>
            </th>
        </tr>
    </thead>
</template>

<script setup lang="ts">
import SortButton from "../table/SortButton.vue";
import { ITheadProps, IButtonArray } from "../../types/tableTypes";
const props = defineProps<ITheadProps>();

const buttonArray: IButtonArray[] = [
    {
        class: "Sort__button-top",
        direction: "asc",
        childrenClass: "Arrow-top",
    },
    {
        class: "Sort__button-bottom",
        direction: "desc",
        childrenClass: "Arrow-bottom",
    },
];
</script>

<style scoped lang="scss">
.Table {
    &__thead {
        height: 45px;
        display: flex;
        position: sticky;
        top: 0;
        z-index: 999;
    }

    &__row {
        display: flex;
    }

    &__cell {
        height: 100%;
        background-color: #fff;
        width: 120px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(133, 232, 241);

        &-button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            font-size: 18px;
        }

        &-arrow {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;

            button {
                max-height: 100%;
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>
