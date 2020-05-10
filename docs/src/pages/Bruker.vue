<template>
<v-container style="background" :style="{'background-color':bg}">
        <v-select
          :items="items"
          label="Standard"
          item-text="name"
          v-model="select"
          @change="onSelect"
          class="selecter"
        ></v-select>
          <v-col class="buttons justify-center">
            <v-col>
                  <v-btn @click="() => onClickButton(2)" color="success" class="button" fill-height fab x-large dark>
                  </v-btn>
              </v-col>
              <v-col>
                  <v-btn @click="() => onClickButton(1)" color="warning" class="button" fab x-large dark>
                  </v-btn>
              </v-col>
              <v-col>
                  <v-btn @click="() => onClickButton(0)" color="error" class="button" fab x-large dark>
                  </v-btn>
              </v-col>
          </v-col>
  </v-container>
</template>

<script>
import { getUsers, createUser } from '../firebase/Users';
  import VueCookies from 'vue-cookies'
export default {
  data() {
    return {
      items: [],
      users: [],
      bg: 'red',
      selected: {},
      select: ''
    };
  },
  components: {

  },
  methods: {
    onSelect(select){
      debugger;
      VueCookies.set('name' , select, 2147483647);
      var selected = this.users.find(user => user.name === select);
      this.setBackgroundColor(selected.status);
      this.selected = selected;
    },
    onClickButton(status){
      debugger;
      createUser(this.selected.name, status, "", 1);
      this.setBackgroundColor(status)
    },
    setBackgroundColor(status){
        if(status === 0){
          this.bg = "red";
        }
        if(status === 1){
          this.bg = "yellow";
        }
        if(status === 2){
          this.bg = "green";
        }
    }
  },
  watch: {},
  mounted(){
       const that = this;
       const name = VueCookies.get('name');
       debugger;
       this.select = name;
      getUsers().on('value', function(data) {
             const val = data.val();
             var a = Object.keys(val).map(function(key) {
                return {name: key, ...val[key]};
              });
              that.users = a;
              that.items = a;
              if(name){
               var selected = that.users.find(user => user.name === name);
               that.setBackgroundColor(selected.status);
              }
        });
  }
}
</script>

<style lang="less" scoped>
.selecter{
}
.container{
  height: 100%;
    margin: 0;
  max-width: 100%;    
  margin: 0;
  min-width: 100%;
}
.col{
  height: 30%;
}
/deep/ .buttons{
  padding: 0; 
  margin: 0;
  height: 100%;
  width: 60%;
   margin: 0 auto;
}
/deep/ .button{
  width: -webkit-fill-available !important;
  height: 100% !important;
}
/deep/ .background{
  margin: 0;
  max-width: 100%;    
  margin: 0;
  min-width: 100%;
    
}
</style>
