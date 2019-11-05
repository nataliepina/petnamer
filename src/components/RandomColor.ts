import React from 'react'

function generate() {
  const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
  ]

  function populate(a: any) {
    for (let i = 0; i < 6; i++) {
      const x = Math.round(Math.random() * 14)
      const y = hexValues[x]
      a += y
    }
    return a
  }

  const newColor1 = populate('#')
  const newColor2 = populate('#')
  const angle = Math.round(Math.random() * 360)

  const gradient =
    'linear-gradient(' + angle + 'deg, ' + newColor1 + ', ' + newColor2 + ')'
  //@ts-ignore
  document.getElementById('container').style.background = gradient
  //@ts-ignore
  document.getElementById('output').innerHTML = gradient
}
//@ts-ignore
document.onload = generate()
