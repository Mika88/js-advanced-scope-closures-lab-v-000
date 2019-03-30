function produceDrivingRange(blockRange) {
  return function(beg, end) {
    let wantedBlockRange = parseInt(end, 10) - parseInt(beg, 10)
    if ( wantedBlockRange <= blockRange) {
      return `within range by ${blockRange - wantedBlockRange}`;
    }
    if ( wantedBlockRange > blockRange) {
      return `${wantedBlockRange - blockRange} blocks out of range`;
    }
  }
}
