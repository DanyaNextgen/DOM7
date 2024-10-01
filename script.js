const inputs = document.querySelectorAll('input'),
      required = document.querySelectorAll('.required input'),
      btn = document.querySelector('button'),
      patterns = {
        name: /^[a-z ,.'-]+$/i,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        phone_number: /^9989[012345789][0-9]{7}$/,
        age: /^\S[0-9]{0,3}$/
      }
    
inputs.forEach(inp => {
    inp.onkeyup = (event) => {
        const val = event.target.value

        if (patterns[event.target.name].test(val)) {
            inp.parentElement.classList.remove('error')
        } else {
            inp.parentElement.classList.add('error')
        }
    }
})

btn.onclick = () => {
    required.forEach(input => {
        if (input.value.trim() === '') {
            input.parentElement.classList.add('error')
        } else {
            input.parentElement.classList.remove('error')
        }
    })
}