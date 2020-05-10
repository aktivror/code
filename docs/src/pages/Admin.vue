<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
          <v-text-field
          v-model="inputText"
            placeholder="Placeholder"
          ></v-text-field>
           <v-btn @click="add" text>Add</v-btn>      

    </v-row>      
      <v-data-table :headers="headers" :items="users" item-key="name" class="elevation-1 table">
       <template v-slot:item.status="{ item }">
        <Status v-model="item.status"></Status>
      </template>
      </v-data-table>
  </v-container>
    
</template>

<script>
import { createUser,getUsers } from '../firebase/Users';
import Status from '../comp/Status'
export default {
  data() {
    return {
      inputText: '',
      users: [],
       headers: [
        { text: 'Name', value: 'name',align: 'left', sortable: false,},
        { text: 'Status', value: 'status',align: 'left',sortable: false, },
        { text: 'Level', value: 'level',align: 'left',sortable: false, },
        { text: 'Text', value: 'text',align: 'left',sortable: false, },
      ],
    };
  },
  components: {
    Status
  },
  methods: {
    add(){
      createUser(this.inputText, 0, "",1);
    }
  },
  mounted(){
    const that = this;
      getUsers().on('child_added', function(data) {
        const val = data.val();
        const fullVariable = {name: data.key, ...val};
        that.users.push(fullVariable);
    });
    getUsers().on('child_changed', function(data) {
        const val = data.val();
        const index = that.users.findIndex(x => data.key === x.name);
        that.users[index].status = val.status; 
        that.users[index].text = val.text; 
        that.users[index].level = val.level; 
    });
  },
  watch: {}
};
</script>

<style lang="less" scoped>
/deep/ .table{
  /deep/ .text-left{
    text-align: left
  }
}
</style>
