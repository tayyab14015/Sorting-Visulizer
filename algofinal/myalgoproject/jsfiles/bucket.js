end =0;
count=1;

var container = document.getElementById("array");
let input = document.querySelector('input');

// Function to randomly shuffle the array
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {

    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

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
               generatearray(arr);
      CountingSort(arr);
  };
  reader.onerror = (e) => alert(e.target.error.name);

  reader.readAsText(file);
});

function generatearray(arr) {


  interval=setInterval(counter,1000);

  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    array_ele.style.height = `${value * 13}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

async function InsertionSort(arr,clsnam, delay = 600) {
  let blocks = document.getElementsByClassName(clsnam);
  if(blocks[0])
  blocks[0].style.backgroundColor = "rgb(49, 226, 13)";
  

  for (var i = 1; i < arr.length; i += 1) {
    if(blocks[i]){
    var j = i - 1;

    // To store the integer value of ith block to key
    var key = parseInt(blocks[i].childNodes[0].innerHTML);

    // To store the ith block height to height
    var height = blocks[i].style.height;

    // Provide darkblue color to the ith block
    blocks[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {

      // Provide darkblue color to the jth block
      blocks[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = 
      blocks[j].childNodes[0].innerText;
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    // Placing the selected element to its correct position
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // Provide light green color to the ith block
    blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}
}

// Asynchronous CountingSort function
async function CountingSort(arr,delay = 250) {
  var blocks = document.querySelectorAll(".block");

  var block1 = 0,
    block2 = 0,
    block3 = 0,
    block4 = 0;

  // CountingSort Algorithm
  for (var i = 0; i < Math.max(...arr); i += 1) {
    if(blocks[i]){
    blocks[i].style.backgroundColor = "#FF4949";
    var value = 
    Number(blocks[i].childNodes[0].innerHTML);

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding style to div
    array_ele.style.height = `${value * 13}px`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);

    // Adding block to first bucket
    if (value >= 1 && value <= 5) {
      array_ele.classList.add("firstbucket");
      var container = document.getElementById("one");
      array_ele.style.transform = 
      `translate(${block1 * 30}px)`;
      container.appendChild(array_ele);
      block1++;
    }

    // Adding block to second bucket
    if (value >= 6 && value <= 10) {
      array_ele.classList.add("secondbucket");
      var container = document.getElementById("two");
      array_ele.style.transform = 
      `translate(${block2 * 30}px)`;
      container.appendChild(array_ele);
      block2++;
    }

    // Adding block to third bucket
    if (value >= 11 && value <= 15) {
      array_ele.classList.add("thirdbucket");
      var container = document.getElementById("three");
      array_ele.style.transform = `translate(${block3 * 30}px)`;
      container.appendChild(array_ele);
      block3++;
    }

    // Adding block to fourth bucket
    if (value >= 16 && value <= 20) {
      array_ele.classList.add("fourthbucket");
      var container = document.getElementById("four");
      array_ele.style.transform = 
      `translate(${block4 * 30}px)`;
      container.appendChild(array_ele);
      block4++;
    }

    // To wait for 250 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    blocks[i].style.backgroundColor = "#6b5b95";
  }
}

  // Performing insertion sort on every bucket
  await InsertionSort(arr,"firstbucket");
  await InsertionSort(arr,"secondbucket");
  await InsertionSort(arr,"thirdbucket");
  await InsertionSort(arr,"fourthbucket");

  var k=0;
    
  // Copying elements from buckets to main array
  for (var i = 0; i < 4; i++) {
    var bucket_idx = 0;
    var block_idx;
  
    if (i == 0) block_idx =
    document.getElementsByClassName("firstbucket");
    if (i == 1) block_idx = 
    document.getElementsByClassName("secondbucket");
    if (i == 2) block_idx =
    document.getElementsByClassName("thirdbucket");
    if (i == 3) block_idx = 
    document.getElementsByClassName("fourthbucket");

    for (var j = i * 5; j < 5 * (i + 1); j++, bucket_idx++) {
      if(bucket_idx >= block_idx.length){
        break;
      }
      block_idx[bucket_idx].style.backgroundColor = "red";
      // To wait for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
      
      console.log(i,k,bucket_idx);
      blocks[k].style.height = block_idx[bucket_idx].style.height;
      blocks[k].childNodes[0].innerText = block_idx[bucket_idx].childNodes[0].innerText;
      blocks[k].style.backgroundColor = "green";
      k++;
      // To wait for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      block_idx[bucket_idx].style.backgroundColor = "#6b5b95"; 
    }
  }
  end =1;
}

function counter()
{
	document.getElementById("timer").innerHTML = count + "sec";
 if(end==1)
 {
clearInterval(interval);	
 }
count++;
}

// Calling CountingSort function