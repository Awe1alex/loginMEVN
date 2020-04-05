<template>
  <div class="form-container" :class="{'form-container-sign-up': login}">
    <form class="form">FORM</form>
  </div>
</template>

<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: false
    }
  }
};
</script>