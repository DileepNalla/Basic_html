
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
  analytics.load("wJUeAnxMoknMyjeXA3ovPftbff2X7eBy");
  analytics.page();
  }}();





/*<!-- Aptrinsic Tag-->*/
/*PX Tag for JavaScript*/ /*Disable this if we are using the segment event capture, else events will be duplicated*/
/*----------------------------------------------------------------------------------------------------------------*/
// Global function to initialize Gainsight PX
var configtwo = { fullDomainCookie: true };
var configone = { filterUrls: ["*/About.HTML"], filterType: "mask" };
// (function (n, t, a, e) {
//     var i = "aptrinsic"; n[i] = n[i] || function () {
//         (n[i].q = n[i].q || []).push(arguments)
//     }, n[i].p = e;
//     var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
//     var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
// })(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-6WAJA3OATHHI-2", configone, configtwo)

//AP-6WAJA3OATHHI-2, AP-DRTELDXGAMXI-2 Replace this later on after testing by Zendesk

// Full Story Integration

window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'W6P4G';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');


/*Pendo.io*/
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('e198fa5a-4a04-4d7e-77cf-11a684ab0378');

//alert("pendo");



/*Script for Login Validation */

// var configone={ filterUrls: ["*/About.HTML"], filterType: "mask"};
// (function(n,t,a,e,x){
//   var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
//   n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2",configone);

//  var configtwo={ fullDomainCookie: true};

// (function(n,t,a,e,x){
//   var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
//   n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2",configtwo);

function callglobal()  //https://share.vidyard.com/watch/9DHjPPiqZQc7czUnjorcxA?
{
    aptrinsic('set', 'globalContext', { "TrailUser": true, "LoanAmount": 19000 });
}

function loadContactPage() {
    aptrinsic('set', 'globalContext', { "page": "Contactpage" });
}
function loadAboutusPage() {
    aptrinsic('set', 'globalContext', { "page": "AboutusPage" });
}

function showengagement(){
    aptrinsic('track', 'ID_Request', {"ID_required" : true }); 
}



function allowlogin(usermail) {
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    const myaccount = {
        a1: "Pendo_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
    var c;

    if (a != "") {
        if (a == "dileepnalla29@gmail.com" || a == "dileepnalla6@gmail.com" || a == "dnalla@gainsight.com" || a == "demouser@gmail.com") {
            alert("valid User");
            b = a.substr(8, 5);
            var id = b;
                        // var hash = CryptoJS.HmacSHA256(id, "9rmLVS939teSt3cILUccAPiqBBxSsQNmREc8CwpAj");

//Segment Identify
analytics.identify(id+"segment", {
    name: "Segment User",
    email: "dileepnalla6+"+"segm"+"@gmail.com",
    plan: "premium",
    
  });

            /*<!-- Aptrinsic Tag-->*/
            aptrinsic('identify',
                {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                {
                    //Account Fields
                    "id": myaccount.a1, //Required
                    "name": myaccount.a1,
                     // flat custom attributes
                });

           
            // Call this whenever information about your visitors becomes available
            // Please use Strings, Numbers, or Bools for value types.
            pendo.initialize({
                visitor: {
                    id: id ,  // Required if user is logged in
                     email: a       // Recommended if using Pendo Feedback, or NPS Email
                    // full_name:    // Recommended if using Pendo Feedback
                    // role:         // Optional

                    // You can add any additional visitor level key-values here,
                    // as long as it's not one of the above reserved names.
                },

                account: {
                    id:    myaccount.a1 // Highly recommended
                    // name:         // Optional
                    // is_paying:    // Recommended if using Pendo Feedback
                    // monthly_value:// Recommended if using Pendo Feedback
                    // planLevel:    // Optional
                    // planPrice:    // Optional
                    // creationDate: // Optional

                    // You can add any additional account level key-values here,
                    // as long as it's not one of the above reserved names.
                }
            });


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

        }
        else
            alert("Invalid User,enter \"demouser@gmail.com\"");
    }
    else
        alert("enter \"demouser@gmail.com\"");


    return b;
}

var counter = 0;

// Section - 1: Defining the purchse Process


var Productname = "Jeans";
var Productsize = "Medium";
var Productprice = "1800";
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', { detail: { itemName: this.Productname, itemSize: this.Productsize } })
let transactionsuccess = new CustomEvent('transactionsuccess', { detail: { Amountdeducted: this.Productprice, Paymentstatus: this.transactionStatus } })

//This will create a button on page Load
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
    aptrinsic('track', 'purchaseinitiated', { itemName: ev.detail.itemName, itemSize: ev.detail.itemSize });
}

function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "Transaction Success";

}


function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', { Amountdeducted: ev1.detail.Amountdeducted, Paymentstatus: ev1.detail.Paymentstatus });
}



// Clearing cookies on the page load
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

function showKCB1() {
    aptrinsic('bot', 'start', { id: "3d8b06d9-06ea-4518-8ef2-78564a5a173e" }); // We can also specific ID

}
function showKCB2() {
    aptrinsic('bot', 'start', { id: "9ba7fb81-e8d1-4ec2-9b7c-36bf643e9981" }); // We can also specific ID

}


function captureonlyforsession() {
    var checkcookie = document.cookie.match('sid=([^;]*)');
    var getexistingcookieid = checkcookie && checkcookie[1];

    if (counter == 0) {
        for (counter = 0; counter < 1; counter++) {
            aptrinsic('track', 'Click captutre only for session', { sessionid: getexistingcookieid });
        }
        return counter;
    }

    else {
        console.log("Event already captured in this session, clear the session and give a try!")
    }


}

function addSalary(){
    aptrinsic('track', 'Add Salary');
}

