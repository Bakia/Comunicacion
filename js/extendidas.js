/*		INICIO VARIABLES GLOBALES		*/

arregloBotones = [1];
arregloEscenario1 = [1];
arregloCartelera = [1];
arregloReflexiones = [1];
arregloInfoHalley = [1];
arregloLogicaMensaje = [1];


arregloProductos = [];
arregloProductosOrganizado = [];

var arreglo3info = [];
var arregloInfo = [];
var arregloTablero = [];


var contadorProductosDesOrganizados = 0;
var contadorProductosOrganizados = 0;
var contenidoTextArea1 = "";
var seccionT = 1;

var contadorAsuntosCorreo = 0;
var contSopaLetras = 0;

var slides = "";
var mensaje = "";
var direccion = "";

var currentAudio="";

var todas_llenas = 0;
var cont_cerrar_globo = 0;

var cont_text_art_compu = 0;

/*		FIN VARIABLES GLOBALES			*/






/*		INICIO FUNCIONES MODULO		*/


jQuery.fn.extend({
	
	actividadCorreo: function(){
		
		var idDiv = $(this).attr("id");
		
		$("#"+idDiv+" .btnEnviarCorreo").click(function(e){
			var deQuien = $("#"+idDiv+" #txtDe").val();
			var paraQuien = $("#"+idDiv+" #txtPara").val();
			
			var arroba = /.\@./;
			var punto = /.\../;
			//arroba.test(txt_correo)
			if(arroba.test(deQuien) == false || punto.test(deQuien) == false){
				
				alert("Digite su correo");
				
			}else{
				if(arroba.test(paraQuien) == false || punto.test(paraQuien) == false){
					alert("Digite el destinatario");
				}else{
					alert("De Quien: "+deQuien);
					alert("Para Quien: "+paraQuien);
					
					var asunto = "He finalizado el curso de Comunicación Estructurada.";
			   
				   $("#envioCorreoComputador").find(".txtMensajeCorreo").each(function(index, element) {
						mensaje = mensaje +"  |  "+ $(element).val();
				   }); 
				   
		
				   alert("Asunto: "+asunto);
				   alert("Mensaje: "+mensaje);
					
					$("body").elearningHTML('showSeccion',(currentIndex + 1));
				}				
			}
			
		});

}});

/************************/

var porCual=0;
jQuery.fn.extend({
	clicshadowbox: function (mayor) {
		
		var yo= $(this).attr("id");
		
		$(this).click(function(e) {
			$(this).parent().find("#conteinfoshadowbox").children().eq(porCual).fadeOut("fast");
			if(yo=="izquierdashadowbox"){
				porCual--;
			}else{
				porCual++;
			}
			$(this).parent().find("#conteinfoshadowbox").children().eq(porCual).fadeIn("fast");
			
			var dataAudio = $(this).parent().find("#conteinfoshadowbox").children().eq(porCual).data("audio");
			
			if(dataAudio != "" && dataAudio != "undefined" && dataAudio != undefined){
				stopSong();
				audios(dataAudio);
			}
			
			if(porCual<mayor){
				$("#derechashadowbox").fadeIn("fast");
			}else{
				$("#derechashadowbox").fadeOut("fast");
				//$("#empezarActividadSopaLetras").fadeIn("fast");
			}
			
			if(porCual>0){
				$("#izquierdashadowbox").fadeIn("fast");
			}else{
				$("#izquierdashadowbox").fadeOut("fast");
			}
			
			
            
        });
		
	}
});


jQuery.fn.extend({
	cerrarinstrucciones: function (mayor) {
		$(this).click(function(e) {
			$(this).parent().fadeOut("slow");
			porCual=0;
			
			if($(this).parent().parent().hasClass("visto")){
				$("#derecha").fadeIn("fast");
				$("#izquierda").fadeIn("fast");
			}
			
        });
		
	}
});



var estado = 0;
function palabra(x1,y1,x2,y2,respuesta,cual,palabra)
{
	this.x1=x1;
	this.y1=y1;
	this.x2=x2;
	this.y2=y2;
	this.respuesta=respuesta;
	this.cual=cual;
	this.palabra=palabra;
	
	this.setrespuesta=setrespuesta
	function setrespuesta(respu)
	{
		this.respuesta=respu;
	}
	this.compararpuntos=compararpuntos;
	function compararpuntos(x, y)
	{
		if((this.x1==x &&this.y1==y)||(this.x2==x &&this.y2==y)){
			return true;
		}else{
			return false;	
		}
		
	}
	
}

var palabras = [
new palabra(0, 4, 0, 11, 0, 1,"piramide"),
new palabra(2, 2, 6, 2, 0, 2,"minto"),
new palabra(1, 10, 9, 10, 0, 3,"deductivo"),
new palabra(11, 0, 11, 8, 0, 4,"inductivo"),
new palabra(0, 0, 11, 11, 0, 5,"comunicacion"),
new palabra(2, 4, 9, 4, 0, 6,"mensajes"),
new palabra(0, 0, 7, 0, 0, 7,"claridad"),
new palabra(10, 3, 10, 9, 0, 8,"conciso"),
new palabra(0, 11, 9, 11, 0, 9,"estructura"),
new palabra(1, 0, 1, 5, 0, 10,"logica"),
];
var elementostemporales = [];

function validarpalabra(primera, segunda, primerax, primeray, segundax, segunday){
	////console.log(primera+"   "+segunda);
		if(primera==1 && segunda==1){
			$(palabras).each(function(index, element) {
				if(element.respuesta==0){
						if( (element.compararpuntos(primerax,primeray)) && (element.compararpuntos(segundax,segunday)) ){
							element.setrespuesta(1);
							$("#contelistadopalabra div").each(function(index, elemento) {
							   if($(elemento).data("cual")==element.cual){
									$(elemento).find(".contechecbox").removeClass("checkbox");
									$(elemento).find(".contechecbox").addClass("checkboxs");
								} 
							});
							dibujar(primerax,primeray,segundax,segunday);
							$(elementostemporales).each(function(index, element) {
								$(element).data("cambiar","0");
							});
							
							/*
							AQUI HICE UNA PALABRA
							*/
							contSopaLetras ++;
							if(contSopaLetras >= 10){
								//alert("Termino !!! :)");
								stopSong();
								audios("41_4_muy_bien");
								$("#sopaDeLetras .shadowFinalSopa").fadeIn(10);
							}
							
							//elementostemporales = [];
						}else{
							/*$("#conteletras .letra").each(function(index, element) {
								if($(element).data("cambiar")=="1"){
									$(element).fadeIn("slow");
									$(element).removeClass("fondoletraselect");
									$(element).addClass("fondoletra");	
								}
							});*/
							
						}
				}else{
					
				}
			});
		}else{
			$("#conteletras .letra").each(function(index, element) {
				if($(element).data("cambiar")==1){
					$(element).removeClass("fondoletraselect");
					$(element).addClass("fondoletra");
				}
			 });
		}
}

function dibujar(primerax,primeray,segundax,segunday){
					if(primerax==segundax){
					/*VERTICAL*/
					$("#conteletras .letra").each(function(index, element) {
						var yuno=primeray;
						var ydos=segunday;
						if(ydos<yuno){
							var tempo = yuno;
							yuno=ydos;
							ydos=tempo;
						}
                        if($(element).data("posx")==primerax){
							if($(element).data("posy")>yuno && $(element).data("posy")<ydos){
								$(element).removeClass("fondoletra");
								$(element).addClass("fondoletraselect");
								elementostemporales.push($(element));
							}

						}
                    });
					//
				}else if(primeray==segunday){
					/*HOTIZONTAL*/
					$("#conteletras .letra").each(function(index, element) {
						var xuno=primerax;
						var xdos=segundax;
						if(xdos<xuno){
							var tempo = xuno;
							xuno=xdos;
							xdos=tempo;
						}
                        if($(element).data("posy")==primeray){
							if($(element).data("posx")>xuno && $(element).data("posx")<xdos){
								$(element).removeClass("fondoletra");
								$(element).addClass("fondoletraselect");
								elementostemporales.push($(element));
							}
						}
                    });	
					//validarpalabra(databienuno, databiendos, primerax,primeray,segundax,segunday);			
				}else if(Math.abs(primerax-segundax)==Math.abs(primeray-segunday)){
					/*DIAGONAL*/
					var aumentox;
					var aumentoy;
					var menoruno;
					var menordos;
					if((primerax-segundax)==(primeray-segunday)){
						if(primerax>segundax){
							aumentox=segundax+1;
							aumentoy=segunday+1;
							menoruno=primerax;
							menordos=primeray;
						}else{
							aumentox=primerax+1;
							aumentoy=primeray+1;
							menoruno=segundax;
							menordos=segunday;
						}
						$("#conteletras .letra").each(function(index, element) {
							 if(aumentox==$(element).data("posx") && aumentoy==$(element).data("posy")){
								 if(aumentox<menoruno && aumentoy<menordos){
									$(element).removeClass("fondoletra");
									$(element).addClass("fondoletraselect");
										aumentox++;
										aumentoy++;
										elementostemporales.push($(element));
								 }
							 }
							 
						});	
					}else{
						if(primerax<segundax){
							aumentox=segundax-1;
							aumentoy=segunday+1;
							menoruno=primerax;
							menordos=primeray;
						}else{
							aumentox=primerax-1;
							aumentoy=primeray+1;
							menoruno=segundax;
							menordos=segunday;
						}
						$("#conteletras .letra").each(function(index, element) {
							 if(aumentox==$(element).data("posx") && aumentoy==$(element).data("posy")){
								 if(aumentox>menoruno && aumentoy<menordos){
									$(element).removeClass("fondoletra");
									$(element).addClass("fondoletraselect");
										aumentox--;
										aumentoy++;
										elementostemporales.push($(element));
								 }	
							 }	 
						});			
					}
					//validarpalabra(databienuno, databiendos, primerax,primeray,segundax,segunday);
				}else{
					$("#conteletras .letra").each(function(index, element) {
						if($(element).data("cambiar")==1){
							$(element).removeClass("fondoletraselect");
							$(element).addClass("fondoletra");
						}
                   	});	
				}
}


jQuery.fn.extend({
	actividadsopaletras: function () {
		var yo = $(this);
		var primerax;
		var primeray;
		var databienuno;
		var segundax;
		var segunday;
		var databiendos;
		
		$(yo).click(function (e) {
			var yoyo = $(this);
			yoyo.removeClass("fondoletra");
			yoyo.addClass("fondoletraselect");
			
			if(estado==0){
				primerax = yoyo.data("posx");
				primeray = yoyo.data("posy");
				databienuno=yoyo.data("bien");
				elementostemporales.push(yoyo);
				////console.log(elementostemporales);
				estado=1;
			}else{
				segundax = yoyo.data("posx");
				segunday = yoyo.data("posy");
				databiendos=yoyo.data("bien");
				elementostemporales.push(yoyo);
				validarpalabra(databienuno, databiendos, primerax,primeray,segundax,segunday);
				
				
				
				estado=0;
				primerax=99;
				primeray=99;
				segundax=99;
				segunday=99;
				
				//elementostemporales = [];
			}		
		});

	}
});


/*
*
*
*
*
*
*
*
*/






jQuery.fn.extend({
	actividadTablero: function(cualArray, hastaCuanto, mostraFlecha){
		var idDiv = $(this).attr("id");
		var contBotone4p = 0;
		var arregloUltimosBot = [0];
		
	$("#"+idDiv+" .botonTablero").click(function(e){
		/*var dataCual = $(this).data("cual");
		
		if($(this).hasClass("permite")){
			
			$("#"+idDiv+" .botonTablero").each(function(index, element) {
                $(element).find("img").eq(1).fadeOut(10);
				$(element).find("img").eq(0).fadeIn(10);
				$(element).css({left:48});
            });
			
			$(this).css({left:75});
			$(this).find("img").eq(0).fadeOut(10);
			$(this).find("img").eq(1).fadeIn(10);
			
			$("#"+idDiv+" .textoTablero").each(function(index, element) {
                $(element).fadeOut(10);
            });
			
			$("#"+idDiv+" .textoTablero").eq(dataCual).fadeIn("slow");
			
			
			
		}*/
		
	});
	
	$("#"+idDiv+" .siguienteNumero").click(function(e){
		$("#izquierda").hide();
		var dataCual = $(this).data("cual");
		
		switch(dataCual){
			case 1:
				stopSong();
				audios("22_1_describe_el");
			break;
		}
		
		//if($(this).hasClass("permite")){
			
			$("#"+idDiv+" .botonTablero").each(function(index, element) {
                $(element).find("img").eq(1).fadeOut(10);
				$(element).find("img").eq(0).fadeIn(10);
				$(element).css({left:48});
            });
			
			$("#"+idDiv+" .botonTablero").eq(dataCual).css({left:75});
			$("#"+idDiv+" .botonTablero").eq(dataCual).find("img").eq(0).fadeOut(10);
			$("#"+idDiv+" .botonTablero").eq(dataCual).find("img").eq(1).fadeIn(10);
			
			$("#"+idDiv+" .textoTablero").each(function(index, element) {
                $(element).fadeOut(10);
            });
			
			//$("#"+idDiv+" .textoTablero").eq(dataCual).fadeIn("slow");
			
			$("#"+idDiv).find(".volverEscenarioMenu").fadeOut(10);
			$("#"+idDiv).find(".mostrarPrimerParte1").fadeIn(10);
			
			
			
		//}
		
	});
	
	
	$("#"+idDiv).find(".ocultarPrimerParte").click(function(e){

		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		
		switch(cualMostrar){
			case "segundaParte":
				stopSong();
				audios("23_1_la_gran_ayuda");
				
			break;
			
			
			case "terceraParte":
				stopSong();
				audios("24_1_situacion");
				
			break;
			
			case "primerShadow":
				stopSong();
				audios("25_ahora_veamos");
				
			break;
			
			case "segundoShadow":
				stopSong();
				audios("26_2_cada_grupo_ideas");
				
			break;
			
		}
		
		
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
		cualFlechaTableroMostrar(cualMostrar);
		
		$("#"+idDiv).find(".boton4p").each(function(index, element) {
			
			$(element).find("img").eq(0).css("display","none");
			$(element).find("img").eq(1).css("display","block");
			$(element).find("img").eq(2).css("display","none");
			
		});
		
		$("#"+idDiv).find(".boton4p").eq(0).find("img").eq(0).fadeIn(10);
		$("#"+idDiv).find(".boton4p").eq(0).find("img").eq(1).fadeOut(10);
		$("#"+idDiv).find(".boton4p").eq(0).find("img").eq(2).fadeOut(10);
		
		$("#"+idDiv).find(".texto4p").each(function(index, element) {
			$(element).fadeOut(10);
		});
	});
	
	
	
	$("#"+idDiv).find(".ocultarTerceraParte").click(function(e){
		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
		cualFlechaTableroMostrar(cualMostrar);
		
		switch(cualMostrar){
			case "tercerShadow":
				stopSong();
				audios("28_ahora_veamos_aplicado");
			break;
			
			case "cuartoShadow":
				stopSong();
				audios("29_que_preguntas");
			
			break;
			
			case "sextoShadow":
				stopSong();
				audios("30_tus_respuestas_parecidas");
			
			break;
			
			
			case "cuartaParte3":
				stopSong();
				audios("31_1_las_preguntas_se");
				
			break;
			
			case "novenoShadow":
				stopSong();
				audios("32_muy_bien_veamos");
				
			break;
			
			
		}
	});
	
	$("#"+idDiv).find(".ocultarCuartaParte").click(function(e){
		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		
		switch(cualMostrar){
			
			case "segundaParte4":
				stopSong();
				audios("34_1_estructura_tu_mensaje");
			break;
			
			case "decimoShadow":
				stopSong();
				audios("35_antes_de_terminar");
			break;
			
			case "terceraParte4":
				stopSong();
				audios("36_1_mensaje_princi");
			break;
			
			
		
		}
		
		cualFlechaTableroMostrar(cualMostrar);
		
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
	});
	
	
	
	$("#"+idDiv).find(".avanzarRama1").click(function(e){

		var cualMostrar = $(this).data("mostrar");
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
		switch(cualMostrar){
			case "septimoShadow":
				stopSong();
				audios("31_3_ahora_que_viste_el");
			break;
		}
		
		cualFlechaTableroMostrar(cualMostrar);
		
		$(this).fadeOut("slow");
		
		$(".primerRama").fadeOut(10);
		$(".primerRamaA").fadeOut(10);
		$(".botonPrimerRama").fadeOut(10);
		$(".segundaRama").fadeOut(10);
		$(".botonSegundaRama").fadeOut(10);
		$(".tercerRama").fadeOut(10);
		
		$(".textArea3").fadeIn(10);
		$(".parte2").fadeIn(10);
		$(".avanzarRama2").fadeIn(10);
		
		
		
	});
	
	
	$("#"+idDiv).find(".avanzarRama2").click(function(e){
		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
		
		
	});
	
	$("#"+idDiv).find(".pasarRamasB").click(function(e){

		var cualMostrar = $(this).data("mostrar");
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
		switch(cualMostrar){
			case "octavoShadow":
				
				stopSong();
				audios("31_5_ahora_que_viste_el_ejemplo");
				
			break;
		}
		
		$(this).fadeOut("slow");
		
		$(".primerRamaB").fadeOut(10);
		$(".botonPrimerRamaB").fadeOut(10);
		$(".segundaRamaB").fadeOut(10);
		$(".botonSegundaRamaB").fadeOut(10);
		$(".terceraRamaB").fadeOut(10);
		
		$(".cuartaRamaB").fadeIn(10);
		$(".textArea4").fadeIn(10);
		$(".ocultarTerceraParte").fadeIn(10);
	});
	

	$("#"+idDiv).find(".mostrarTiva").click(function(e){
		
		$(this).find("img").eq(0).fadeOut(10);
		$(this).find("img").eq(1).fadeIn(10);
		
		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
		switch(cualMostrar){
			case "inductiva":
				stopSong();
				audios("31_2_inductivamente");
			break;
			
			case "deductiva":
				stopSong();
				audios("31_4_deductivamente_cuando_necesites");
			break;
		}
		
		cualFlechaTableroMostrar(cualMostrar);
		
		$("#"+idDiv).find(".chulo").eq($(this).data("cual")).fadeIn("slow");
		
		
	});
	
	
	
	
	$("#"+idDiv).find(".flechaDer").click(function(e){
		$(this).fadeOut();
		$("#"+idDiv).find(".flechaIzq").fadeIn("slow");
		$("#"+idDiv).find(".textoTb").eq(0).fadeOut("slow");
		$("#"+idDiv).find(".textoTb").eq(1).fadeIn("slow");
		//$("#"+idDiv).find(".ocultarPrimerParte").fadeIn("slow");
		
		stopSong();
		audios("23_2_aprenderse_modelo");
		
	});
	
	$("#"+idDiv).find(".flechaIzq").click(function(e){
		$(this).fadeOut();
		$("#"+idDiv).find(".flechaDer").fadeIn("slow");
		$("#"+idDiv).find(".textoTb").eq(1).fadeOut("slow");
		$("#"+idDiv).find(".textoTb").eq(0).fadeIn("slow");
	
	});
	
	
	$("#"+idDiv).find(".boton4p").click(function(e){
		
		var dataCual = $(this).data("cual");

		$(this).find("img").eq(0).fadeOut(10);
		$(this).find("img").eq(1).fadeOut(10);
		$(this).find("img").eq(2).fadeIn(10);
		
		contBotone4p ++;
		
		$("#"+idDiv).find(".boton4p").eq(dataCual + 1).find("img").eq(1).fadeOut(10);
		$("#"+idDiv).find(".boton4p").eq(dataCual + 1).find("img").eq(2).fadeOut(10);
		$("#"+idDiv).find(".boton4p").eq(dataCual + 1).find("img").eq(0).fadeIn(10);
		
		
		$("#"+idDiv).find(".texto4p").eq(dataCual).fadeIn("slow");
		
		if(contBotone4p == 3){
			$("#"+idDiv).find(".ocultarPrimerParte").fadeIn("slow");
		}
	
	});
	
	$("#"+idDiv).find(".pasarSiguiente").click(function(e){
		
		
		$(this).parent().fadeOut(10);
		var cualSigue = $(this).data("cualsigue");
		
		switch(cualSigue){
			case 2:
				stopSong();
				audios("26_1_provee_soporte");
			break;
			
			case 3:
				stopSong();
				audios("33_1_haz_tu");
			break;
		}
		
		cualFlechaTableroMostrar(cualSigue);
		
		$("#"+idDiv+" .botonTablero").each(function(index, element) {
           $(element).find("img").eq(1).fadeOut(10);
		   $(element).find("img").eq(0).fadeIn(10);
		   $(element).css({left:48});
        });
		
		$("#"+idDiv+" .botonTablero").eq(cualSigue).find("img").eq(0).fadeOut(10);
		$("#"+idDiv+" .botonTablero").eq(cualSigue).find("img").eq(1).fadeIn(10);
		$("#"+idDiv+" .botonTablero").eq(cualSigue).css({left:75});
		
		$("#"+idDiv+" .botonTablero").eq(cualSigue).addClass("permite");
		
		$("#"+idDiv+" .textoTablero").each(function(index, element) {
			$(element).fadeOut(10);
		});
		
		$("#"+idDiv+" .textoTablero").eq(cualSigue).fadeIn("slow");
		
	});
	
	
	$("#"+idDiv).find(".botonPrimerRama").click(function(e){
		$(this).fadeOut(10);
		$("#"+idDiv).find(".primerRamaA").fadeOut(10);
		
		$("#"+idDiv).find(".segundaRama").fadeIn("slow");
		$("#"+idDiv).find(".botonSegundaRama").fadeIn("slow");
		
		
	});
	
	
	$("#"+idDiv).find(".botonSegundaRama").click(function(e){
		$(this).fadeOut(10);
		
		$("#"+idDiv).find(".tercerRama").fadeIn("slow");
		$("#"+idDiv).find(".avanzarRama1").fadeIn("slow");
	
	});
	
	$("#"+idDiv).find(".botonPrimerRamaB").click(function(e){
		$(this).fadeOut(10);
		
		$("#"+idDiv).find(".segundaRamaB").fadeIn("slow");
		$("#"+idDiv).find(".botonSegundaRamaB").fadeIn("slow");
	
	});
	
	$("#"+idDiv).find(".botonSegundaRamaB").click(function(e){
		$(this).fadeOut(10);
		
		$("#"+idDiv).find(".terceraRamaB").fadeIn("slow");
		$("#"+idDiv).find(".pasarRamasB").fadeIn("slow");
	
	});
	
	$("#"+idDiv).find(".botonTerceraParte4").click(function(e){
		
		var dataTexto = $(this).data("texto");
		
		var dataAudio = $(this).data("audio");
		
		if(dataAudio!= "" && dataAudio != "undefined" && dataAudio != undefined){
			stopSong();
			audios(dataAudio);
		}
		
		$(this).find("img").eq(0).fadeOut(1);
		$(this).find("img").eq(1).fadeIn(1);
		
		$(".textoTerceraParte4").eq(dataTexto).fadeIn("slow");
		
		if(jQuery.inArray(dataTexto, arregloUltimosBot) == -1){
			arregloUltimosBot.push(dataTexto);
		}
		
		if(arregloUltimosBot.length == 6){
			$(".terminarActividadTablero").fadeIn("slow");
		}
		
	
	});
	
	


}});


var contadorTodos = 0;
var contadorBien = 0;
var posiciones = [];
var arrayDrags = [];
		
jQuery.fn.extend({
	actividadOrganigrama: function () {

		
		var idDiv = $(this).attr("id");
		
		
		
		$(".cajaDrag").each(function (index, element) {
			var posTempLeft = $(element).position().left;
			posiciones.push(posTempLeft);
		});
		
		
		$(".cajaDragMini").draggable({revert:true});
		
		/*$(".cajaDropMini").droppable({accept: ".cajaDragMini"});
		$(".cajaDropMini").bind('drop',function(event,ui) {
			ui.draggable.removeClass("cajaDrag");
		});
		*/
		
		
		$(".cajaDrag").draggable({revert:"invalid", cursor: "move"});
		$(".cajaDrop").droppable({
			accept: ".cajaDrag",
			activeClass: "ui-state-hover",
      		hoverClass: "ui-state-active"
		
		});
		$(".cajaDrop").bind('drop',function(event,ui) {
			
			//ui.draggable.css("cursor","auto");
			//ui.draggable.draggable({revert:false});
			ui.draggable.addClass("noMover");

			var dataCorrer = ui.draggable.data("correrleft");
			dataCorrer ++;
			
			if(ui.draggable.hasClass("noMoverOtros")){
			
			}else{
			
				for(var i = dataCorrer; i < 7; i++){
					
					var correrLeft = $(".cajaDrag").eq(i).position().left;
					correrLeft -= 155;
					if ($(".cajaDrag").eq(i).hasClass("noMover")) {
	
					}else{
						$(".cajaDrag").eq(i).css({left:correrLeft});
					}
					
				}
			
			}
			
			ui.draggable.addClass("noMoverOtros");
			
			var pos = $(this).position();
			var posX = pos.left - 4;
			var posY = pos.top - 4;
			
			ui.draggable.css({left:posX, top:posY});

			ui.draggable.find("img").eq(0).fadeOut(10);
			ui.draggable.find("img").eq(1).fadeIn(10);

			

			var dataDrag = ui.draggable.data("cajadrag");
			var dataDrop = $(this).data("cajadrop");
			
			if(dataDrag == dataDrop){
				contadorBien ++;
			}

			
			var dataPoner = ui.draggable.data("correrleft");
			
			if(ui.draggable.hasClass("puesto")){
				
			}else{
				ui.draggable.addClass("puesto");
				contadorTodos ++;
			}
			

			if(contadorTodos == 7){
				//$(".pregunta").show("explode",500);
				$(".pregunta").fadeIn("slow");
				stopSong();
				audios("19_2_crees_que_las_ideas");
			}
			
			ui.draggable.css("z-index","50");
			
			var elm_droppable = $(this);
			
			elm_droppable.droppable("disable");
				
			ui.draggable.bind("mouseup",function(){
				elm_droppable.droppable("enable");
			});
			
			//ui.draggable.effect("bounce",1000);

	});
	
	
	//$(".cajaDrag").effect("explode",500);
	

	$(".botonRespOrg").click(function(e) {
		$(this).parent().fadeOut("fast");
		//$(this).parent().hide("explode",500);
		
		stopSong();
		
		var dataResp = $(this).data("resp");
		
		if (dataResp == "si") {

			if(contadorBien == 7){
				$(".todasBien").fadeIn("slow");
				//$("#"+idDiv).removeClass("noMostrarFlechaDer");
				//$("#derecha").fadeIn("slow");
				$(".pasarOrganigrama").fadeIn("slow");
				contadorBien = 0;
				contadorTodos = 0;
				/*
				stopSong();
				audios("20_muy_bien_ahora_volvamos");*/

			}else{
				$(".todasMal").fadeIn("slow");
				
				stopSong();
				audios("17_1_revisa");
			}

		}else{
			reIniciarOrganigrama();
		}

	});

	$(".repetirAct").click(function (e) {
		$(this).parent().fadeOut("fast");

		$(".cajaDrag").each(function (index, element) {
			$(element).find("img").eq(1).fadeOut(10);
			$(element).find("img").eq(0).fadeIn(10);
		});

		reIniciarOrganigrama();
	});

}});


function reIniciarOrganigrama(){
	var contLeft = 0;
	contadorBien = 0;
	contadorTodos = 0;

	$(".cajaDrag").each(function (index, element){

		$(element).find("img").eq(1).fadeOut(10);
		$(element).find("img").eq(0).fadeIn(10);

		$(element).css({top:366,left:posiciones[contLeft]});
		$(element).css("cursor","pointer");
		//$(element).draggable({revert:true});
		$(element).removeClass("noMover");
		
		$(element).removeClass("noMoverOtros");
		$(element).removeClass("puesto");
		
		 
		contLeft ++;
	});
	
	$("#organigrama").find(".botonRespOrg").fadeOut(10);
	$("#organigrama").find(".cuadro_resp").fadeOut(10);
	
	$(".cajaDrop").each(function(index, element) {
        $(element).droppable("enable");
    });
}


jQuery.fn.extend({
	actividadPintar: function () {
		var idDiv = $(this).attr("id");
		var arrayPintar = [];
		
		var color = "azul";
		var contadorFinal = 0;
		$("#"+idDiv+" .botonCerrarMensaje").click(function (e) {
			$(this).fadeOut(10);
			$(".mensajeMal").fadeOut(10);
			$(".mensajeBien").fadeOut(10);
			
			$(".calificacion").find("img").each(function(index, element) {
                $(element).fadeOut("fast");
            });
			
			$(".cuadroColor").find("img").each(function(index, element) {
                $(element).fadeOut("fast");
            });
			
			$("#"+idDiv).find(".botonVerificar").fadeOut("fast");
			arrayPintar = [];
			
		});

		$("#"+idDiv+" .pincel").click(function(e){
			color = $(this).data("color");
			$(".cuadrado").css("cursor","pointer");

			$(".mensajeMal").fadeOut(10);
			$(".mensajeBien").fadeOut(10);
			$(".botonCerrarMensaje").fadeOut(10);
			
			$("#"+idDiv+" .pincel").each(function(index, element) {
				$(element).find("img").eq(1).fadeOut(10);
                $(element).find("img").eq(0).fadeIn(10);
            });
			
			$("#"+idDiv+" .calificacion").each(function(index, element) {
				$(element).find("img").eq(1).fadeOut(10);
                $(element).find("img").eq(0).fadeOut(10);
            });
			
			$(this).find("img").eq(0).fadeOut(10);
            $(this).find("img").eq(1).fadeIn(10);
			
		});

		$(".cuadrado").click( function (e) {

			var dataColor = $(this).data("cual");

			$(".cuadroColor").eq(dataColor).find("img").fadeOut(10);
			$(".cuadroColor").eq(dataColor).find("img").eq(color).fadeIn(10);

			var dataCorr = $(this).data("correcto");

			if (dataCorr == color) {
				$(this).removeClass("mal");
				$(this).addClass("bien");
			}else{
				$(this).removeClass("bien");
				$(this).addClass("mal");
			}
			
			
			var dataCual = $(this).data("cual");
			
			if(jQuery.inArray(dataCual,arrayPintar) != 1){
				arrayPintar.push(dataCual);
			}
			
			if(arrayPintar.length >= 7){
				$("#actividadPintar").find(".botonVerificar").fadeIn("slow");
				arrayPintar = [];
			}

		});

		$(".botonVerificar").click(function (e) {
			$(".calificacion").find("img").fadeOut(10);
			
			$(".cuadrado").each(function (index, element) {
				
				if ($(element).hasClass("bien")) {
					$(".calificacion").eq($(element).data("cual")).find("img").eq(0).fadeIn(10);
					contadorFinal ++;
				}else{
					$(".calificacion").eq($(element).data("cual")).find("img").eq(1).fadeIn(10);

				}

			});

			if (contadorFinal == 7) {
				$(".botonCerrarMensaje").fadeOut(10);
				$(".mensajeMal").fadeOut(10);
				$(".mensajeBien").fadeIn(10);

				//$(this).parent().removeClass("noMostrarFlechaDer");
				$("#derecha").fadeIn(10);
				
				stopSong()
				audios("17_2_muybien");

			}else{
				$(".mensajeBien").fadeOut(10);
				$(".mensajeMal").fadeIn(10);
				$(".botonCerrarMensaje").fadeIn(10);
				contadorFinal = 0;
				
				stopSong()
				audios("17_1_revisa");
			}

		});

	}
});

jQuery.fn.extend({
	actividadPregunta : function(){

		$(".botonResp").click(function(e){

			$(".botonResp").fadeOut(10);
			$(".preguntaActividad").fadeOut(10);

			var respuesta = $(this).data("respuesta");

			if(respuesta == "si"){

				$(".respuestaSi").fadeIn(10);
				//TweenLite.to($(".respuestaSi"),0.7,{css:{left}});
				
			}else{
				$(".respuestaNo").fadeIn(10);
			}

		});
	}
});

jQuery.fn.extend({
actividadMitos: function(){
	var idDiv = $(this).attr("id");
	
	$("#"+idDiv+" .botonPasar").click(function(e){
		var dataTexto = $(this).data("texto");
		
		if(dataTexto == 0){
			//$(".seccionT").css({left:610});
			$(".fondoBotonPasar").find("img").eq(1).fadeOut("fast");
			$(".fondoBotonPasar").find("img").eq(0).fadeIn("fast");
			TweenLite.to( $(".seccionT"),0.7, {css:{left:633,opacity:1}, ease:Circ.easeInOut});
			
			$("#"+idDiv+" .botonPasar").eq(1).fadeIn("slow");
			$(this).fadeOut("fast");
			$("#derecha").fadeOut("slow");
			
		}else if(dataTexto == 1){
			//$(".seccionT").css({left:0});
			$(".fondoBotonPasar").find("img").eq(0).fadeOut("fast");
			$(".fondoBotonPasar").find("img").eq(1).fadeIn("fast");
			TweenLite.to( $(".seccionT"),0.7, {css:{left:0,opacity:1}, ease:Circ.easeInOut});
			$("#derecha").fadeIn("slow");
			
			$("#"+idDiv+" .botonPasar").eq(0).fadeIn("slow");
			$(this).fadeOut("fast");
		}
		
	});

}});

jQuery.fn.extend({
actividadMandado: function(){
	var idDiv = "#"+$(this).attr("id");
	var contadorCrono = 4;
	var contadorCronoOrg = 4;
	var seccion = $(".seccion");
	
	$(idDiv + " .botonEmpezar").click(function(e){
		$(this).parent().fadeOut(10);
		
		$(idDiv+" .fondoMercado").fadeIn(10);
		$(idDiv+" .cronometro").fadeIn(10);
		
		$.timer(1000,function(e){
			
			if(contadorCrono <= 0){
				e.stop();
				$(idDiv+" .cronometro").fadeOut(10);
				$(idDiv+" .cajasTexto").fadeIn(10);
				
				stopSong();
				audios("04_anota_los");
				contadorCrono = 5;
			}
			
			$(idDiv+" .cronometro").find(".span_crono").text(contadorCrono);
			
			contadorCrono --;
			
			
		})
		
		
		$(".cajasTexto .resultadoMercado").each(function(index, element) {
        	$(element).css("display","none");    
        });
		
		$(".cajasTexto .resultadoMercadoEscritas").css("display","none");
		
		
	 });
	 
	 $(".botonFinalizar").click(function(e){
		
		$(idDiv+" .cajasTexto").fadeOut(10);
		$(idDiv+" .todoOrganizado").fadeIn(10);
		
		stopSong();
		audios("05_ahora_prueba");
		

	 });
	 
	 $(".cerrarResultadoMercado").click(function(e){
		$(idDiv+" .cajasTexto").fadeOut(10);
		$(idDiv+" .todoOrganizado").fadeIn(10);
	 });
	 
	 $(".botonEmpezarOrganizado").click(function(e){
		
		//$(idDiv+" .mensajeOrganizado").fadeOut(10);
		$(this).parent().fadeOut(10);
		
		$(idDiv+" .fondoMercadoOrganizado").fadeIn(10);
		$(idDiv+" .cronometroOrganizado").fadeIn(10);
		
		$(idDiv+" .resultadoMercadoEscritas").fadeOut(10);
		
		$.timer(1000,function(e){
			
			if(contadorCronoOrg <= 0){
				e.stop();
				$(idDiv+" .cronometroOrganizado").fadeOut(10);
				$(idDiv+" .cajasTextoOrganizado").fadeIn(10);
				
				stopSong();
				audios("06_y_ahora");
				contadorCronoOrg = 5;
			}
			
			$(idDiv+" .cronometroOrganizado").find(".span_crono").text(contadorCronoOrg);
			
			contadorCronoOrg --;
			
			
		});
		
		
		$(".cajasTextoOrganizado .resultadoMercadoOrganizado").each(function(index, element) {
        	$(element).css("display","none");    
        });
		
		$(".cajasTextoOrganizado .ocultoOrganizado").each(function(index, element) {
        	$(element).css("display","block");    
        });
		
		$(".cajasTextoOrganizado .resultadoMercadoOrganizadoF").css("display","none");
		$(".cajasTextoOrganizado .cerrarResultadoMercadoOrganizado").css("display","none");
		
		
	 });
	 
	 $(".cerrarResultadoMercadoOrganizado").click(function(e){
		 $(idDiv+" .cajasTextoOrganizado").fadeOut(10);
		 $(idDiv+" .volverMenu").fadeIn(10);
		 
		 var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
		 tl.append(TweenMax.staggerFrom($(idDiv+" .volverMenu").find(".textoLargo"),35,{css:{height:0, opacity:1}, ease:Back.easeOut}, 25));
		
		 
	 });
	 
	 $(".botonFinalizarOrganizado").click(function(e){
		 /*var resultadoFinal = 0;
		 for(var i = 0; i < 15; i++){
			if($(".cajaDeTextoOrg").eq(i).val() != ""){
				arregloProductosOrganizado.push($(".cajaDeTextoOrg").eq(i).val());
			}
		}

		if(arregloProductosOrganizado.length > arregloProductos.length){
			resultadoFinal = (arregloProductosOrganizado.length - arregloProductos.length)/2;
			
		}
		
		$(idDiv+" .cajasTextoOrganizado .ocultoOrganizado").fadeOut(10);
		$(this).fadeOut(10);
		$(idDiv+" .cajasTextoOrganizado .cajaDeTextoOrg").fadeOut(10);
		
		$(".resultadoMercadoOrganizadoF").fadeIn("fast");
		
		$(".resultadoMercadoOrganizado").each(function(index, element) {
           	$(element).fadeOut(10); 
        });
		
		if(resultadoFinal != 0){
			if(resultadoFinal >= 5){
				$(".resultadoMercadoOrganizado").eq(5).fadeIn("slow");
			}else{
				$(".resultadoMercadoOrganizado").eq(resultadoFinal - 1).fadeIn("slow");
			}
		}

		$(".cerrarResultadoMercadoOrganizado").fadeIn(10);*/
		
	   $(idDiv+" .cajasTextoOrganizado").fadeOut(10);
	   $(idDiv+" .volverMenu").fadeIn(10);
	   
	   var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
	   tl.append(TweenMax.staggerFrom($(idDiv+" .volverMenu").find(".textoLargo"),35,{css:{height:0, opacity:1}, ease:Back.easeOut}, 25));
	   
	   stopSong();
	   audios("07_1_lo_mas_probable");
	  
		 
	 });
	
	 
}});


jQuery.fn.extend({

actividadEscenario: function(complemento){
	
	var idDiv = $(this).attr("id");
	var seccion = $(".seccion");
	var pararAniCirc = false;
	
	$(".cerrarPostMandado").click(function(e){
		checkVistas(0);
		mostrarGlobo(1);
	});
	
	$("#"+idDiv+" .cerrarMensajeSenor").click(function(e){
		//$("#"+idDiv+" .textoBotonCirculo").eq(0).fadeIn("slow");
		$("#"+idDiv+" .textoBotonCirculo").eq(0).addClass("permiso");
		$("#"+idDiv+" .textoBotonCirculo").eq(0).find("img").eq(0).fadeIn(10);
		$("#"+idDiv+" .textoBotonCirculo").eq(0).find("img").eq(1).fadeOut(1);
		$("#"+idDiv+" .textoBotonCirculo").eq(0).css("cursor","pointer");
		
		
		$(this).parent().fadeOut(10);
		//$("#"+idDiv+" .senor").fadeOut(10);
	
		$("#"+idDiv+" .botonCirculo").each(function(index, element) {
            $(element).fadeIn(10);
        });
		
		var conTempImg = 0;
		$.timer(500,function(e){
			if(pararAniCirc){
				e.stop();
			}else{
			if(conTempImg >= 2){
				conTempImg = 0;
			}	
				$("#"+idDiv+" .botonCirculo").eq(0).find("img").eq(conTempImg - 1).fadeOut("fast");
				$("#"+idDiv+" .botonCirculo").eq(0).find("img").eq(conTempImg).fadeIn("slow");
				conTempImg ++;
			}
		})
		
		if(complemento == 1){
			$("#"+idDiv+" .empezar").fadeIn(10);
			$("#"+idDiv+" .botonEmpezar").fadeIn(10);
		}
	});
	
	$("#"+idDiv+" .botonCirculo").mousedown(function(e){
		

		$("#"+idDiv+" .textoBotonCirculo").each(function(index, element) {
            $(element).fadeOut(10);
        });
		
		$("#"+idDiv+" .botonCirculo").each(function(index, element) {
            if($(element).data("permiso") == 1){
				$(element).addClass("pararTimer");
			}
        });
		
		if($(this).data("permiso") == 1){
			$("#"+idDiv+" .textoBotonCirculo").eq($(this).data("cual")).fadeIn(10);
			$("#"+idDiv+" .textoBotonCirculo").eq($(this).data("cual")).find("img").eq(0).fadeIn(10);
			$("#"+idDiv+" .textoBotonCirculo").eq($(this).data("cual")).find("img").eq(1).fadeOut(1);
			$("#"+idDiv+" .textoBotonCirculo").eq($(this).data("cual")).css("cursor","pointer");
			$("#"+idDiv+" .textoBotonCirculo").eq($(this).data("cual")).addClass("permiso");
			
			$(this).find("img").eq(0).fadeOut(10);
			$(this).find("img").eq(1).fadeIn(10);
			
			pararAniCirc = true;
			$(this).addClass("pararTimer");
			
		}else{
			$("#"+idDiv+" .textoBotonCirculo").eq($(this).data("cual")).fadeIn(10);
		}
		
	});
	
	$("#"+idDiv+" .textoBotonCirculo").click(function(e){
		
		var slideActividad = $(this).data("ira");
		var dataCualCirc = $(this).data("cualcirculo");

		if($(this).is(".permiso")){
			
			//seccion.eq(6).css({left:-950, opacity:0});
			
			TweenLite.to(seccion.eq(6), 1, {css:{left:-950, opacity:0}});
			TweenLite.to(seccion.eq(slideActividad), 1, {css:{left:0, opacity:1}});
			
			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
			tl.append(TweenMax.staggerFrom(seccion.eq(slideActividad).find(".textoLargo"),35,{css:{height:0, opacity:1}, ease:Back.easeOut}, 25));
			
			$.timer(13000, function(e){
			seccion.eq(slideActividad).find(".cerrarMensajeSenor").fadeIn("fast");
			e.stop();
			})
			
			if(seccion.eq(slideActividad).is(".noMostrarFlechas")){
				$("#derecha").fadeOut(10);
				$("#izquierda").fadeOut(10);
			}else{
				if(seccion.eq(slideActividad).is(".noMostrarFlechaDer")){
					$("#derecha").fadeOut(10);
				}else{
					$("#derecha").fadeIn(10);
				}
				
				if(seccion.eq(slideActividad).is(".noMostrarFlechaIzq")){
					$("#izquierda").fadeOut(10);
				}else{
					$("#izquierda").fadeIn(10);
				}
			}

			//seccion.eq(slideActividad).css({left:0, opacity:1});
			currentIndex = slideActividad;

			if (slideActividad == 14) {
				$('#derecha').fadeIn(1);
			}
			
			$("#"+idDiv+" .botonCirculo").eq(dataCualCirc).addClass("pararTimer");
			pararAniCirc = true;
		}else{
			//alert(slideActividad);
		}
		$(this).fadeOut(10);
		
	});

}

})

jQuery.fn.extend({
	botonHover: function(cualArreglo, hastaCuanto, mostrarFlecha){
	var idDiv = $(this).attr("id");
	
	$("#"+idDiv+" .botonT").hover(function(e){
		    
		   $("#"+idDiv+" .botonT").each(function(index, element) {
			  $(element).find("img").eq(1).fadeOut(10);
		   	  $(element).find("img").eq(0).fadeIn(10);
		   });	
			
		   $(this).find("img").eq(1).fadeIn(10);
		   $(this).find("img").eq(0).fadeOut(10);
		   
		   $("#"+idDiv+" .textoB").each(function(index, element) {
			  $(element).fadeOut(10);
			  $(element).css("overflow","hidden");
		   });
		   
		   $("#"+idDiv + " .textoB").eq($(this).data("texto")).css("overflow","visible");
		   $("#"+idDiv + " .textoB").eq($(this).data("texto")).fadeIn("slow");
		   
		   if(mostrarFlecha){
			  
			   if(jQuery.inArray($(this).data("texto"),cualArreglo) == -1){
				  cualArreglo.push($(this).data("texto"));
				   ////console.log(cualArregloUno);
			   }
			   if(cualArreglo.length == hastaCuanto){
				   $("#"+idDiv).removeClass("noMostrarFlechaDer");
				   $("#derecha").fadeIn(10);
			   }
		   }
			 
	},function(e){
		$(this).find("img").eq(0).fadeIn(10);
		$(this).find("img").eq(1).fadeOut(10);
		   
		 $("#"+idDiv+" .textoB").each(function(index, element) {
			$(element).fadeOut(10);
			$(element).css("overflow","hidden");
		 });
	});
			
}});

jQuery.fn.extend({
	botonTexto: function(cualArreglo, cualArregloUno ,hastaCuanto, mostrarFlecha, dejarNegBoton,secuencia){
		var idDiv = $(this).attr("id");
		var slides = $(".seccion");
		
		
		$("#"+idDiv+" .boton").click(function(e){
			
			if(idDiv == "carteleraAnuncios"){
				$("#carteleraAnuncios").find(".globo_cartelera").hide();
			}
			
			
			if(secuencia){
				var dataTexto = $(this).data("texto");
				
				$(this).addClass("vista");
				$("#"+idDiv+" .boton").eq(dataTexto + 1).addClass("sigNum");
				
				$("#"+idDiv+" .boton").each(function(index, element) {
					if($(element).hasClass("vista") || $(element).hasClass("sigNum")){
						$(element).fadeIn(1);
					}else{
						$(element).fadeOut(1);
					}
					
				});
				
				if(dataTexto >= 4){
					$(".botonSig").fadeIn("slow");
				}
			}else{
			
			}
			
			if(dejarNegBoton){
				
			}else{
				$(".boton").each(function(index, element) {
					$(element).find("img").eq(1).fadeOut(1);
					$(element).find("img").eq(0).fadeIn(2);
					
				});
			}
			
			 $(this).find("img").eq(1).fadeIn(10);
			 $(this).find("img").eq(0).fadeOut(10);
			 
			 $("#"+idDiv+" .texto").each(function(index, element) {
                $(element).fadeOut(10);
				$(element).css("overflow","hidden");
             });
			 
			 $("#"+idDiv + " .texto").eq($(this).data("texto")).css("overflow","visible");
			 $("#"+idDiv + " .texto").eq($(this).data("texto")).fadeIn("slow");
			 
			 //var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
			 //tl.append(TweenMax.staggerFrom($("#"+idDiv + " .texto").eq($(this).data("texto")),35,{css:{height:0}, ease:Back.easeOut}, 25));
			 
			 
			 var dataAudio = $(this).data("audio");
		
			if(dataAudio != "" && dataAudio != "undefined" && dataAudio != undefined){
				stopSong();
				audios(dataAudio);
			}
			 
			 
			 if(mostrarFlecha){
				
				 if(jQuery.inArray($(this).data("texto"),cualArregloUno) == -1){
					cualArregloUno.push($(this).data("texto"));
					 ////console.log(cualArregloUno);
				 }
				 if(cualArregloUno.length == hastaCuanto){
					 //$("#"+idDiv).removeClass("noMostrarFlechaDer");
					 $("#derecha").fadeIn(10);
				 }
			 }
		});
		
		
		$("#"+idDiv+" .texto .botonSegundo").click(function(e){
			
			$("#"+idDiv+" .texto .botonSegundo").each(function(index, element) {
                $(element).find("img").eq(1).fadeOut(1);
				$(element).find("img").eq(0).fadeIn(2);
				
            });
			
			 $(this).find("img").eq(1).fadeIn(10);
			 $(this).find("img").eq(0).fadeOut(10);
			 
			 $("#"+idDiv+" .texto .textoSegundo").each(function(index, element) {
                $(element).fadeOut(10);
             });
			 
			 
			 if(jQuery.inArray($(this).data("cual"),cualArreglo) == -1){
				cualArreglo.push($(this).data("cual"));
			 }
			 if(cualArreglo.length == 3){
				 $("#"+idDiv).removeClass("noMostrarFlechaDer");
				 $("#derecha").fadeIn(10);
			 }
			 
			 $("#"+idDiv+" .texto .textoSegundo").eq($(this).data("cual")).fadeIn("slow");
			 ////console.log($(this).data("cual"));
		});
		
		
		$("#"+idDiv+" .botonCerrarTexto").click(function(e){
			/*$("#"+idDiv+" .texto").each(function(index, element) {
                $(element).fadeOut(10);
				$(element).css("overflow","hidden");
            });*/
			
			$(this).parent().fadeOut("fast");
		});
		

			
		
	}
});


var cualHacerAni=false;
function animaciones(){
	$(".efectoTexto").bind('animar',function(event){
		var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
		$(this).find(".textoLargo").fadeIn(10);
		//tl.append(TweenLite.From($(this).find(".textoLargo"), 1, {css:{height:0, width:0}, ease:Expo.easeOut},0.7));
				
	});

	$(".general").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				tl.append(TweenLite.from($(this).find("div"), 1, {css:{top:200}, ease:Back.easeInOut}, 0.5));
				tl.append(TweenMax.staggerFrom($(this).find(".aniElementosUno"), 0.6, {css:{left:1000}, ease:Expo.easeOut},0.7),-0.5);
				
					
	});
	
	$(".generalDos").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				tl.append(TweenLite.from($(this).find(".arriba"), 0.1, {css:{top:-1000}, ease:Expo.easeOut}));
				tl.append(TweenMax.staggerFrom($(this).find(".abajo"), 0.3, {css:{left:-1000}, ease:Expo.easeOut},0.4),-0.5);
				//tl.append(TweenMax.staggerFrom($(this).find(".aniElementosUno"), 0.6, {css:{opacity:0,left:1000}, ease:Expo.easeOut},0.7),-0.5);
				tl.append(TweenLite.from($(this).find(".arribaIzq"), 0.7, {css:{top:-1000, left:-1000}}, 0.5));
					
	});
	$(".generalTres").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				tl.append(TweenMax.staggerFrom($(this).find(".abajo"), 0.3, {css:{opacity:0,top:-100}, ease:Expo.easeOut},0.4),-0.5);
				tl.append(TweenLite.from($(this).find(".arribaIzq"), 0.7, {css:{top:-1000, left:-1000}}, 0.5));

	});
	$(".der").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				tl.append(TweenLite.from($(this).find("div"), 0.1, {css:{left:1000}, ease:Expo.easeOut}));
					
	});
	$(".izq").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				tl.append(TweenLite.from($(this).find("div"), 0.1, {css:{left:-1000}, ease:Expo.easeOut}));
					
	});
	$(".escala").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false});
				tl.append(TweenLite.from($(this).find("div"), 0.1, {css:{scaleX:0, scaleY:0}, ease:Back.easeOut}), 0.1);
					
	});
	$(".diagonal").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				tl.append(TweenLite.from($(this).find("div"), 1.5, {css:{top:-1000, left:-1000}}, 0.5));
					
	});
	
	$("#videofinal").bind('animar', function(event) {
  			var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
				$(this).find("#mensaje").fadeIn(1);
				tl.append(TweenMax.staggerFrom($(this).find("#mensaje"), 1, {css:{top:-1000}, ease:Expo.easeOut}, 0.5));
				
				$(this).find("#botonSiguiente6p").fadeIn(1);
				tl.append(TweenMax.staggerFrom($(this).find("#botonSiguiente6p"), 1, {css:{left:1000}, ease:Expo.easeOut},0.7),-0.5);		
					
	});				

}


/*function init(){
	var slides = $(".seccion");
	slides.each(function(index, element) {
		if(index<currentIndex){
			$(this).css("left",-960).css("opacity",0);
		}
		$(this).css("opacity",0);
	});
	//TweenLite.from( $("#footerLCBU"), 1, {css:{top:"800"}, ease:Expo.easeInOut});
}*/


/*************************************/

/***** Show Seccion ******/
function act_showSeccion(idSlide){
	  
	  if(direccion == "derecha"){
		
	  }
	  
	  if(direccion == "izquierda"){
		 
		  cualSlide(idSlide);
		  //volver2parteTablero();
		  //volver3parteTablero();
		  //volverparte4Tablero();
		  volverSopaDeLetras();
	  }
	  
	  
	  
}


/*************************/

function SeccionesSlider(){
	slides = $(".seccion");
	
	mensaje = "";
	direccion = "";

	
	
	$(".volverEscenarioMenu").mousedown(function(e) {		
		$("body").elearningHTML('showSeccion',(currentIndex - 1));
    });
	
	$(".cerrarGloboPeque").mousedown(function(e) {		
		$(".globoPeque").fadeOut("slow");
		$(this).fadeOut("fast"); 
    });
	
	$(".terminarActividadTablero").click(function(e) {
	   $("body").elearningHTML('showSeccion',(currentIndex + 1));
	});
	
	$(".cerrarShadow").click(function(e) {
		
	   if($(this).parent().parent().parent().hasClass("visto")){
		  
	   }else{
		  $(this).parent().parent().parent().addClass("visto");
	   }
	   
	   $(this).parent().fadeOut("slow");
	   $(this).parent().removeClass("noMostrarFlechaDer");
	   
	   if($(this).hasClass("chulo")){
		  showSeccion(currentIndex+1);
	   }

	});
	
	$(".terminarSopaLetras").click(function(e) {
	   
	   $(this).parent().fadeOut("slow");
	   $(this).parent().removeClass("noMostrarFlechaDer");
	   
	   //$("body").elearningHTML('showSeccion',(currentIndex + 1));
	});
	
	$(".cerrarShadow2").click(function(e) {
	   $(this).parent().fadeOut("slow");
	   
	   if($(this).hasClass("pasarSig")){
	   		$("#derecha").fadeIn("slow");
	   }
	   
	   if($(this).hasClass("mostrarFlechas")){
	   		$("#derecha").fadeIn("slow");
			$("#izquierda").fadeIn("slow");
	   }
	   
	   
	});
	
	$(".cerrarShadow3").click(function(e) {
	   var cualMostrar = $(this).data("mostrar");
	   
	   $(this).parent().fadeOut(10);
	   $(this).parent().parent().find("."+cualMostrar).fadeIn("slow");
	   
	});
	
	
	
	$(".finalizarParte3tablero").click(function(e) {
	   contenidoTextArea1 = $(".textArea1").val();
	   $(".textArea2").val(contenidoTextArea1);
		
		if(contenidoTextArea1 != ""){
			$("body").elearningHTML('showSeccion',(currentIndex + 1));
			
		}
	  
	  
	
	});
	
	$(".mostrarOtroShadow").click(function(e) {
	   var cualShadow = $(this).data("cualshadow");
	   
	   $(this).parent().find("."+cualShadow).fadeIn("slow");
	   
	   switch(cualShadow){
		   case "segundoShadow":
		   		stopSong();
				audios("40_anota_ahora");
				
		   break;
		  
	   }
	   
	});
	
	function showMensaje(contadorAsuntosCorreo, elemento){
		if(contadorAsuntosCorreo >= 5){
		  
		
		
			
			/***	BOTON ENVIAR CORREO	***/
			
			$("#btn_enviar_correo").on("click",function(e){
				  alert("Enviado");
				  $("body").elearningHTML('showSeccion',(currentIndex + 1));
			});
			
			
		
		}else{
		$("#envioCorreoComputador").find(".asuntoCorreo").each(function(index, element) {
			TweenLite.to($(element), 1, {css:{left:1000}});
    	});
		$("#envioCorreoComputador").find(".mensajeCorreo").each(function(index, element) {
            $(element).fadeOut(10);
        });
		 
		 TweenLite.to($("#envioCorreoComputador").find(".asuntoCorreo").eq(contadorAsuntosCorreo), 1, {css:{left:19}, ease:Circ.easeInOut});
		 $("#envioCorreoComputador").find(".mensajeCorreo").eq(contadorAsuntosCorreo).fadeIn("fast");
		  
	   }
	   
	}
	
	
	$("#envioCorreoComputador").find(".txtMensajeCorreo").keydown(function(e) {
		$("#envioCorreoComputador").find(".sigMensaje").fadeIn("slow");

	});
	
	$("#envioCorreoComputador").find(".sigMensaje").click(function(e) {
		
	   contadorAsuntosCorreo ++;
	   showMensaje(contadorAsuntosCorreo, this)	
	   $(".antMensaje").fadeIn("slow");
	   //$(this).fadeOut("fast");
	   if(contadorAsuntosCorreo >= 3){
		  $(this).fadeOut("fast");
	   }else{
		  $(this).fadeIn("fast");  
	   }
	   
	   ////console.log(contadorAsuntosCorreo);
	});
	
	$("#envioCorreoComputador").find(".antMensaje").click(function(e) {
		
	   contadorAsuntosCorreo --;
	   if(contadorAsuntosCorreo <= 0){
		 	contadorAsuntosCorreo = 0;
			$(this).fadeOut("fast");
	   }
	   showMensaje(contadorAsuntosCorreo, this)	
	   
	});
	
	function envioCorreo(){
	   $("#envioCorreoComputador").find(".primerShadow").fadeIn("slow");
	};
	
	
	$(".botonVolverMenu").click(function(e){
		
		var dataChulo = $(this).parent().data("chulo");
		verMenu(dataChulo);
	});
	
	$(".cerrarVolverStart").click(function(e){
		showSeccion(currentIndex+1);
	});
	
	
	$(".cerrarPostOrganigrama").click(function(e){
		$(this).parent().fadeOut("slow");
		mostrarGlobo(4);
	});
	
	$(".cerrarPostTablero").click(function(e){
		$(this).parent().fadeOut("slow");
		mostrarGlobo(3);
	});
	
	$(".cerrarPostCartelera").click(function(e){
		$(this).parent().fadeOut("slow");
		mostrarGlobo(2);
	});
	
	$(".cerrarPostCorreo").click(function(e){
		$(this).parent().fadeOut("slow");
		showSeccion(31);
	});
	
	$(".flechaUltimoSlide").click(function(e){
		alert("Pasar Evaluacion");
	});
	
	
	$(".volverMenuComputador").click(function(e){
		var dataChulo = $(this).data("chulo");
		verMenu(dataChulo);
				//siguienteActividad(cualPermito);
		$("#escenario3").find(".botonCirculo").each(function(index, element) {
            $(element).find("img").eq(0).fadeOut(10);
			$(element).find("img").eq(1).fadeIn(10);
        });
		
		$("#escenario3").find(".postCorreo").fadeIn(10);
		
		$("#derecha").fadeOut(10);
		$("#izquierda").fadeOut(10);
	});
	
	$(".botonOrganigrama").click(function(e){
		
		$(this).parent().find(".agenda_parte2").hide();
		$(this).parent().find(".organigrama_parte2").fadeIn("slow");
		
		$(this).find("img").eq(1).hide();
		$(this).find("img").eq(0).show();
		
		$(".botonAgenda").find("img").eq(0).hide();
		$(".botonAgenda").find("img").eq(1).show();
		
	});
	
	$(".botonAgenda").click(function(e){

		$(this).parent().find(".organigrama_parte2").hide();
		$(this).parent().find(".agenda_parte2").fadeIn("slow");
		
		if($(this).hasClass("visto")){
		
		}else{
			stopSong();
			audios("38_ahora_que_tienes_piramide");
			$(this).addClass("visto");
		}
		
		$(this).find("img").eq(1).hide();
		$(this).find("img").eq(0).show();
		
		$(".botonOrganigrama").find("img").eq(0).hide();
		$(".botonOrganigrama").find("img").eq(1).show();
		
		
	});
	
	/******* Flechas Volver Tablero ********/
	
	$(".mostrarPrimerParte1").click(function(e){
		
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#izquierda").show();
		
		$("#tablero").find(".textoTablero").each(function(index, element) {
        	$(element).fadeOut(10);    
        });
		
		$("#tablero").find(".textoTablero").eq(0).fadeIn(10);
		
		$("#tablero").find(".botonTablero").each(function(index, element) {
        	$(element).css({left:48}); 
			$(element).find("img").eq(0).fadeIn(10);
			$(element).find("img").eq(1).fadeOut(10);  
        });
		
		$("#tablero").find(".botonTablero").eq(0).css({left:75});
		$("#tablero").find(".botonTablero").eq(0).find("img").eq(0).fadeOut(10);
		$("#tablero").find(".botonTablero").eq(0).find("img").eq(1).fadeIn(10);
		
		$("#tablero").find(".volverEscenarioMenu").fadeIn(10);
		$(this).fadeOut(10);
	});
	
	$(".mostrarPrimerParte2").click(function(e){
		 
		$("#tablero").find(".textoTablero").eq(1).find(".segundaParte").fadeOut(10);
		$("#tablero").find(".textoTablero").eq(1).find(".primeraParte").fadeIn(10);
		$(this).fadeOut(10);		
		$(".mostrarPrimerParte1").fadeIn(10);
		
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
	});
	
	$(".mostrarPrimerParte3").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".textoTablero").eq(1).find(".terceraParte ").fadeOut(10);
		$("#tablero").find(".textoTablero").eq(1).find(".segundaParte").fadeIn(10);
		$(this).fadeOut(10);		
		$(".mostrarPrimerParte2").fadeIn(10);
		
		$("#tablero").find(".primerShadow").fadeOut(10);
		$("#tablero").find(".cuartaParte").fadeOut(10);
		
	});
	
	$(".mostrarPrimerShadow").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		//$("#tablero").find(".terceraParte ").fadeOut(10);
		$("#tablero").find(".primerShadow").fadeIn(10);
		$(this).fadeOut(10);		
		$(".mostrarPrimerParte3").fadeIn(10);
		
	});
	
	$(".mostrarTexto2").click(function(e){
		
		//$("#tablero").find(".segundoShadow").fadeIn(10);
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".mostrarSec2").fadeIn(10);
		$("#tablero").find(".tercerShadow").fadeOut(10);
		
		$("#tablero").find(".segundaParte3").fadeOut(10);
		$("#tablero").find(".primerParte3").fadeIn(10);
		
		$(this).fadeOut(10);
		
		$("#tablero").find(".primerShadow").fadeIn(10);
		
		//$("#tablero").find(".segundaParte3").fadeOut(10);
		
	});
	
	$(".mostrarSec2").click(function(e){
		
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".textoTablero").each(function(index, element) {
        	$(element).fadeOut(10);    
        });
		
		$("#tablero").find(".textoTablero").eq(1).fadeIn(10);
		
		$("#tablero").find(".botonTablero").each(function(index, element) {
        	$(element).css({left:48}); 
			$(element).find("img").eq(0).fadeIn(10);
			$(element).find("img").eq(1).fadeOut(10);  
        });
		
		$("#tablero").find(".botonTablero").eq(1).css({left:75});
		$("#tablero").find(".botonTablero").eq(1).find("img").eq(0).fadeOut(10);
		$("#tablero").find(".botonTablero").eq(1).find("img").eq(1).fadeIn(10);
		
		$("#tablero").find(".cuartaParte").fadeIn(10);
		$("#tablero").find(".segundoShadow").fadeOut(10);
		$("#tablero").find(".mostrarPrimerShadow").fadeIn(10);
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarSec2B").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".mostrarTexto2").fadeIn(10);
		$("#tablero").find(".tercerShadow").fadeIn(10);
		$("#tablero").find(".cuartoShadow").fadeOut(10);
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarSextoShadow").click(function(e){
		 var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".sextoShadow").fadeIn(10);
		$("#tablero").find(".mostrarAtrasSextoShadow").fadeIn(10);

		$(this).fadeOut(10);
		
	});
	
	$(".mostrarAtrasSextoShadow").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		} 
		 
		$("#tablero").find(".sextoShadow").fadeOut(10);
		$("#tablero").find(".mostrarSec2B").fadeIn(10);
		
		$("#tablero").find(".terceraParte3").fadeOut(10);
		$("#tablero").find(".segundaParte3").fadeIn(10);

		$(this).fadeOut(10);
		
	});
	
	$(".mostrarTerceraParte3").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".mostrarSextoShadow").fadeIn(10);
		$("#tablero").find(".terceraParte3").fadeIn(10);
		
		$("#tablero").find(".cuartaParte3").fadeOut(10);
		

		$(this).fadeOut(10);
		
	});
	
	$(".atrasInductiva").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".cuartaParte3").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		
		$("#tablero").find(".inductiva").fadeOut(10);

		$(this).fadeOut(10);
		
	});
	
	$(".atrasDeductiva").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".cuartaParte3").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		
		$("#tablero").find(".deductiva").fadeOut(10);

		$(this).fadeOut(10);
		
	});
	
	$(".mostraTexto4").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".textoTablero").each(function(index, element) {
        	$(element).fadeOut(10);    
        });
		
		$("#tablero").find(".textoTablero").eq(2).fadeIn(10);
		
		$("#tablero").find(".botonTablero").each(function(index, element) {
        	$(element).css({left:48}); 
			$(element).find("img").eq(0).fadeIn(10);
			$(element).find("img").eq(1).fadeOut(10);  
        });
		
		$("#tablero").find(".botonTablero").eq(2).css({left:75});
		$("#tablero").find(".botonTablero").eq(2).find("img").eq(0).fadeOut(10);
		$("#tablero").find(".botonTablero").eq(2).find("img").eq(1).fadeIn(10);
		
		
		$("#tablero").find(".atras9shadow").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeOut(10);
		$("#tablero").find(".novenoShadow ").fadeIn(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".atras9shadow").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".cuartaParte3").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		$("#tablero").find(".novenoShadow ").fadeOut(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarPrimerParte4").click(function(e){
		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
 	
		$("#tablero").find(".mostraTexto4").fadeIn(10);	
		$("#tablero").find(".primerParte4").fadeIn(10);
		$("#tablero").find(".segundaParte4  ").fadeOut(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarDesimoShadow").click(function(e){
 		var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".decimoShadow ").fadeIn(10);	
		$("#tablero").find(".atrasDesimoShadow").fadeIn(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".atrasDesimoShadow").click(function(e){
 	 	var dataAudio = $(this).data("audio");
		
		if(dataAudio != "" && dataAudio != undefined){
			
			stopSong();
			audios(dataAudio);
		
		}
		
		$("#tablero").find(".terceraParte4").fadeOut(10);	
		$("#tablero").find(".decimoShadow").fadeOut(10);	
		$("#tablero").find(".atrasDesimoShadow").fadeIn(10);
		
		$("#tablero").find(".segundaParte4").fadeIn(10);
		$("#tablero").find(".mostrarPrimerParte4").fadeIn(10);

		$(this).fadeOut(10);
		
	});
	
	
	
	
}


function cualFlechaTableroMostrar(flecha){
	
	
	$("#tablero").find(".flechaVolverTablero").each(function(index, element) {
        $(element).fadeOut(10);
    });
	
	
	switch(flecha){
		case "segundaParte":
			$("#tablero .flechaDevolverTablero").find(".mostrarPrimerParte2").fadeIn(10);
		break;
		
		case "terceraParte":
			$("#tablero").find(".mostrarPrimerParte3").fadeIn(10);
		break;
		
		case "cuartaParte":
			$("#tablero").find(".mostrarPrimerShadow").fadeIn(10);
		break;
		
		case 2:
			$("#tablero").find(".mostrarTexto2").fadeIn(10);
		break;
		
		case "segundaParte3":
			$("#tablero").find(".mostrarSec2B").fadeIn(10);
		break;
		
		case "terceraParte3":
			$("#tablero").find(".mostrarSextoShadow").fadeIn(10);
		break;
		
		case "cuartaParte3":
			$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		break;
		
		case "inductiva":
			$("#tablero").find(".atrasInductiva").fadeIn(10);
		break;
		
		case "deductiva":
			$("#tablero").find(".atrasDeductiva").fadeIn(10);
		break;
		
		case 3:
			$("#tablero").find(".mostraTexto4").fadeIn(10);
		break;
		
		case "segundaParte4":
			$("#tablero").find(".mostrarPrimerParte4").fadeIn(10);
		break;
		
		case "terceraParte4":
			$("#tablero").find(".mostrarDesimoShadow").fadeIn(10);
		break;
		
	}
	
	
	 
	
}


function startStage(){


}



function mostrarGlobo(cualPermito){
	
}

function checkVistas(chulo){
	
}

function siguienteActividad(cualPermito){
		
	
}

function verMenu(index){
		
		
}



/**********  Funciones para devoleverme  **********/

function cualSlide(idDiv){
	
	switch(idDiv){
		
		case "infografia":
			//volverInfo();
		break;
	
		case "seccionMandado":
			volverMandado();
		break;
		
		case "carteleraAnuncios":
			volverCarteleraAnuncios();
		break;
		
		case "actividadPintar":
			volverActividadPintar();
		break;
		
		case "organigrama":
			reIniciarOrganigrama();
		break;
		
		case "tablero":
			volverTablero();
		break;
		
		case "parte2tablero":
			volver2parteTablero();
		break;
		
		case "parte3tablero":
			volver3parteTablero();
		break;
		
		case "parte4tablero":
			volverparte4Tablero();
		break;
		
		case "sopaDeLetras":
			volverSopaDeLetras();
		break;
		
		case "envioCorreoComputador":
			volverConfCorreo();
		break;
		
	}

}

function volverInfo(){
	$("#infografia").find(".shadowInfo").fadeIn(10);
	
	$("#infografia").find(".cerrarGloboPeque").fadeIn(10);
	$("#infografia").find(".cerrarShadow2").fadeIn(10);
	
	arreglo3info = [];
	
	$("#derecha").fadeOut(10);
		
}

function volverMandado(){
	var idDiv = "#seccionMandado";
	
	$(idDiv+" .inicioMandado").fadeIn(10);

	$(idDiv+" .empezar").fadeOut(10);
	

	$(idDiv).find(".fondoMercado").fadeOut(10);
	$(idDiv).find(".cerrarMensajeSenor").fadeOut(10);
	$(idDiv).find(".cerrarResultadoMercado").fadeOut(10);
	
	
	$("#seccionMandado").find(".botonEmpezar").fadeOut(10);
	$("#seccionMandado").find(".botonFinalizar").fadeOut(10);
	$("#seccionMandado").find(".botonEmpezarOrganizado").fadeOut(10);
	$("#seccionMandado").find(".botonFinalizarOrganizado").fadeOut(10);
	$("#seccionMandado").find(".texto_final_mandado").eq(1).fadeOut(10);
	$("#seccionMandado").find(".siguiente-diapositiva").fadeOut(10);
	
	$("#seccionMandado").find("input").each(function(index, element) {
        $(element).text(" ");
    });
	
	
	$("#seccionMandado .cronometro").find(".span_crono").text("5");
	
	$("#seccionMandado").find(".ocultoOrganizado").each(function(index, element){
		$(element).css("display","none");
	});
	
	
	$(idDiv + " .cajasTexto").find(".resultadoMercado").fadeOut(10);
	$(idDiv).find(".resultadoMercadoEscritas").fadeOut(10);
	
	$(idDiv).find(".cajaDeTexto").fadeIn(10);
	$(idDiv).find(".cajasTexto").fadeOut(10);
	
	$(idDiv).find(".cerrarResultadoMercado").fadeOut(10);
	
	$(idDiv).find(".todoOrganizado").fadeOut(10);
	
	$(idDiv+" .cronometroOrganizado").find(".span_crono").text("5");
	
	
	$(idDiv).find(".cajaDeTextoOrg").fadeIn(10);
	$(idDiv).find(".cajasTextoOrganizado").fadeOut(10);
	$(idDiv).find(".botonFinalizarOrganizado").fadeOut(10);
	
	$(idDiv).find(".resultadoMercadoOrganizadoF").fadeOut(10);
	$(idDiv).find(".cerrarResultadoMercadoOrganizado").fadeOut(10);
	$(idDiv).find(".fondoMercadoOrganizado").fadeOut(10);
	
	$(idDiv).find(".volverMenu").fadeOut(10);
	
	$(idDiv+" .cajasTexto .oculto").fadeIn(10);
	
}


function volverCarteleraAnuncios(){
	var idDiv = "#carteleraAnuncios";
	
	$(idDiv).find(".globo_cartelera").fadeIn("fast");
	
	$("#carteleraAnuncios").find(".botonCerrarTexto").each(function(index, element) {
        $(element).fadeOut(10);
    });
	
	
	$(idDiv+" .boton").each(function(index, element) {
        $(element).find("img").eq(0).fadeIn(10);
		$(element).find("img").eq(1).fadeOut(10);
		$(element).removeClass("vista");
		$(element).removeClass("sigNum");
		
		$(element).fadeOut(10);
    });
	
	$(idDiv+" .boton").eq(0).fadeIn(10);
	$(idDiv+" .boton").eq(0).addClass("vista");
	
	$(idDiv+" .texto").each(function(index, element) {
		$(element).fadeOut(10);
	});
	
	$(idDiv+" .botonSig").fadeOut(10);
	
	cont_cerrar_globo = 0;
	

}



function volverActividadPintar(){
	var idDiv = "#actividadPintar";
	
	$(idDiv+" .pincel").each(function(index, element) {
        $(element).find("img").eq(0).fadeIn(10);
		$(element).find("img").eq(1).fadeOut(10);
    });
	
	
	$(idDiv+" .cuadroColor").each(function(index, element) {
       $(element).find("img").eq(0).fadeOut(10); 
	   $(element).find("img").eq(1).fadeOut(10); 
    });
	
	$(idDiv+" .calificacion").each(function(index, element) {
       $(element).find("img").eq(0).fadeOut(10); 
	   $(element).find("img").eq(1).fadeOut(10); 
    });
	
	$(idDiv+" .mensajeBien").fadeOut(10);
	$(idDiv+" .mensajeMal").fadeOut(10);
	
	$(idDiv+" .botonCerrarMensaje").fadeOut(10);
	
	$(idDiv+" .botonVerificar").fadeOut(10);

}



function volverTablero(){
	var idDiv = "#tablero";
	
	$(idDiv+" .botonTablero").each(function(index, element) {
        $(element).find("img").eq(0).fadeIn(10);
		$(element).find("img").eq(1).fadeOut(10);
    });
	
	$(idDiv+" .botonTablero").eq(0).find("img").eq(1).fadeIn(10);
	$(idDiv+" .botonTablero").eq(0).find("img").eq(0).fadeOut(10);
	
	$(idDiv+" .botonTablero").eq(0).css({left:75});
	$(idDiv+" .botonTablero").eq(1).css({left:48});
	$(idDiv+" .botonTablero").eq(3).css({left:48});
	
	
	$(idDiv+" .textoTablero").each(function(index, element) {
		$(element).fadeOut(10);
    });
	
	$(idDiv+" .textoTablero").eq(0).fadeIn(10);
	
	$(idDiv+" .textoTablero").find(".primerParte3").fadeIn(10);
	
	<!-- Texto tablero 2 -->
	$(idDiv+" .textoTablero").find(".segundaParte3").css("display","none");
	$(idDiv+" .textoTablero").find(".ocultarTerceraParte").css("display","block");
	
	$(idDiv+" .textoTablero").find(".terceraParte3").css("display","none");
	$(idDiv+" .textoTablero").find(".terceraParte3").find(".cuartaParte3").css("display","block");
	$(idDiv+" .textoTablero").find(".terceraParte3").find(".terceraParte3").css("display","block");
	
	$(idDiv+" .textoTablero .cuartaParte3").find(".chulo").eq(0).css("display","none");
	$(idDiv+" .textoTablero .cuartaParte3").find(".chulo").eq(1).css("display","none");
	
	$(idDiv+" .textoTablero").find(".primeraParte").fadeIn(10);
	
	$(idDiv+" .textoTablero").find(".primerParte3").find(".ocultarTerceraParte").fadeIn(10);
	
	$(idDiv+" .textoTablero").find(".mostrarTiva").each(function(index, element) {
        $(element).find("img").eq(0).fadeIn(10);
		$(element).find("img").eq(1).css("display","none");
    });
	
	$(idDiv+" .textoTablero").find(".chulo").each(function(index, element) {
		$(element).css("display","none");
    });
	
	
	
		
	////// Inductiva
	
	$(idDiv+" .textoTablero .inductiva").fadeOut(10);
		$(idDiv+" .textoTablero").find(".inductiva").find(".primerRama").eq(0).fadeIn(10);
		$(idDiv+" .textoTablero").find(".inductiva").find(".primerRama").eq(1).fadeIn(10);
		$(idDiv+" .textoTablero").find(".inductiva").find(".primerRamaA").fadeIn(10);
		$(idDiv+" .textoTablero").find(".inductiva").find(".botonPrimerRama").fadeIn(10);

		
		$(idDiv+" .textoTablero").find(".inductiva").find(".segundaRama").css("display","none");
		$(idDiv+" .textoTablero").find(".inductiva").find(".botonSegundaRama").css("display","none");
		
		$(idDiv+" .textoTablero").find(".inductiva").find(".tercerRama").css("display","none");
		$(idDiv+" .textoTablero").find(".inductiva").find(".avanzarRama1").css("display","none");
		
		$(idDiv+" .textoTablero").find(".inductiva").find(".parte2").eq(0).css("display","none");
		$(idDiv+" .textoTablero").find(".inductiva").find(".parte2").eq(1).css("display","none");
	
		$(idDiv+" .textoTablero").find(".textArea3").each(function(index, element) {
            $(element).css("display","none");
        });
		
		$(idDiv+" .textoTablero").find(".inductiva").find(".avanzarRama2").css("display","none");
		
		
	////// Deductiva
	
	$(idDiv+" .textoTablero .deductiva").css("display","none");
		
		$(idDiv+" .textoTablero").find(".deductiva").find(".primerRamaB").fadeIn(10);
		$(idDiv+" .textoTablero").find(".deductiva").find(".botonPrimerRamaB").fadeIn(10);
		
		
	
		$(idDiv+" .textoTablero .deductiva").find(".segundaRamaB").css("display","none");
		$(idDiv+" .textoTablero .deductiva").find(".botonSegundaRamaB").css("display","none");
	
		$(idDiv+" .textoTablero .deductiva").find(".terceraRamaB").css("display","none");
		$(idDiv+" .textoTablero .deductiva").find(".pasarRamasB").css("display","none");
		
		$(idDiv+" .textoTablero .deductiva").find(".cuartaRamaB").css("display","none");
		$(idDiv+" .textoTablero .deductiva").find(".textArea4").css("display","none");
		$(idDiv+" .textoTablero .deductiva").find(".ocultarTerceraParte").css("display","none");
		
    
	
	
	$(idDiv+" .textoTablero .terceraParte4").find(".textoTerceraParte4").each(function(index, element) {
    	$(element).css("display","none");    
    });
	
	$(idDiv+" .textoTablero .terceraParte4").find(".textoTerceraParte4").eq(0).fadeIn(10);
	
	
	$(idDiv+" .textoTablero").find(".terceraParte4").find(".botonTerceraParte4").each(function(index, element) {
    	$(element).find("img").eq(0).fadeIn(10);
		$(element).find("img").eq(1).css("display","none");
    });
	
	$(idDiv+" .textoTablero .terceraParte4").find(".botonTerceraParte4").eq(0).find("img").eq(0).fadeIn(10);
	$(idDiv+" .textoTablero .terceraParte4").find(".botonTerceraParte4").eq(0).find("img").eq(1).css("display","none");
	
	$(idDiv+" .textoTablero .segundaParte3").find(".textArea3").eq(0).fadeIn(10);
	$(idDiv+" .textoTablero .segundaParte3").find(".textArea3").eq(1).fadeIn(10);
	$(idDiv+" .textoTablero .segundaParte3").find(".textArea3").eq(2).fadeIn(10);
	
	$(idDiv + " .flechaDevolverTablero").find("div").each(function(index, element) {
    	$(element).fadeOut(10);    
    });
	
	$(idDiv).find(".volverEscenarioMenu").fadeIn(10);
}

function volver2parteTablero(){

	
	var idDiv = "#parte2tablero";
	
	//$(idDiv).find(".primeraParte").fadeIn(10);
	
}

function volver3parteTablero(){
	
	var idDiv = "#parte3tablero";
	
	//$(idDiv).find(".primeraParte").fadeIn(10);
	
}

function volverparte4Tablero(){
	var idDiv = "#parte4tablero";
	$("#derecha").fadeOut(10);
	
	$(idDiv).find(".primeraParte").fadeIn(10);
	
}

function volverSopaDeLetras(){
	var idDiv = "#sopaDeLetras";
	porCual = 0;
	
	$(idDiv).find(".shadowbox").fadeIn(10);
	$(idDiv).find(".contInfoSh").each(function(index, element) {
        $(element).fadeOut(10);
    });
	$(idDiv).find(".contInfoSh").eq(0).fadeIn(10);
	
	$(idDiv).find(".empezarActividadSopaLetras").fadeOut(10);
	$(idDiv).find(".shadowFinalSopa").fadeOut(10);
	
	$(idDiv).find("#izquierdashadowbox").fadeOut(10);
	$(idDiv).find("#empezarActividadSopaLetras").fadeOut(10);
	
	$(idDiv).find("#derechashadowbox").fadeIn(10);
	
	$(idDiv).find(".letra").each(function(index, element) {
        $(element).removeClass("fondoletraselect");
		$(element).addClass("fondoletra");
    });
	
	$(idDiv).find(".contechecbox").each(function(index, element) {
        $(element).removeClass("checkboxs");
		$(element).addClass("checkbox");
    });
	
	contSopaLetras = 0;
	estado = 0;
	
	$(palabras).each(function(index, element) {
		element.setrespuesta(0);
	});
	
}

var contBene = [];
var contApCon = [];
var contHerr = [];

function llenarTextAreasCorreo(){
	var idDiv = "#primerParteCompu";
	var valorTxtBene = "";
	var valorTxtApCon = "";
	var valorTxtHerr = "";
	
	var valTxtBene ="";
	var valTxtAp ="";
	var valTxtHerr ="";
	
	$(idDiv).find(".textAreaBeneficios").each(function(index, element) {
       valorTxtBene = $(element).val();
	   if(valorTxtBene != ""){
			valTxtBene = valTxtBene + "\n" +"*"+valorTxtBene;
	   }
	  
    });
	$("#envioCorreoComputador").find(".txtMensajeCorreo").eq(0).val(valTxtBene);
	 
	
	$(idDiv).find(".textAreaApCon").each(function(index, element) {
      valorTxtApCon = $(element).val();
	  if(valorTxtApCon != ""){
			valTxtAp = valTxtAp + "\n" +"*"+valorTxtApCon;
	  }
    });
	$("#envioCorreoComputador").find(".txtMensajeCorreo").eq(1).val(valTxtAp);
	
	
	$(idDiv).find(".textAreaHerr").each(function(index, element) {
      valorTxtHerr = $(element).val();
	  if(valorTxtHerr != ""){
		valTxtHerr = valTxtHerr + "\n" +"*"+valorTxtHerr;
	  }
    });
	$("#envioCorreoComputador").find(".txtMensajeCorreo").eq(2).val(valTxtHerr);
	
	//$("#envioCorreoComputador").find(".mensajeCorreo").eq(1).val(contApCon);
	//$("#envioCorreoComputador").find(".mensajeCorreo").eq(2).val(contHerr);
}

function volverConfCorreo(){
	$("#envioCorreoComputador").find(".segundoShadow").fadeOut(10);
}



function volver_logica_mensaje(){
	var idDiv = "#logicaMensaje";
	
	$(idDiv).find(".boton").each(function(index, element) {
        $(element).find("img").eq(0).fadeIn(10);
		$(element).find("img").eq(1).fadeOut(10);
		
    });
	
	$(idDiv).find(".texto").each(function(index, element) {
        $(element).fadeOut(10);
    });
	
	
}

/*		FIN FUNCIONES MODULO		*/





/********** Validar TXT *********/
jQuery.fn.extend({
	validarCampo: function(cadena){
		
	$(this).on({
				keypress : function(e){
					var key = e.which,
						keye = e.keyCode,
						tecla = String.fromCharCode(key).toLowerCase(),
						letras = cadena;
		if(letras.indexOf(tecla)==-1 && keye!=9&& (key==37 || keye!=37)&& (keye!=39 || key==39) && keye!=8 && (keye!=46 || key==46) || key==161){
						e.preventDefault();
						
					}else{
						
					  $("#prod_de_mas").parent().parent().find(".cajaDeTextoOrg").each(function(index, element) {
						  if($(element).val() != "" && $(element).val() != " "){
							  $(".botonFinalizarOrganizado").fadeIn("slow");
						  }
					  });
							
						
					}
				}
			});

}});



function show_sec_interna(idDiv){
	var current_int = 0;
	var cont_int = $(idDiv).find(".seccion_int");
	
	
	
	function mover_int(index){
		cont_int.eq(current_int).fadeOut("fast");
		current_int = index;
		cont_int.eq(current_int).fadeIn("slow");
		
		var dataAudio = cont_int.eq(current_int).data("audio");
		
		if(dataAudio != "" && dataAudio != "undefined" && dataAudio != undefined){
			stopSong();
			audios(dataAudio);
		}
		
		var tot_sec = cont_int.length;
		
		var data_flecha = cont_int.data("flecha");
		
		switch(data_flecha){
			case "derecha":
				$(idDiv).find(".flecha_sig").show();
			break;
			
			case "izquierda":
				$(idDiv).find(".flecha_ant").show();
			break;
			
			case "ambas":
				$(idDiv).find(".flecha_sig").show();
				$(idDiv).find(".flecha_ant").show();
			break;
			
		}
		
		if(current_int >= tot_sec - 1){
			$(idDiv).find(".flecha_sig").hide();
		}else{
			$(idDiv).find(".flecha_sig").show();
		}
		
		if(current_int <= 0){
			$(idDiv).find(".flecha_ant").hide();
		}else{
			$(idDiv).find(".flecha_ant").show();
		}
		
	}
	
	
	
	$(idDiv).find(".flecha_ant").click(function(e){
		mover_int(current_int - 1);
	});
	
	$(idDiv).find(".flecha_sig").click(function(e){
		mover_int(current_int + 1);
	});

}


/*****	  DEJAR TEXTO		*****/
jQuery.fn.extend({
	botonDejarText: function(){
	var idDiv = $(this).attr("id");
	
	$("#"+idDiv).find(".boton").click(function(e){
		
		$(this).find("img").eq(0).fadeOut(10);
		$(this).find("img").eq(1).fadeIn("fast");
		
		var dataCual = $(this).data("texto");
		$("#"+idDiv).find(".texto").eq(dataCual).fadeIn("fast");
		
		
		
	});
	
}});



function act_volver(idDiv, dataAudio){
	
	stopSong();
	
	switch(idDiv){
		
		case "infografia":
		
			if($("#"+idDiv).hasClass("visto")){
			}else{
				audios(dataAudio);
			}
		
		break;
		
		case "parte2tablero":
		
			if($("#"+idDiv).hasClass("visto")){
			}else{
				audios(dataAudio);
			}
		
		break;
		
		case "parte3tablero":
		
			if($("#"+idDiv).hasClass("visto")){
			}else{
				audios(dataAudio);
			}
		
		break;
		
		case "envioCorreoComputador":
		
			if($("#"+idDiv).hasClass("visto")){
			}else{
				audios(dataAudio);
			}
		
		break;
		
		case "escenario_cartelera":
		case "escenario_tablet":
		case "escenario_tablero":
		case "escenario_computador":
		case "tablero":
		
			if($("#"+idDiv).hasClass("visto")){
			}else{
				audios(dataAudio);
			}
		
		break;
		
		
		case "escenario_cartelera":
		case "escenario_tablet":
			$(".textoCentral").fadeOut(10);
		break;
		
		//case "sopaDeLetras":
		case "inicioComputador":
			if($("#inicioComputador").hasClass("visto")){
				$("#derecha").fadeIn("fast");
				$("#izquierda").fadeIn("fast");
			}
			audios(dataAudio);
		break;
		
		case "primerParteCompu":
			
			if($("#"+idDiv).hasClass("visto")){
			
				$("#derecha").fadeIn("fast");
				$("#izquierda").fadeIn("fast");
			
			
			}else{
				audios(dataAudio);
			}
			
		break;
		
		
		default:
			audios(dataAudio);
			//$(".logo_belcorp").show();
		break;
		
	}
	
}




/******		Funcion enviar correo	*******/
function enviar_mail(nombre, correo, asunto, contenido){
	
	$.ajax({
		  
		  type: "POST",
		  url: "http://somosbelcorp.spira.co/videos-nuevas/mail.php",
		  data: { mai:correo , asu: asunto ,  com: contenido , nom: nombre },
		  
		error: function (xhr, ajaxOptions, thrownError) {
		  //console.log(xhr.status);
		  //console.log(thrownError);
		}
	
		}).done(function( msg ) {
		
			switch(msg){
				case "0":
					alert("Hubo un error, intente de nuevo más adelante");
				return;
				case "1":
					//$("#nombre,#mail,#telefono,#comentario").val("");
					alert("Mensaje enviado exitosamente");
				break;
				
			}
	});

	alert("Mensaje enviado exitosamente.");


}

