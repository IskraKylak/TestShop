<template>
  <div class="header">
    <div class="container">
		<div class="hcontent">
			<router-link class="hcontent__logo" to="/">
				<img src="@/assets/img/logo.svg" alt="img">
			</router-link>
			<div class="hcontent__burger" @click="openMenu = !openMenu">
				<img src="@/assets/img/burger.svg" alt="img">
			</div>
			<div class="hcontent__menu" :class="openMenu ? 'openMenu' : ''">
				<router-link class="hcontent__menu__item" v-for="(item, idx) in menu" :key="idx" :to="item.link">
					{{ item.name }}
				</router-link>
			</div>
			<div class="hcontent__panel">
				<div class="hcontent__panel__icon" @click="openSearch = !openSearch">
					<img src="@/assets/img/iconSearch.svg" alt="img">
				</div>
				<div class="hcontent__panel__icon">
					<img src="@/assets/img/iconBusket.svg" alt="img">
				</div>
				<div class="hcontent__panel__icon">
					<img src="@/assets/img/iconUser.svg" alt="img">
				</div>
			</div>
		</div>
		<div class="hcontent__search" :class="openSearch ? 'openSearch' : ''">
			<div class="hcontent__search__input">
				<input type="text">
			</div>
			
		</div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
        return {
			openMenu: false,
			openSearch: false,
            lcMenu: false,
            acc: {
                first_name: '',
                last_name: '',
            },
            menu: [
                {
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'Products',
                    link: '/products'
                },
                {
                    name: 'Categories',
                    link: '/categories'
                },
                {
                    name: 'About',
                    link: '/about'
                },
                {
                    name: 'Contact Us',
                    link: '/contact'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.header {
	position: fixed;
	top: 0;
	left: 0;
	height: desktop-vw(100);
	width: 100%;
	background: rgba(224, 246, 241, 0.5);
	z-index: 99;
}

.hcontent {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	&__search {
		background: rgba(224, 246, 241, 0.5);
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;

		&.openSearch {
			opacity: 1;
			visibility: visible;
		}

		&__input {
			height: desktop-vw(70);
			padding: 0 desktop-vw(20);
			display: flex;
			align-items: center;

			input {
				width: 100%;
				height: desktop-vw(30);
				border: 0;
			}
		}
		
	}

	&__burger {
		display: none;
	}

	&__logo {
		width: desktop-vw(144);
		height: desktop-vw(36);
		
		img {
			width: 100%;
			height: 100%;
		}
	}

	&__panel {
		display: flex;
		justify-content: space-between;
		width: desktop-vw(160);

		&__icon {
			width: desktop-vw(27);
			height: desktop-vw(27);
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	&__menu {
		font-family: 'PlayfairDisplay';
		width: desktop-vw(630);
		display: flex;
		justify-content: space-between;

		&__item {
			font-style: normal;
			font-weight: 400;
			font-size: desktop-vw(20);
			line-height: 130%;
			letter-spacing: 0.05em;
			color: #07484A;
			text-decoration: none;
			position: relative;
			transition: all 0.3s ease;

			&:hover {
				&:before {
					content: "";
					position: absolute;
					bottom: desktop-vw(-3);
					width: 100%;
					height: 1px;
					background: #07484A;
				}
			}

			&.router-link-active {
				font-weight: 700;
				
				&:before {
					content: "";
					position: absolute;
					bottom: desktop-vw(-3);
					width: 100%;
					height: 2px;
					background: #07484A;
				}
			}
		}
	}
}

@media screen and (max-width: $tablet) {
	.header {
		height: tablet-vw(100);
	}

	.hcontent {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;

		&__burger {
			display: flex;
			width: tablet-vw(31);
			height: tablet-vw(24);
		}

		&__logo {
			width: tablet-vw(144);
			height: tablet-vw(36);
		}

		&__panel {
			width: tablet-vw(160);

			&__icon {
				width: tablet-vw(27);
				height: tablet-vw(27);
			}
		}

		&__menu {
			position: fixed;
			transform: translate(-100%);
			transition: all 0.3s ease;
			top: 0;
			left: 0;
			height: 100vh;
			width: auto;
			flex-direction: column;
			justify-content: center;
			grid-gap: tablet-vw(20);
			background: rgba(224, 246, 241, 1);
			padding: 0 tablet-vw(40);

			&.openMenu {
				transform: translate(0);
			}

			&__item {
				font-size: tablet-vw(20);
				width: max-content;

				&:hover {
					&:before {
						bottom: tablet-vw(-3);
					}
				}

				&.router-link-active {	
					&:before {
						bottom: tablet-vw(-3);
					}
				}
			}
		}
	}
}
@media screen and (max-width: $mobile) {
	.header {
		height: mobile-vw(100);
	}

	.hcontent {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;

		&__burger {
			display: flex;
			width: mobile-vw(31);
			height: mobile-vw(24);
		}

		&__logo {
			width: mobile-vw(144);
			height: mobile-vw(36);
		}

		&__panel {
			width: mobile-vw(100);

			&__icon {
				width: mobile-vw(27);
				height: mobile-vw(27);
			}
		}

		&__menu {
			position: fixed;
			transform: translate(-100%);
			transition: all 0.3s ease;
			top: 0;
			left: 0;
			height: 100vh;
			width: auto;
			flex-direction: column;
			justify-content: center;
			grid-gap: mobile-vw(20);
			background: rgba(224, 246, 241, 1);
			padding: 0 mobile-vw(40);

			&.openMenu {
				transform: translate(0);
			}

			&__item {
				font-size: mobile-vw(20);

				&:hover {
					&:before {
						bottom: mobile-vw(-3);
					}
				}

				&.router-link-active {	
					&:before {
						bottom: mobile-vw(-3);
					}
				}
			}
		}
	}
}
</style>