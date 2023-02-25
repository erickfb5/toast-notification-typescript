import { useState } from "react";

import "./App.css";

const messages: string[] = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types: string[] = ["info", "success", "error"];

interface Notification {
  message: string;
  type: string;
}

const App = () => {
  const [toasts, setToasts] = useState<Notification[]>([]);

  const createNotification = (message?: string, type?: string) => {
    const notif: Notification = {
      message: message ? message : getRandomMessage(),
      type: type ? type : getRandomType(),
    };

    setToasts([...toasts, notif]);

    setTimeout(() => {
      setToasts(toasts.filter((t) => t !== notif));
    }, 3000);
  };

  const getRandomMessage = (): string =>
    messages[Math.floor(Math.random() * messages.length)];

  const getRandomType = (): string => types[Math.floor(Math.random() * types.length)];

  return (
    <div>
      <div id="toasts">
        {toasts.map((toast: Notification, index: number) => (
          <div key={index} className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>

      <button className="btn" onClick={() => createNotification()}>
        Show Notification
      </button>
    </div>
  );
};

export default App;
