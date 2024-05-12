// Grid Options: Contains all of the grid configurations

const columnDefs = [
  {
    groupId: "athleteGroupId",
    headerName: "Athlete",
    children: [
      {
        headerName: "Name",
        field: "athlete",
        minWidth: 200,
        columnChooserParams: {
          // hides the Column Filter section
          suppressColumnFilter: true,

          // hides the Select / Un-select all widget
          suppressColumnSelectAll: true,

          // hides the Expand / Collapse all widget
          suppressColumnExpandAll: true,
        },
      },
      {
        field: "age",
        minWidth: 200,
        columnChooserParams: {
          // contracts all column groups
          contractColumnSelection: true,
        },
      },
    ],
  },
  {
    groupId: "medalsGroupId",
    headerName: "Medals",
    children: [{ field: "gold" }, { field: "silver" }, { field: "bronze" }],
  },
];

let gridApi;

const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    columnChooserParams: {
      // suppresses updating the layout of columns as they are rearranged in the grid
      suppressSyncLayoutWithGrid: true,
    },
  },
  columnMenu: "new",
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  gridApi = agGrid.createGrid(gridDiv, gridOptions);

  fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    .then((response) => response.json())
    .then((data) => gridApi.setGridOption("rowData", data));
});


  let charts = document.querySelectorAll('.chart'); //
let PopUp = document.getElementById('popUpBar'); // Select 
let closeIcon = document.getElementById('closeIcon'); // 
let swipe = document.querySelector('.mySwiper');

// Loop through the charts and add a click event listener to each one
charts.forEach((chart) => {
  chart.addEventListener('click', () => {
    PopUp.style.display = 'block'; // Show the popup
    PopUp.style.zIndex = '3'; // Bring the popup to the front
  });
});

// Add a click event listener to the close icon
closeIcon.addEventListener('click', () => {
  PopUp.style.display = 'none'; // Hide the popup
  PopUp.style.zIndex = '-1'; // Send the popup to the back
});

// swipe.addEventListener('click', () => { 
//   PopUp.style.display = 'none';
//   PopUp.style.zIndex = '-1'; // Send the popup to the back
// })