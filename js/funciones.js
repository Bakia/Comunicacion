var preload=true;
var currentAudio="";



/* 
	SI NO HAY AUDIOS: 
		
		- DESCOMENTAR LAS SIGIUENTES LINEAS 
		- COMENTAR EL JAVASCRIPT DE PANO DE CADA HTML 

*/
/*
$(document).ready(function(e) {
    listo();
});
function stopSong(){
	//console.log("parar audio");
}
function playSong(){
	//console.log("play audio");
}
*/

function listo(){
	if(preload){
		$("body").queryLoader2({
			barColor: "#6c1f7f",
			backgroundColor: "#ffffff",
			onComplete:init,
			percentage: true,
			barHeight: 1,
			completeAnimation: "grow",
			minimumTime: 500
		});
	}else{
		init();
	}
}
function init(){
	
	$("body").elearningHTML({
		onInitComplete:iniciar,
		widthSlide:960
	});
}
function audios(cual){
	currentAudio=cual+"";
	playSong(cual);
}


function iniciar(){

	/*		INICIO FUNCIONES INLINE		*/

	$(".cajaDeTexto").keydown(function(e){
		$(".botonFinalizar").fadeIn("slow");
	});
	
	$(".cajaDeTextoOrg").keydown(function(e){
		$(".botonFinalizarOrganizado").fadeIn("slow");
	});
	
	$(".bajarPerfil").click(function(e){
		$(".perfil").css({height:181});
		$(".perfilPequeno").fadeOut("fast");
		$(".perfilGrande").fadeIn("slow");
		
		$(this).fadeOut(10);
		$(".subirPerfil").fadeIn(10);
	});
	
	$(".subirPerfil").click(function(e){
		$(".perfil").css({height:86});
		$(".perfilGrande").fadeOut("slow");
		$(".perfilPequeno").fadeIn("slow");
		
		$(this).fadeOut(10);
		$(".bajarPerfil").fadeIn(10);
	});
	
	$(".cerrarMiniMensaje").click(function(e){
		$(this).fadeOut("fast");
		$(".miniMensaje").fadeOut("slow");
	});
	
	$("textarea").keydown(function(e){
		//if($(this).parent().data("escribir") == 1){
			$(this).parent().parent().find(".ocultarTerceraParte").fadeIn("slow");
		//}
		
	});

	SeccionesSlider();
	
	/*		FIN FUNCIONES INLINE			*/




	/*		INICIO FUNCIONES MODULO			*/

	
	/*sopa de letras*/
	$(".letra").actividadsopaletras();
	$("#izquierdashadowbox").clicshadowbox(3);
	$("#derechashadowbox").clicshadowbox(3);
	$("#empezarActividadSopaLetras").cerrarinstrucciones();
	/**/
	
	
	
	$("#infografia").botonTexto(arregloBotones,arregloInfo,3,false,false,false);
	$("#texto3info").botonHover(arreglo3info,4,true);
	
	$("#actividadEscenario1").botonTexto(arregloBotones,arregloEscenario1,3,true,false,false);
	
	$("#escenario3").actividadEscenario();
	$("#seccionMandado").actividadEscenario(1);
	
	$("#seccionMandado").actividadMandado();
	
	$("#carteleraAnuncios").botonTexto(arregloBotones,arregloCartelera,5,false,true,true);
	$("#actividadReflexiones").botonTexto(arregloBotones,arregloReflexiones,4,true,false,false);
	
	$("#volvamosStart").actividadMandado();

	$("#actividadMitos").actividadMitos();

	$("#infoHalley").botonTexto(arregloBotones,arregloInfoHalley,8,true,false,false);
	
	$("#preguntaInfoHalley").actividadPregunta();
	$("#actividadPintar").actividadPintar();
	
	$("#logicaMensaje").botonTexto(arregloBotones,arregloLogicaMensaje,3,true,false,false);
	
	$("#organigrama").actividadOrganigrama();
	
	$("#tablero").actividadTablero(arregloTablero, 4, false);

	$("#confimarCorreo").actividadCorreo();


	/*		FIN FUNCIONES MODULO			*/
	
}

function terminoaudio(){
	//console.log(currentAudio);
	switch(currentAudio){
			
			/*
			case "1":
				$("body").elearningHTML('showSeccion',(currentIndex + 1));
			break;
			*/

			/*		INICIO AUDIOS MODULO 1		*/
			
			/*case "2":
				stopSong();
				audios("3");
			break;*/
			
			/*		FIN AUDIOS MODULO 1			*/
				
								
			default:
				// $("#derecha").fadeIn();
			break;
			
	}
}




// MOSTRAR FLECHAS
function mostrarFlechaDer () {
	$("#derecha").fadeIn(300);
}
function mostrarFlechaIzq () {
	$("#izquierda").fadeIn(300);
}
function mostrarFlechas () {
	$("#izquierda").fadeIn(300);
	$("#derecha").fadeIn(300);
}






