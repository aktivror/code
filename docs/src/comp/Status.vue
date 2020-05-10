<template>
    <div :style="styles" class="circle"></div>   
</template>

<script>
export default {
  props:['value'],
  data() {
    return {
    };
  },
  components: {

  },
  methods: {
  },
  watch: {},
  mounted(){
    console.log(this.value);
  },
  computed: {
    styles() {
      debugger;
      var color = "red";
      if(this.value === 0){
        color = "red";
      }
      if(this.value === 1){
        color = "yellow";
      }
      if(this.value === 2){
        color = "green";
      }
      return {
        "background-color": color,
      };
    }
  }
};
</script>

<style lang="less" scoped>
.circle{
    height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
