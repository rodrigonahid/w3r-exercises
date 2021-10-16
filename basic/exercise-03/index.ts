interface Calendar {
  date: object;
  getDate():string;
  formatDate(n: number):string;
}

const Calendar = {
  date: new Date(),
  getDate(){
    const day = this.date.getDate()
    const month = this.date.getMonth()
    const year = this.date.getFullYear()
    return(
      `${this.formatDate(day)}/${this.formatDate(month)}/${year}`
    )
  },
  formatDate(n: number){
    return (n >= 0 && n < 10)? `0${n}` : n
  }
}

const App = {
  element: document.querySelector('#app')!,
  init(){
    this.element.append(Calendar.getDate())
  }
}
App.init()