const array = document.getElementById('array');
const generate_array = document.getElementById('generateArray');
const sortArray = document.getElementById('sort');
var ArraySize = Number(document.getElementById('SizeValue').value);
var SpeedValue = Number(document.getElementById('SpeedValue').value);
var AlgoValue = Number(document.getElementById('AlgoValue').value)

let sorted = 0;

var arraySize = async() => 
{
    ArraySize = Number(document.getElementById('SizeValue').value);
    if(ArraySize == 0)
    {
        return new Promise(resolve => {
            setTimeout(() => {
                alert("Choose Size of array");
                resolve();
            },100);
        });
    }
    else
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(ArraySize);
            },100);
        });
    }
};

var algoValue = async() => 
{
    AlgoValue = Number(document.getElementById('AlgoValue').value);
    if(AlgoValue == 0)
    {
        return new Promise(resolve => {
            setTimeout(() => {
                alert("Choose Algorithim for sorting");
                resolve();
            },100);
        });
    }
    else
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(AlgoValue);
            },100);
        });
    }
};


var speedValue = async() => 
{
    SpeedValue = Number(document.getElementById('SpeedValue').value);
    if(SpeedValue == 0)
    {
        return new Promise(resolve => {
            setTimeout(() => {
                alert("Choose Speed of Sorting");
                resolve('0');
            },100);
        });
    }
    else
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(parseInt(400/SpeedValue));
            },100);
        });
    } 
};

var time;
var n;
var algovalue;
let clicks = 0;

async function generateArray()
{
    n = await arraySize();
    for(var i=0; i<n; i++)
    {
        var value = Math.ceil(Math.random() * 100);

        const arr_element = document.createElement("div");

        arr_element.classList.add('block');
        arr_element.style.height = `${value * 3}px`;
        arr_element.setAttribute("value", String(value));
        //console.log(value);
        array.appendChild(arr_element);
    }
    sorted = 0;
}

ArrayGenerate = async() => {
   await clearPreviousArray();
   await generateArray();
   clicks = 1;
}

clearPreviousArray = async() => 
{
    array.innerHTML ="";
}

generate_array.addEventListener('click', ArrayGenerate);

var blocks = document.getElementsByClassName("block");

sort = async() => 
{
    if(sorted == 1)
    {
        return new Promise(resolve => {
          setTimeout(() => {
              alert("Array already Sorted");
              resolve();
          }, 1000);
        }); 
     }
    if(clicks == 0)
    {
        alert("Create an Array to Perform Sorting");
        return;
    }

    algovalue = await algoValue();
    if(algovalue == 0)
    {
        return;
    }
    else
    {
      time =  await speedValue();
      if(time == 0)
      {
        return;
      }
      sortArray.disabled = true;
      generate_array.disabled = true;
      switch(algovalue)
      {
         case 1:
            await BubbleSort();
            break;
         case 2:
            await InsertionSort();
            break;
         case 3:
            await SelectionSort();
            break;
         case 4:
            await MergeSort();
            break;
         case 5:
            await QuickSort();
            break;
      }
       sortArray.disabled = false;
       generate_array.disabled = false;
    }
}

sortArray.addEventListener('click', sort);