document.getElementById('menu').onclick = function myFunction() {
  const x = document.getElementById('myTopNav')
  if (x.className === 'topNav') {
    x.className += 'responsive'
  } else x.className = 'topNav'
}
