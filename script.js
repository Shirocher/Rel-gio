function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if(hora >= 0 && hora < 12.00) {
        msg.innerHTML = `Agora são ${hora} horas`
        msg2.innerHTML = 'Bom Dia!'
        document.body.style.background = '#AEB299'
        img.src = 'octom.jpeg'
    } else if (hora >= 12.00 && hora < 18.00) {
        msg.innerHTML = `Agora são ${hora} horas`
        msg2.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#DDAC63'
        img.src = 'octot.jpeg'
    }else {
        msg.innerHTML = `Agora são ${hora} horas`
        msg2.innerHTML = 'Boa Noite!'
        document.body.style.background = '#302C42'
        img.src = 'octon.jpeg'
    }
}

