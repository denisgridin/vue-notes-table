<template>
  <div class="app_notes_table_field">
    <Note v-for="note in notes" :key="note.id" :note="note"></Note>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	components: {
		Note: () => import('@/components/Note')
	},
	computed: {
		...mapGetters(['notes'])
	}
}
</script>

<style lang="scss" scoped>
.app_notes_table_field {
  position: relative;
  width: 100%;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.25);
  border-radius: 5px;
}
</style>
