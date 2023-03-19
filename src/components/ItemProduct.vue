<template>
    <div class="cardProduct">
        <img class="cardProduct__img" :src="content.img" alt="img">
        <div class="cardProduct__info">
            <div class="cardProduct__info__title">
                {{ content.title }}
            </div>
            <div class="cardProduct__info__description">
                {{ content.description }}
            </div>
            <div class="cardProduct__info__price">
                ${{ content.price }}
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import Button from '@/components/UI/Controls/Button'

export default {
	props: [ "content" ],
	data() {
		return {
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style lang="scss">

.cardProduct {
    width: desktop-vw(430);
    border-radius: desktop-vw(16);
    padding: desktop-vw(40);
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
        width: desktop-vw(250);
        height: desktop-vw(270);
        margin-bottom: desktop-vw(40);
    }

    &__info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__title {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(24);
            line-height: 150%;
            color: #70908B;
            margin-bottom: desktop-vw(10);
        }

        &__description {
            font-style: normal;
            font-weight: 400;
            font-size: desktop-vw(18);
            line-height: 150%;
            color: #70908B;
            margin-bottom: desktop-vw(10);
        }

        &__price {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(24);
            line-height: 150%;
            color: #70908B;
        }
    }
}

@media screen and (max-width: $tablet) {
    .cardProduct {
        width: auto;
        border-radius: tablet-vw(16);
        padding: tablet-vw(40);

        &__img {
            width: tablet-vw(250);
            height: tablet-vw(270);
            margin-bottom: tablet-vw(40);
        }

        &__info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            &__title {
                font-size: tablet-vw(24);
                margin-bottom: tablet-vw(10);
            }

            &__description {
                font-size: tablet-vw(18);
                margin-bottom: tablet-vw(10);
            }

            &__price {
                font-size: tablet-vw(24);
            }
        }
    }
}
@media screen and (max-width: $mobile) {
    .cardProduct {
        width: mobile-vw(237);
        border-radius: mobile-vw(16);
        padding: mobile-vw(20);

        &__img {
            width: mobile-vw(90);
            height: mobile-vw(116);
            margin-bottom: mobile-vw(40);
        }

        &__info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            &__title {
                font-size: mobile-vw(18);
                margin-bottom: mobile-vw(10);
            }

            &__description {
                font-size: mobile-vw(18);
                margin-bottom: mobile-vw(10);
            }

            &__price {
                font-size: mobile-vw(24);
            }
        }
    }
}

</style>