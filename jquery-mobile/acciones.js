// JavaScript Document
$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('perro','audio/Ladrido de Perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','audio/Sonido del gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/Sonido del Caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('canario','audio/Sonido del canario.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('vaca','audio/Sonido de la Vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oveja','audio/Sonido de la Oveja.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/SONIDO DEL ELEFANTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('hiena','audio/Sonido de la Hiena.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/Sonido del león.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('lobo','audio/sonido de los lobos.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oso','audio/Sonido de Oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/Sonido del tigre.mp3',function(){},function(e){alert('Error '+e);});
		
		//reproducir las notas
		
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
audio.play($(this).attr('id'));});
		$('nota').bind('touchend',function(){$(this).removeClass('tocada');});
		
		},false); //deviceready
});//ready