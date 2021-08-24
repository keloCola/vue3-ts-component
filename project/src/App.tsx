import { defineComponent, reactive,ref,h } from "vue";
/**
 * tsx的第一個文件
 */
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'kelo',
    })
    const numberRef = ref(1)
    setInterval(() => {
      state.name += '1'
      numberRef.value += 1
    }, 1000)
    
    const img = require('../assets/logo.png')//eslint-disable 
    //將原本的h函数改成jsx形式
    return ()=>{
    const numberParam = numberRef.value

      return <div id='app'>
        {/* <img src={img} alt="tup" /> */}
        <p>{state.name+numberParam}</p>
      </div>
    }
  },
})