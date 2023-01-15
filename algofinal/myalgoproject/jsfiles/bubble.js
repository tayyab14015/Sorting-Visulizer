end=0;
count1=1;
var container = document.getElementById("array");
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
	      	  console.log(arr);
        generatearray(arr);
		BubbleSort();
};
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
});
// Function to generate the array of blocks
function generatearray(arr) {
	var interval=setInterval(counter,1000);

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
		array_ele.style.height = `${value * 15}px`;
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

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 200) {
	var blocks = document.querySelectorAll(".block");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
	end=1;
}

// Calling generatearray function
//var interval=setInterval(counter,1000);
function counter()
{
	document.getElementById("timer").innerHTML = count1 + "sec";
 if(end==1)
 {
clearInterval(interval);	
 }
count1++;
}


