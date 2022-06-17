function search() {
   // TODO
   let elements = document.querySelectorAll('ul#towns li')
   let result = document.getElementById('result')
   let search = document.getElementById('searchText').value
   let matches = 0;

   for (const el of elements) {
      el.style.fontWeight = 'normal'
      el.style.textDecoration = ''
   }
   for (const el of elements) {
      let text = el.textContent
      if (text.match(search)) {
         matches++
         el.style.fontWeight = 'bold'
         el.style.textDecoration = 'underline'
      }
   }
   result.textContent = `${matches} matches found`
}
