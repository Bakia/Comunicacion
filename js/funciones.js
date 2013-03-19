var preload =true;
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
	
	
	SeccionesSlider();
	
	
	$(".txt_act_compu").keydown(function(e){
		$(".txt_act_compu").each(function(index, element) {
			if($(element).val() != "" && $(element).val() != " "){
				cont_text_art_compu ++;
				
				if(cont_text_art_compu >= 9){
					$("#derecha").fadeIn("fast");
					$("#izquierda").fadeIn("fast");
				}
				
			}else{
				cont_text_art_compu = 0;
			}
            
        });
	});
	
	
	
	$(".seccion").bind("terminaranimaciondesalida", function(){
		
		var idDiv = $(this).attr("id");
		
		switch(idDiv){
			case "parte2tablero":
			break;
			
			default:
				$(this).addClass("visto");
			break;
		}
		
		
	});
	
	$(".sec_esc_mensaje").bind("empezoanimaciondeentrada", function(){
			
		llenarTextAreasCorreo();
		
	});
	
	$(".act_mandado").bind("terminaranimaciondesalida", function(){
		volverMandado();
	});
	
	$(".act_cartelera_anuncio").bind("terminaranimaciondesalida", function(){
		volverCarteleraAnuncios();
	});
	
	
	$(".act_pintar").bind("terminaranimaciondesalida", function(){
		volverActividadPintar();
	});
	
	$(".act_logica_mensaje").bind("terminaranimaciondesalida", function(){
		volver_logica_mensaje();
	});
	
	
	$(".act_organigrama").bind("terminaranimaciondesalida", function(){
		reIniciarOrganigrama();
	});
	
	$(".act_sopa_letras").bind("terminaranimaciondesalida", function(){
		volverSopaDeLetras();
	});
	
	
	
	$(".circulo_gris").click(function(e){
		$(this).parent().find(".globo_boton").fadeOut("slow");
		
		$(this).parent().find(".globo_gris").each(function(index, element) {
            $(element).hide();
        });
		
		var cual = $(this).data("cual");
		
		$(this).parent().find(".globo_gris").eq(cual).fadeIn("fast");
		
	});
	
	$(".circulo_azul").click(function(e){
		$(this).parent().find(".globo_gris").each(function(index, element) {
            $(element).hide();
        });
		
		$(this).parent().find(".globo_boton").fadeIn("slow");
	});
	
	
	
	$(".cerrar_globo").click(function(e){
		var idDiv = $(this).parent().attr("id");
		$("#"+idDiv+" .globo_pre_cartelera").fadeOut("fast");
		$("#"+idDiv+" .globo").fadeOut("fast");
		$("#"+idDiv+" .senor").fadeOut("fast");
		
		$("#"+idDiv+" .flecha_ant").fadeOut("fast");
		$("#"+idDiv+" .flecha_sig").fadeOut("fast");
		
		$("#"+idDiv+" .circulo_gris").each(function(index, element) {
            $(element).fadeIn("fast");
        });
		
		$("#"+idDiv+" .circulo_azul_chulo").fadeIn("fast");
		$("#"+idDiv+" .circulo_azul").fadeIn("fast");
		$("#"+idDiv+" .globo_boton").fadeIn("fast");
		$(this).fadeOut("fast");
		
	});
	
	
	
	

	/*		INICIO FUNCIONES INLINE		*/

	$(".cajaDeTexto").keydown(function(e){
		$(".botonFinalizar").fadeIn("slow");
	});
	
	
	$("#prod_de_mas").keydown(function(e){
		
		$(this).parent().parent().find(".cajaDeTextoOrg").each(function(index, element) {
            if($(element).val() != "" && $(element).val() != " "){
				if($(this).val() != "" && $(this).val() != " "){
				//$(".botonFinalizarOrganizado").fadeIn("slow");
				}
			}
        });
		
		
	});
	
	$("#prod_de_mas").validarCampo("0123456789");
	
	
	
	
	$("#escenario_cartelera").bind("terminaranimaciondeentrada", function(e){
		show_sec_interna("#escenario_cartelera");
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

	
	/*		FIN FUNCIONES INLINE			*/




	/*		INICIO FUNCIONES MODULO			*/

	
	/*sopa de letras*/
	$(".letra").actividadsopaletras();
	$("#izquierdashadowbox").clicshadowbox(3);
	$("#derechashadowbox").clicshadowbox(3);
	$("#empezarActividadSopaLetras").cerrarinstrucciones();
	/**/
	
	$("#infografia").botonTexto(arregloBotones,arregloInfo,2,false,false,false);
	$("#texto3info").botonHover(arreglo3info,5,true);
	
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
	
	//$("#logicaMensaje").botonTexto(arregloBotones,arregloLogicaMensaje,2,true,false,false);
	//$("#logicaMensaje").botonDejarText();
	
	$("#organigrama").actividadOrganigrama();
	
	$("#tablero").actividadTablero(arregloTablero, 4, false);

	$("#confimarCorreo").actividadCorreo();


	/*		FIN FUNCIONES MODULO			*/
	
	$("#envioCorreoComputador").find(".txtMensajeCorreo").keydown(function(e){
		
		$("#envioCorreoComputador").find(".txtMensajeCorreo").each(function(index, element) {
			
			if($(element).val() != ""  &&  $(element).val() != " "){
				todas_llenas ++;
				
				if(todas_llenas >= 5){
					$("#envioCorreoComputador").find(".botonEnviarCorreo").css("cursor","pointer");
					$("#envioCorreoComputador").find(".botonGris_correo").fadeOut(10);
					
				}
				
				//console.log(todas_llenas);
				
			}else{
				todas_llenas = 0;
			}
			
		});
		
	});
	
	
	
}

function terminoaudio(){
	//console.log(currentAudio);
	
	//var tl = new TimeLineMax({repeat:0, yoyo:false});
	
	switch(currentAudio){
			
			/*
			case "1":
				$("body").elearningHTML('showSeccion',(currentIndex + 1));
			break;
			*/

			
			case "01_yo_soy_ricardo":
				stopSong();
				audios("01_2_yo_soy_ricardo");
			break;
			
			case "01_2_yo_soy_ricardo":
				$("#infografia").find(".cerrarShadow2").fadeIn("fast");
			break;
			
			case "02_0_ahora_que_ya":
				stopSong();
				audios("02_1_pues_bien");
			break;
			
			case "02_1_pues_bien":
				$("#derecha").fadeIn("fast");
			break;
			
			case "03_0_un_dia_mama":
				stopSong();
				audios("03_1_estos_fueron");
			break;
			
			case "03_1_estos_fueron":
				$("#seccionMandado").find(".botonEmpezar").fadeIn("fast");
			break;
			
			case "05_ahora_prueba":
				$("#seccionMandado").find(".botonEmpezarOrganizado").fadeIn("fast");
			break;
			
			
			case "07_1_lo_mas_probable":
				stopSong();
				audios("07_2_para_eso");
				
				$("#seccionMandado").find(".texto_final_mandado").eq(1).fadeIn("slow");
				//tl.append(TweenLite.from($("#seccionMandado").find(".texto_final_mandado").eq(1) , 1 , {css:{top:-1000}}));
				
			break;
			
			case "07_2_para_eso":
				$("#seccionMandado").find(".siguiente-diapositiva").fadeIn("slow");
				$("#izquierda").fadeIn("fast");
			break;
			
			
			case "08_ahora_te":
			case "11_6_aviso_mural":
			
			case "12_1_el_viernes":
			case "13_2_aparecera_el_cometa":
			
			case "15_volvamos_stars":
			case "16_a_continuacion":
			
			case "18_3_orden_logico":
			
			
				$("#derecha").fadeIn("fast");
			break;
			
			
			case "11_1_comunica_dir_gerente":
			case "11_2_comunica_gerente_recursos":
			case "11_3_comunica_recur_jefep":
			case "11_4_comunica_jefep_jefet":
			//case "11_5_comunica_jefet_jefeb":
				
				$("#carteleraAnuncios").find(".botonCerrarTexto").eq(cont_cerrar_globo).fadeIn("fast");
				
				cont_cerrar_globo ++;
				
				if(cont_cerrar_globo >= 4){
					cont_cerrar_globo = 0;
				}
				
				
			break;
			
			case "11_5_comunica_jefet_jefeb":
				
				$("#carteleraAnuncios").find(".botonCerrarTexto").eq(4).fadeIn("fast");
				$("#seccionMandado").find(".siguiente-diapositiva").fadeIn("slow");
				
			break;
			
			
			
			case "19_2_crees_que_las_ideas":
				$("#organigrama").find(".botonRespOrg").fadeIn("slow");
				$("#organigrama").find(".cuadro_resp").fadeIn("slow");
			break;
			
			/****	ESCENARIO CARTELERA	****/
			case "09_0_estas_son":
				$("#escenario_cartelera").find(".flecha_sig").fadeIn("slow");
			break;
			
			case "10_para_comenzar":
				$("#escenario_cartelera").find(".cerrar_globo").fadeIn("slow");
			break;
			
			
			case "12_0_vez_como_una_com":
				stopSong();
				audios("12_1_el_viernes");
				
				$("#com_bien_est").find(".textoCentral").fadeIn("slow");
			break;
			
			case "11_0_mostraremos_comunicado":
				$("#carteleraAnuncios").find(".globo_cartelera").hide();
				
				$.timer(1000, function(e){
					$("#carteleraAnuncios").find(".boton").eq(0).trigger("click");
					e.stop();
				});
				
				
			break;
			
			
			case "13_0_si_la_primera":
				stopSong();
				audios("13_1_el_viernes_proximo");
				
				$("#msn_bien_est").find(".textoCentral").fadeIn("slow");
			break;
			
			case "13_1_el_viernes_proximo":
				stopSong();
				audios("13_2_aparecera_el_cometa");
				
			break;
			
			case "14_2_pudiste_ver_diferencia":
				stopSong();
				audios("14_2_ahora_vamos");
			break;
			
			case "14_2_ahora_vamos":
				$("#escenario_tablet").find(".cerrar_globo").fadeIn("fast");
			break;
			
			
			
			case "18_0_te_recuerdo":
				stopSong();
				audios("18_1_las_ideas");
				
				$("#logicaMensaje").find(".boton").eq(0).find("img").eq(0).hide();
				$("#logicaMensaje").find(".boton").eq(0).find("img").eq(1).show();
				
				$("#logicaMensaje").find(".texto").eq(0).show();
				
			break;
			
			case "18_1_las_ideas":
				stopSong();
				audios("18_2_agrupacion");
				
				$("#logicaMensaje").find(".boton").eq(1).find("img").eq(0).hide();
				$("#logicaMensaje").find(".boton").eq(1).find("img").eq(1).show();
				
				$("#logicaMensaje").find(".texto").eq(1).show();
			break;
			
			case "18_2_agrupacion":
				stopSong();
				audios("18_3_orden_logico");
				
				$("#logicaMensaje").find(".boton").eq(2).find("img").eq(0).hide();
				$("#logicaMensaje").find(".boton").eq(2).find("img").eq(1).show();
				
				$("#logicaMensaje").find(".texto").eq(2).show();
			break;
			
			
			case "20_muy_bien_ahora_volvamos":
				$("#escenario_tablero").find(".cerrar_globo").fadeIn("fast");
			break;
			
			
			
			case "21_1_contesta_la":
				stopSong();
				audios("21_2_para_contestar");
				
				$("#tablero").find(".textoTablero").eq(0).fadeIn("fast");
			break;
			
			case "21_2_para_contestar":
				stopSong();
				audios("21_3_determinar_el_mensaje");
				
			break;
			
			case "21_3_determinar_el_mensaje":
				$("#tablero").find(".textoTablero").eq(0).find(".siguienteNumero").fadeIn("fast");
			break;
			
			
			case "22_1_describe_el":
				$("#tablero").find(".textoTablero").eq(1).fadeIn("fast");
				stopSong();
				audios("22_2_la_introduccion_le");
			break;
			
			
			case "22_2_la_introduccion_le":
				$("#tablero").find(".primeraParte .ocultarPrimerParte").fadeIn("fast");
			break;
			
			case "23_2_aprenderse_modelo":
				$("#tablero").find(".segundaParte .ocultarPrimerParte").fadeIn("fast");
			break;
			
			
			case "24_1_situacion":
				stopSong();
				audios("24_2_amenaza");
			break;
			
			case "24_2_amenaza":
				stopSong();
				audios("24_3_pregunta");
			break;
			
			case "24_3_pregunta":
				stopSong();
				audios("24_4_respuesta");
			break;
			
			
			case "24_4_respuesta":
				$("#tablero").find(".terceraParte .ocultarPrimerParte").fadeIn("fast");
			break;
			
			
			case "25_ahora_veamos":
				$("#tablero").find(".primerShadow .ocultarPrimerParte").fadeIn("fast");
			break;
			
			case "26_2_cada_grupo_ideas":
				$("#tablero").find(".segundoShadow .pasarSiguiente").fadeIn("fast");
			break;
			
			
			case "26_1_provee_soporte":
				stopSong();
				audios("27_2_decide_que_nueva");
			break;
			 
			case "27_2_decide_que_nueva":
				$("#tablero").find(".primerParte3 .ocultarTerceraParte").fadeIn("fast");
			break;
			
			
			case "28_ahora_veamos_aplicado":
				$("#tablero").find(".tercerShadow .ocultarTerceraParte").fadeIn("fast");
			break;
					
					
			case "29_que_preguntas":
				$("#tablero").find(".cuartoShadow .ocultarTerceraParte").fadeIn("fast");
			break;	
			
			case "30_tus_respuestas_parecidas":
				$("#tablero").find(".sextoShadow .ocultarTerceraParte").fadeIn("fast");
			break;
			
			case "31_3_ahora_que_viste_el":
				$("#tablero").find(".septimoShadow .ocultarTerceraParte").fadeIn("fast");
			break;	
			
			case "31_5_ahora_que_viste_el_ejemplo":
				$("#tablero").find(".octavoShadow .ocultarTerceraParte").fadeIn("fast");
			break;	
			
			
			case "33_1_haz_tu":
				stopSong();
				audios("33_2_usa_lenguaje");
			break;
			
			case "33_2_usa_lenguaje":
				stopSong();
				audios("33_3_manten_el_lenguaje");
			break;
				
			case "33_3_manten_el_lenguaje":
				$("#tablero").find(".primerParte4 .ocultarCuartaParte").fadeIn("fast");
			break;
			
			
			case "34_1_estructura_tu_mensaje":
				stopSong();
				audios("34_2_haz_que_el");
			break;
			
			case "34_2_haz_que_el":
				$("#tablero").find(".segundaParte4 .ocultarCuartaParte").fadeIn("fast");
			break;
			
			case "35_antes_de_terminar":
				$("#tablero").find(".decimoShadow .ocultarCuartaParte").fadeIn("fast");
			break;
			
			
			case "34_1_estructura_tu_mensaje":
				$("#tablero").find(".decimoShadow .ocultarCuartaParte").fadeIn("fast");
			break;
			
			case "32_muy_bien_veamos":
				$("#tablero").find(".novenoShadow .pasarSiguiente").fadeIn("fast");
			break;
			
			
			case "36_1_mensaje_princi":
				
				$("#tablero").find(".terceraParte4 .botonTerceraParte4").eq(1).trigger("click");
				
			break;
			
			case "36_2_la_sustentacion":
				
				$("#tablero").find(".terceraParte4 .botonTerceraParte4").eq(2).trigger("click");
				
			break;
			
			case "36_3_cada_mensaje":
				
				$("#tablero").find(".terceraParte4 .botonTerceraParte4").eq(3).trigger("click");
				
			break;
			
			case "36_4_es_apropiado":
				
				$("#tablero").find(".terceraParte4 .botonTerceraParte4").eq(4).trigger("click");
				
			break;
			
			case "36_5_docu_amigable":
				
				$("#tablero").find(".terceraParte4 .botonTerceraParte4").eq(5).trigger("click");
				
			break;
			
			case "37_ya_que_tienes":
				$("#parte2tablero").find(".primeraParte .cerrarShadow").fadeIn("fast");
			break;
			
			
			case "38_ahora_que_tienes_piramide":
				$("#parte2tablero .agenda_parte2").find(".primeraParte .cerrarShadow2").fadeIn("fast");
			break;
			
			
			case "39_ahora_comparalo":
				$("#parte4tablero").find(".primeraParte .cerrarShadow2").fadeIn("fast");
			break;
			
			case "40_anota_ahora":
				$("#parte4tablero").find(".segundoShadow  .cerrarShadow2").fadeIn("fast");
			break;
			
			case "41_3_comencemos_encuentra":
				$("#sopaDeLetras").find("#empezarActividadSopaLetras").fadeIn("fast");
			break;
			
			case "41_4_muy_bien":
				//$("#sopaDeLetras").find(".terminarSopaLetras").fadeIn("fast");
				$("#derecha").fadeIn("fast");
				$("#izquierda").fadeIn("fast");
			break;
			
			case "42_mientras_hacias":
				$("#escenario_computador").find(".cerrar_globo").fadeIn("fast");
			break;
			
			
			case "43_siendo_concecuente":
				$("#derecha").fadeIn("fast");
				$("#izquierda").fadeIn("fast");
			break;
			
			case "44_te_acuerdas":
				$("#primerParteCompu").find(".shadow_piramide_correo .cerrarShadow2").fadeIn("fast");
			break;
			
			case "45_ahora_que_ya":
				$("#envioCorreoComputador").find(".shadow_conf_correo .cerrarShadow2").fadeIn("fast");
			break;
			
			case "46_1_solo_adquirimos":
				stopSong();
				audios("46_2_para_comprobar");
				$("#ultimoSlide").find(".texto_2").fadeIn("fast");
			break;
			
			case "46_2_para_comprobar":
				$("#ultimoSlide").find(".flechaUltimoSlide").fadeIn("fast");
			break;
			 
			 
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






