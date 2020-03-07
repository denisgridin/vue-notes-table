<template>
	<div
		class="draggable"
		ref="draggable"
		draggable="true"
		@dragstart="dragStart($event)"
		@dragend="dragEnd($event)"
		@drag="drag($event)"
		:style="dragStyles"
		:class="{ 'draggable_active': isDrag, 'draggable_passive': !isDrag, 'grabbed': isDrag  }"
	>
		<slot> </slot>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			draggableBox: null,
			parent: {},
			boxCoords: {},
			position: 'absolute',
			left: 0,
			top: 0,
			shiftX: 0,
			shiftY: 0,
			isMove: false,
			isDrag: false,
			checkTimeout: null
		}
	},
	mounted () {
		this.$nextTick(() => {
			window.addEventListener('resize', this.findContainerSize)
		})
		this.findContainerSize()
	},
	computed: {
		dragStyles() {
			return {
				position: this.position,
				top: this.top + 'px',
				left: this.left + 'px'
			}
		}
	},
	methods: {
		findContainerSize () {
			const parentElement = this.$refs['draggable'].parentElement
			this.parent = {
				width: parentElement.clientWidth,
				height: parentElement.clientHeight,
				top: parentElement.offsetTop,
				left: parentElement.offsetLeft
			}
		},
		dragEnd () {
			this.isDrag = false
		},
		dragStart (event) {
			let img = new Image()
			img.src = ''
			event.dataTransfer.setDragImage(img, 10, 10)
			const elem = this.$refs['draggable']
			this.$set(this.boxCoords, 'top', event.clientY - elem.offsetTop)
			this.$set(this.boxCoords, 'left', event.clientX - elem.offsetLeft)
		},
		isInParent (top, left) {
			const element = this.$refs['draggable']
			return top > 0 && left > 0 && this.parent.height > top + element.clientHeight && this.parent.width > left + element.clientWidth
		},
		drag (event) {
			if (event.screenX > 0) {
				if (this.isDrag) {
					const top = event.clientY - this.boxCoords.top
					const left = event.clientX - this.boxCoords.left
					if (this.isInParent(top, left)) {
						this.$set(this, 'top', top)
						this.$set(this, 'left', left)
					}
				} else {
					this.isDrag = true
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.draggable {
		cursor: grab;
	}
	
	.hidden-drag-ghost {
		position: absolute;
		top: 0;
		left: 0;
		visibility: hidden;
	}
	
	.grabbed {
		cursor: grabbing!important;
	}
	
	.draggable_passive {
		box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.25);
	}
	
	.draggable_active {
		box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.25);
	}
</style>
