<template>
  <Draggable>
    <template>
      <div class="interact_wrapper" :class="{ 'interact_wrapper_active': isInteracting }" v-click-outside="unsetInteracting" @dblclick="setInteracting">
        <div class="edit_button">
          <div class="material-icons edit_button_icon">
            edit
          </div>
        </div>
      </div>
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
import * as vClickOutside from 'v-click-outside-x';
export default {
	components: {
		Draggable: () => import('./Draggable')
	},
  directives: {
    clickOutside: vClickOutside.directive,
  },
	props: {
		note: {
			required: true,
			type: Object
		}
	},
	data: () => {
		return {
      isInteracting: false
		}
	},
	methods: {
    setInteracting () {
      this.isInteracting = true
    },
    unsetInteracting () {
      this.isInteracting = false
    }
  }
}
</script>

<style lang="scss" scoped>
.interact_wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  background: #15A86D25;
  border: 3px solid #15A86D;
  box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.25);
  border-radius: 5px;
  opacity: 0;
  transition: .2s;
  &_active {
    opacity: 1;
  }
  
  .edit_button {
    width: 25px;
    height: 25px;
    background: #15A86D;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: -13px;
    right: -13px;
    cursor: pointer;
    
    &_icon {
      font-size: 16px;
      color: #ffffff;
    }
  }
}
.note {
  background: #ffffff;
  box-sizing: border-box;
  border: 3px solid transparent;
  padding: 1rem;
  border-radius: 5px;
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
