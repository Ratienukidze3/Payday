



function checkAll(checkbox) {
  const checkboxes = document.querySelectorAll('.employee-row input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = checkbox.checked);
}

function editCell(cell) {
  const span = cell.querySelector('span');
  const input = cell.querySelector('input');
  const i = cell.querySelector('svg');
  // const i =document.getElementById('dollar')
  
  
  // Hide the span element and show the input element
  span.style.display = 'none';
  input.style.display = '';
  i.style.display = 'none';
  
  
  // Set the input element's value to the span element's text
  input.value = span.textContent;
  
  // Focus the input element and select its contents
  input.focus();
  input.select();
  
  // Attach an event listener to the input element to save its value when the user presses Enter
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      span.textContent = input.value;
      span.style.display = '';
      input.style.display = 'none';
      i.style.display = "";
      
    }
  });
}



function editCeell(cell) {
  const span = cell.querySelector('span');
  const input = cell.querySelector('input');
  const i = cell.querySelector('svg');
 
  span.style.display = 'none';
  input.style.display = '';
  i.style.display = 'none';
  
 
  input.value = span.textContent;
  
  
  input.focus();
  input.select();
  

  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      span.textContent = input.value;
      span.style.display = '';
      input.style.display = 'none';
      i.style.display = "";
    }
  });
}



function editCeeell(cell) {
  const span = cell.querySelector('span');
  const input = cell.querySelector('input');
  const i = cell.querySelector('svg');
  
  
 
  span.style.display = 'none';
  input.style.display = '';
 
 
  input.value = span.textContent;
  
 
  input.focus();
  input.select();
  
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      span.textContent = input.value;
      span.style.display = '';
      input.style.display = 'none';
    
    }
  });
}
function addMoreCell (cell) {
  const addMoreItem = document.getElementById ('addmoreitem')
  const showInput = document.getElementById ('iteminput')
 
  
  addMoreItem.style.display ='none';
  showInput.style.display ='';

  showInput.value = addMoreItem.textContent;

  showInput.focus ();
  showInput.select ();

  showInput.addEventListener ('keydown', function(event){
    if (event.key === 'Enter') {
      addMoreItem.textContent = showInput.value;
      addMoreItem.style.display = '';
      showInput.style.display = 'none';
    }
  });
}



const label = document.getElementById("label");
const box = document.getElementById("box");

const toggleCheckBox = (e) => {
  e.target.classList.toggle('checked')
}

label.addEventListener('click', toggleCheckBox);