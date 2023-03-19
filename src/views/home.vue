<template>
    <div class="mainPage">
        <Banner />
        <PopularProducts />
    </div>
</template>

<script>
import Banner from '@/components/Banner'
import PopularProducts from '@/components/PopularProducts.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    Banner,
    PopularProducts
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">

.mainPage {
    
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}

</style>

