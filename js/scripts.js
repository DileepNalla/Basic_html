/*
 * Environment Details
// For Development Instance

//"https://web-sdk-dev.aptrinsic.com/api/aptrinsic.js","AP-PGOVPRW5KS6A-2"

For Production Instance
"https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-6WAJA3OATHHI-2"

 */

/** Enable this for Segment.io tracking */
//   !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
//   analytics.load("wJUeAnxMoknMyjeXA3ovPftbff2X7eBy");
//   analytics.page();
//   }}();

var tempurl = window.location.href;
var resulturl = tempurl.toLowerCase();
console.log(resulturl);

// function _px_getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }
// const PX_COOKIE = "apt.uid";
// var cookieParts = _px_getCookie(PX_COOKIE).split('.')
// var anonymous = cookieParts.length != 4 || cookieParts[2] === "0"
// console.log("anonymous:" + anonymous + cookieParts);



//    Adding JQuery
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;
// Fire the loading
head.appendChild(script);

function handler() {
    console.log('jquery added :)');
}

// (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
//     (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
//   var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
//   var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
// })(window,document,"https://web-sdk-dev.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2");


/*<!-- Aptrinsic Tag-->*/
/*PX Tag for JavaScript*/
/*Disable this if we are using the segment event capture, else events will be duplicated*/
/*----------------------------------------------------------------------------------------------------------------*/
// Global function to initialize Gainsight PX
var configtwo = {
    fullDomainCookie: false
};

if (resulturl.includes("contact")) {
    var configone = {
        filterUrls: ["*/Contact.HTML"],
        filterType: "mask"
    };
    console.log('Mask Success');
}


var configthree = {
    kcAllowedFuncNames: ["launchZendeskChat"]
};
(function (n, t, a, e, co) {
    var i = "aptrinsic";
    n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e;
    n[i].c = co;
    var r = t.createElement("script");
    r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-6WAJA3OATHHI-2"
    //AP-6WAJA3OATHHI-2 -- PX Dileep Webapp Subscription Tag
    // {
    //     "htmlSanitization": true,
    //     "htmlSanitizationAllowedDomains": ["https://dileepnalla.github.io"],    
    //     "engagementChecksumFileUrl": "https://raw.githubusercontent.com/DileepNalla/Basic_html/master/checksums.json"
    //     }
    //AP-6WAJA3OATHHI-2
    //AP-GT3SCXV8B3YW-2 -- Product 1 Tag key

    //AP-HHUVBADW9YGV-2 -- Product 2 Tag key

);


// if (anonymous) {
//     aptrinsic("identify", {
//         //User Fields
//         "id": "fake-user-id" // Required for logged in app users
//     })
// }



//AP-6WAJA3OATHHI-2, AP-DRTELDXGAMXI-2 Replace this later on after testing by Zendesk
/*Pendo.io*/


(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('ab4cc67e-b91b-40b5-7d3b-b64d5135fc4c');


//ab4cc67e-b91b-40b5-7d3b-b64d5135fc4c sailaja
//af39e5b9-3ed7-4b36-7602-3e333ec68a53  support@dilsfarm.com
//alert("pendo");

// Full Story Integration

window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'W6P4G';
window['_fs_namespace'] = 'FS';
(function (m, n, e, t, l, o, g, y) {
    if (e in m) {
        if (m.console && m.console.log) {
            m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');
        }
        return;
    }
    g = m[e] = function (a, b, s) {
        g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
    };
    g.q = [];
    o = n.createElement(t);
    o.async = 1;
    o.crossOrigin = 'anonymous';
    o.src = 'https://' + _fs_script;
    y = n.getElementsByTagName(t)[0];
    y.parentNode.insertBefore(o, y);
    g.identify = function (i, v, s) {
        g(l, {
            uid: i
        }, s);
        if (v) g(l, v, s)
    };
    g.setUserVars = function (v, s) {
        g(l, v, s)
    };
    g.event = function (i, v, s) {
        g('event', {
            n: i,
            p: v
        }, s)
    };
    g.anonymize = function () {
        g.identify(!!0)
    };
    g.shutdown = function () {
        g("rec", !1)
    };
    g.restart = function () {
        g("rec", !0)
    };
    g.log = function (a, b) {
        g("log", [a, b])
    };
    g.consent = function (a) {
        g("consent", !arguments.length || a)
    };
    g.identifyAccount = function (i, v) {
        o = 'account';
        v = v || {};
        v.acctId = i;
        g(o, v)
    };
    g.clearUserCookie = function () { };
    g.setVars = function (n, p) {
        g('setVars', [n, p]);
    };
    g._w = {};
    y = 'XMLHttpRequest';
    g._w[y] = m[y];
    y = 'fetch';
    g._w[y] = m[y];
    if (m[y]) m[y] = function () {
        return g._w[y].apply(this, arguments)
    };
    g._v = "1.3.0";
})(window, document, window['_fs_namespace'], 'script', 'user');






/*Script for Login Validation */

// var configone={ filterUrls: ["*/About.HTML"], filterType: "mask"};
// (function(n,t,a,e,x){
//   var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
//   n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2",configone);

//  var configtwo={ fullDomainCookie: true};

// (function(n,t,a,e,x){
//   var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
//   n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2",configtwo);




function callglobal() //https://share.vidyard.com/watch/9DHjPPiqZQc7czUnjorcxA?
{
    aptrinsic('set', 'globalContext', {
        "TrailUser": true,
        "LoanAmount": 19000
    });
}

function loadContactPage() {
    aptrinsic('set', 'globalContext', {
        "page": "Contactpage",
        "name": "Welcome Video",
        "Category": "Onboarding"
    });
    aptrinsic('set', 'globalContext', {
        "demo": "GC2"
    });
}

function loadAboutusPage() {
    aptrinsic('set', 'globalContext', {
        "page": "AboutusPage"
    });
}

function showengagement() {
    aptrinsic('track', 'ID_Request', {
        "ID_required": true
    });
}

function launchZendeskChat() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.id = "ze-snippet"
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=b153014d-0b56-4fef-a6d3-dae44d8fb6bb";
    script.onreadystatechange = handler1;
    script.onload = handler1;
    // Fire the loading
    head.appendChild(script);

    function handler1() {
        console.log('Chat Bot added :)');
    }

}




function allowlogin(usermail) {
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    var e = document.getElementById("usermail").value;
    var historicalemail;



    if (a != e) {
        e = historicalemail + ';' + e;
        historicalemail = e;
        e == '';
    }
    const myaccount = {
        a1: "1P02N2O3HJFZDMR72BQ1ITZ36JWWW92DAMFR",
        a2: "1P02N2O3HJFZDMR72BZ8RJ62ZF1EJWQBV7G3",
        a3: "1P02N2O3HJFZDMR72B8P7ILYJVLZWGLQ5ENV",
        a4: "1P02N2O3HJFZDMR72BNYO3ZSAL5U6L7BQ421",
        a5: "1P02N2O3HJFZDMR72BAJN72MCCYJOU5JRR77"

    }
    var c;


    if (a != "") {
        if (a == "dileepnalla29@gmail.com" || a == "y09me034@gmail.com" || a == "sid@dummy.com" || a == "dileepnalla6@gmail.com" || a == "dnalla@gainsight.com" || a == "demouser@gmail.com" || a == "gsuser@gmail.com" || a == "nareshkumar564@gmail.com" || a == "dilsfarm@gmail.com" || a == "gsuser@test.com") {
            alert("valid User");
            b = a.substr(8, 5);
            var id = b;

            // var hash = CryptoJS.HmacSHA256(id, "9rmLVS939teSt3cILUccAPiqBBxSsQNmREc8CwpAj");

            //Segment Identify
            // analytics.identify(id+"segment", {
            //     name: "Segment User",
            //     email: "dileepnalla6+"+"segm"+"@gmail.com",
            //     plan: "premium",

            //   });

            /*<!-- Aptrinsic Tag-->*/


            if (a == 'dileepnalla29@gmail.com'|| a== 'support@dilsfarm.com') {
            

                aptrinsic('identify', {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                    {
                        //Account Fields
                        "id": myaccount.a4, //Required
                        "name": myaccount.a4,
                        // flat custom attributes
                    });


pendo.initialize({
                 visitor: {
                     id: id ,  // Required if user is logged in
                      email: a       // Recommended if using Pendo Feedback, or NPS Email
                 },

                 account: {
                     id:    myaccount.a4, // Highly recommended
                    name: myaccount.a4,
                 }
             });
                
            } else if (a == 'dileepnalla6@gmail.com' || a == "gsuser@gmail.com") {


                


                aptrinsic('identify', {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
                    "EmailAppend": historicalemail

                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                    {
                        //Account Fields
                        "id": myaccount.a1, //Required
                        "name": myaccount.a1,
                        // flat custom attributes
                    });
pendo.initialize({
                 visitor: {
                     id: id ,  // Required if user is logged in
                      email: a       // Recommended if using Pendo Feedback, or NPS Email
                 },

                 account: {
                     id:    myaccount.a1, // Highly recommended
                    name: myaccount.a1,
                 }
             });


                
            } else if (a == 'demouser@gmail.com') {
                
                aptrinsic('identify', {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                    {
                        //Account Fields
                        "id": myaccount.a2, //Required
                        "name": myaccount.a2,
                        // flat custom attributes
                    });
pendo.initialize({
                 visitor: {
                     id: id ,  // Required if user is logged in
                      email: a       // Recommended if using Pendo Feedback, or NPS Email
                 },

                 account: {
                     id:    myaccount.a2, // Highly recommended
                    name: myaccount.a2,
                 }
             });
                
            }
            else if (a == 'dilsfarm@gmail.com') {
                

                aptrinsic('identify', {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                    {
                        //Account Fields
                        "id": myaccount.a3, //Required
                        "name": myaccount.a3,
                        // flat custom attributes
                    });

pendo.initialize({
                 visitor: {
                     id: id ,  // Required if user is logged in
                      email: a       // Recommended if using Pendo Feedback, or NPS Email
                 },

                 account: {
                     id:    myaccount.a3, // Highly recommended
                    name: myaccount.a3,
                 }
             });
                
            }
            else if (a == 'sid@dummy.com') {


                aptrinsic('identify', {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                    {
                        //Account Fields
                        "id": myaccount.a5, //Required
                        "name": myaccount.a5,
                        // flat custom attributes
                    });
pendo.initialize({
                 visitor: {
                     id: id ,  // Required if user is logged in
                      email: a       // Recommended if using Pendo Feedback, or NPS Email
                 },

                 account: {
                     id:    myaccount.a5, // Highly recommended
                    name: myaccount.a5,
                 }
             });
                
            }

            else {
                aptrinsic('identify', {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                    {
                        //Account Fields
                        "id": myaccount.a1, //Required
                        "name": myaccount.a1,
                        // flat custom attributes
                    });
pendo.initialize({
                 visitor: {
                     id: id ,  // Required if user is logged in
                      email: a       // Recommended if using Pendo Feedback, or NPS Email
                 },

                 account: {
                     id:    myaccount.a1, // Highly recommended
                    name: myaccount.a1,
                 }
             });
                
            }



            // Full story
            // This is an example script - don't forget to change it!
            FS.identify(id, {
                displayName: a,
                email: a
                // TODO: Add your own custom user variables here, details at
                // https://help.fullstory.com/hc/en-us/articles/360020623294-FS-setUserVars-Recording-custom-user-data

            });

            alert("Logged in user id :" + b);

            window.location = "https://dileepnalla.github.io/Basic_html/Index.HTML";
            aptrinsic('track', 'User Login');

        } else
            alert("Invalid User,enter \"demouser@gmail.com\"");
    } else
        alert("enter \"demouser@gmail.com\"");


    return b;
}


allowlogin.prototype.greeting = function () {
    return `hello welcome ${this.a}`
};



aptrinsic('set', 'globalContext', {
    "Product Name": "Basic HTML"
});


var counter = 0;

// Section - 1: Defining the purchse Process


var Productname = "ReactJS";
var Validity = "17-April-2022";
var Productprice = "$40";
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', {
    detail: {
        itemName: this.Productname,
        Validity: this.Validity
    }
})
let transactionsuccess = new CustomEvent('transactionsuccess', {
    detail: {
        Amountdeducted: this.Productprice,
        Paymentstatus: this.transactionStatus
    }
})

let feedback = new CustomEvent('feedback')

//This will create a button on page Load
// refer this lecture to understand the custom events 
//https://gainsight.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757278#overview
document.addEventListener('DOMContentLoaded', function () {


    let m = document.getElementById('paymentbutton');
    //let m = document.querySelector('main');
    addButton(m);
    m.addEventListener('click', function (ev) {

        addPaymentStatus(m);
    });

});

function addButton(parent) {
    let b = document.createElement('button');
    b.setAttribute("id", "Buynow");
    b.setAttribute("class", "btn btn-primary");
    b.textContent = "Pay Now";
    parent.appendChild(b);
    return b;
}

function addPaymentStatus(parent) {
    let p = document.createElement('p');
    p.textContent = "Donot Refresh..." + "  Transaction is in Progress...";
    p.setAttribute("id", "tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated', purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept, 3000);


}

function purchasedone(ev) {

    console.log(ev.type, ev.detail);
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', {
        itemName: ev.detail.itemName,
        Validity: ev.detail.Validity
    });
}



function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "transactionsuccess"
    let p2 = document.createElement('p');
    p2.setAttribute("d", "Feedback");
    p2.setAttribute("class", "btn btn-warning");
    p2.textContent = "Feedback"
    p1.appendChild(p2);
    p2.addEventListener('feedback', feedback_triggered);
    p2.dispatchEvent(feedback);

}


function feedback_triggered() {
    aptrinsic('track', 'feedback given');
}

function triggersurvey() {
    aptrinsic('track', 'triggerNPS');

}

function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', {
        Amountdeducted: ev1.detail.Amountdeducted,
        Paymentstatus: ev1.detail.Paymentstatus
    });
}



// Clearing cookies on the page load
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

function showKCB1() {
    aptrinsic('bot', 'show', {
        id: "3d8b06d9-06ea-4518-8ef2-78564a5a173e"
    }); // We can also specific ID
    // This is for Embeded KCB using UI Element

}



function captureonlyforsession() {
    var checkcookie = document.cookie.match('sid=([^;]*)');
    var getexistingcookieid = checkcookie && checkcookie[1];

    if (counter == 0) {
        for (counter = 0; counter < 1; counter++) {
            aptrinsic('track', 'Click captutre only for session', {
                sessionid: getexistingcookieid
            });
        }
        return counter;
    } else {
        console.log("Event already captured in this session, clear the session and give a try!")
    }


}

function addSalary() {
    aptrinsic('track', 'Add Salary');
}

function calculateAge(dob) {
    this.birthday = new Date(document.getElementById("birthday").value);
    //console.log(this.birthday);
    const datediff = Date.now() - this.birthday.getTime();
    //console.log(datediff);
    const age = new Date(datediff);
    //console.log(age);
    //return Math.abs(age.getUTCFullYear()-1970);
    console.log(Math.abs(age.getUTCFullYear() - 1970));
    // allowlogin.call(this,'dileep@gmail.com');

    // console.log(allowlogin.greeting());
    // console.log('hello');

}
// calculateAge.prototype = Object.create(allowlogin.prototype);


/**Scripts for Tasks.html */
//============================================================================//
// Scripts For Task
//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load All the event Listeners
loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearAllTasks);
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    } else {
        const li = document.createElement('li');
        li.className = 'collection-item';
        //create text Node
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class= "fa fa-remove"></i>';




        li.appendChild(link);
        taskList.appendChild(li);
        aptrinsic('track', 'Task Added', {
            "Task Name": taskInput.value
        });

        storeTaskinLocalStorage(taskInput.value);

        taskInput.value = '';
    }

    e.preventDefault();
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        //create text Node
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class= "fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}


function storeTaskinLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {

            e.target.parentElement.parentElement.remove()
            removeTaskfromLocalStorage(e.target.parentElement.parentElement);
        }

    }


    e.preventDefault;
}

function removeTaskfromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAllTasks(e) {
    if (confirm('Are you sure? This will clear all the tasks and can\'t retrive')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();
    }

}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLocaleLowerCase().indexOf(text) != -1) {
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }
        }
    );
}


function showOffer1() {
    aptrinsic('track', 'ShowOffer');

};
function showOffer2() {
    aptrinsic('track', 'ShowOffer');
};
function showOffer3() {
    aptrinsic('track', 'ShowOffer');
};


// Code for Contact Support In app feedback This will open the form upon click
function openForm() {
    document.getElementById("myForm").style.display = "block";
    // document.addEventListener("click", getUrl);
    // function getUrl() {
    //     document.getElementById("url").innerHTML = resulturl;
    // }

}
// Code for Contact Support In app feedback This will close the form upon click
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function createTicket() {
    captureFeedback();
alert('Ticket Created Successfully');


}
// Below function will capture the feedback using the Gainsight API
function captureFeedback() {
    // Below are the variables that capture the required date for the feedback api object
    var subject = document.getElementById('subject').value;
    var description = document.getElementById('description').value;
    var url = resulturl;
    var e = document.getElementById('category');
    var category = e.options[e.selectedIndex].text;
    //document.getElementById('category').options.selectedIndex.text
    // Below code captures feedback - Gainsight_PX_User_Feedback_API
    //  aptrinsic('send', 'feedback', { 'category': category,'link':url,'subject': subject, 'description': description });
    console.log(document.getElementById('category').value);
    aptrinsic('send', 'feedback', { 'category': document.getElementById('category').value, 'subject': document.getElementById('subject').value, 'description': document.getElementById('description').value });
    alert('Ticket Created Successfully');
}

function captureSearchtext() {
    var q = document.getElementById('searchbar').value;
    if (q != '') {
        aptrinsic('track', 'searchQuery', {
            searchTerm: q,
        });
    }


}

// function addPortTolocalstorage(value) {
//     let seaPorts;
//     var count = 1;
//     while (localStorage.getItem('seaPorts') === null) {
//         seaPorts = [];
//         seaPorts.push(value);
//         localStorage.setItem('seaPorts', JSON.stringify(seaPorts));
//         aptrinsic('track', 'portEvent', {
//             portName: value,
//         });
//         console.log('Success :: Event Fired For'+''+ value);

//         count++;
//     } 
//     seaPorts = JSON.parse(localStorage.getItem('seaPorts'));
//         if (!seaPorts.includes(value)){
//             seaPorts.push(value);
//             aptrinsic('track', 'portEvent', {
//                 portName: value,
//             });
//             console.log('Success :: Event Fired For'+''+ value);
//         }
//         else{
//             if(count==1){
//                 console.log('Port already selected once,so event will not be fired'+''+ value);
//             }
//         }
  
// localStorage.setItem('seaPorts', JSON.stringify(seaPorts));
// }

function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}
var selectedValue = null;
function selectPort(value) {
    if (selectedValue !== value) {
        selectedValue = value;
        document.getElementsByClassName("dropdown-toggle")[0].innerText = selectedValue;
        toggleDropdown();
        aptrinsic('track', 'searchPort', {
            seaPortName: value,
            companyName: 'Marcura'
        });
    }
}


(function(w,d,s){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='//embeddable-widgets-euw1.insided.com/dileepnew-en.insided-conversational.js';f.parentNode.insertBefore(j,f);})(window,document,'script');

