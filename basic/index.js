'use strict';
console.log('working');

document.querySelector('button').addEventListener('click', event => new AccessibleCalendar().append());

class Grid {
  constructor() {
    this.grid = document.createElement('DIV');
    this.grid.setAttribute('role', 'grid');
  }

  columnHeaders(array) {
    const row = document.createElement('div');
    row.setAttribute('role', 'row');
    array.forEach(txt => {  
      const cell = document.createElement('span');
      cell.setAttribute('role', 'columnheader');
      cell.innerText = txt;
      row.appendChild(cell);
    });
    this.grid.appendChild(row);
  } 

  addRow(array) {
    const row = document.createElement('div');
    row.setAttribute('role', 'row');
    array.forEach(txt => {  
      const cell = document.createElement('span');
      cell.setAttribute('role', 'cell')
      cell.innerText = txt;
      row.appendChild(cell);
    });
    this.grid.appendChild(row);
  }

  appendTo(query) {
    query.appendChild(this.grid)
  }
}

class AccessibleCalendar {
  constructor() {
    this.calendar = document.createElement('div');
    this.grid = new Grid();
    this.years = (() => {
      const generatedYears = []
      for(let i = 1991; i < 20; i++) {
        generatedYears.push(i)
      }
      return  generatedYears
    })();
    this.days = this.grid.columnHeaders(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
    this.months = [
    'January', 
    'February', 
    'March', 
    'April' , 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
    ];
  };

  append(){
    this.grid.addRow(['',1,2,3,4,5,6]);
    this.grid.addRow([7,8,9,10,11,12,13]);
    this.grid.addRow([14,15,16,17,18,19,20]);
    this.grid.addRow([21,22,23,24,25,26,27]);
    this.grid.addRow([28,29,30,31,'','','']);
    this.grid.appendTo(this.calendar);
    document.body.appendChild(this.calendar);
  };

}