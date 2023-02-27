let a=[
    {
        id:1,
        name:"Mohini",
        place:"Virar"
    },
    {
        id:2,
        name:"Snehal",
        place:"Aambadi"
    },
    {
        id:3,
        name:"Mohan",
        place:"Chembur"
    },
    {
        id:4,
        name:"Ankita",
        place:"Thane"
    }
]

let ans=a.filter((item)=>item.id==1||item.id==2).map((k)=>k
// console.log(k.name)
)
console.log(ans)
// -----------------------
// indexOf and lastIndexOf returning index number
var a=["Sanjay","Aman","Reheman","Aman"]
console.log(a)
console.log(a.indexOf("Aman"))
console.log(a.indexOf("Aman",2))

// If you not get value from array then it returns a -1 value
// --------------------------
// lastIndexOf=>last se dhundana chalu karata hai

console.log(a.lastIndexOf("Aman"))

// indexOf->starting se search karata hai and lastIndexOf last se search karata hai

console.log(a.indexOf("Preeti"))
// ----------------------
// toString() It convert array into string

var a=["Sanjay","Aman","Reheman","Aman"]
var k=a.toString()
console.log(k)
  a.fill("Ram")//The array name replace with name Ram
  console.log(a)
// --------------------------

// Accessing array element
var geek=["Rahul","Ram",56,"Jay"];
// console.log(geek[0])

console.log(geek[26]) //because here in geek[26] position there is no value assign
// -------------------------------


 let arr=[10,20,30,40,50,60,70,80];

 for(let i=0;i<arr.length;i++){
console.log(arr[i])
    if(i==1)break 
 }
// ===============================
// Task using table
Method =1
let arr=[
    {
        id:1,
        name:"Mohini",
        place:"Virar"
    },
    {
        id:2,
        name:"Snehal",
        place:"Aambadi"
    },
    {
        id:3,
        name:"Mohan",
        place:"Chembur"
    },
    {
        id:4,
        name:"Ankita",
        place:"Thane"
    }
]

 function drawTable(arr){
   
    const table=document.createElement("table");
   thead=document.createElement("thead");
    var tr=document.createElement("tr");
    const thForId=document.createElement("th");
    thForId.innerText="id";

    const thForName=document.createElement("th");
    thForName.innerText="Name";

    const thForPlace=document.createElement("th");
    thForPlace.innerText="Place";

    tr.append(thForId,thForName,thForPlace)

    thead.appendChild(tr)
    table.appendChild(thead)

    const tbody=document.createElement("tbody");
    table.appendChild(tbody);

    for(const [index, d] of arr.entries()){
    // for(let d of arr){
// document.write(index)
        const tr=document.createElement("tr");  

        const tdForId=document.createElement("td");
        tdForId.innerText=d.id;   
        tr.appendChild(tdForId)

 const tdForName=document.createElement("td");
 tdForName.innerText=d.name;   
        tr.appendChild(tdForName)

        const tdForPlace=document.createElement("td");  
 tdForPlace.innerText=d.place;   
        tr.appendChild(tdForPlace)

        tbody.appendChild(tr)
    }

    result2.innerText="";
    result2.appendChild(table)
 }

drawTable2(arr);

 function drawTable2(arr){
    const table=document.createElement("table");
    const thead=document.createElement("thead");
    const tr=document.createElement("tr");

    const thForId=document.createElement("th");
    thForId.innerText="id";

    const thForName=document.createElement("th");
    thForName.innerText="Name";

    const thForPlace=document.createElement("th");
    thForPlace.innerText="Place";

    tr.append(thForId,thForName,thForPlace)

    thead.appendChild(tr)
    table.appendChild(thead)

    const tbody=document.createElement("tbody");
    table.appendChild(tbody);



for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    const tr=document.createElement("tr");
    // tr.setAttribute("id", "Div1");
    const tdForId=document.createElement("td");
    tdForId.innerText=arr[i].id;   
    tr.appendChild(tdForId)

const tdForName=document.createElement("td");
tdForName.innerText=arr[i].name;   
    tr.appendChild(tdForName)

    const tdForPlace=document.createElement("td");
tdForPlace.innerText=arr[i].place;   
    tr.appendChild(tdForPlace)

    tbody.appendChild(tr)
       
        if(i==1)break 
     }

    
  
    result.innerText="";
    result.appendChild(table)
 }

 function showMore(){
    alert("nnxxnn")
    drawTable(arr);
document.getElementById("result").style.display="none"

     }
 
// ---------------------------------
//     2 Method 
//    ---------------------------- 
let a=[
    {
        id:1,
        name:"Mohini",
        place:"Virar"
    },
    {
        id:2,
        name:"Snehal",
        place:"Aambadi"
    },
    {
        id:3,
        name:"Mohan",
        place:"Chembur"
    },
    {
        id:4,
        name:"Ankita",
        place:"Thane"
    }
]

let ans=a.filter((item)=>item.id==a[0].id||item.id==a[1].id).map((k)=>

document.getElementById("result2").innerHTML+=k.id+" "+k.name+" "+k.place+" "+"<br/>"
)
var flag=false;
function showMore2(){
    document.getElementById("showmorebtn").disabled="true"
    document.getElementById("result2").style.display="none"
    let ans=a.map((k)=>

    document.getElementById("result3").innerHTML+=k.id+" "+k.name+" "+k.place+" "+"<br/>"
    )
      
}
console.log(ans)

