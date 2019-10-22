const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) { 
 const newdiver = drivers.slice()
  newdiver.push(name);
  return newdiver;
}

function prependDriver(name) {
    const newdiver = drivers.slice()
    newdiver.unshift(name);
    return newdiver;
}

function removeLastDriver() {
    const newdiver = drivers.slice(0,2)
    return newdiver;   
}

function removeFirstDriver() {
    const newdiver = drivers.slice(1,3)
    return newdiver;
}
