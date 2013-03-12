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

/*		FIN VARIABLES GLOBALES			*/






/*		INICIO FUNCIONES MODULO		*/


jQuery.fn.extend({
	
	actividadCorreo: function(){
		
		var idDiv = $(this).attr("id");
		
		$("#"+idDiv+" .btnEnviarCorreo").click(function(e){
			var deQuien = $("#"+idDiv+" #txtDe").val();
			var paraQuien = $("#"+idDiv+" #txtPara").val();
			
			if(deQuien == "" || deQuien == " "){
				
				alert("Digite su correo");
				
			}else{
				if(paraQuien == "" || paraQuien == " "){
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
			
			if(porCual<mayor){
				$("#derechashadowbox").fadeIn("fast");
			}else{
				$("#derechashadowbox").fadeOut("fast");
				$("#empezarActividadSopaLetras").fadeIn("fast");
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
	//console.log(primera+"   "+segunda);
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
				//console.log(elementostemporales);
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
		var dataCual = $(this).data("cual");
		
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
			
			$("#"+idDiv+" .textoTablero").eq(dataCual).fadeIn("slow");
			
			$("#"+idDiv).find(".volverEscenarioMenu").fadeOut(10);
			$("#"+idDiv).find(".mostrarPrimerParte1").fadeIn(10);
			
			
			
		//}
		
	});
	
	
	$("#"+idDiv).find(".ocultarPrimerParte").click(function(e){

		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		
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
	});
	
	$("#"+idDiv).find(".ocultarCuartaParte").click(function(e){
		$(this).parent().fadeOut("slow");
		var cualMostrar = $(this).data("mostrar");
		
		cualFlechaTableroMostrar(cualMostrar);
		
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
	});
	
	
	
	$("#"+idDiv).find(".avanzarRama1").click(function(e){

		var cualMostrar = $(this).data("mostrar");
		$("#"+idDiv).find("."+cualMostrar).fadeIn("slow");
		
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
		
		cualFlechaTableroMostrar(cualMostrar);
		
		$("#"+idDiv).find(".chulo").eq($(this).data("cual")).fadeIn("slow");
		
		
	});
	
	
	
	
	$("#"+idDiv).find(".flechaDer").click(function(e){
		$(this).fadeOut();
		$("#"+idDiv).find(".flechaIzq").fadeIn("slow");
		$("#"+idDiv).find(".textoTb").eq(0).fadeOut("slow");
		$("#"+idDiv).find(".textoTb").eq(1).fadeIn("slow");
		$("#"+idDiv).find(".ocultarPrimerParte").fadeIn("slow");
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

jQuery.fn.extend({
	actividadOrganigrama: function () {

		var contadorTodos = 0;
		var contadorBien = 0;
		var posiciones = [];
		var idDiv = $(this).attr("id");

		$(".cajaDrag").each(function (index, element) {
			var posTempLeft = $(element).position().left;
			posiciones.push(posTempLeft);
		});

		$(".cajaDrag").draggable({revert:true});

		$(".cajaDrop").droppable({accept: ".cajaDrag"});

		$(".cajaDrop").bind('drop',function(event,ui) {
			ui.draggable.css("cursor","auto");
			ui.draggable.draggable({revert:false});
			ui.draggable.addClass("noMover");

			var dataCorrer = ui.draggable.data("correrleft");
			dataCorrer ++;

			for(var i = dataCorrer; i < 7; i++){
				
				var correrLeft = $(".cajaDrag").eq(i).position().left;
				correrLeft -= 155;
				if ($(".cajaDrag").eq(i).hasClass("noMover")) {

				}else{
					$(".cajaDrag").eq(i).css({left:correrLeft});
				}
				
			}


			var pos = $(this).position();
			var posX = pos.left - 4;
			var posY = pos.top - 4;

			ui.draggable.css({left:posX, top:posY});

			ui.draggable.find("img").eq(0).fadeOut(10);
			ui.draggable.find("img").eq(1).fadeIn(10);

			ui.draggable.draggable("destroy");

			var dataDrag = ui.draggable.data("cajadrag");
			var dataDrop = $(this).data("cajadrop");
			//console.log(dataDrag +"    "+dataDrop);
			
			if(dataDrag == dataDrop){
				contadorBien ++;
			}

			contadorTodos ++;

			if(contadorTodos == 7){
				$(".pregunta").show(1000);
			}

		});

	$(".botonRespOrg").click(function(e) {
		$(this).parent().fadeOut("fast");

		var dataResp = $(this).data("resp");
		
		if (dataResp == "si") {

			if(contadorBien == 7){
				$(".todasBien").fadeIn("slow");
				//$("#"+idDiv).removeClass("noMostrarFlechaDer");
				//$("#derecha").fadeIn("slow");
				$(".pasarOrganigrama").fadeIn("slow");
				contadorBien = 0;
				contadorTodos = 0;

			}else{
				$(".todasMal").fadeIn("slow");
			}

		}else{
			reIniciar();
		}

	});

	$(".repetirAct").click(function (e) {
		$(this).parent().fadeOut("fast");

		$(".cajaDrag").each(function (index, element) {
			$(element).find("img").eq(1).fadeOut(10);
			$(element).find("img").eq(0).fadeIn(10);
		});

		reIniciar();
	});

	function reIniciar(){
		var contLeft = 0;
		contadorBien = 0;
		contadorTodos = 0;

		$(".cajaDrag").each(function (index, element){

			$(element).find("img").eq(1).fadeOut(10);
			$(element).find("img").eq(0).fadeIn(10);

			$(element).css({top:366,left:posiciones[contLeft]});
			$(element).css("cursor","pointer");
			$(element).draggable({revert:true});
			$(element).removeClass("noMover");
			contLeft ++;
		});
	}


}});

jQuery.fn.extend({
	actividadPintar: function () {
		var idDiv = $(this).attr("id");
		
		var color = "azul";
		var contadorFinal = 0;
		$(".botonCerrarMensaje").click(function (e) {
			$(this).fadeOut(10);
			$(".mensajeMal").fadeOut(10);
			$(".mensajeBien").fadeOut(10);
			
			$(".calificacion").find("img").each(function(index, element) {
                $(element).fadeOut("fast");
            });
			
			$(".cuadroColor").find("img").each(function(index, element) {
                $(element).fadeOut("fast");
            });
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

			}else{
				$(".mensajeBien").fadeOut(10);
				$(".mensajeMal").fadeIn(10);
				$(".botonCerrarMensaje").fadeIn(10);
				contadorFinal = 0;
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
		$(this).fadeOut(10);
		
		$(idDiv+" .fondoMercado").fadeIn(10);
		$(idDiv+" .cronometro").fadeIn(10);
		
		$.timer(1000,function(e){
			
			if(contadorCrono <= 0){
				e.stop();
				$(idDiv+" .cronometro").fadeOut(10);
				$(idDiv+" .cajasTexto").fadeIn(10);
			}
			
			$(idDiv+" .cronometro").find("img").fadeOut(1);
			$(idDiv+" .cronometro").find("img").eq(contadorCrono).fadeIn(2);
			
			contadorCrono --;
			
			
		})
		
		
		$(".cajasTexto .resultadoMercado").each(function(index, element) {
        	$(element).css("display","none");    
        });
		
		$(".cajasTexto .resultadoMercadoEscritas").css("display","none");
		
		
	 });
	 
	 $(".botonFinalizar").click(function(e){
		var contVec = 0;
		for(var i = 0; i <15; i++){
			if($(".cajaDeTexto").eq(i).val() != ""){
				arregloProductos.push($(".cajaDeTexto").eq(i).val());
				contVec ++;
				
			}
			
		}
		var tamVec =  arregloProductos.length / 2;
				
		for(var i = 0; i < contVec; i++){
			$(".cajaDeTextoEsc").eq(i).val(arregloProductos[i]);
		}
		
		$(idDiv+" .cajasTexto .oculto").fadeOut(10);
		$(this).fadeOut(10);
		$(idDiv+" .cajasTexto .cajaDeTexto").fadeOut(10);
		
		$(idDiv+" .resultadoMercado").each(function(index, element) {
            $(element).fadeOut(10);
        });
		
		if(arregloProductos.length <= 5 ){
			$(idDiv+" .resultadoMercado").eq(0).fadeIn(10);
		}else if(arregloProductos.length > 6 && arregloProductos.length < 10){
			$(idDiv+" .resultadoMercado").eq(1).fadeIn(10);
		}else if(arregloProductos.length >= 10 && arregloProductos.length < 15){
			$(idDiv+" .resultadoMercado").eq(2).fadeIn(10);
		}
		
		$(idDiv+" .resultadoMercadoEscritas").fadeIn(10);
		
		
		$(".cerrarResultadoMercado").fadeIn(10);
		//contadorCrono = 0;

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
			}
			
			
			$(idDiv+" .cronometroOrganizado").find("img").fadeOut(1);
			$(idDiv+" .cronometroOrganizado").find("img").eq(contadorCronoOrg).fadeIn(2);
			
			contadorCronoOrg --;
			
			
		})
		
		
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
		 var resultadoFinal = 0;
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

		$(".cerrarResultadoMercadoOrganizado").fadeIn(10);
		 
	 });
	 
	 $(".botonVolver").click(function(e){
		volverMandado();
		 
		contadorCrono = 4;
		contadorCronoOrg = 4;
		arregloProductos = [];
		arregloProductosOrganizado = [];
		
		$(".cajaDeTexto").each(function(index, element) {
            $(element).val("");
        });
		
		$(".cajaDeTextoEsc").each(function(index, element) {
            $(element).val("");
        });
		
		$(".cajaDeTextoOrg").each(function(index, element) {
            $(element).val("");
        });
		
		$(".resultadoMercado").each(function(index, element) {
            $(element).fadeOut(10);
        });
		
		$(".resultadoMercadoOrganizado").each(function(index, element) {
            $(element).fadeOut(10);
        });
		
		
		$(".resultadoMercadoEscritas").fadeOut(10);
		$(".resultadoMercadoOrganizadoF").fadeOut(10);
		
		
		
		
	 	seccion.eq(currentIndex).css({left:-900, opacity: 0});
		seccion.eq(6).css({left:0, opacity: 1});
		
		siguienteActividad(1);
		seccion.eq(6).find(".textoBotonCirculo").eq(1).css({top:326});
		seccion.eq(6).find(".postMandado").fadeIn(10);
		
		
	 });
	 //contadorCronoOrg = 0;
	 
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
				   //console.log(cualArregloUno);
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
			 
			 var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
			 tl.append(TweenMax.staggerFrom($("#"+idDiv + " .texto").eq($(this).data("texto")),35,{css:{height:0}, ease:Back.easeOut}, 25));
			 
			 if(mostrarFlecha){
				
				 if(jQuery.inArray($(this).data("texto"),cualArregloUno) == -1){
					cualArregloUno.push($(this).data("texto"));
					 //console.log(cualArregloUno);
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
			 //console.log($(this).data("cual"));
		});
		
		
		$(".botonCerrarTexto").click(function(e){
			$("#"+idDiv+" .texto").each(function(index, element) {
                $(element).fadeOut(10);
				$(element).css("overflow","hidden");
            });
		});
		
		$(".botonSig").click(function(e){
			
			
			TweenLite.to( slides.eq(currentIndex),0.7, {css:{left: -970,opacity:0}, ease:Circ.easeInOut});
			currentIndex=9;
			
			if (currentIndex < 0) currentIndex = slides.length - 1;
	        else if (currentIndex >= slides.length) currentIndex = 0;
			TweenLite.to( slides.eq(currentIndex),0.7, {css:{left:0,opacity:1}, ease:Circ.easeInOut});		
			
			//$(this).removeClass("noMostrarFlechaDer");
			$("#derecha").fadeIn(10);

			if (slides.eq(currentIndex).attr("id") == "seccionAvisoCartel") {
				$('#derecha').fadeIn(1);
				$('#izquierda').fadeIn(1);
			}
			
			$(this).fadeOut(10);
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

function audios(cual){
	currentAudio=cual+"";
	playSong(cual);
}

/***** Terminar Audio ****************/

function terminoaudio(){
	console.log(currentAudio);
	switch(currentAudio){
		/*case "1-bienvenida":
			console.log(currentAudio);
		break;*/

		case "01_yo_soy_ricardo":
						
			break;


		default:

			break;
	}
	
}

/*************************************/

/***** Show Seccion ******/
function showSeccion(index){
	  
	  
	  TweenLite.to( slides.eq(currentIndex),0.7, {css:{left:index > currentIndex ? -960 : 960,opacity:0}, ease:Circ.easeInOut});
	  currentIndex=index;
	  if (currentIndex < 0) currentIndex = slides.length - 1;
	  else if (currentIndex >= slides.length) currentIndex = 0;
	  
	  if(direccion == "der"){
		  if(slides.eq(currentIndex).attr("id") == "mostrarPrimerEscenario"){
			  currentIndex ++;
		  }
		  
		  if(slides.eq(currentIndex).attr("id") == "envioCorreoComputador"){
			 llenarTextAreasCorreo();
		  }
		  
		  
	  }else if(direccion == "izq"){
		  if(slides.eq(currentIndex).attr("id") == "mostrarPrimerEscenario"){
			  currentIndex --;
		  }
		  
		  var idSlide = slides.eq(currentIndex).attr("id");
		  cualSlide(idSlide);
		  volver2parteTablero();
		  volver3parteTablero();
		  volverparte4Tablero();
		  volverSopaDeLetras();
	  }
	  
	  
	  
	  TweenLite.to( slides.eq(currentIndex),0.7, {css:{left:0,opacity:1}, ease:Circ.easeInOut});		
	  $(slides.eq(currentIndex)).trigger('animar', []);
	  
	  //slides.eq(currentIndex).find(".textoLargo").fadeIn(10); ease:Expo.easeOut	ease:Back.easeOut
	  var tl = new TimelineMax({repeat:0, yoyo:false,align:"start"});
	  tl.append(TweenMax.staggerFrom(slides.eq(currentIndex).find(".textoLargo"),35,{css:{height:0, opacity:1}, ease:Back.easeOut}, 25));
	  
	  //slides.eq(currentIndex).find(".textoLargo").show(3000);
	  
	  var dataAudio = slides.eq(currentIndex).data("audio");
	  if(dataAudio != "" && dataAudio !=undefined){
		  stopSong();
		  audios(dataAudio);
	  }
				

	  if (currentIndex < 0) {
		  $('#izquierda').fadeOut(10);
	  }
	  
	  if (currentIndex >= slides.length) {
		  $('#derecha').fadeOut(10);
	  }
	  
	  if(slides.eq(currentIndex).is('.noMostrarFlechas')){
		  $('#derecha').fadeOut(10);
		  $('#izquierda').fadeOut(10);
	  }else{
		  if(slides.eq(currentIndex).is('.noMostrarFlechaIzq')){
			  $('#izquierda').fadeOut(10);
			  
		  }else{
			  $('#izquierda').fadeOut("slow");
			  $.timer(2000,function(e){
				  $('#izquierda').fadeIn("slow");
			  e.stop();
			  })
		  }
		  
		  if(slides.eq(currentIndex).is('.noMostrarFlechaDer')){
			  $('#derecha').fadeOut(10);
					  
		  }else{
			  $('#derecha').fadeOut(10);
			  $.timer(2000,function(e){
				  $('#derecha').fadeIn("slow");
			  e.stop();
			  })
			  
		  }
	  }
	  
	  
	  var idAnterior= slides.eq(currentIndex-1).attr("id");
	  var idSiguiente= slides.eq(currentIndex+1).attr("id");

	  if (idAnterior == "videoconferencia" || idSiguiente=="videoconferencia") {
		  var iframe = document.getElementById("frameVideo");
		  iframe.contentWindow.cerrarVideo();
		  
	  }else if(idAnterior == "primerParteCompu"){
		  llenarTextAreasCorreo();
	  }
	  
  }


/*************************/

function SeccionesSlider(){
	slides = $(".seccion");
	mensaje = "";
	direccion = "";
	
	showSeccion(currentIndex);

	stopSong();
    audios('01_yo_soy_ricardo');
	
	$(".volverEscenarioMenu").mousedown(function(e) {		
		showSeccion(6);
		var dataCualShadow = $(this).data("cualshadow");
		$("#escenario3").find("."+dataCualShadow).fadeIn(10);
    });
	
	$(".cerrarGloboPeque").mousedown(function(e) {		
		$(".globoPeque").fadeOut("slow");
		$(this).fadeOut("fast"); 
    });
	
	$("#derecha").mousedown(function(e) {
		direccion = "der";	
		showSeccion(currentIndex+1); 
		
		
    });
	
	$("#izquierda").click(function(e) {
	   direccion = "izq";	
	   showSeccion(currentIndex-1);
	});
	
	$(".terminarActividadTablero").click(function(e) {
	   showSeccion(currentIndex+1);
	});
	
	$(".cerrarShadow").click(function(e) {
	   
	   $(this).parent().fadeOut("slow");
	   $(this).parent().removeClass("noMostrarFlechaDer");
	   
	   if($(this).hasClass("chulo")){
		  showSeccion(currentIndex+1);
	   }

	});
	
	$(".terminarSopaLetras").click(function(e) {
	   
	   $(this).parent().fadeOut("slow");
	   $(this).parent().removeClass("noMostrarFlechaDer");
	   
	   if($(this).hasClass("chulo") ){
		var dataChulo = $(this).data("chulo");
	   	verMenu(dataChulo);
		siguienteActividad(3);
	   }else{
	   	$("#derecha").fadeIn("slow");
	   }
		
	   $(".postTablero").fadeIn("slow");
	});
	
	$(".cerrarShadow2").click(function(e) {
	   $(this).parent().fadeOut("slow");
	   
	   if($(this).hasClass("pasarSig")){
	   		$("#derecha").fadeIn("slow");
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
			
			showSeccion(currentIndex + 1);
			
		}
	  
	
	});
	
	$(".mostrarOtroShadow").click(function(e) {
	   var cualShadow = $(this).data("cualshadow");
	   
	   $(this).parent().find("."+cualShadow).fadeIn("slow");
	});
	
	function showMensaje(contadorAsuntosCorreo, elemento){

	   if(contadorAsuntosCorreo >= 5){
		  
		
		$("#envioCorreoComputador").find(".botonEnviarCorreo").css("cursor","pointer");
		
		$("#envioCorreoComputador").find(".botonEnviarCorreo").find("img").eq(0).fadeIn("slow");
		$("#envioCorreoComputador").find(".botonEnviarCorreo").find("img").eq(1).fadeOut(10);
		
		$("#envioCorreoComputador").find(".botonEnviarCorreo").on("click",function(e){
			  $("#envioCorreoComputador").find(".segundoShadow").fadeIn("slow");
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
	   
	   //console.log(contadorAsuntosCorreo);
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
	   /*var deQuien = $(this).parent().find(".txtDeQuien").val();
	   var paraQuien = $(this).parent().find(".txtParaQuien").val();
	   
	   var asunto = "He finalizado el curso de Comunicación Estructurada.";
	   
	   $("#envioCorreoComputador").find(".txtMensajeCorreo").each(function(index, element) {
        	mensaje = mensaje +"  |  "+ $(element).val();
       }); 
	   
	   
	   alert("De Quien: "+ deQuien);
	   alert("Para Quien: "+paraQuien);
	   alert("Asunto: "+asunto);
	   alert("Mensaje: "+mensaje);*/
	   
	   
	};
	
	
	/*function verMenu(index){
		
		TweenLite.to(slides.eq(currentIndex),0.7, {css:{left: -970,opacity:1}, ease:Circ.easeInOut});
		currentIndex=6;
		if (currentIndex < 0) currentIndex = slides.length - 1;
        else if (currentIndex >= slides.length) currentIndex = 0;
		TweenLite.to( slides.eq(6),0.7, {css:{left:0,opacity:1}, ease:Circ.easeInOut});		
		
		checkVistas(index);
		
		if(index == 1){
			$("#escenario3 .postCartelera").fadeIn(10);
			siguienteActividad(2);
		}

		$(".senor").fadeOut(10);
		$(".cerrarMensajeSenor").fadeOut(10);

		$(".botonCirculo").each(function(index, element) {
            $(element).fadeIn(10);
        });

        $(".botonCirculo").eq(1).find("img").eq(0).fadeOut(10);
		$(".botonCirculo").eq(1).find("img").eq(1).fadeIn(10);

		$(".botonCirculo").eq(2).find("img").eq(0).fadeOut(10);
		$(".botonCirculo").eq(2).find("img").eq(1).fadeIn(10);
	}*/
	
	$(".botonVolverMenu").click(function(e){
		
		var dataChulo = $(this).parent().data("chulo");
		verMenu(dataChulo);
	});
	
	$(".cerrarVolverStart").click(function(e){
		showSeccion(currentIndex+1);
	});
	
	$(".pasarOrganigrama").click(function(e){
		var dataChulo = $(this).data("chulo");
		verMenu(dataChulo);
		siguienteActividad(4);
		$("#escenario3 .postOrganigrama").fadeIn("slow");
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
	
	$(".siguiente-diapositiva").click(function(e){
		showSeccion(currentIndex + 1);
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
		showSeccion(23);
	});
	$(".botonAgenda").click(function(e){
		showSeccion(24);
	});
	
	/******* Flechas Volver Tablero ********/
	
	$(".mostrarPrimerParte1").click(function(e){
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
	});
	
	$(".mostrarPrimerParte3").click(function(e){
		$("#tablero").find(".textoTablero").eq(1).find(".terceraParte ").fadeOut(10);
		$("#tablero").find(".textoTablero").eq(1).find(".segundaParte").fadeIn(10);
		$(this).fadeOut(10);		
		$(".mostrarPrimerParte2").fadeIn(10);
		
		$("#tablero").find(".primerShadow").fadeOut(10);
		$("#tablero").find(".cuartaParte").fadeOut(10);
		
	});
	
	$(".mostrarPrimerShadow").click(function(e){
		//$("#tablero").find(".terceraParte ").fadeOut(10);
		$("#tablero").find(".primerShadow").fadeIn(10);
		$(this).fadeOut(10);		
		$(".mostrarPrimerParte3").fadeIn(10);
		
	});
	
	$(".mostrarTexto2").click(function(e){
		
		//$("#tablero").find(".segundoShadow").fadeIn(10);
		
		
		$("#tablero").find(".mostrarSec2").fadeIn(10);
		$("#tablero").find(".tercerShadow").fadeOut(10);
		
		$("#tablero").find(".segundaParte3").fadeOut(10);
		$("#tablero").find(".primerParte3").fadeIn(10);
		
		$(this).fadeOut(10);
		
		//$("#tablero").find(".segundaParte3").fadeOut(10);
		
	});
	
	$(".mostrarSec2").click(function(e){
		
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
		 
		$("#tablero").find(".mostrarTexto2").fadeIn(10);
		$("#tablero").find(".tercerShadow").fadeIn(10);
		$("#tablero").find(".cuartoShadow").fadeOut(10);
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarSextoShadow").click(function(e){
		 
		$("#tablero").find(".sextoShadow").fadeIn(10);
		$("#tablero").find(".mostrarAtrasSextoShadow").fadeIn(10);

		$(this).fadeOut(10);
		
	});
	
	$(".mostrarAtrasSextoShadow").click(function(e){
		 
		$("#tablero").find(".sextoShadow").fadeOut(10);
		$("#tablero").find(".mostrarSec2B").fadeIn(10);
		
		$("#tablero").find(".terceraParte3").fadeOut(10);
		$("#tablero").find(".segundaParte3").fadeIn(10);

		$(this).fadeOut(10);
		
	});
	
	$(".mostrarTerceraParte3").click(function(e){
		 
		$("#tablero").find(".mostrarSextoShadow").fadeIn(10);
		$("#tablero").find(".terceraParte3").fadeIn(10);
		
		$("#tablero").find(".cuartaParte3").fadeOut(10);
		

		$(this).fadeOut(10);
		
	});
	
	$(".atrasInductiva").click(function(e){
		 
		$("#tablero").find(".cuartaParte3").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		
		$("#tablero").find(".inductiva").fadeOut(10);

		$(this).fadeOut(10);
		
	});
	
	$(".atrasDeductiva").click(function(e){
		 
		$("#tablero").find(".cuartaParte3").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		
		$("#tablero").find(".deductiva").fadeOut(10);

		$(this).fadeOut(10);
		
	});
	
	$(".mostraTexto4").click(function(e){
		 
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
		 
		$("#tablero").find(".cuartaParte3").fadeIn(10);
		$("#tablero").find(".mostrarTerceraParte3").fadeIn(10);
		$("#tablero").find(".novenoShadow ").fadeOut(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarPrimerParte4").click(function(e){
		 
 	
		$("#tablero").find(".mostraTexto4").fadeIn(10);	
		$("#tablero").find(".primerParte4").fadeIn(10);
		$("#tablero").find(".segundaParte4  ").fadeOut(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".mostrarDesimoShadow").click(function(e){
 	
		$("#tablero").find(".decimoShadow ").fadeIn(10);	
		$("#tablero").find(".atrasDesimoShadow").fadeIn(10);
		
		$(this).fadeOut(10);
		
	});
	
	$(".atrasDesimoShadow").click(function(e){
 	 
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
			$("#tablero").find(".mostrarPrimerParte2").fadeIn(10);
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

	TweenLite.to( $("#izquierda"), 0.5, {css:{top:255}, ease:Strong.easeInOut});
	TweenLite.to( $("#derecha"), 0.5, {css:{top:255}, ease:Strong.easeInOut});

}



function mostrarGlobo(cualPermito){
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).addClass("permiso");
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).find("img").eq(0).fadeIn(10);
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).find("img").eq(1).fadeOut(1);
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).css("cursor","pointer");
	//$("#escenario3 .textoBotonCirculo").eq(cualPermito).fadeIn("slow");
	
}

function checkVistas(chulo){
	$(".postMandado").fadeOut(10);
	$(".postCartelera").fadeOut(10);
	$(".actividadVista").eq(chulo).fadeIn(10);
	
}

function siguienteActividad(cualPermito){
		
	
	$("#escenario3").find(".botonCirculo").eq(cualPermito).data("permiso",1);
	$("#escenario3").find(".botonCirculo").eq(cualPermito).find("img").eq(1).fadeIn(10);
	$("#escenario3").find(".botonCirculo").eq(cualPermito).find("img").eq(0).fadeOut(10);
	var contImg = 0;
	
	
	$.timer(500,function(e){
		if($("#escenario3").find(".botonCirculo").eq(cualPermito).hasClass("pararTimer")){
			$("#escenario3").find(".botonCirculo").eq(cualPermito).find("img").eq(0).fadeOut(10);
			$("#escenario3").find(".botonCirculo").eq(cualPermito).find("img").eq(1).fadeIn(10);
			e.stop();
		}
		if(contImg >= 2){
			contImg = 0;
		}

		$("#escenario3").find(".botonCirculo").eq(cualPermito).find("img").eq(contImg -1).fadeOut("fast");
		$("#escenario3").find(".botonCirculo").eq(cualPermito).find("img").eq(contImg).fadeIn("slow");
		contImg ++;
	})
	
	$("#derecha").fadeOut(10);
	$("#izquierda").fadeOut(10);
	/*$("#escenario3 .textoBotonCirculo").eq(cualPermito).fadeIn("slow");
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).find("img").eq(0).fadeIn(10);
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).find("img").eq(1).fadeOut(1);
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).css("cursor","pointer");
	$("#escenario3 .textoBotonCirculo").eq(cualPermito).addClass("permiso");*/
}

function verMenu(index){
		var slides = $(".seccion"); 
		
		TweenLite.to(slides.eq(currentIndex),0.7, {css:{left: -970,opacity:1}, ease:Circ.easeInOut});
		currentIndex=6;
		if (currentIndex < 0) currentIndex = slides.length - 1;
        else if (currentIndex >= slides.length) currentIndex = 0;
		TweenLite.to( slides.eq(6),0.7, {css:{left:0,opacity:1}, ease:Circ.easeInOut});		
		
		checkVistas(index);
		
		if(index == 1){
			$("#escenario3 .postCartelera").fadeIn(10);
			siguienteActividad(2);
		}

		$(".senor").fadeOut(10);
		$(".cerrarMensajeSenor").fadeOut(10);

		$(".botonCirculo").each(function(index, element) {
            $(element).fadeIn(10);
        });

        $(".botonCirculo").eq(1).find("img").eq(0).fadeOut(10);
		$(".botonCirculo").eq(1).find("img").eq(1).fadeIn(10);

		$(".botonCirculo").eq(2).find("img").eq(0).fadeOut(10);
		$(".botonCirculo").eq(2).find("img").eq(1).fadeIn(10);
		
		
}



/**********  Funciones para devoleverme  **********/

function cualSlide(idDiv){
	
	switch(idDiv){
		
		case "infografia":
			volverInfo();
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
			volverOrganigrama();
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
	

	$("#seccionMandado .cronometro").find("img").each(function(index, element){
		$(element).css("display","none");
	});
	
	$("#seccionMandado").find(".ocultoOrganizado").each(function(index, element){
		$(element).css("display","none");
	});
	
	$(idDiv).find(".cronometro").find("img").eq(4).fadeIn(1);
	$(idDiv).find(".cronometro").fadeOut(10);
	
	
	$(idDiv + " .cajasTexto").find(".resultadoMercado").fadeOut(10);
	$(idDiv).find(".resultadoMercadoEscritas").fadeOut(10);
	
	$(idDiv).find(".cajaDeTexto").fadeIn(10);
	$(idDiv).find(".cajasTexto").fadeOut(10);
	
	$(idDiv).find(".cerrarResultadoMercado").fadeOut(10);
	
	$(idDiv).find(".todoOrganizado").fadeOut(10);
	
	$(idDiv+" .cronometroOrganizado").find("img").each(function(index, element){
		$(element).css("display","none");
	});
	$(idDiv+" .cronometroOrganizado").find("img").eq(4).fadeIn(1);
	$(idDiv+" .cronometroOrganizado").fadeOut(10);
	
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
	
	

}


function volverOrganigrama(){
	var idDiv = "#organigrama";
	var contLeft = 0;
	
	$(idDiv +" .cajaDrag").each(function (index, element){

		$(element).find("img").eq(1).fadeOut(10);
		$(element).find("img").eq(0).fadeIn(10);

		$(element).css({top:366,left:posiciones[contLeft]});
		$(element).css("cursor","pointer");
		$(element).draggable({revert:true});
		$(element).removeClass("noMover");
		contLeft ++;
	});
	
	$(idDiv + " .todasBien").fadeOut(10);
	$(idDiv + " .todasMal").fadeOut(10);
	$(idDiv + " .pasarOrganigrama").fadeOut(10);
	$(idDiv + " .pregunta").fadeOut(10);
	
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
	
	$(idDiv).find(".primeraParte").fadeIn(10);
	
}

function volver3parteTablero(){
	var idDiv = "#parte3tablero";
	
	$(idDiv).find(".primeraParte").fadeIn(10);
	
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

/*		FIN FUNCIONES MODULO		*/

