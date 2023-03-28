const constants = {
  testPhishingApi: {
    //url: "https://test-phishing-api.azurewebsites.net/api/"
    url: "http://localhost:8001/api/"

  }
};

const constantsCarrerasList = [
  "Ingeniería y Tecnología",
  "Administración y Administración Pública",
  "Arquitectura Moda y Diseño",
  "Arte y Bellas Artes",
  "Ciencias Políticas",
  "Ciencias Sociales y Humanidades",
  "Contabilidad",
  "Derecho y Leyes",
  "Educación",
  "Física y Química",
  "Hotelería, Gastronomía y Turismo",
  "Matemática, Economía y Finanzas",
  "Psicología y Ciencias del Comportamiento",
  "Salud y Medicina",
  "Seguridad, Criminología y Estudios Forenses",
  "Veterinaria",
  "Otros"
];


const constantsEjercicios = [
  "Phishing", //1
  "Phishing", //2
  "Phishing", //3
  "Phishing", //4
  "Phishing", //5
  "Phishing", //6
  "Phishing", //7
  "Legítimo", //8
  "Legítimo", //9
  "Legítimo", //10
  "Legítimo", //11
  "Phishing", //12
  "Phishing", //13
  "Legítimo", //14
  "Legítimo", //15
  "Legítimo", //16
  "Legítimo", //17
  "Legítimo", //18
  "Legítimo", //19
  "Phishing"]; //20

const constantsPreguntas = {
  pregunta1: "Me preocupan los ataques informáticos",
  pregunta2: "Estoy en peligro por los ciber-ataques",
  pregunta3: "Los ciber-ataques son un riesgo real",
  pregunta4: "Me puede ocurrir un ciber-ataque",
  pregunta5: "En caso de un ciber-ataque, ¿Puedo perder dinero?",
  pregunta6: "Tengo temor que en un ciber-ataque accedan a mi información personal",
  pregunta7: "Me siento inseguro por los ciber-ataques"
};

const constantsRetroalimentacion =
  [
    {
      url: "./../../../../assets/images/retroalimentacion/1.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación.  La URL del archivo pdf se dirige a una url desconocida  que
      es “CoronaVirus_Safety.pdf.zip” , es decir cuando descarguemos el adjunto en
      realidad se descarga un archivo comprimido que pretende secuestrar nuestra
      información. Saludo y contenido genérico, el correo no proviene de un dominio
      de institución de salud, contenido persuasivo, tema de interés actual`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/2.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación y Texto adicional. La URL a donde se dirige el archivo adjunto
      en este caso es la siguiente:   https://driver.google.com/danna.johonson.docx.exe
      , la plabra correcta es “drive” y no  “driver” la URL correcta empezaría con
       https://drive.google.com , además, la URL va dirigida a un archivo ejecutable
      .exe y no a un documento como el mensaje quiere dar a conocer.
      Comunicado institucional usa correo personal, texto corto y preciso, en un
      ámbito laboral podría causar confusión y credibilidad`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/3.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación y Texto adicional. La URL a la que se dirige el mensaje de
      CAMBIAR CONTRASEÑA es la siguiente: https://wwww.myaccount.google.com-seguritysetting-mt.segurity.org/signon/
      en este caso se tiene cuatro “w” en el subdominio de la dirección y se dirige a una URL desconocida.
      Google no envía links para cambio de claves, el saludo es muy informal, el contenido
      es persuasivo, correo electrónico no pertenece al de soporte de Google  `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/4.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación y Texto Adicional. La URL se esconde detrás de el enlace Ver
      Foto   https://wwww.driver.google.com.download-photo.system.net/ft1537PD el
      enlace se dirige a una URL que tiene un texto adicional, tiene cuatro w en
      el suddominio del enlace, por lo tanto no se dirige a un enlace propio de
      Google Drive, además la palabra correcta del dominio es “drive”.
      Correo llama la atención del usuario, es corto y preciso, puede causar
      sospecha, correo de personas desconocidas, Enlace del adjunto es sospechoso,
      dominio de la foto es raro`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/5.png",
      tipo: "Phishing Detectado.",
      texto: `Texto manipulado y Ofuscación. La URL que se nos presenta no corresponde
       a una URL original https://www.dropbox/documento_aceptacion.pdf ya que le falta
       en la dirección la extensión (.com) , así mismo, cuando nos posicionamos sobre
       el enlace nos muestra una dirección diferente
      https://www.dropbox-com.syst.biz/documento_aceptacion.pdf.exe . En el enlace
      orginal sería https://www.dropbox.com/ , adicionalmente el destino final de la
      url es un archivo ejecutable .exe .
      Dominio del Adjunto no es Dropbox, Comunicado institucional usa correo personal,
       Saludo cordial, Caso real en caso de estar en proceso de búsqueda de trabajo la
       persona podría ser víctima `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/6.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación, Texto adicional. La URL a la que se dirige es la siguiente:
      https://www.bancopichincha.com/Verificacion?cliente43524jkr4ish a simple vista
      se diría que es correcta la dirección pero cuando nos posicionamos sobre ella la
      verdadera dirección a la que se dirige es : https://www.bancopichinca.com/
      cssVerificacion?pagemane=v_cliente43524jkr4ish en la que el dominio no corresponde
      a la del Banco.
      No hay coincidencia de los dominios del correo con el del enlace, contenido llama
      la atención del usuario, saludo `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/7.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación y Texto adicional. La URL que se presenta en el mensaje “Seguros
      Internacionales”, pero al posicionarnos sobre el mismo a la verdadera dirección a la
       que nos envía es a la siguiente https://seguro-internacional.commonnet/0/deposito/registro.php
       , donde posiblemente sea un formulario para que el usuario llene con datos importantes
       . Comunicado institucional usa correo personal, Hace referencia a un retiro de dinero, capta la
        atención del usuario, el correo de entrada no pertenece al remitente. `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/8.png",
      tipo: "Legítimo.",
      texto: `Correcta. Esta URL va dirigida a un dominio correcto y la misma url es la que aparece
      cuando nos posicionamos sobre el enlace al que pide acceder https://mesa10.ups.edu.ec/.
      Email proviene de un correo institucional, saludo cordial y formal `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/9.png",
      tipo: "Legítimo.",
      texto: `Correcta. La URL presentada pertenece al dominio de GitHub, así mismo al posicionarnos
      sobre el enlace, la URL a la que se dirige es la misma https://github.blog/2020-12-15-token-
      authentication-requirements-for-git-operations/
       . Dominios si pertenecen a github, Caso real `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/10.png",
      tipo: "Legítimo.",
      texto: `No tiene URL
      . Correo de notificación del banco, con dominio del mismo,
      saludo cordial y Formal, Contenido con información concreta`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/11.png",
      tipo: "Legítimo.",
      texto: `Los enlaces a los que se direcciona con enlaces propios de la
      plataforma de Linkedin, en el enlace “Descubre las novedades” nos
      redirecciona a la siguiente direccion  https://www.linkedin.com/comm
      /feed/?midToken=AQEPN7hXTR_l4w por lo que es una direccion correcta
       . El mensaje solo notifica al usuario, es concreto, no le pide llenar
       datos, y es una notificación real ya que el dominio del correo de donde
       proviene el mensaje corresponde al de la empresa `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/12.png",
      tipo: "Phishing Detectado.",
      texto: `Texto adicional. La URL que se presenta no corresponde a ningún
      enlace seguro proveniente de amazon o sus dominios oficiales, amazon tiene
      la siguiente URL  https://www.amazon.com/  la extensión y el dominio de la
      url que muestra el ejercicio son incorrectos, la URL donde se dirige posiblemente
       sea un formulario para pedir datos personales http://www.b20-amazon.top/amazon/
       encuesta.php?_t=25468002663.
       El correo electrónico notifica que se ganará un premio al contestar una encuesta,
        pero la url que se adjunta no corresponde a los dominios oficiales. Le muestra el
        conteo de minutos restantes para delimitar el accionar y presionar al usuario.`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/13.png",
      tipo: "Phishing Detectado.",
      texto: `Ofuscación y Texto adicional. La URL que se presenta no corresponde a ningún
       enlace seguro proveniente de amazon o sus dominios oficiales, la URL original de
       amazon es https://www.amazon.com/ y la que se muestra en el ejercicio no tiene
       similitud.
       La url no está registrada en los dominios oficiales de la marca comercial,
       utiliza texto persuasivo para engañar al usuario `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/14.png",
      tipo: "Legítimo.",
      texto: `La URL es correcta, al posicionarnos sobre el enlace que nos muestra nos
      redirige a esa misma dirección, así mismo es un enlace correcto de Google forms
      . El mensaje proviene de un correo electrónico institucional, en este caso del
      gobierno, el contenido es claro, no pretende pedir información personal`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/15.png",
      tipo: "Legítimo.",
      texto: `No presenta URL
      . Correo de notificación de ingreso de banca web de una entidad financiera,
       muestra datos importantes para el usuario, no le pide ingresar a ningún
       enlace, el mensaje es concreto y preciso `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/16.png",
      tipo: "Legítimo.",
      texto: ` Correo de notificación de marca comercial, Saludo cordial,
      Contenido con información de pedido de compra, no pide al usuario
      un accionar solo notifica`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/17.png",
      tipo: "Legítimo.",
      texto: ` En el botón “Quiero pagar” se nos redirige a un enlace correcto
       de la entidad financiera https://click.email.pichincha.com/?qs=735c53834
       d80f89f5b53f1c3adff0e1e0b43012ae89b9ee4f6f9a2e47321b9de340a93c4b892f1ef228781e
       f713519978ab43d1cab8774fb y en el mismo contexto en el botón “Pagar en Banca
       Web” nos redirige al Login de la banca Web propia del banco https://click.email
       .pichincha.com/?qs=782c2cb9bb74da5bf066f3c9bcf33824308458b50cf813e806d211b909e
       f12c08ad0d94bbf79b2051934278f6165274036b2719e8adebff
      . Correo electrónico correcto con dominio del banco, no pide información personal,
       el contenido directo, URL correctas`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/18.png",
      tipo: "Legítimo.",
      texto: `los archivos adjuntos no se redireccionan a enlaces distintos,
      son archivos propios de un formato de factura electrónica. Correo de
      notificación de recepción de factura de compra, Saludo cordial
      y Formal, Contenido con información concreta, el correo electrónico es institucional`
    },
    {
      url: "./../../../../assets/images/retroalimentacion/19.png",
      tipo: "Legítimo.",
      texto: ` Los enlaces son correctos, propios de Udemy, por ejemplo el curso de Python,
       su url es https://e2.udemymail.com/ls/click?upn=ZF3sOyS2SxEPIoSZT6Aoc-2BEAPso9xRA49IDb
       kpAnXinASgRYWgpgjFukO0XzyuRhqrs..., el dominio es correcto
      . Correo electrónico es de una empresa de cursos online, el contenido informativo,
      no pide accionar ni presiona al usuario `
    },
    {
      url: "./../../../../assets/images/retroalimentacion/20.png",
      tipo: "Phishing Detectado.",
      texto: `Texto manipulado. La URL que se nos presenta no es la que pertenece a la entidad
       financiera, https://www.bancoguayaquiI.com/Extra?Download-html ya que el dominio se está
        escribiendo guayaquiI con “i I” mayúscula cuando sería guayaquil con “L”
      . Correo de notificación del banco, pide al usuario realizar una acción al presionar la
      URL para lograr un descuento, el contenido es persuasivo, asunto del correo llama la
      atención del usuario`
    }

  ];

  const constantsEjerciciosList = [
    [3, 4, 5, 6, 7, 11, 12, 14, 15, 19], // Faciles
    [0, 2, 8, 9, 16], // Intermedio
    [1, 10, 13, 17, 18] // Dificil
  ];


  export { constants, constantsEjercicios, constantsPreguntas, constantsRetroalimentacion, constantsCarrerasList, constantsEjerciciosList };
