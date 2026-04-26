// AUTHentification 

const AUTH_KEY = 'anatomie_users';
const SESSION_KEY = 'anatomie_session';

// ── Récupère tous les utilisateurs enregistrés ──
function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');
}

// ── Sauvegarde la liste des utilisateurs 
function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

// ── Retourne l'utilisateur connecté ou null 
function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

// ── Démarre une session 
function startSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, prenom: user.prenom }));
}

// ── Déconnexion 
function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'login.html';
}

// ── Inscription ──
function register(prenom, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return { ok: false, message: 'Un compte avec cet e-mail existe déjà.' };
  }
  users.push({ prenom, email, password });
  saveUsers(users);
  startSession({ email, prenom });
  return { ok: true };
}

// ── Connexion 
function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return { ok: false, message: 'E-mail ou mot de passe incorrect.' };
  }
  startSession(user);
  return { ok: true };
}

// ── Vérifie que l'utilisateur est connecté (à appeler sur index.html) ──
function requireAuth() {
  const session = getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session;
}
