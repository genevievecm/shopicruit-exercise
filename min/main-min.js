var request=new XMLHttpRequest;request.open("GET","http://shopicruit.myshopify.com/products.json",!0),request.onload=function(){function e(e,t){if(e==a){var r=parseFloat(p[i].price);t.push(r)}}function t(e){for(var t=0;t<e.length;t++)s+=e[t];return s}var r=[],o=[],s=0;if(request.status>=200&&request.status<400)var n=JSON.parse(request.responseText);for(var u in n.products){var a=n.products[u].product_type,p=n.products[u].variants;for(var i in p)e("Lamp",r),e("Wallet",o)}var c=t(r),l=t(o),d=c+l,v=.13*d+d;document.getElementById("wallet-price").innerHTML=l,console.log(d.toFixed(2)),console.log(v.toFixed(2))},request.send();