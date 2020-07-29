<template>
<div>
    <button @click="createTemp">添加template</button>
    <div>
        {{state}}:{{currentId}}
    </div>
    <div class="template-item" v-for="(item,index) of list" :key="index">
        <div>{{item._id}}</div>
        <div @click="deleteTemp({id:item._id})">删除</div>
        <div @click="current(item._id)">查看</div>
        <div @click="updatecurrent(item._id)">更新</div>
    </div>
</div>

</template>

<script>
import {getTemps,getTemp,createTemp,updateTemp,deleteTemp} from '@/api/template';
export default {
  name: 'Template',
  props: {
    msg: String
  },
  data(){
      return {
          list:[],
          page:1,
          currentId:"",
          state:'查看当前'
      }
  },
  created(){
      this.getTempsList()
  },
  methods:{
      getTempsList(){
          getTemps(this.page).then(res=>{
              console.log(res)
              if (res.code === 200){
                  this.list = res.data
              }
          })
      },
      getTemp(e){
          const {id} = e;
          getTemp(id).then(res=>{
              console.log(res);
          })
      },
      deleteTemp(e){
          const {id} = e;
          deleteTemp(id).then(res=>{
              console.log(res)
              this.getTempsList()
          })
      },
      updateTemp(e){
          const {id ,data } =e;
          updateTemp(id,data).then(res=>{
              console.log(res)
              this.getTempsList()
          })
      },
        createTemp(e){
          const {data } =e;
          createTemp(data).then(res=>{
              console.log(res)
              this.getTempsList()
          })
      },
      current(id){
          this.getTemp({id:id});
          this.currentId = id;
          this.state = '查看当前'
      },
      updatecurrent(id){
          this.updateTemp(id,{})
          this.state = '更新当前'
          this.currentId = id;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template-item{
    display: flex;
    justify-content: space-around;
    padding: 10px;
}
</style>
