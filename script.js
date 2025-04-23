const inputBox = document.getElementById('inputBox');
const sendBtn = document.getElementById('sendBtn');
const chatBox = document.getElementById('chatBox');

function sendMessage() {
  const messageText = inputBox.value.trim();
  if (messageText !== '') {
    const messageEl = document.createElement('div');
    messageEl.classList.add('message');
    messageEl.textContent = messageText;
    chatBox.appendChild(messageEl);
    inputBox.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

sendBtn.addEventListener('click', sendMessage);

inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
