var dropdown = document.getElementById("dropdown8");
  
function toggleLiftOff() {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }


}

var icon = document.getElementById("rotate");
var isRotated = false;

function chevronRotate() {
  if (isRotated) {
    icon.style.transform = "rotate(0deg)";
   
  } else {
    icon.style.transition = "transform 0.2s ease-in-out";
    icon.style.transform = "rotate(180deg)";
  }
  isRotated = !isRotated;
}



var marginBottom = document.getElementById ('tablemargin')

function tableMargin (){
    marginBottom.style.marginBottom = "20px";
}





function employeeBorder() {
    var borderBottom = document.getElementById("employeeBorder");
    var myDropdown = document.getElementById("dropdown9");
    var dropdownBackground = document.getElementById('dropdownbackground')
    
    // check if dropdown is already displayed   
    if (myDropdown.style.display === "block") {
      // if it is, hide the dropdown and reset the border style
      myDropdown.style.display = "none";
      borderBottom.style.borderBottomLeftRadius = '10px';
      borderBottom.style.borderBottomRightRadius= '10px';
      borderBottom.style.borderBottomStyle = '';
      borderBottom.style.borderBottomWidth = '';
      borderBottom.style.borderBottomColor = ''; 
      borderBottom.style.marginBottom = '20px'
      dropdownBackground.style.background='rgba(14, 33, 105, 0.04)'
      dropdownBackground.style.color='#0E2169'
    } else {
      // if it isn't, show the dropdown and change the border style
      myDropdown.style.display = "block";
      borderBottom.style.borderBottomLeftRadius = '0px';
      borderBottom.style.borderBottomRightRadius= '0px';
      borderBottom.style.borderBottomStyle = 'solid';
      borderBottom.style.borderBottomWidth = '1px';
      borderBottom.style.borderBottomColor = 'lightgray'; 
      borderBottom.style.marginBottom = '0px'
      dropdownBackground.style.background='#0E2169'
      dropdownBackground.style.color='white'
    }

    
  }


