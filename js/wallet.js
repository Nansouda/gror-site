let connected = false;
document.getElementById('connect-btn').onclick = async () => {
  if (!connected) {
    connected = true;
    document.getElementById('connect-btn').innerText = 'Wallet Connected';
    document.getElementById('price').innerText = 'ราคา: 0.123 TON';
  }
};
document.getElementById('swap-btn').onclick = () => alert('Swap ฟีเจอร์จำลอง');
document.getElementById('add-liquidity-btn').onclick = () => {
  window.open('https://stone.fi/pool/GROR/TON', '_blank');
};