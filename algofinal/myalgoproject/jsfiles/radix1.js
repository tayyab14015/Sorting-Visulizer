end=0;
count3=1;
var container = document.getElementById("array");
let input = document.querySelector('input');
var count = 20;
var c = 2;

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
         console.log(arr);
        generatearray(arr);
        generate_freq(arr);	
        radixSort(arr);
    };
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
});

function generatearray(arr) {
    interval=setInterval(counter,1000);
    for (var i = 0; i < arr.length; i++) {
        // Return a value from 1 to 100 (both inclusive)
         //var value = Math.ceil(Math.random() * 20);
         var value = arr[i];
         c=c-1;
    
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
    
    // Function to generate the frequency array
    var count_container = document.getElementById("radix");
    function generate_freq(arr) {
    for (var i = 0; i < Math.max(...arr); i++) {
        // Creating element div
        var array_ele2 = document.createElement("div");
    
        // Adding class 'block2' to div
        array_ele2.classList.add("block2");
    
        // Adding style to div
        array_ele2.style.height = `${20}px`;
        array_ele2.style.transform = `translate(${i * 30}px)`;
    
        // index of freq array
        var array_ele_idx = document.createElement("label");
        array_ele_idx.classList.add("block_id2");
        array_ele_idx.innerText = i + 1;
    
        //giving initial freq to all blocks as 0
        var array_ele_label2 = document.createElement("label");
        array_ele_label2.classList.add("block_id3");
        array_ele_label2.innerText = 0;
    
        // Appending created elements to index.html
        array_ele2.appendChild(array_ele_label2);
        array_ele2.appendChild(array_ele_idx);
        count_container.appendChild(array_ele2);
    }
    }
    
    function getMax(arr,n)
    {
        let mx = arr[0];
            for (let i = 1; i < 20; i++)
                if (arr[i] > mx)
                    mx = arr[i];
            return mx;
            
    }
    
    async function radixSort(arr,delay = 250) {
        var blocks = document.querySelectorAll(".block");
        const arr1 = [blocks.length];
        
        // To store frequency of every block
        for (var i = 0; i < Math.max(...arr); i += 1) {
            if(blocks[i]){
            //To highlight the current traversed block
            blocks[i].style.backgroundColor = "#FF4949";    
        
            //Extracting the value of current block
            var value = Number(blocks[i].childNodes[0].innerHTML);
        
            var freq_array = document.getElementsByClassName("block_id3");
        
            freq_array[value - 1].innerText++;
        
            // To wait for .1 sec
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
        
            //Changing to previous color
            blocks[i].style.backgroundColor = "#6b5b95";
    
            arr1[i] = value;
        }
    }
    
        let m = getMax(arr1, blocks.length);
    
        //Sorting by using frequency array
        var idx = 0;
        //for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10){
        for (var i = 0; i < Math.max(...arr); i += 1) {
            var freq = document.getElementsByClassName("block_id3");
        
            var temp = Number(freq[i].innerText);
        
            var freq_block = document.getElementsByClassName("block2");
        
            //changing color of freq block
            freq_block[i].style.backgroundColor = "#FF4949";
        
            // To wait for .1 sec
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2 * delay)
            );
        
            if (temp == 0) {
            //changing color of freq block to previous one
            freq_block[i].style.backgroundColor = "darkgray";
            continue;
            }
        
            var block_label = document.getElementsByClassName("block_id");
        
            //sorting the block array
            for (var j = 0; j < temp; j++) {
            blocks[idx].style.height = `${(i + 1) * 13}px`;
            block_label[idx].innerText = i + 1;
            idx++;
            }
        
            //changing color of freq block to previous one
            freq_block[i].style.backgroundColor = "darkgray";
        
            // To wait for .1 sec
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2 * delay)
            );
        }
    //}
   end =1; }

 function counter(){

    //    clearInterval(interval);
    document.getElementById("timer").innerHTML = count3 + "sec";

    if(end==1)
    {
        clearInterval(interval)
    }
  
count3++;

}