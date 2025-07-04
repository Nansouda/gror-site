const ctx = document.getElementById('priceChart').getContext('2d');
const labels = Array.from({length: 24}, (_, i) => `${i}h`);
const data = Array.from({length: 24}, () => 0.1 + Math.random() * 0.05);
new Chart(ctx, {
  type: 'line',
  data: { labels, datasets: [{ label: 'ราคา GROR (TON)', data, borderColor: '#4CAF50', fill: false }] },
  options: { scales: { y: { beginAtZero: false } } }
});