<template>
    <li
        class="Select__menu-option"
        :class="{
            selectedOption: props.option.title === props.value,
        }"
        @click.stop="$emit('selectItem', props.option.title)"
    >
        <button type="button">
            <div>{{ props.option.title }}</div>
        </button>
    </li>
</template>

<script setup lang="ts">
import { IOptionProps } from "../../types/selectTypes";

const props = defineProps<IOptionProps>();
</script>

<style scoped lang="scss">
.Select {
    &__menu {
        &-option {
            transition: background-color 0.35s;

            button {
                padding: 7px 0;
                width: 100%;
                color: inherit;
            }

            &:hover {
                background-color: #dadefe;
            }
        }
    }
}

.selectedOption {
    background-color: rgba(206, 206, 206, 0.5);
}
</style>
