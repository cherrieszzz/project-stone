<template>
    <v-container>
        <v-form v-model="valid" ref='form'>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Stone name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="info"
            :counter="10"
            label="Stone Info"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="link"
            label="link"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">
          <v-btn 
          depressed color = 'primary' 
          @onclick = "submit"
          :disabled="!valid
          ">上传</v-btn>
      </div>
    </v-container>
  </v-form>
    </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      valid: false,
      name: '',
      info: '',
      link: '',
    }),
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                return axios({
                    method:'post',
                    data:{
                        name:this.name,
                        img_url:this.img_url,
                        info:this.info,
                        link:this.link
                    },
                    url:'http://localhost:8081/stones',
                    headers:{
                        'Content-Type':'application/json',
                    },
                })
                .then(()=>{
                    this.$swal(
                      'Great!',
                      'stone added successful',
                      'success',
                    );
                    this.$router.push({name:'Home'});
                    this.$router.from.reset();
                })
                .catch(()=>{
                  this.$swal(
                    'Oh oo!',
                    'Could not add the movie',
                    'error',
                  )
                });
            }
            return true;
        }
    }
  }
</script>