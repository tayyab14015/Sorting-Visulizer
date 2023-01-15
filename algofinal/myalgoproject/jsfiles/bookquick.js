count3=1;
var count1=0;
k=550;
let values = [];
let w = 20;

let states = [];

let input = document.querySelector('input');
var count = 20;
var c = 20;

input.addEventListener('change', () => {
    let files = input.files;
 
    if (files.length == 0) return;
   
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      const arr1 = lines[0];
      const arr2 = lines[1];
      const arr3 = lines[2];
      const arr4 = lines[3];
      const arr5 = lines[4];
      const arr6 = lines[5];
      const arr7 = lines[6];
      const arr8 = lines[7];
      const arr9 = lines[8];
      const arr10 = lines[9];
      const arr11 = lines[10];
      const arr12 = lines[11];
      const arr13 = lines[12];
      const arr14 = lines[13];
      const arr15 = lines[14];
      const arr16 = lines[15];
      const arr17 = lines[16];
      const arr18 = lines[17];
      const arr19 = lines[18];
      const arr20 = lines[19];
      

      const arr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,arr11,arr12,arr13,arr14,arr15,arr16,arr17,arr18,arr19,arr20];
              setup(arr)
    };
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
});

function setup(arr) {
    var interval=setInterval(counter,1000);

    createCanvas(600, 400);
  values = new Array(floor(width / w));
  
 
  for (let i = 0; i < values.length ;i++) {
    values[i] = random(width);
    
    states[i] = -1;
  }
 
  modifiedquickSort(values, 0, values.length, k);

}
  function modifiedquickSort(values, p, r, K) {
   quickSort(values, p, r, K);
    sleep(500);
   insertion_sort(values, p, r);
  
 
}

 async function  quickSort(arr, start, end,k) {
if (start >= end) {
    return;
  }     
     let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
   
 }
 async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}

function draw() {
  background(51);


  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('white');
   
    } else if (states[i] == 1) {
        fill('blue');
    } else {
   
      fill('#CDDC39');

    }
    rect(i * w, height - values[i], w, values[i]);
  }
  count1+=count1;

}

async function swap(arr, a, b) {
  await sleep(100);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function insertion_sort(arr, p, r) {
  
  for (j = p; j < r-1; j++) {
      key = arr[j];
      for (i = j - 1; i >= p || arr[i] > key; i--) {
          arr[i + 1] = arr[i];
      }
      arr[i + 1] = key;
  }
}
   // await  sleep(10);

 
   function counter(){

    //    clearInterval(interval);
    document.getElementById("timer").innerHTML = count3 + "sec";

    
    if(states[0]==-1 && states[1]==-1 &&states[2]==-1 &&states[3]==-1 &&states[4]==-1 &&states[5]==-1 &&states[6]==-1 &&states[7]==-1 &&states[8]==-1 && states[9]==-1 && 
        states[10]==-1 && states[11]==-1 &&states[12]==-1 &&states[13]==-1 &&states[14]==-1 &&states[15]==-1 &&states[16]==-1 &&states[17]==-1 &&states[18]==-1 && states[19]==-1 )
    {
        clearInterval(interval)
    }
  
count3++;

}
   
