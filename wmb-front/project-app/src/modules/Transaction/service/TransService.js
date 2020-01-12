export async function list () {
    const response = await fetch('http://localhost:8080/transaction')
    const data = await response.json();
    return data;
}

export async function update(trx){
    // console.log('ini data',id)
      let res = await fetch(`http://localhost:8080/transaction/${trx.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(trx)
        });
        console.log("Service",res)
        return res;
  }