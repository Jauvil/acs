<template>
  <div class="container mt-5">
    <div class="card bg-primary">
      <h1 class="text-red">Do It My Guy!</h1>
      <p>We rolled a {{ getRandomInt(maxRoll) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxRoll: {
      type: Number,
      required: true
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  }
}
</script>