import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		notes: [
			{
				x: 10,
				y: 40,
				height: 100,
				width: 200,
				id: 0
			}
		],
		buttons: {
			controls: [
				{
					icon: 'undo',
					text: 'Назад',
					id: 'controls_1',
					class: 'button_card_big'
				},
				{
					icon: 'redo',
					text: 'Вперед',
					id: 'controls_2',
					class: 'button_card_big'
				}
			],
			history: [
				{
					icon: 'hourglass_empty',
					text: 'Пусто',
					id: 'history_empty',
					class: 'button_card_md'
				},
				{
					icon: 'text_format',
					text: 'Блок 1',
					id: 'history_block_1',
					class: 'button_card_md'
				},
				{
					icon: 'settings_overscan',
					text: 'Блок 2',
					id: 'history_empty',
					class: 'button_card_md'
				},
				{
					icon: 'text_format',
					text: 'Блок 1',
					id: 'history_block_1',
					class: 'button_card_md'
				},
				{
					icon: 'hourglass_empty',
					text: 'Пусто',
					id: 'history_empty',
					class: 'button_card_md'
				},
				{
					icon: 'text_format',
					text: 'Блок 1',
					id: 'history_block_1',
					class: 'button_card_md'
				},
				{
					icon: 'hourglass_empty',
					text: 'Пусто',
					id: 'history_empty',
					class: 'button_card_md'
				},
				{
					icon: 'text_format',
					text: 'Блок 1',
					id: 'history_block_1',
					class: 'button_card_md'
				},
				{
					icon: 'hourglass_empty',
					text: 'Пусто',
					id: 'history_empty',
					class: 'button_card_md'
				},
				{
					icon: 'text_format',
					text: 'Блок 1',
					id: 'history_block_1',
					class: 'button_card_md'
				}
			]
		}
	},
	getters: {
		notes: state => state.notes,
		buttons: state => section => state.buttons[section]
	},
	mutations: {},
	actions: {},
	modules: {}
})
