/**
 * This file is used to fetch data from the API and display it in a table
 *
 * author: Yash Chauhan
 * created on: 06/12/2021
 */

 url = "https://symbl-ai-assignment-example-1.herokuapp.com/get-data/"

 // Data before Sorting
 async function testFunc(url){
     const response = await fetch(url);
     var data = await response.json();
     console.log("Data before Sorting: ", data);
 }
 
 testFunc(url);
 
 // function to sort data by id
 const sort_by = (field, asc, primer) => {
 
     const key = primer ?
       function(x) {
         return primer(x[field])
       } :
       function(x) {
         return x[field]
       };
   
     asc = asc ? 1 : -1;
   
     return function(a, b) {
       return a = key(a), b = key(b), asc * ((a > b) - (b > a));
     }
 }
 
 // Function to fetch data form the API by id
 async function funcName(url){
     const response = await fetch(url);
     var data = await response.json();
 
     console.log("Data after storing: ",data.data.sort(sort_by('id', true, parseInt)));  
     if (response) {
         hideloader();
     }
     show(data);
 }
 
 funcName(url);
 
 // function to show loader
 function hideloader() {
     document.getElementById('loading').style.display = 'none';
 }
 
 // Function to define innerHTML for HTML table
 function show(data) {
     let tab = 
         `<thead>
             <tr>
                 <th><h2>ID</h2></th>
                 <th><h2>Name</h2></th>
             </tr>
          </thead>`;
          
     
     // Loop to access all rows 
     for (let r of data.data) {
         tab += 
         `<tbody>
             <tr> 
                 <td><h3>${r.id}</h3> </td>
                 <td><h3>${r.name}</h3></td>        
             </tr>
         </tbody>`;
     }
     // Setting innerHTML as tab variable
     document.getElementById("data").innerHTML = tab;
 }
 
 