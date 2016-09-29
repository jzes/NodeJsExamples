
function add (numA, numB) {
  return new Promise(function (ok, rejected) {
    try {
      var result = numA + numB
      ok(result)
    } catch (err) {
      rejected(err)
    }
  })
}

var toAdd = [1, 2]
add(toAdd[0], toAdd[1]).then(function (result) {
  console.log(result)
})
