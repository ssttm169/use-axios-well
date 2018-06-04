<template>
	<div>123</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	created(){
		this.$axios.get('https://cnodejs.org/api/v1/topics').then(function(res){
			//dosomething

			console.log(res);

		}).catch(function(res){
			//dosomething
		});
	}
}
</script>
