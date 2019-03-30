function produceDrivingRange(blockRange) {
  return function(beg, end) {
    let result = parseInt(end, 10) - parseInt(beg, 10)
    if ( result <= blockRange) {
      return `within range by ${result}`;
    }
    if ( result > blockRange) {
      return `${result} blocks out of range`;
    }
  }
}
