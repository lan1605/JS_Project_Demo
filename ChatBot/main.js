const sendBtn = document.querySelector(".send-message"),
  chatInput = document.querySelector(".chat-input--textarea"),
  chatBox = document.querySelector(".chatbox");

let messageChat;
const API_KEY = "";

const generalResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: messageChat }],
    }),
  };
};

const handleCreateLiElement = (message, classname) => {
  const liElement = document.createElement("li");
  liElement.className = `chat ${classname}`;

  liElement.innerHTML =
    classname === "outgoing"
      ? `<p>
  ${message}
</p>`
      : `<span class="material-symbols-outlined bot">smart_toy</span><p>
${message}
</p>`;
  return liElement;
};

const handleChat = () => {
  messageChat = chatInput.value.trim();
  if (!messageChat) return;

  chatBox.appendChild(handleCreateLiElement(messageChat, "outgoing"));
  setTimeout(() => {
    chatBox.appendChild(handleCreateLiElement("Đang nhập...", "incoming"));
    generalResponse();
  }, 600);
  chatInput.value = "";
};
sendBtn.addEventListener("click", handleChat);
