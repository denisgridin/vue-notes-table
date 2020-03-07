<template>
  <div class="app_content">
    <div class="top_section">
      <AppControls></AppControls>
      <AppHistory></AppHistory>
    </div>

    <div class="canvas_section">
      <AppNotesTable></AppNotesTable>
    </div>
  </div>
</template>
<script>
export default {
	components: {
		AppControls: () => import('@/components/AppControls'),
		AppHistory: () => import('@/components/AppHistory'),
		AppNotesTable: () => import('@/components/AppNotesTable')
	}
}
</script>

<style>
.top_section {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
