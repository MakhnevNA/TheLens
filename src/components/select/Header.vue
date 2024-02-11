<template>
    <div :class="{ Select__header: true, openSelect: props.isOpenSelect }">
        <transition name="Select__header" mode="in-out">
            <Placeholder
                v-if="props.value === null"
                :value="props.value"
                :placeholderName="props.placeholderName"
                key="placeholder"
            />
            <div v-else class="Select__value" key="value">
                {{ value }}
            </div>
        </transition>

        <input
            class="Select__input"
            type="text"
            :value="props.value"
            :name="props.name"
            hidden
        />
        <div class="Select__icon">
            <ArrowSelect
                color="#5F88F4"
                class="Select__icon-arrow"
                :class="{
                    rotated: props.isOpenSelect,
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import Placeholder from "./Placeholder.vue";
import ArrowSelect from "../../assets/ArrowSelect.vue";
import { IHeaderProps } from "../../types/selectTypes";

const props = defineProps<IHeaderProps>();
</script>

<style scoped lang="scss">
.Select__header-leave {
    transform: translate(-100px, -20px);
}
//конечное состояние placeholder
.Select__header-leave-to {
    opacity: 0;
    transform: translate(-100px, -20px);
}

.Select__header-leave-active {
    transition: 2s all;
}

.Select {
    &__header {
        position: relative;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        cursor: pointer;
        border: 2px solid #f968bf;
        border-radius: 20px;
        transition: border-radius 1s;
    }

    &__value {
        justify-content: center;
    }

    &__icon {
        position: absolute;
        right: 15px;
        z-index: 5;

        &-arrow {
            transition: transform 1s;
            &.rotated {
                transform: rotate(180deg);
            }
        }
    }

    .openSelect {
        border-radius: 20px 20px 0 0;
    }
}
</style>
