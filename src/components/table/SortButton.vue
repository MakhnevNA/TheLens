<template>
    <button
        :class="props.button.class"
        type="button"
        @click.stop="
            $emit('sortTable', props.header.fieldName, button.direction)
        "
    >
        <ArrowSort
            :color="
                generateDinamicColorArrow(
                    props.header.fieldName,
                    props.sortColumn,
                    props.sortDirection,
                    props.button.direction
                )
            "
            :class="props.button.childrenClass"
        />
    </button>
</template>

<script setup lang="ts">
import ArrowSort from "../../assets/ArrowSort.vue";
import { ISortButton } from "../../types/tableTypes";
import { generateDinamicColorArrow } from "../../utils/generateDinamicColorArrow";
const props = defineProps<ISortButton>();
</script>

<style scoped lang="scss">
.Table {
    .Sort__button {
        &-top {
            margin-bottom: 2px;
            .Arrow-top {
                transform: rotate(180deg);
            }
        }

        &-bottom {
            margin-top: 2px;
        }
    }

    .activeButton {
        color: #29277d;
    }
}
</style>
