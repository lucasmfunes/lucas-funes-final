class ServerError extends Error {
  constructor(message, statusCode) {
    //const message = `Internal server error - ${messageParam}`;
    super(message);
    this.statusCode = statusCode;
  }
}

class Error500 extends ServerError {
  constructor() {
    const statusCode = 500;
    const message = "Error interno del servidor";
    super(message, statusCode);
  }
}

class Error404 extends ServerError {
  constructor() {
    const statusCode = 404;
    const message = "Palabra no encontrada";
    super(message, statusCode);
  }
}

module.exports = {
  ServerError,
  Error500,
  Error404,
};