var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mint()
        //console.log(mutation) //look at changes
    });
});

var config1 = { characterData: true, attributes: true, childList: true, subtree: true }; //inner html
var config2 = { characterData: true, attributes: false, childList: true, subtree: true }; //textContent


(async() => {
    //await connectPhantom()
    mutationObserver.observe(document.documentElement, config1); //innerhtml
    mutationObserver.observe(document.documentElement, config2); //textcontent
    mint()
})()


async function mint() {
    //while (true) {
        const button = document.getElementsByTagName("button")
        for (let i = 0; i < button.length; i++) {
            if (button[i].id.toLowerCase().includes("mint") == true || button[i].innerHTML.toLowerCase().includes("mint") == true || button[i].textContent.toLowerCase().includes("mint") == true){ //change whenever
                //console.log("clicking")
                for (let j = 0; j < 10; j++) {
                    button[i].click();
                }

                return;
            }
        }
        //sleep(500)
    //}
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
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}