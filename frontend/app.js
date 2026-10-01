* {
  box-sizing: border-box;
}

:root {
  --purple: #5b2c83;
  --purple-dark: #3b1b56;
  --orange: #ff8a3d;
  --orange-soft: #ffd1ad;
  --white: #ffffff;
  --light: #f7f3fb;
  --text: #1f1a2d;
  --muted: #6c5d7f;
  --border: #e8ddf6;
  --shadow: 0 20px 40px rgba(91, 44, 131, 0.12);
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #f7f3fb 0%, #fefaf5 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

.auth-screen {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--purple) 0%, #7b57ab 35%, var(--orange) 100%);
  padding: 20px;
}

.auth-card {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: min(900px, 100%);
  border-radius: 24px;
  padding: 35px;
  box-shadow: var(--shadow);
}

.brand-block {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  color: var(--white);
  padding: 30px;
}

.logo {
  width: 65px;
  height: 65px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--orange), #ffa65f);
  color: var(--white);
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 0 12px 25px rgba(255, 138, 61, 0.5);
}

.logo.small {
  width: 42px;
  height: 42px;
  font-size: 1.4rem;
}

.brand-block h1 {
  margin: 18px 0 8px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.brand-block p {
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

#loginForm {
  background: var(--white);
  border-radius: 20px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#loginForm h2 {
  margin-top: 0;
  color: var(--purple-dark);
  font-size: 1.8rem;
}

#loginForm label {
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--purple-dark);
}

#loginForm input,
#loginForm select,
.input-grid input,
.input-grid select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #fff;
  margin-bottom: 16px;
  outline: none;
}

#loginForm input:focus,
.input-grid input:focus,
.input-grid select:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 4px rgba(255, 138, 61, 0.15);
}

button {
  border: 0;
  cursor: pointer;
}

#loginForm button,
.primary-btn,
.logout-btn {
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 700;
  transition: transform 0.15s ease;
}

#loginForm button,
.primary-btn {
  background: linear-gradient(135deg, var(--orange), #ff9d66);
  color: var(--white);
}

.logout-btn {
  margin-top: auto;
  background: #f1ebf8;
  color: var(--purple-dark);
}

#loginForm button:hover,
.primary-btn:hover,
.logout-btn:hover {
  transform: translateY(-1px);
}

.error-message {
  margin: 10px 0 0;
  color: #b00020;
  min-height: 20px;
}

.hidden {
  display: none !important;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, var(--purple-dark) 0%, var(--purple) 100%);
  color: var(--white);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.6rem;
}

.nav-btn {
  width: 100%;
  text-align: left;
  background: transparent;
  color: white;
  padding: 12px 14px;
  border-radius: 12px;
  margin-bottom: 8px;
  font-weight: 600;
}

.nav-btn.active {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.main-content {
  flex: 1;
  padding: 30px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 700;
}

.topbar h3 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.status-pill {
  background: #eafaf0;
  color: #1f8a53;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
}

.section {
  display: none;
}

.section.active {
  display: block;
}

.stats-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin-bottom: 24px;
}

.stat-card {
  border-radius: 18px;
  padding: 22px 18px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.stat-card.purple {
  background: linear-gradient(135deg, #fff, #f1e7fb);
}

.stat-card.orange {
  background: linear-gradient(135deg, #fffaf6, #ffe7d6);
}

.stat-card p {
  margin: 0 0 8px;
  color: var(--muted);
  font-weight: 700;
}

.stat-card h2 {
  margin: 0;
  font-size: 2rem;
  color: var(--purple-dark);
}

.panel-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.panel,
.table-card,
.form-card {
  background: var(--white);
  border-radius: 18px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  padding: 18px;
}

.panel h4 {
  margin-top: 0;
  color: var(--purple-dark);
}

.panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.panel li {
  background: var(--light);
  border-radius: 12px;
  padding: 10px 12px;
  color: var(--text);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-header h3 {
  margin: 0;
  color: var(--purple-dark);
  font-size: 1.8rem;
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}

.input-grid label {
  display: block;
  margin-bottom: 8px;
  color: var(--purple-dark);
  font-weight: 700;
}

.table-card {
  margin-top: 18px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
}

th {
  background: #f4edff;
  color: var(--purple-dark);
}

tbody tr:hover {
  background: #faf7ff;
}

@media (max-width: 900px) {
  .auth-card {
    grid-template-columns: 1fr;
  }

  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
