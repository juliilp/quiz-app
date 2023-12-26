interface Respuesta {
    respuesta: string;
    isCorrect: boolean;
  }
  
 export  interface Pregunta {
    pregunta: string;
    respuestas: Respuesta[];
    respuestaUser: boolean;
  }