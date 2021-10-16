const app = document.querySelector('#app')!

const currentTime = (): string => {
  const date = new Date();
  console.dir(date)
  const day = date.getDay();
  const time = date.getDate();
  console.log(time)
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return(
    `Today is ${week[day]}, ${date.getMonth()} ${date.getDate()} and ${time}`
  ) 
  
}


console.log(currentTime())