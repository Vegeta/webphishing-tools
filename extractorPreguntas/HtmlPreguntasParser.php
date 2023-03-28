<?php

use voku\helper\HtmlDomParser;
use voku\helper\SimpleHtmlDomInterface;

class HtmlPreguntasParser {

	function clean($txt) {
		$txt = str_replace('&nbsp;', '', $txt);
		$txt = str_replace("\r\n", '', $txt);
		return trim($txt);
	}

	function titulos(SimpleHtmlDomInterface $cont) {
		$headers = $cont->find('div.justify-content-between');
		$spans = $headers[0]->findMulti('span');
		$titulo = $spans[1]->innertext;
		$datos['titulo'] = $this->clean($titulo);

		$head = $headers[1];
		$datos['avatar'] = $head->findOne('img')->getAttribute('src');

		$datos['sender'] = $this->clean($head->findOne('.sender a')->text);
		$email = $head->findOne('.sender span')->text;
		$email = html_entity_decode($email);
		$email = str_replace(['<', '>'], '', $email);
		$datos['email'] = $this->clean($email);

		$datos['fechaEmail'] = trim($head->findOne('div.date')->text);
		return $datos;
	}

	function content(SimpleHtmlDomInterface $cont) {
		// NOTA: aqui hay attachments pero no se puede ver
		$body = $cont->findOne('div.email-body')->innerhtml;
		$body = str_replace('&#13;', '', $body);
		return $body;
	}

	function files(SimpleHtmlDomInterface $cont) {
		$list = $cont->findMulti('div.email-attachments li');
		if ($list->count() == 0)
			return [];

		$files = [];
		foreach ($list as $item) {
			$a = $item->findOne('a');
			$name = $a->text;
			$size = $item->findOne('span.text-muted')->text;

			// clean
			$name = str_replace($size, '', $name);
			$size = str_replace("\r\n", '', $size);
			$size = preg_replace('/\s+/', ' ', $size);
			$size = str_replace(['(', ')'], '', $size);

			$rec = [
				'name' => trim($name),
				'file' => $a->getAttribute('href'),
				'size' => trim($size),
			];
			$files[] = $rec;
		}
		return $files;
	}

	function parseDocument($file) {
		//$dom = HtmlDomParser::file_get_html('data/pagina.html');
		$dom = HtmlDomParser::file_get_html($file);
		$elems = $dom->findMulti('.email-content');

		$lista = [];

		foreach ($elems as $ix => $cont) {
			$datos = $this->titulos($cont);
			$body = $this->content($cont);
			$files = $this->files($cont);

			$datos['html'] = $body;
			$datos['files'] = $files;
			$lista[] = $datos;
		}
		return $lista;
	}
}