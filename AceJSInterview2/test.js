function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  
  var result = add(2, 3)(4);
  
  console.log(result);
