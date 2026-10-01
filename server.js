const loginPage = document.getElementById('loginPage');
const appPage = document.getElementById('appPage');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const userName = document.getElementById('userName');

const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const logoutBtn = document.getElementById('logoutBtn');

const addPatientBtn = document.getElementById('addPatientBtn');
const patientFormCard = document.getElementById('patientFormCard');
const patientForm = document.getElementById('patientForm');

const addDoctorBtn = document.getElementById('addDoctorBtn');
const doctorFormCard = document.getElementById('doctorFormCard');
const doctorForm = document.getElementById('doctorForm');

const addAppointmentBtn = document.getElementById('addAppointmentBtn');
const appointmentFormCard = document.getElementById('appointmentFormCard');
const appointmentForm = document.getElementById('appointmentForm');

const addRecordBtn = document.getElementById('addRecordBtn');
const recordFormCard = document.getElementById('recordFormCard');
const recordForm = document.getElementById('recordForm');

const addBillBtn = document.getElementById('addBillBtn');
const billingFormCard = document.getElementById('billingFormCard');
const billingForm = document.getElementById('billingForm');

function showSection(key) {
  navButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.section === key);
  });

  sections.forEach((section) => {
    section.classList.toggle('active', section.id === key);
  });
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

function setAuthenticatedUser(user) {
  userName.textContent = user.name.split(' ')[0] || 'Admin';
  loginPage.classList.add('hidden');
  appPage.classList.remove('hidden');
}

function logoutUser() {
  appPage.classList.add('hidden');
  loginPage.classList.remove('hidden');
  loginForm.reset();
  loginError.textContent = '';
  showSection('dashboard');
}

async function apiFetch(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
}

async function loadDashboard() {
  const summary = await apiFetch('/api/dashboard');
  document.getElementById('totalPatients').textContent = summary.totalPatients;
  document.getElementById('totalDoctors').textContent = summary.totalDoctors;
  document.getElementById('totalAppointments').textContent = summary.totalAppointments;
  document.getElementById('pendingBills').textContent = summary.pendingBills;
}

async function loadPatients() {
  const patients = await apiFetch('/api/patients');
  const tbody = document.getElementById('patientsTableBody');
  tbody.innerHTML = patients
    .map(
      (patient) => `
        <tr>
          <td>${patient.name}</td>
          <td>${patient.age}</td>
          <td>${patient.department}</td>
          <td>${patient.doctor}</td>
          <td>${patient.status}</td>
        </tr>
      `
    )
    .join('');

  const recentPatients = patients.slice(0, 4);
  document.getElementById('recentPatientsList').innerHTML = recentPatients
    .map((patient) => `<li>${patient.name} • ${patient.department}</li>`)
    .join('');
}

async function loadDoctors() {
  const doctors = await apiFetch('/api/doctors');
  const tbody = document.getElementById('doctorsTableBody');
  tbody.innerHTML = doctors
    .map(
      (doctor) => `
        <tr>
          <td>${doctor.name}</td>
          <td>${doctor.specialty}</td>
          <td>${doctor.department}</td>
          <td>${doctor.availability}</td>
        </tr>
      `
    )
    .join('');
}

async function loadAppointments() {
  const appointments = await apiFetch('/api/appointments');
  const tbody = document.getElementById('appointmentsTableBody');
  tbody.innerHTML = appointments
    .map(
      (appointment) => `
        <tr>
          <td>${appointment.patient}</td>
          <td>${appointment.doctor}</td>
          <td>${appointment.date}</td>
          <td>${appointment.time}</td>
          <td>${appointment.status}</td>
        </tr>
      `
    )
    .join('');

  document.getElementById('appointmentsList').innerHTML = appointments
    .slice(0, 4)
    .map((app) => `<li>${app.patient} • ${app.date} • ${app.time}</li>`)
    .join('');
}

async function loadRecords() {
  const records = await apiFetch('/api/records');
  const tbody = document.getElementById('recordsTableBody');
  tbody.innerHTML = records
    .map(
      (record) => `
        <tr>
          <td>${record.patient}</td>
          <td>${record.diagnosis}</td>
          <td>${record.treatment}</td>
          <td>${record.doctor}</td>
        </tr>
      `
    )
    .join('');
}

async function loadBills() {
  const bills = await apiFetch('/api/billing');
  const tbody = document.getElementById('billingTableBody');
  tbody.innerHTML = bills
    .map(
      (bill) => `
        <tr>
          <td>${bill.patient}</td>
          <td>$${Number(bill.amount).toLocaleString()}</td>
          <td>${bill.status}</td>
          <td>${bill.date}</td>
        </tr>
      `
    )
    .join('');
}

async function refreshAllData() {
  await Promise.all([
    loadDashboard(),
    loadPatients(),
    loadDoctors(),
    loadAppointments(),
    loadRecords(),
    loadBills()
  ]);
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const payload = {
    email: formData.get('email'),
    password: formData.get('password')
  };

  try {
    const result = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    if (result.success) {
      setAuthenticatedUser(result.user);
      refreshAllData();
    }
  } catch (error) {
    loginError.textContent = error.message;
  }
});

logoutBtn.addEventListener('click', logoutUser);

addPatientBtn.addEventListener('click', () => patientFormCard.classList.toggle('hidden'));
addDoctorBtn.addEventListener('click', () => doctorFormCard.classList.toggle('hidden'));
addAppointmentBtn.addEventListener('click', () => appointmentFormCard.classList.toggle('hidden'));
addRecordBtn.addEventListener('click', () => recordFormCard.classList.toggle('hidden'));
addBillBtn.addEventListener('click', () => billingFormCard.classList.toggle('hidden'));

patientForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(patientForm);
  const payload = Object.fromEntries(formData.entries());

  await apiFetch('/api/patients', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  patientForm.reset();
  patientFormCard.classList.add('hidden');
  refreshAllData();
});

doctorForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(doctorForm);
  const payload = Object.fromEntries(formData.entries());

  await apiFetch('/api/doctors', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  doctorForm.reset();
  doctorFormCard.classList.add('hidden');
  refreshAllData();
});

appointmentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(appointmentForm);
  const payload = Object.fromEntries(formData.entries());

  await apiFetch('/api/appointments', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  appointmentForm.reset();
  appointmentFormCard.classList.add('hidden');
  refreshAllData();
});

recordForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(recordForm);
  const payload = Object.fromEntries(formData.entries());

  await apiFetch('/api/records', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  recordForm.reset();
  recordFormCard.classList.add('hidden');
  refreshAllData();
});

billingForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(billingForm);
  const payload = Object.fromEntries(formData.entries());

  await apiFetch('/api/bills', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  billingForm.reset();
  billingFormCard.classList.add('hidden');
  refreshAllData();
});

showSection('dashboard');
