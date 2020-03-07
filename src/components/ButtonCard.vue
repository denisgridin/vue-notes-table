<template>
  <div class="button">
    <div
      class="button_card"
      :class="[button.class, { active_button: isActive }]"
      @mousedown="setActiveClass"
      @mouseup="resetActiveClass"
    >
      <span
        class="button_card__icon material-icons"
        :class="{ active_content: clicked }"
        >{{ button.icon }}</span
      >
      <span class="button_card__text" :class="{ active_content: clicked }">{{
        button.text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
	mounted() {
		this.$root.$on('button_checked', this.resetChecking)
	},
	data: () => {
		return {
			clicked: false,
			isActive: false
		}
	},
	props: {
		button: {
			type: Object,
			required: true
		}
	},
	methods: {
		setActiveClass() {
			this.isActive = true
			this.clicked = true
			this.$root.$emit('button_checked', this.button.id)
		},
		resetActiveClass() {
			this.isActive = false
		},
		resetChecking(id) {
			if (this.button.id !== id) {
				this.clicked = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.active_button {
  background: #e6f9f1 !important;
}
.active_content {
  color: #15a86d !important;
}

.button_card_big {
  min-width: 100px;
  height: 100px;
  margin-right: 40px;

  .button_card__icon {
    font-size: 55px;
  }

  .button_card__text {
    font-size: 20px;
  }

  &:hover {
    box-shadow: 0px 2px 10px rgba(128, 128, 128, 0.25) !important;
  }
}

.button_card_md {
  min-width: 80px;
  height: 80px;
  margin-right: 30px;

  .button_card__icon {
    font-size: 40px;
  }

  .button_card__text {
    font-size: 15px;
  }
}

.button_card {
  background: #ffffff;
  transition: 0.1s;
  box-shadow: 0px 2px 10px rgba(128, 128, 128, 0.25);
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */

  &:hover {
    transform: translateY(-5px);
  }

  &__icon {
    color: #dde2e7;
    transition: 0.2s;
  }

  &__text {
    color: #dde2e7;
    transition: 0.2s;
  }
}
</style>
