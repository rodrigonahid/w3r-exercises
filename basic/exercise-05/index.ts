const Five = {
  element: document.querySelector('#app')!,
  text: 'w3resources',
  rotate: () => {
    let RotatedObj = Five.text.split('');
    let NewElement = document.createElement('p')
    const TextLength = Five.text.length - 1;
    NewElement.innerHTML = RotatedObj.join('')
    Five.element.appendChild(NewElement)
    RotatedObj.forEach((item, index)=>{
      RotatedObj.unshift(RotatedObj[TextLength])
      RotatedObj.pop()
      let NewElement = document.createElement('p');
      NewElement.innerHTML = RotatedObj.join('');
      console.log(RotatedObj.join(''), NewElement)
      Five.element.appendChild(NewElement)
    })
  },
}
Five.rotate()