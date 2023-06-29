document.addEventListener('keyup',e => {
    if(e.target.matches('#search')){
        if (e.key === 'Espace')e.target.value = ''

        document.querySelectorAll('.user').forEach(user => {

            user.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?user.classList.remove('displayNone')
            :user.classList.add('displayNone')

        })

}})