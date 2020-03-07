<template>
  <div class="app-history" @wheel="wheelEvent">
    <ButtonCard
      v-for="(button, index) in history"
      :key="index + button.text"
      :button="button"
    >
    </ButtonCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	components: {
		ButtonCard: () => import('@/components/ButtonCard')
	},
	computed: {
		...mapGetters(['buttons']),
		history() {
			return this.buttons('history')
		}
	},
	methods: {
		wheelEvent() {
			this.$root.$emit('wheel')
		}
	}
}
</script>
<style>
.app-history {
  overflow: scroll;
  display: flex;
  padding: 10px;
}

.app-history::-webkit-scrollbar {
  width: 0px;
}
</style>
