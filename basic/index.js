console.log('working')

document.querySelector('button').addEventListener('click', activate);


function activate() {
  console.log('activation works')
  new AccessibleCalendar;
}

class AccessibleCalendar {
  constructor() {
    
  }
}