<template>
  <button class="btn" :class="[mode , border , size]">
    <nuxt-link :to="linkTo" v-if="linkTo"><slot></slot></nuxt-link>
    <!-- <span v-else>
      <slot></slot>
    </span> -->
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default : 'orange'
    },
    border: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default : 'lg-size'
    },
    linkTo: {
      type : String,
      required : false
    }
    
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 5px;
  color: #2c3e50;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex; 
  align-items: center;
  justify-content: center;
}

.orange {
  background-color: #f1c40f;
  border: 1px solid #c2c2c2;
}

.grey {
  background-color: #f2f2f2;
}

.sm-size {
  padding: 0.3rem;
}

.border{
    border: 1px solid #C2C2C2;
}
.lg-size {
  padding: .5rem 2rem;
}

a{
  color: #2c3e50;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
