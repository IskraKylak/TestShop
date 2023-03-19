<template>
  <div class="banner">
    <img class="banner__img" src="@/assets/img/mainFon.png" alt="img">
    <div class="container">
        <div class="bContent">
            <h1 class="bContent__title">
				{{ title }}
			</h1>
			<p class="bContent__description">
				{{ description }}
			</p>
			<Button class="bContent__btnGreen">{{ nameBtn }}</Button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import Button from '@/components/UI/Controls/Button'

export default {
	components: {
		Button
	},
	data() {
		return {
			title: "Exclusive Deals of Furniture Collection",
			description: "Explore different categories. Find the best deals.",
			nameBtn: "Shop Now"
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>

.banner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: desktop-vw(1080);

    &__img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: contain;
    }
}

.bContent {
	position: relative;
	z-index: 2;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: desktop-vw(668);

	&__title {
		font-family: 'PlayfairDisplay';
		font-style: normal;
		font-weight: 700;
		font-size: desktop-vw(64);
		line-height: 130%;
		margin-bottom: desktop-vw(54);
		color: #07484A;
	}

	&__description {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: desktop-vw(24);
		line-height: 130%;
		margin-bottom: desktop-vw(54);
		color: #07484A;
	}

}

@media screen and (max-width: $tablet) {

	.banner {
		height: tablet-vw(660);
	}

	.bContent {
		max-width: tablet-vw(668);

		&__title {
			font-size: tablet-vw(48);
			margin-bottom: tablet-vw(24);
		}

		&__description {
			font-size: tablet-vw(24);
			margin-bottom: tablet-vw(44);
		}

	}

}
@media screen and (max-width: $mobile) {
	.banner {
		height: mobile-vw(740);
	}

	.bContent {
		max-width: mobile-vw(668);

		&__title {
			text-align: center;
			font-size: mobile-vw(32);
			margin-bottom: mobile-vw(24);
		}

		&__description {
			text-align: center;
			font-size: mobile-vw(18);
			margin-bottom: mobile-vw(44);
		}

		&__btnGreen {
			margin: 0 auto;
		}
	}
}

</style>