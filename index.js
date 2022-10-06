let budget=[];//creating empty array
 const addEvent=(ev)=>
{  
       ev.preventDefault();  
    
let budgetEl=
{ 
    // creating objects 
    id:Date.now(), 
    date: document.getElementById('date-entry').value,
    title: document.getElementById('Title-entry').value,
    price: document.getElementById('cost-entry').value
}
budget.push(budgetEl);   // storing object value in an empty array


//for display purposes only 

console.warn('added', {budget} ); 
let pre = document.querySelector('#msg pre');
 pre.textContent = '\n' + JSON.stringify (budget,'\t',2);
   


//local storage
localStorage.setItem('MyBudgetList',JSON.stringify(budget));

}

 document.addEventListener('DOMContentLoaded',()=>
 {
    document.getElementById('save').addEventListener('click',addEvent);
 });


function saving()
{ 
//     if(document.getElementById('date-entry').value === "" &&
//    document.getElementById('Title-entry').value === "" &&
//    document.getElementById('cost-entry').value === "")
//    {
//     alert("put some text in there");
//    }
  
     if (confirm("Do you want to save changes?") == true)
    {
    alert( "Data saved successfully!");
    }
    else 
    {
    alert("Save Cancelled!");
    }
}
    



function cleared()
{
    document.getElementById('date-entry').value = "";
    document.getElementById('Title-entry').value = "";
    document.getElementById('cost-entry').value = "";

}

function calcu()
{
    let total=0;
    budget.forEach(item=>
        {
            total=total+parseFloat(item.price);
            console.log("Total: ", total);
        
        });
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify ("Total expenses :"+total,'\t',2);

}
