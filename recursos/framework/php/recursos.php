<!-- lib JavaScript Externas -->
<?php
	$directorio = "proyecto/libs/";
	$lista = opendir($directorio);
	$scriptInt = '<script type="text/javascript" src="'.$directorio;

	while ($archivo = readdir($lista)){
	    if (!is_dir($directorio.'/'.$archivo)){
	        echo $scriptInt.$archivo.'"></script>';
	    }
	}
?>

<!-- Obj JavaScript Personalizados -->
<?php
$directorio = "proyecto/objs/";
$lista = opendir($directorio);
$scriptInt = '<script type="text/javascript" src="'.$directorio;

while ($archivo = readdir($lista)){
    if (is_dir($directorio.'/'.$archivo) && $archivo != '.' && $archivo != '..' && !preg_match('/off\.(.*?)/is', $archivo)){
        echo $scriptInt.$archivo.'/'.$archivo.'.js"></script>';
        echo $scriptInt.$archivo.'/'.$archivo.'.control.js"></script>';
        echo $scriptInt.$archivo.'/'.$archivo.'.logica.js"></script>';
        echo $scriptInt.$archivo.'/'.$archivo.'.render.js"></script>';
    }
}
?>

<!-- Rooms JavaScript Personalizados -->
<?php
$directorio = "proyecto/rooms/";
$lista = opendir($directorio);
$scriptInt = '<script type="text/javascript" src="'.$directorio;

while ($archivo = readdir($lista)){
    if (is_dir($directorio.'/'.$archivo) && $archivo != '.' && $archivo != '..' && !preg_match('/off\.(.*?)/is', $archivo)){
        echo $scriptInt.$archivo.'/'.$archivo.'.js"></script>';
        echo $scriptInt.$archivo.'/'.$archivo.'.controles.js"></script>';
        echo $scriptInt.$archivo.'/'.$archivo.'.logicas.js"></script>';
        echo $scriptInt.$archivo.'/'.$archivo.'.renders.js"></script>';
    }
}
?>