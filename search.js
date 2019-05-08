
var cambios={
    trabajosRealizados:{
        negocio:"Proyectos realizados",
        servicio:"Experiencia en Servicios",
        electricista:"Oficios Realizados",
        emprendimiento:"Paginas Realizadas"
    },
    title:{
        negocio:"La pagina web de tu negocio",
        servicio:"Suma contrataciones con una pagina web",
        electricista:"Lo mejor en paginas web para oficios",
        emprendimiento:"Paginas web para emprender"
    },
    ej:{
        negocio:"web para empresas",
        servicio:"para servicios online",
        electricista:"que potenciaran tu servicio",
        emprendimiento:"disponibles para emprendedores"
    },
    whatsImg:{
        negocio:"",
        servicio:"",
        electricista:"",
        emprendimiento:""
    },
    socialImg:{
        negocio:"",
        servicio:"",
        electricista:"",
        emprendimiento:""
    },
    titleMaps:{
        negocio:"Posiciona tu local en Google Maps",
        servicio:"Tu servicio en los mapas",
        electricista:"Gana clientes con Google",
        emprendimiento:"Tus clientes te encuentran"
    },
    pMaps:{
        negocio:"para subir contenido y concretar ventas",
        servicio:"para actualizar tus ofertas",
        electricista:"para responder preguntas de tus clientes",
        emprendimiento:"que te hace la vida mas facil."
    },
    titleSistem:{
        negocio:"Tener el control nunca fue tan facil",
        servicio:"Actualiza tu contenido gratis",
        electricista:"Podes hacer cambios sin pagar",
        emprendimiento:"Editas sin pagar"
    },
    title24:{
        negocio:"Tu negocio en la web en 24hs",
        servicio:"Lo mas rapido, online en 24hs",
        electricista:"¿Una web en 24hs?",
        emprendimiento:"Tu proyecto online en 24hs"
    },
    p24:{
        negocio:"negocio",
        servicio:"servicio",
        electricista:"oficio",
        emprendimiento:"emprendimiento"
    }
}
var s=window.location.search
var ids=["trabajosRealizados","title","ej","titleMaps","pMaps","titleSistem","title24","p24"]
var category=["emprendimiento","negocio","servicio","electricista"]
if(s=="?formSubmition=1"){

    $("#formAnswer").prepend("<div class='row text-center '><div class='col-12'><h1>Gracias!</h1><p>Te contactamos a la brevedad</p></div></div>")
    
}else if(s!="?" && category.indexOf(s.slice(3))!=-1){
    console.log("entro:"+s)
    ids.map(function(id){
        $("#"+id).text(cambios[id][s.slice(3)])
    })
}