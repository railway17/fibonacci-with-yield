export function exportResult(number){
  var fibonacciSeries = function* (number){
    if(number === 0) {
      return [0]
    } else if(number === 1){
      yield [1, 1]
    } else {
      var values = fibonacciSeries(number - 1).next().value
      values.push(values[values.length - 1] + values[values.length - 2])
      yield values
    }
  }
  return fibonacciSeries(number).next().value
}

// check result
console.log('result...', exportResult(6))
