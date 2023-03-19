<template>
    <div class="otherPage">
        <h2 class="otherPage__title">Page categories</h2>
    </div>
</template>

<style lang="scss" scoped>
.otherPage {
    padding: desktop-vw(100) 0 0 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
        text-align: center;
        color: #07484A;
        font-size: desktop-vw(60);
    }
}

@media screen and (max-width: $tablet) {
    .otherPage {
        padding: tablet-vw(100) 0 0 0;

        &__title {
            font-size: tablet-vw(60);
        }
    }
}
@media screen and (max-width: $mobile) {
    .otherPage {
        padding: mobile-vw(100) 0 0 0;

        &__title {
            font-size: mobile-vw(60);
        }
    }
}
</style>