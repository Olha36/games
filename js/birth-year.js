const searchButton = document.querySelector('.search');
const birthYearInput = document.querySelector('.birth-year');
const yearTextContent = document.querySelector('.year-heading');

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !==0) ||(year % 400 === 0);
  
}

function checkIsLeapYear() {
  let  year =  birthYearInput.value;
  birthYearInput.value = "";

  isLeapYear ();
  if (isLeapYear(year)) {
    yearTextContent.textContent = `Ви народилися у високосний ${year} рік!`
    yearTextContent.style.color = '#039900';
  } else {
    yearTextContent.textContent = `Ви народилися не у високосний ${year} рік!`
    yearTextContent.style.color = 'red';
  }

  if(year === '') {
    yearTextContent.textContent = `Введіть рік народження!`
    yearTextContent.style.color = 'black';
  } 
};

function onInputClick() {
  yearTextContent.textContent = '';
}

searchButton.addEventListener('click', checkIsLeapYear);
birthYearInput.addEventListener('focus', onInputClick)
