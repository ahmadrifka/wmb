export async function list () {
    const response = await fetch('http://localhost:8080/tables')
    const data = await response.json();
    return data;
}

