<?php

class JsonParser {
	
	function extraerPreguntas($file) {
		$f = file_get_contents($file);
		$data = json_decode($f);

		$lista = [];
		foreach ($data->preguntas as $ix => $p) {
			$fish = \Illuminate\Support\Str::contains($p->tipo, 'Phishing');
			$rec = [
				'imagen_retro' => ($ix + 1) . '.png',
				'legitimo' => $fish ? 0 : 1,
				'explicacion' => $p->texto,
				'dificultad' => null,
			];

			foreach ($data->dificultad as $tipo => $indices) {
				if (in_array($ix, $indices))
					$rec['dificultad'] = $tipo;
			}

			$lista[] = (object)$rec;
		}
		return $lista;
	}

	function agregarDesdeHtml($preguntas, $datosHtml) {
		foreach ($preguntas as $ix => $p) {
			$more = @$datosHtml[$ix];
			if (!$more)
				continue;
			$p->subject = $more['titulo'];
			$p->nombre = $more['titulo'];
			$p->sender = $more['sender'];
			$p->email = $more['email'];
			$p->html = $more['html'];

			$datos = [
				'fechaEmail' => $more['fechaEmail'],
				'avatar' => $more['avatar'],
			];

			$p->adjuntos = json_encode($more['files']);
			$p->data = json_encode($datos);
		}
		return $preguntas;
	}

}