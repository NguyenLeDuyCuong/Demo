const {app, BrowserWindow} = require ('electron')

function xuly () {
    var winParent = new BrowserWindow ({
        width:400,height:400,
        maxWidth:600, maxHeight:600,
        minWidth:300, minHeight:300,
        backgroundColor: '#faf'
    })
    var winChill = new BrowserWindow ({
        width:200,height:200,
        backgroundColor: '#afa',
        parent:winParent, resizable: false , modal: true ,
        show: false
    })
    winParent.loadFile('index.html')

    winChill.loadURL('https://github.com/')

    winChill.once('ready-to-show',() => {
        winChill.show()     
    })


    winParent.on('closed', () => {
        app.quit()
    })
}
app.on('ready', xuly)