<template>
  <Draggable>
    <template>
      <div
        class="note"
        :style="{ width: note.width + 'px', height: note.height + 'px' }"
      >
        <h3>Заголовок</h3>
        <p>Второстепенный текст</p>
      </div>
    </template>
  </Draggable>
</template>

<script>
export default {
	components: {
		Draggable: () => import('./Draggable')
	},
	props: {
		note: {
			required: true,
			type: Object
		}
	},
	data: () => {
		return {
			position: 'relative'
		}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
.note {
  background: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */

  h3 {
    text-align: center;
  }
  p {
    text-align: center;
    color: #747474;
  }
}
</style>
