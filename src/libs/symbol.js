
let Symbol = window.Symbol
let idCounter = 0

if(!Symbol){
  Symbol = function Symbol(key) {
    return `__${key}_${Math.random() * 1e9 }_${++idCounter}__`
  }

  Symbol.iterator = Symbol('Symbol.iterator')
}

window.Symbol = Symbol