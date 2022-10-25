function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `A gora  são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bomdia
        img.src = 'hackdia.png'
        document.body.style.background = '#ad1102'
    }else if (hora >= 12 && hora < 18){
        //tarde
        img.src = 'hacktarde.png'
        document.body.style.background = '#980e9b'

    }else{
        //boa noite
        img.src = 'hacknoite.png'
        document.body.style.background = '#40a849'
    }
}
