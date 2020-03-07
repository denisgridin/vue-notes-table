<template>
  <div class="app-controls">
    <ButtonCard
      v-for="(button, index) in controls"
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
		controls() {
			return this.buttons('controls')
		}
	}
}
</script>
<style>
.app-controls {
  display: flex;
}
</style>
