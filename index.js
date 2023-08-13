const countValue = document.getElementById('counter');

const increment = () =>{
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
}

const decrement = () =>{
    // get the value
    let value = parseInt(countValue.innerText);
    // Increment the value
    value = value - 1;
    // Set the value on the UI 
    countValue.innerText = value;
}
