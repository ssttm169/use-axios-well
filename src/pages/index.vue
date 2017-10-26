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
		this.$axios.get('https://www.facebook.com').then(function(res){
			//dosomething
		}).catch(function(res){
			//dosomething
		});
	}
}
</script>
