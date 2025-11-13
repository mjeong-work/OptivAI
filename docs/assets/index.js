const root = document.getElementById('root')
if (root) {
  Object.assign(root.style, {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    textAlign: 'center',
    color: '#1f2933',
    backgroundColor: '#f8fafc',
    margin: '0',
  })

  const paragraph = document.createElement('p')
  paragraph.textContent = 'OptivAI — coming soon'
  paragraph.style.margin = '0'
  root.appendChild(paragraph)
}
