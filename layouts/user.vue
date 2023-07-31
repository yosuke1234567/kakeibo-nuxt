<script setup lang="ts">

</script>

<template>
    <v-layout>
        <v-main class="page-view">
            <slot></slot>
        </v-main>
        <v-bottom-navigation :elevation="1" class="nav">
            <v-btn to="/home">
                <v-icon icon="fa:fas fa-house" class="nav-icon"></v-icon>
                ホーム
            </v-btn>
            <v-btn to="/input">
                <v-icon icon="fa:fas fa-pen-to-square" class="nav-icon"></v-icon>
                入力
            </v-btn>
            <v-btn to="/stats">
                <v-icon icon="fa:fas fa-chart-simple" class="nav-icon"></v-icon>
                統計
            </v-btn>
            <v-btn to="/mypage">
                <v-icon icon="fa:fas fa-user" class="nav-icon"></v-icon>
                マイページ
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<style lang="scss" scoped>
.page-view {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
}

.nav {
    width: 100%;
}

.nav-icon {
    font-size: 1.5em;
    margin-bottom: 0.2em;
}
</style>