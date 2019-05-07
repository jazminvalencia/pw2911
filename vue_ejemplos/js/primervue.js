const app = new Vue({
	el:"#app",
	data: {
		titulo : 'Hola Mundo con VUE',
		frutas : ['Manzanas', 'Peras', 'Mangos', 'Platano'],
		frutas2 : [
			{nombre: 'Manzanas',cantidad: 10},
			{nombre: 'Peras',cantidad: 0},
			{nombre: 'Mango',cantidad: 20},
			{nombre: 'Platano',cantidad: 80},
		]
	}
});