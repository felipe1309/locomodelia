import socket from "../socket";

export function useUnirceSala() {
  const unirceSala = (id: string) => {
    socket.emit("sala:unirse", id);
  };
  return { 
      unirceSala
  }
}
