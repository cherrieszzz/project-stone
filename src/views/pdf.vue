<template>
    <div class="dpf">
        <pdf ref="pdf" :src="pdfUrl"></pdf>
    </div>

</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'Pdf',
  components:{
      pdf
  },
  data(){
      return {
          pdfUrl:"https://zhenti.burningvocabulary.com/cet4/2021-06/01",
      }
  }
}
</script>