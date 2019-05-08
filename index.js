$('.carousel').carousel({
  interval: 7000
})
var array=[{id:"#ce",url:"#pepe"},
{id:"#nfc",url:"https://www.nfcabogados.com/"},
{id:"#ulau",url:"https://www.ulauindumentaria.com/"},
{id:"#mb",url:"https://mariabonita.pazencorrientes.com/"},
{id:"#bfe",url:"https://www.felizemprendiendo.com"},
{id:"#trabajosRealizados",url:"https://demos.desarrollospyme.com/pw-trabajos.html"},
{id:"#nos-l",url:"#nos"},
{id:"#dise",url:"https://demos.desarrollospyme.com/pw-trabajos.html?d=2"},
{id:"#face",url:"#"},
{id:"#insta",url:"#"},
,{id:"#pwi",url:"https://www.desarrollospyme.com/paginas-web#Paginas-institucionales"},
{id:"#pw24",url:"https://www.desarrollospyme.com/paginas-web#Paginas-24hs"},
{id:"#gM",url:"https://www.desarrollospyme.com/paginas-web#GoogleMaps"},
{id:"#gM2",url:"https://www.desarrollospyme.com/paginas-web#GoogleMaps"},
{id:"#price",url:"https://www.desarrollospyme.com/paginas-web#Precios"}]

array.forEach(element => {
    
    $(element.id).on("click",function(e){
        e.stopPropagation()
        window.location=element.url
    }) 
});
$("#coti").on("click",function(e){
    e.stopPropagation()
    $("#coti").css("display","none")
    $("#cotizar-form").css("display","block")
})