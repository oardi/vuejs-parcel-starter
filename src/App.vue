<template>
	<div class="text-blue">
		{{ title }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Vuejs & Parcel',
		};
	},
};
</script>

<style lang="scss" scoped>
.text-blue {
	color: blue;
}
</style>
