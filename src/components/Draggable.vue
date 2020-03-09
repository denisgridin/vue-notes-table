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
			left: 0,
			top: 0,
			isMove: false,
			isDrag: false
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
	  getDragInfo (top, left) {
			const element = this.$refs['draggable']
			let info = {}
			info.isInParent = top > 0 && left > 0 && this.parent.height > top + element.clientHeight && this.parent.width > left + element.clientWidth
			info.top = top
			info.left = left
			if (top < 0) {
				info.top = 0
			}
			if (this.parent.height < top + element.clientHeight) {
				info.top = this.parent.height - element.clientHeight
			}
			if (left < 0) {
				info.left = 0
			}
			if (this.parent.width < left + element.clientWidth) {
				info.left = this.parent.width - element.clientWidth
			}
			return info
		},
		drag (event) {
			if (event.screenX > 0) {
				if (this.isDrag) {
					const top = event.clientY - this.boxCoords.top
					const left = event.clientX - this.boxCoords.left
					const dragInfo = this.getDragInfo(top, left)
					this.$set(this, 'top', dragInfo.top)
					this.$set(this, 'left', dragInfo.left)
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
		position: absolute;
		box-sizing: border-box;
		
		&_passive {
			box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.25);
		}
		
		&_active {
			box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.25);
		}
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
</style>
