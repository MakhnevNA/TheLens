<template>
    <div :class="{ Select: true, open: isOpenSelect }" @click.stop="toggleMenu">
        <div class="Select__backdrop" @click.stop="toggleMenu"></div>
        <Header
            :value="props.value"
            :isOpenSelect="isOpenSelect"
            :name="props.name"
            :placeholderName="props.placeholderName"
        />
        <Menu
            :options="props.options"
            @selectItem="props.onSelect"
            :isOpenSelect="isOpenSelect"
            :value="props.value"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Header from "../select/Header.vue";
import Menu from "../select/Menu.vue";
import { ISelectProps } from "../../types/selectTypes";

const props = defineProps<ISelectProps>();

//окрыт/закрыт селект
const isOpenSelect = ref<boolean>(props.isOpen);

//открытие/закрытие селекта
const toggleMenu = () => {
    isOpenSelect.value = !isOpenSelect.value;
};

watch(
    () => props.value,
    () => toggleMenu()
);
</script>

<style scoped lang="scss">
.Select {
    width: 250px;
    max-height: 38px;
    position: relative;
    color: #29277d;
    z-index: 100;

    &.open {
        .Select__backdrop {
            display: block;
            background: transparent;
        }
    }
}

.Select__backdrop {
    position: fixed;
    display: none;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}
</style>
