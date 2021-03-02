

/*<!-- Aptrinsic Tag-->*/
/*PX Tag for JavaScript*/ /*Disable this if we are using the segment event capture, else events will be duplicated*/
/*----------------------------------------------------------------------------------------------------------------*/
// Global function to initialize Gainsight PX
var configtwo = { fullDomainCookie: true };
var configone = { filterUrls: ["*/About.HTML"], filterType: "mask" };
 (function (n, t, a, e) {
     var i = "aptrinsic"; n[i] = n[i] || function () {
         (n[i].q = n[i].q || []).push(arguments)
     }, n[i].p = e;
     var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
     var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
 })(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-6WAJA3OATHHI-2", configone, configtwo)

 //passing user and account objects:
aptrinsic("identify",
{
//User Fields
  "id": "lla6@",
   // Required for logged in app users
  "email": "userEmail@address.com",
  "firstName": "John",
  "lastName": "Smith",
  "signUpDate": 1522697426479, //unix time in ms
  "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
  "price" : 95.5,
  "userHash": "" // optional transient for HMAC identification
},
{
//Account Fields
  "id":"IBM", //Required
  "name":"International Business Machine",
  "Program": "Platinum" // flat custom attributes
});


aptrinsic('set', 'globalContext', { "app": widget });
