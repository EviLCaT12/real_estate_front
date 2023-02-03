<template>
  <AdvertsItem
      v-for="post in posts"
      :key = "post.id"
      :post="post"/>
</template>

<script>
import AdvertsItem from "@/components/adverts/AdvertsItem";
export default {
  name: "PostList",
  components: {AdvertsItem},
  props: {
    posts: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
</style>