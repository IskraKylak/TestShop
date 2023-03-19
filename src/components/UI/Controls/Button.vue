<template>
  <button
    class="btn"
    v-bind="$attrs">

    <!-- slot -->
    <slot />

  </button>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.btn {
    height: desktop-vw(80);
    width: max-content;
    min-width: desktop-vw(230);
    background: #70908B;
    border-radius: desktop-vw(10);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: desktop-vw(24);
    line-height: 130%;
    color: #FDFBF8;
    grid-gap: desktop-vw(18);
    border: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #438b7f;
    }
}

@media screen and (max-width: $tablet) {
    .btn {
        height: tablet-vw(80);
        min-width: tablet-vw(230);
        border-radius: tablet-vw(10);
        font-size: tablet-vw(24);
        grid-gap: tablet-vw(18);
    }
}
@media screen and (max-width: $mobile) {
	.btn {
        height: mobile-vw(55);
        min-width: mobile-vw(170);
        border-radius: mobile-vw(10);
        font-size: mobile-vw(18);
        grid-gap: mobile-vw(18);
    }
}

</style>
