document.querySelector('.search').addEventListener('click', function() {
  let  year =  document.querySelector('.input-wrapper input').value;
  document.querySelector('.input-wrapper input').value = "";

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !==0) ||(year % 400 === 0);
    
  }
  
  if (isLeapYear(year)) {
    document.querySelector('.year-heading').textContent = `Ви народилися у високосний ${year} рік!`
    document.querySelector('.year-heading').style.color = '#039900';
  } else {
    document.querySelector('.year-heading').textContent = `Ви народилися не у високосний ${year} рік!`
    document.querySelector('.year-heading').style.color = 'red';
  }
})
