export async function save(orders){
    console.log(orders)
      let res = await fetch('http://localhost:8080/menu/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(orders)
        });
        console.log("Service",res)
        return res;

  }