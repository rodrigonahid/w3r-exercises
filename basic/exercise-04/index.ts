const Triangle = () => {
  const sideOne = document.querySelector('#side-one') as HTMLInputElement;
  const sideTwo = document.querySelector('#side-two') as HTMLInputElement;
  const sideThree = document.querySelector('#side-three') as HTMLInputElement;
  const button = document.querySelector('#submit') as HTMLInputElement;
  
  button.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(`${sideOne}/${ sideTwo}/${sideThree}`)
    const triangleArea = (Number(sideOne.value) + Number(sideTwo.value) + Number(sideThree.value))/2
    const element = document.createElement('span')
    element.innerHTML = `The triangle area is ${triangleArea} <br>`
    app.appendChild(element)
  })
 
}
Triangle()