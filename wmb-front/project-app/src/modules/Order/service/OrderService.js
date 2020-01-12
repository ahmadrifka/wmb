export async function save(orders){
  console.log(orders)
    let res = await fetch('http://localhost:8080/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(orders)
      });

      console.log("Service",res)
      return res;

}

export async function reserve(reservation){
  console.log('ini data',reservation)
    let res = await fetch('http://localhost:8080/transaction/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(reservation)
      });

      console.log("Service",res)
      return await res.json();

}

export async function list () {
  console.log('server check')
  const response = await fetch('http://localhost:8080/transaction')
  const data = await response.json();
  return data;
}

export async function getOrder (order) {
  console.log('server check order', order)
  const response = await fetch(`http://localhost:8080/orders/transactiongetorder/${order.transaction.id}`)
  const data = await response.json();
  return data;
}

