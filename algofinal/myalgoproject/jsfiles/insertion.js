end=0;
count=1;
const container = 
document.querySelector(".data-container");

let input = document.querySelector('input');
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
           generatebars(arr);
};

  reader.onerror = (e) => alert(e.target.error.name);

  reader.readAsText(file);
});

// Function to generate bars
function generatebars(arr) {
   //For loop to generate 20 bars
   for (var i = 0; i < arr.length; i++) {
  
    // To generate random values from 1 to 100
    const value = arr[i];
  
     // To create element "div"
    const bar = document.createElement("div");
  
    // To add class "bar" to "div"
    bar.classList.add("bar");
  
     // Provide height to the bar
    bar.style.height = `${value * 15}px`;
    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${i * 30}px)`;
  
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;
  
    // Append "Label" to "div"
    bar.appendChild(barLabel);
  
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}
  
// Asynchronous function to perform "Insertion Sort"
    
async function InsertionSort(delay = 100) {
   interval= setInterval(counter,1000);
  
  let bars = document.querySelectorAll(".bar");
  
  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
  
    // Assign i-1 to j
    var j = i - 1;
  
    // To store the integer value of ith bar to key 
    var key = 
    parseInt(bars[i].childNodes[0].innerHTML);
  
    // To store the ith bar height to height
    var height = bars[i].style.height;
     
    // For selecting section having id "ele"
    var barval=document.getElementById("ele")
  
    // For dynamically Updating the selected element
      barval.innerHTML=
      `<h3>Element Selected is :${key}</h3>`;
  
    //Provide darkblue color to the ith bar 
    bars[i].style.backgroundColor = "darkblue";
      
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
  
    // For placing selected element at its correct position 
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
        
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";
        
      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = 
      bars[j].childNodes[0].innerText;
  
      // Assign j-1 to j
      j = j - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );
        
      // Provide lightgreen color to the sorted part
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
  
    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
       
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
      
    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  end=1;
 
  barval.innerHTML="<h3>Sorted!!!</h3>";
    
  // To enable the button 
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1")
  .disabled = false;
  document.getElementById("Button1")
  .style.backgroundColor = "#6f459e";
  
  // To enable the button 
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2")
  .disabled = false;
  document.getElementById("Button2")
  .style.backgroundColor = "#6f459e";
 }
  
// Call "generatebars()" function 
  
// Function to generate new random array 
function generate()
{
  window.location.reload();
}
  
// Function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1")
  .disabled = true;
  document.getElementById("Button1")
  .style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Insertion Sort"
  document.getElementById("Button2")
  .disabled = true;
  document.getElementById("Button2")
  .style.backgroundColor = "#d8b6ff";  
}
function counter()
{
document.getElementById("timer").innerHTML=count + "sec";
if(end==1)
{
  clearInterval(interval);
}
count++; 
}