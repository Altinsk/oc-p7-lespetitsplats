String.prototype.includeCaseInsensitive = function(b) {
    const str1 = this.toLowerCase();
    const str2 = b.toLowerCase();
    return str1.includes(str2);
  };
  
  function containsAllStrings(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i])) {
        return false;
      }
    }
    return true;
  }