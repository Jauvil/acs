<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">
          Software Solutions to Power Your Business
        </h1>
        <p class="col-lg-10 fs-4">
          To keep up in today's market you need software solutions that are reliable, scalable and adaptable. The right software can make your business more efficient. I can build robust systems that will solve <strong>REAL</strong> problems for your organization.
        </p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div>
            <p>
              Let's see if I can help you. Enter your email for a free consultation:
            </p>
          </div>
          <hr class="my-4">
          <div class="form-floating mb-3">
            <input v-model="lead.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Find Solutions</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lead: {
        lead_type: 'hot',
        email: ''
      }
    }
  },
  methods: {
    submitFreeConsultation () {

    },
    validateEmail () {

    }
  }
}
</script>
