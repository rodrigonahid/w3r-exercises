function Print(){
  const app = document.querySelector('#app')!;
  const button = document.createElement('button');
  button.innerHTML = 'Print page';
  app.append(button);
  app.addEventListener('click', ()=>{
    window.print()
  })
}
Print()