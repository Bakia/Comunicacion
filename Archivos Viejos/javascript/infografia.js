 var currentIndex=0;
 var arreglo3info = [];
 var arregloInfo = [];
 var arregloTablero = [];

$(document).ready(function (){
	
	init2();
	

});

function init2(){
	$("#intro").fadeOut(1);
	init();	

	TweenLite.to($(this).parent(),0.2, {css:{opacity:0},onComplete:function(){
		animaciones();
		startStage();
		SeccionesSlider();
		TweenLite.to($("#intro"),0.5, {css:{top:-1000}});

	}});
	
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
	

}



