export const GetData = ()=>{
    async function getData() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzU2NDQxNywianRpIjoiMjI2OTgwZTEtNTJiOS00MGY0LTliMjUtOGMwNzdhOTQ5ZmFjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzU2NDQxNywiZXhwIjoxNjkzNjUwODE3fQ.Vna2j6GVwMgo-Mf4bi0rwMVhQOGPL5qftCoJzqTT9Ks"
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
