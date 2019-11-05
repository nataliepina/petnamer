import React from 'react'

function generate() {
  let hexValues = [
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

  function populate(a) {
    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14)
      let y = hexValues[x]
      a += y
    }
    return a
  }

  let newColor1 = populate('#')
  let newColor2 = populate('#')
  let angle = Math.round(Math.random() * 360)

  let gradient =
    'linear-gradient(' + angle + 'deg, ' + newColor1 + ', ' + newColor2 + ')'

  document.getElementById('container').style.background = gradient
  document.getElementById('output').innerHTML = gradient
}

document.onload = generate()
