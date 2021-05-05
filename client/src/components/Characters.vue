
<template>
 
  <div class="animate" v-bind:style="{backgroundColor: bgColor}">
    
      
    
  <div class="row">
   <div class="col-8">
   
    
    <table class="table table-striped">
  <thead>
          <tr bgcolor= "black" >
            <th scope="col" style= "color:white;" >
              Character Name
            </th>
            <th style= "color:white;" scope="col">
              He_Man_Woman_Hater
            </th>
            <th style= "color:white;" scope="col">
              Actors Name
            </th>
           
            <th style= "color:white;" scope="col">
              Gender
            </th>
            <th style= "color:white;" scope="col">
              Role
            </th>
            <th style= "color:white;" scope="col">
              Role Description
            </th>
            
          </tr>
        </thead>
        <tbody @mouseover="imgapp()" @mouseleave="imgappleave()" >
          <tr v-for="User in User" :key="User.ID">
            <td scope="row" >
              <a href="roles.html">{{User.Fisrt_Name_Character}}</a>
              

            </td>
            <td>
              {{User.He_Man_Woman_Hater}}
            </td>
            <td>
              {{User.Actor_Name}}
            </td>
            <td>
              {{User.Gender}}

            </td>
            <td>
              {{User.Role_Name}}
            </td>
             <td>
              {{User.Role_Description}}
            </td>
             
            
             
            
            
          </tr>
        </tbody>
      </table> 
  </div>
    <div class="col-4" >
  <!-- @click="imgapp()" -->
     <img v-bind:style="{width:imgwidth +'px', height:imgheight +'px'}"  src="https://resizing.flixster.com/MwMjUkLzIiwW_F0et73d53iNW4w=/206x305/v2/https://flxt.tmsimg.com/assets/p15866_p_v8_ad.jpg">
     

</div>
  
</div>


</div>

  

</template>


<script>
import axios from 'axios';

export default {
  name: 'characters',
    
   data () {
     
    return{
      User: {},
      bgColor: "white",
      imgAppear : null,
      imgwidth : 0,
      imgheight : 0
    
    }
  },
  created(){
    console.log("inside function");
    axios.get(`http://localhost:3000/`,{ crossdomain: true }).then((result)=>{
       this.User= ( result.data);
       console.log("result", result)
        
      })
      

      .catch((error)=>{
        console.log("Error",error);
      });

  
    
  }, methods:{
    hover(){
      this.bgColor = "red"
    },
    imgapp(){
      this.imgAppear = "https://img1.thelist.com/img/gallery/alfalfa-from-little-rascals-is-a-mesmerizing-hunk-as-a-grown-up/intro-1608753600.jpg"
      this.imgwidth =370,
      this.imgheight =500
    },
    imgappleave(){
      this.imgwidth =0,
      this.imgheight =0
    }
    
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animate{
  transition : all .5s;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
