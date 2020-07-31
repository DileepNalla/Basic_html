
/*<!-- Aptrinsic Tag-->*/
 /*PX Tag for JavaScript*/ /*Disable this if we are using the segment event capture, else events will be duplicated*/
 /*----------------------------------------------------------------------------------------------------------------*/
  // Global function to initialize Gainsight PX
  
function initializeGainsightPX() {
    if (this.isGainsightPXInitialized) return;
    
    // Gainsight PX Tag
    (function (n, t, a, e, x) {   
        let i = "aptrinsic"; n[i] = n[i] || function () {
            (n[i].q = n[i].q || []).push(arguments)
        }, n[i].p = e, n[i].c = x;
        
        let r = t.createElement("script");
        r.async = !0;
        r.src = a + "?a=" + e;        
        
        let c = t.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(r, c);
    })(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-YK6YGOF9CBVL-2",{ "iframeModeEnabled": false });
    // End Gainsight PX Tag    
    
    this.isGainsightPXInitialized = true;
}

initializeGainsightPX();
/*Script for Login Validation */

var configone={ filterUrls: ["*/About.HTML"], filterType: "mask"};
(function(n,t,a,e,x){
  var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
  n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-YK6YGOF9CBVL-2",configone);

 var configtwo={ fullDomainCookie: true};
 
(function(n,t,a,e,x){
  var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
  n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-YK6YGOF9CBVL-2",configtwo);

function callglobal()  //https://share.vidyard.com/watch/9DHjPPiqZQc7czUnjorcxA?
{
    aptrinsic('set', 'globalContext', {"TrailUser":true,"LoanAmount" :19000 });
}


function allowlogin(usermail){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    const myaccount = {
        a1 : "Company-1",
        a2 : "Company-2",
        a3 : "Company-3",
        a4: "Company-4"

    }
    var c;
    
    if(a!= "")
    {
        if(a=="dileepnalla29@gmail.com"||a=="y09me034@gmail.com" ||a=="dnalla@gainsight.com")
      {
         alert("valid User");
         b = a.substr(8, 5);
         alert("Logged in user id :" + b);
         var id = b;
        // var hash = CryptoJS.HmacSHA256(id, "9rmLVS939teSt3cILUccAPiqBBxSsQNmREc8CwpAj");
       
            /*<!-- Aptrinsic Tag-->*/           
           aptrinsic('identify',
                    {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                       // "userHash": hash.toString()// optional transient for HMAC identification
                    });
                    
                     window.location = "https://dileepnalla.github.io/Basic_html/Index.HTML";
           
      }
    else
        alert("Invalid User,enter \"dileepnalla29@gmail.com\"");
    }
    else
    alert("enter \"dileepnalla29@gmail.com\"");

    
      return b;
}


// Section - 1: Defining the purchse Process


var Productname ="Jeans";
var Productsize ="Medium";
var Productprice ="1800";
var transactionStatus ="Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', {detail: { itemName: this.Productname,itemSize:this.Productsize }})
let transactionsuccess  = new CustomEvent('transactionsuccess',{detail:{Amountdeducted:this.Productprice,Paymentstatus: this.transactionStatus }})

//This will create a button on page Load
document.addEventListener('DOMContentLoaded',function(){
   let m = document.getElementById('paymentbutton');
    //let m = document.querySelector('main');
    addButton(m);
    m.addEventListener('click',function(ev){

        addPaymentStatus(m);
    })
    
});

function addButton(parent){
let b = document.createElement('button');
b.setAttribute("id","Buynow");
b.setAttribute("class","btn btn-primary");
b.textContent="Pay Now";
parent.appendChild(b);
return b;
}

function addPaymentStatus(parent)
{
    let p = document.createElement('p');
    p.textContent="Donot Refresh..."+"  Transaction is in Progress...";
    p.setAttribute("id","tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated',purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept,3000);
    
    
}

function purchasedone(ev){
 
    console.log(ev.type, ev.detail);  
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', {itemName: ev.detail.itemName,itemSize:ev.detail.itemSize});   
}

function printreciept(){
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess',transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent="Transaction Success";
    
}


function transactiondone(ev1){

console.log(ev1.type, ev1.detail);
// Write your PX code here to track the custom events
aptrinsic('track', 'transactionsuccess', {Amountdeducted:ev1.detail.Amountdeducted,Paymentstatus:ev1.detail.Paymentstatus});       
}



// Clearing cookies on the page load
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name;
    }
}