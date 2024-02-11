<template>
    <ul
        :class="{
            Select__menu: true,
            openSelect: props.isOpenSelect,
        }"
    >
        <Option
            v-for="option in props.options"
            :key="option.id"
            :option="option"
            @selectItem="$emit('selectItem', option.title)"
            :value="props.value"
        />
    </ul>
</template>

<script setup lang="ts">
import Option from "./Option.vue";
import { IMenuProps } from "../../types/selectTypes.ts";

const props = defineProps<IMenuProps>();
</script>

<style scoped lang="scss">
.Select {
    &__menu {
        max-height: 0px;
        overflow: hidden;
        position: absolute;
        z-index: 100;
        left: 0px;
        width: 100%;
        border: 2px solid #f968bf;
        border-top: 0px solid #f968bf;
        border-bottom: 0px solid #f968bf;
        border-radius: 20px 20px 20px 20px;
        transition: border-radius 1s, max-height 1s, border-bottom 1s;
    }
}

.openSelect {
    border: 2px solid #f968bf;
    border-top: 0px solid #f968bf;
    border-radius: 0px 0px 20px 20px;
    max-height: 240px;
    transition: border-radius 1s, max-height 1s;
}
</style>
