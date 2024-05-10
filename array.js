arr = [12,12,13 ,14,15];
n = 0;
while (n < arr.length - 1) {
  if (arr[n] !== arr[n + 1])
   break
    else
    n++;
}
if (n == arr.length-1) {
    console.log("All the Elements in Array Are Same")
}
else{
  if (arr[n]<=arr[n+1]) {
    c = 0;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] >= arr[i]) {
        console.log(i)
        c++;
      }
    }
    if (c == arr.length - 1) {
      console.log("The Array is in increasing Order");
    } else {
      console.log("The Array is unsorted");
    }
  } 
  else if((arr[n]>=arr[n+1])){
    c = 0;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] <= arr[i]) {
        c++;
      }
    }
    if (c == arr.length - 1) {
      console.log("The Array is in decreasing Order");
    } else console.log("The Array is unsorted");
  }
} 