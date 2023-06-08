import { io } from "../app/server.js";
import { mmg } from "../dao/mongoose/messages.manager.mg.js";
import Messages from "../models/Messages.model.js";

export async function socketChat(clientSocket) {
  clientSocket.on("nuevoMensaje", async (mensaje) => {
    await mmg.saveMsg(new Messages(mensaje).dto());
    const mensajes = await mmg.findMsg();
    const mensajesParaFront = mensajes.map((m) => ({
      ...m,
      fecha: new Date(m.timestamp).toLocaleTimeString(),
    }));
    io.sockets.emit("actualizarMensajes", mensajesParaFront);
  });

  clientSocket.on("nuevoUsuario", async (nombreUsuario) => {
    clientSocket.broadcast.emit("nuevoUsuario", nombreUsuario);
  });

  const mensajes = await mmg.findMsg();
  const mensajesParaFront = mensajes.map((m) => ({
    ...m,
    fecha: new Date(m.timestamp).toLocaleTimeString(),
  }));
  io.sockets.emit("actualizarMensajes", mensajesParaFront);
}
