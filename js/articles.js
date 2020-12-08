import * as serverApi from './db';

function check(res) {
    try {
        return res = JSON.parse(res).data
    } catch (error) {
        throw new Error("bad json");
    }
}

function err(name) {
    return function(err) {
        throw new Error(`code is not 200 in ${name}`);
    }
}

function all() {
    return serverApi.all().then(check).catch(err("all"))
}

function one(id) {
    return serverApi.get(id).then(check).catch(err("one"))
}

function remove(id) {
    return serverApi.remove(id).then(check).catch(err("id"))
}

export { all, one, remove, };