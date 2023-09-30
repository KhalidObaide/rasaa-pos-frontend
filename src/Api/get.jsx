export const GetData = ()=>{
    async function getData() {
        const token = "Vna2j6GVwMgo-Mf4bi0rwMVhQOGPL5qftCoJzqTT9Ks"
        try {
          const response = await axios.get('http://127.0.0.1:9005/utilities',{headers: { Authorization: `Bearer ${token}` },});
          if (response.data) {
            setData(response.data.result)
            console.log(response.data.result);
          }else{
        alert('no')
          }
        } catch (error) {
          console.error('Error itmes:', error)
        }
        // console.log(Data);
    }
    getData()

}
