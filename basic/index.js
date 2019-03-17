console.log('working')

document.querySelector('button').addEventListener('click', event => new AccessibleCalendar(event));

class Grid {
  construcor() {
    this.grid = document.createElement('div');
    this.grid.setAttribute('role', 'grid');
  }

  columnHeaders(array) {
    var row = document.createElement('div');
    row.setAttribute('role', 'row');
    array.forEach((txt) => {  
      var cell = document.createElement('span');
      cell.setAttribute('role', 'columnheader')
      cell.innerText = 'txt';
      row.appendChild(cell);
    }
    this.grid.appendChild(row);
  } 

  addRow(array) {
    var row = document.createElement('div');
    row.setAttribute('role', 'row');
    array.forEach((txt) => {  
      var cell = document.createElement('span');
      cell.setAttribute('role', 'cell')
      cell.innerText = 'txt';
      row.appendChild(cell);
    }
    this.grid.appendChild(row);
  }

  appendTo(query) {
    document.querySelector(query).appendChild(this.grid)
  }
}

class AccessibleCalendar {
  constructor(event) {
    console.log('es6+ is working', event);
    this.calendar = document.createElement('div');
    this.grid = new Grid;
  }


}