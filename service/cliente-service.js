const listaCLientes = () =>{
  return fetch(`http://localhost:3000/profile`)
  .then(resposta => {
    return resposta.json();
  })
}

const criaCLiente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then(resposta => {
    return resposta.body
  })
}


const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  })
}

const pegaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
  .then(resposta => {
    return resposta.json()
  })
}

const editaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then(resposta => {
    return resposta.json()
  })
}

export const clienteService = {
  listaCLientes,
  criaCLiente,
  removeCliente,
  pegaCliente,
  editaCliente
}