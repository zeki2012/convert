// let usd = +prompt('Deyismek istediginiz meblegi yazin');
// let aze = usd * 1.7, euro * 1.86;
// let euro = +prompt('Deyismek istediginiz meblegi yazin');
// let  = +prompt('Deyismek istediginiz meblegi yazin');
// let usd = +prompt('Deyismek istediginiz meblegi yazin');
// let usd = +prompt('Deyismek istediginiz meblegi yazin');
// document.getElementById('zeki').innerHTML = usd + ' $ = '+ aze+ ' AZN'
let aze = +prompt('Deyismek istediginiz meblegi yazin');
let euro = aze / 1.85 ;
let usd = aze / 1.7 ;
let tl = aze / 0.06523 ;
let rub = aze / 0.01861 ;
document.getElementById('zeki').innerHTML = aze + ' ₼ = ' + euro.toFixed() + ' € ' ;
document.getElementById('zek').innerHTML = aze + ' ₼ = ' + usd.toFixed() + ' $  ' ;
document.getElementById('ze').innerHTML =  aze + ' ₼ = ' + tl.toFixed() +  ' ₺' ;
document.getElementById('z').innerHTML = aze + ' ₼ = ' + rub.toFixed() + ' ₽ ' ;