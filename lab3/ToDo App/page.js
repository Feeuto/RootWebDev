
// to creat todo
function createNewElement(){ 
    let li = document.createElement('li'); // in order to create list <li>
    let theInputValue = document.getElementById("the_input").value; // Value in the input
    let textNode = document.createTextNode(theInputValue); // Create text node with the input value

    li.appendChild(textNode); // put the created text inside of the list <li></li>

    // Checking that the input is not empty
    if(theInputValue === ''){
        alert("please, fill the input data")
    }
    else{
        document.getElementById("the_ul").appendChild(li);
    }

    document.getElementById("the_input").value = ""; // Clearing the input value after adding a new task to the list

    // Close Button 
    let closeButton = document.getElementsByClassName("close");
    
    let theSpanTag = document.createElement("span"); // Creating delete span
    let txt = document.createTextNode("\u00D7"); // Putting multiplication sign as a delete sign to a close button 

    theSpanTag.className = "close";
    theSpanTag.appendChild(txt);
    li.appendChild(theSpanTag); // Put the created span into list

    // In order to remove items when you click on close button 
    for(i = 0; i < closeButton.length; i++){
        closeButton[i].onclick=function(){
            let theDiv = this.parentElement;
            // theDiv.style.display = "none";
            theDiv.remove();
        }
    }
}

// To sign which line is checked or not when you click on it
let listUl = document.querySelector('ul');
listUl.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    }
}); 

