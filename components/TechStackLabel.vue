<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
    <img class="tech-stack-label mr-2 mb-2" :src="url" />
</template>