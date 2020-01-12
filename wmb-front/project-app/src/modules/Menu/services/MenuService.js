export async function list () {
    const response = await fetch('http://localhost:8080/menu')
    const data = await response.json();
    return data;
}



// export async function list () {
//     const response = await fetch('http://10.10.12.159:8081/foods')
//     const data = await response.json();
//     return data;
// } 