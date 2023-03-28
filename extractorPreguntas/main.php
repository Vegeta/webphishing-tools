<?php
require 'vendor/autoload.php';

/**
 * Este script hace lo siguiente:
 * - Cargar configuracion
 * - Cargar las preguntas extraidas del json del frontend
 * - Analizar el html de la pagina web del frontend
 *   - Extraer cada pregunta por separado
 *   - Limpiar un poco el codigo
 * - Emparejar la data de preguntas con el contenido html
 * - Generar registros para cada pregunta
 * - Guardar las preguntas en la base de datos Postgres
 */

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$envVars = $dotenv->load();

$serv = new JsonParser();
$preguntas = $serv->extraerPreguntas('data/preguntas.json');

$parser = new HtmlPreguntasParser();
$listaHtml = $parser->parseDocument('data/pagina.html');
$preguntas = $serv->agregarDesdeHtml($preguntas, $listaHtml);

$db = new PhishDatabase();
$db->init();
$db->saveData($preguntas);








