<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8" />
    <title>Base de juego</title>

    <!-- Esto llama la hoja de estilo -->
    <link rel="stylesheet" type="text/css" href="styles/interfaz.css">

    <!-- Objetos JavaScript Controladores-->
    <script type="text/javascript" src="recursos/framework/drivers/cargando.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/base.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/bloque.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/controlador.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/sprite.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/objastracto.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/texto.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/room.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/tile.js"></script>
    <script type="text/javascript" src="recursos/framework/drivers/gameloop.js"></script>

    <!-- Objetos JavaScript -->
    <script type="text/javascript" src="proyecto/rooms/globales.js"></script>
    <script type="text/javascript" src="proyecto/rooms/tiles.js"></script>
    <script type="text/javascript" src="proyecto/config.js"></script>
    <script type="text/javascript" src="proyecto/imagenes.js"></script>
    
    <!-- Objetos JavaScript Personalizados -->
    <?php include_once('recursos/framework/php/recursos.php'); ?>
    
</head>

<body>
    <span id="loading">0%</span>
    <canvas id="app"></canvas>
</body>
</html>		