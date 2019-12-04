require("isomorphic-fetch");
import BPromise from "bluebird";

async function getItemsCity(searchParam){
    return fetch(`http://35.245.126.165/api/city?city=${searchParam}`).then(function(resp) {
    //return fetch(`http://localhost:8080/api/city?city=${searchParam}`).then(function(resp) {
        return resp.json();
    })
};

function getDataCity(param) {
    return BPromise.all([getItemsCity(param)]).then(function([items, repos]){
        return{ items };
    });
};

async function getItems(searchParam){
    return fetch(`http://35.245.126.165/api/largebody?param=${searchParam}`).then(function(resp) {
    //return fetch(`http://localhost:8080/api/largebody?param=${searchParam}`).then(function(resp) {
        return resp.json();
    })
};

function getData(param) {
    return BPromise.all([getItems(param)]).then(function([items, repos]){
        return{ items };
    });
};

function handleError(error){
    console.warn(error);
    return null;
};

module.exports = {
    getInfoCity: async function(param) {
        return getDataCity(param).catch(handleError);
    },
    getInfo: async function(param) {
        return getData(param).catch(handleError);
    }
}
