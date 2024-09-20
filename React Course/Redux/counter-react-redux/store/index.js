import {createStore} from "redux";

const INTIAL_VALUE ={
  counter :0,
  privacy : false
}

const counterreducure =(store =INTIAL_VALUE ,action)=>{
  if(action.type === "INCREMENT"){
    return store ={...store,counter : store.counter +1}
  }else if(action.type === "DECREMENT"){
    return store  ={...store,counter : store.counter -1}
  }else if(action.type === "ADDITION"){
    return store = {...store,counter : store.counter + Number(action.payload.num)}
  }else if(action.type === "SUB"){
    return store = {...store,counter : store.counter - Number(action.payload.num)}
  }else if(action.type === "PRIVACY_TOGGLE"){
    return store ={...store,privacy : !store.privacy}
  }
  return store;
};

const counterstore = createStore(counterreducure);

export default counterstore;;