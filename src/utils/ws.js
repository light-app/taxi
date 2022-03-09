class SocketManager {
  constructor(socket) {
    this.socket = socket;
    this.queue = new Map();
    this.socket.onmessage = this.onmessage;
    this.listeners = new Map();
  }

  on(eventName, callback) {
    this.listeners.set(eventName, callback);
  }

  onmessage = ({ data }) => {
    console.log(data);

    if (data.startsWith("A~|~")) {
      const [, randomId, serverData] = data.split("~|~");

      const res = this.queue.get(+randomId);

      if (res) {
        res(JSON.parse(serverData));
        this.queue.delete(+randomId);
      }
    } else if (data.startsWith("E~|~")) {
      const [, eventName, eventData] = data.split("~|~");
      if (this.listeners.has(eventName)) {
        this.listeners.get(eventName)(JSON.parse(eventData));
      }
    }
  };

  /**
   * @returns {Promise<Object<string, unknown>>}
   */
  send(methodName, methodData) {
    const randomId = Math.random();

    this.socket.send(
      JSON.stringify({
        methodData,
        methodName,
        randomId,
      })
    );

    return new Promise((res) => {
      this.queue.set(randomId, res);
    });
  }
}

window.SocketManager = SocketManager;
