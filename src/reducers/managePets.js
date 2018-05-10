export let state;


export function managePets(state = { pets: [] }, action) {
  switch(action.type){
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [...state.pets, action.pet]
      })
    case 'REMOVE_PET':
      return {pets: state.pets.filter(pet => pet.id !== action.id)}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  container.innerHTML = `<ul>${state.pets.map(pet =>  `<li>${pet.name}</li>`).join(' ')}</ul>`

}
// dispatch({type: '@@INIT'})
