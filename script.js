let form = document.querySelector('.form')
let inp = document.querySelector('#inp')
let btn = document.querySelector('.btn')
let button = document.querySelector('.button')
let pin = document.querySelector('.pin')


let regEx = / ^[0-9]{4}$ /

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    regEx.test(inp.value)
    if(inp.value == 3065){
        $.ajax({
            url:'./file.pdf',
            method:"GET",
            xhrFields:{
                responseType : 'blob'
            }, 
            success: function(data){
                let a = document.createElement('a')
                let url = window.URL.createObjectURL(data);
                a.href = url 
                a.download = 'file.pdf'
                document.body.append(a)
                a.click()
                a.remove()
                window.URL.revokeObjectURL(url)
            }
        })
    }
    else{
        inp.value = null
    }
})