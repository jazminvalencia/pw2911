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
		],
		nuevaFruta: '',
		total: 0
	},
	methods:{
		agregarFruta(){
			//console.log("diste clic");
			if(this.nuevaFruta!=""){
				this.frutas.push(this.nuevaFruta);
				this.frutas2.push({
					nombre :this.nuevaFruta,
					cantidad:0
				})
				this.nuevaFruta = "";	
			}
		}
	},
	computed:{
		sumarFrutas(){
			this.total=0
			for(fruta of this.frutas2){
				this.total = this.total+fruta.cantidad;
			}
			return this.total;
		}
	}
});