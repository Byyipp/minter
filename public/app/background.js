var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mint()
        mint2()
        //console.log(mutation) //look at changes
    });
});

var config1 = { characterData: true, attributes: true, childList: true, subtree: true }; //inner html
var config2 = { characterData: true, attributes: false, childList: true, subtree: true }; //textContent


(async() => {
    //await(connect())
    //await connectPhantom()
    mutationObserver.observe(document.documentElement, config1); //innerhtml
    mutationObserver.observe(document.documentElement, config2); //textcontent
    mint()
    mint2()
})()


async function mint() {
        const button = document.getElementsByTagName("button")
        for (let i = 0; i < button.length; i++) {
            if (button[i].id.toLowerCase().includes("mint") == true || button[i].innerHTML.toLowerCase().includes("mint") == true || button[i].textContent.toLowerCase().includes("mint") == true){ //change whenever
                for (let j = 0; j < 10; j++) {
                    button[i].click();
                }
            }
        }
        return;
}

async function mint2() {
    console.log("mint2")
    let elems = document.querySelectorAll('[class*="button" i]');

    for (let i = 0; i < elems.length; i++) {
        if ((elems[i].innerHTML.toLowerCase().includes("mint") || elems[i].textContent.toLowerCase().includes("mint")) && elems[i].innerHTML.toLowerCase().includes("how") == false && elems[i].textContent.toLowerCase().includes("how") == false)  {
            for (let j = 0; j < 10; j++) {
                elems[i].click()
            }
        }
    }


}

async function connect() {
    const injectedCode = `
    solana.connect()
    `

    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
}

async function connectPhantom() {
        const button = document.getElementsByTagName("button")
        for (let i = 0; i < button.length; i++) {
            if ((button[i].innerHTML.toLowerCase().includes("connect") == true) || (button[i].textContent.toLowerCase().includes("connect") == true)){
                button[i].click()
                //sleep(500)
                let phantom = document.getElementsByTagName("button")
                for (let j = 0; j < phantom.length; j++) {
                    if (phantom[j].className.includes("MuiButtonBase-root MuiButton-root MuiButton-text") == true) {
                        phantom[j].click()
                        // var popup = chrome.extension.getViews({type: 'notification'})[0];
                        // console.log(popup.Attr);
                    }
                }
            }


                // let checkmark = document.getElementsByTagName("input")
                // for (let j = 0; j < checkmark.length; j++) {
                //     if (checkmark[j].type == "checkbox") {
                //         checkmark[j].checked == true;
                //     }
                // }
                // //checkmark[0].click();
                // let submit = document.getElementsByTagName("button")
                // for (let j = 0; j < submit.length; j++) {
                //     if (submit[j].className.includes("sc-gtsrHT gDKYmt sc-hKFxyN kksiKu") == true) {
                //         submit[j].click()
                //     }
                // }

                return;
        }

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}