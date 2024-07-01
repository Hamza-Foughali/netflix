
function itertionPargh(){
    var pargh = document.getElementsByTagName('h5')
    var arr = []
    for (let i = 0; i < pargh.length; i++) {
        arr.push(pargh[i].innerText)
        
    }
    return arr
}
function itertionHeaders(){
    var headers = document.getElementsByClassName("Strong")
    var arr = []
    for (let i = 0; i < headers.length; i++) {
        arr.push(headers[i].innerText)
        
    }
    return arr
}

