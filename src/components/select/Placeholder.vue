<template>
    <div class="Select__header-placeholder">
        {{ props.placeholderName }}
    </div>
</template>

<script setup lang="ts">
import { IPlaceholder } from "../../types/selectTypes";

const props = defineProps<IPlaceholder>();
</script>

<style lang="scss" scoped>
.Select {
    &__header {
        &-placeholder {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            color: rgba(41, 39, 125, 0.4);
            z-index: 5;
        }
    }
}
</style>
