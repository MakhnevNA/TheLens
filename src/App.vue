<template>
    <div class="wrapper">
        <Select
            :options="options"
            :value="value"
            :onSelect="onSelect"
            name="Gender"
            placeholderName="Ваш гендер"
            id="Для лэйбла"
            :isOpen="false"
        />

        <Table />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Select from "./components/UI/Select.vue";
import Table from "../src/components/UI/Table.vue";
import { IOptions, TValue } from "./types/selectTypes";

// массив данных для селекта
const options: IOptions[] = [
    {
        id: 1,
        title: "Слон",
    },
    {
        id: 2,
        title: "Бегемот",
    },
    {
        id: 3,
        title: "Зебра",
    },
    {
        id: 4,
        title: "Жираф",
    },
    {
        id: 5,
        title: "Лев",
    },
];

// выбранное значение селекта
const value = ref<TValue>(null);

// метод по изменению value
const onSelect = (newValue: string) => {
    value.value = newValue;
};
</script>

<style scoped lang="scss">
.wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

// .Form {
//     width: 500px;
//     height: 500px;
//     border: 1px solid red;

//     &__select {
//         margin: 50px 0 240px 0;
//         display: flex;
//         justify-content: center;
//     }

//     &__button {
//         display: flex;
//         justify-content: center;
//     }

//     &__submit {
//         background-color: aqua;
//         width: 100px;
//         height: 30px;
//         border-radius: 10px;
//         cursor: pointer;
//     }
// }
</style>
