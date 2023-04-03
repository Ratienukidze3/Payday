function setDivWidth(num) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    
    if (num === 1) {
      div1.style.flexBasis = "33%";
      div2.style.flexBasis = "calc((100% - 33%) / 2)";
      div3.style.flexBasis = "calc((100% - 33%) / 2)";
    } else if (num === 2) {
      div1.style.flexBasis = "66%";
      div2.style.flexBasis = "calc((100% - 66%) / 2)";
      div3.style.flexBasis = "calc((100% - 66%) / 2)";
    } else if (num === 3) {
      div1.style.flexBasis = "100%";
      div2.style.flexBasis = "0%";
      div3.style.flexBasis = "0%";
    }
  }

//   let data = [
//     {id: 1,fullName: 'Rajeev Behera', position: 'developer', salary: [123, 4000, 1500], hours: [1,2,3,4], more: [1,2,3,4], time: [100,200, 300], gross: [400, 500, 600]},
//     {id: 2,fullName: 'John Doe', position: 'Admin', salary: [123, 4000, 1500], hours: [1,2,3,4], more: [1,2,3,4], time: [100,200, 300], gross: [400, 500, 600]},
//     {id: 3,fullName: 'Alex Mercer', position: 'Xelosani', salary: [123, 4000, 1500], hours: [1,2,3,4], more: [1,2,3,4], time: [100,200, 300], gross: [400, 500, 600]}
//   ];
// const tableParent = document.getElementById("table-parent");

// const renderTable = (arr) => {
//   let result = "";

//   for(let i = 0; i < arr.length; i++) {
//     result += `
//   <div class="employee-row employee_firstrow" id="employeeBorder">
//     <div class="employee-cell">
//         <input type="checkbox" class="input_padding">
//     </div>

//     <span class="employee-cell employee_name">${data[i].fullName}</span>

//     <div class="employee_position_container">
//         <span class="employee-cell employee_position">${data[i].position}</span>
//         <div class="employee-cell employee_hours" onclick="editCell(this)">

//             <div id="dollar" class="dollar"><i data-feather="dollar-sign"
//                     class="dollar-sign first_dollar"></i></div>
//             <span>44/hrs</span>
//             <input type="text" style="display: none;" class="hrs_padding">
//         </div>
//     </div>
//     <div class="employee-cell employee_hours" onclick="editCell(this)">
//         <div id="dollar" class="dollar"><svg data-feather="dollar-sign" class="dollar-sign"></svg>
//         </div>
//         <span>4550.00</span>
//         <input type="text" style="display: none;">
//     </div>


//     <div class="employee-cell employee_earnings" onclick="editCeell(this)">
//         <div id="dollar1" class="dollar"><svg data-feather="dollar-sign" class="dollar-sign"></svg>
//         </div>
//         <span> 80.00</span>
//         <input type="text" style="display: none;">
//     </div>
//     <div class="employee-cell employee_timeoff" onclick="editCeeell(this)">
//         <span>hrs 20.00</span>
//         <input type="text" style="display: none;">
//     </div>

//     <span class="employee_grossearnings">$7,423.15</span>
//     <div onclick=" employeeBorder ()">
//         <div class="" onclick="tableMargin()">
//             <button onclick="toggleLiftOff()" class="payrolldropdown" id="dropdownbackground" ><i data-feather="chevron-up"
//                     onclick="chevronRotate()" id="rotate"></i>
//             </button>
//         </div>
//     </div>

// </div>
// <div id="dropdown9">
//     <div id="dropdown8" style="display: none;">
//         <div class="payroll_dropdown_container" id="tablemargin">
//             <!-- <div class="employee-cell employee_hours" onclick="editCell(this)">
//                 <div id="dollar" class="dollar"><svg data-feather="dollar-sign" class="dollar-sign"></svg>
//                 </div>
//                 <span>4550.00</span>
//                 <input type="text" style="display: none;">
//             </div> -->
//             <div class="dropdown-container_box"onclick="addMoreCell()">
//                 <div class="dropdown-container_box_item "   id="addmoreitem">
//                 <button class="dropdown-container_button"><i data-feather="plus-circle"></i></button>
//                 <span class="dropdowncontainer_title">Add Rate</span></div>
//                 <div class="inputbox">
//                 <span  >dradada kaifob?</span>
//                 <input type="text" style="display:none;" id="iteminput" class="add_rate_input"></div>
                
                
//             </div>
            
//             <div class="dropdown-container_box">
//                 <button class="dropdown-container_button"><i
//                         data-feather="plus-circle"></i></button>
//                 <span class="dropdowncontainer_title">Add OT</span>
//             </div>
//             <div class="dropdown-container_box">
//                 <button class="dropdown-container_button"><i
//                         data-feather="plus-circle"></i></button>
//                 <span class="dropdowncontainer_title">Add more</span>
//             </div>
//             <div class="dropdown-container_box">
//                 <span class="dropdowncontainer_title">Balance:2hrs</span>
//             </div>
//             <div class="dropdown-container_box">
//                 <button class="dropdown-container_button"><i
//                         data-feather="plus-circle"></i></button>
//                 <span class="dropdowncontainer_title">Reimbursement</span>
//             </div>


//         </div>
//     </div>



// </div>
// `

// }
// tableParent.innerHTML += result;
// }

// renderTable(data)

// // function renderTable() {

// // }