function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const sortedArray = [];
  
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      console.log("left:", left[leftIndex], "right:", right[rightIndex]);
      
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
      }
      console.log("sortedArray:", sortedArray);
      console.log("leftIndex:", leftIndex, "rightIndex:", rightIndex);
    }
  
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  

  
  console.log(mergeSort([4,2,17,52,41,10,7,22,33]));