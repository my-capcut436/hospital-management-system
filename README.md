# Hospital Management System

A comprehensive full-stack hospital management system built with modern web technologies for managing patients, doctors, appointments, medical records, billing, and hospital operations.

## Features

### Patient Management
- Patient registration and profile management
- Medical history tracking
- Health records storage
- Patient search and filtering

### Doctor Management
- Doctor profiles and specializations
- Doctor availability and schedules
- Department management
- Doctor performance tracking

### Appointment System
- Schedule appointments with doctors
- Real-time appointment tracking
- Appointment notifications
- Cancellation and rescheduling

### Medical Records
- Patient diagnosis and treatment records
- Prescription management
- Lab reports and test results
- Medical history

### Billing & Payments
- Invoice generation
- Payment tracking
- Bill history
- Insurance claim management

### Admin Dashboard
- Hospital statistics and analytics
- Real-time data visualization
- Staff management
- System configuration

### Authentication & Security
- Role-based access control (Admin, Doctor, Patient, Staff)
- Secure login system
- Password encryption
- Session management

## Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with Tailwind CSS
- **JavaScript (ES6+)** - Client-side logic
- **Chart.js** - Data visualization
- **Axios** - HTTP requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin requests

### Database
- **PostgreSQL** - Primary database
- **MongoDB** (Optional) - Document storage for medical records
- **Redis** - Caching and sessions

### Tools & DevOps
- **Docker** - Containerization
- **Git** - Version control
- **Postman** - API testing
- **PM2** - Process management

## Project Structure

```
hospital-management-system/
├── frontend/                 # React/Vanilla JS frontend
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── index.html
├── backend/                  # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
├── database/                 # Database schemas and migrations
│   ├── schema.sql
│   └── migrations/
├── docker/                   # Docker configuration
│   └── Dockerfile
├── docs/                     # API documentation
├── .env.example
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14+)
- PostgreSQL (v12+)
- Docker (optional)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/my-capcut436/hospital-management-system.git
   cd hospital-management-system
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend (if using Node build tools)
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Setup database**
   ```bash
   psql -U postgres -d hospital_db -f database/schema.sql
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend**
   ```bash
   cd frontend
   open index.html  # or use a local server
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Patients
- `GET /api/patients` - List all patients
- `POST /api/patients` - Create new patient
- `GET /api/patients/:id` - Get patient details
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Doctors
- `GET /api/doctors` - List all doctors
- `POST /api/doctors` - Add new doctor
- `GET /api/doctors/:id` - Get doctor details
- `PUT /api/doctors/:id` - Update doctor

### Appointments
- `GET /api/appointments` - List appointments
- `POST /api/appointments` - Book appointment
- `GET /api/appointments/:id` - Get appointment details
- `PUT /api/appointments/:id` - Reschedule appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Medical Records
- `GET /api/records` - List medical records
- `POST /api/records` - Add medical record
- `GET /api/records/:id` - Get specific record

### Billing
- `GET /api/bills` - List bills
- `POST /api/bills` - Generate bill
- `GET /api/bills/:id` - Get bill details

## Usage

### For Admin
1. Login with admin credentials
2. Manage doctors, staff, and departments
3. View hospital analytics and reports
4. Configure system settings

### For Doctors
1. Login to access dashboard
2. View assigned patients and appointments
3. Add medical records and prescriptions
4. Update availability schedule

### For Patients
1. Register/Login to patient portal
2. Book appointments with available doctors
3. View medical history and records
4. Pay bills online
5. Download prescriptions and reports

### For Staff
1. Login to staff portal
2. Manage patient check-ins
3. Process billing and payments
4. Handle appointments and inquiries

## Database Schema

### Key Tables
- `users` - User accounts and authentication
- `patients` - Patient information
- `doctors` - Doctor profiles and specializations
- `appointments` - Appointment bookings
- `medical_records` - Patient medical history
- `prescriptions` - Doctor prescriptions
- `billing` - Invoice and payment records
- `departments` - Hospital departments
- `staff` - Hospital staff details

## Security Features

- JWT-based authentication
- Password encryption with bcrypt
- Role-based access control (RBAC)
- SQL injection prevention
- XSS protection
- CSRF tokens
- Rate limiting
- Input validation and sanitization

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, feature requests, or questions, please open an issue on GitHub or contact the development team.

## Roadmap

- [ ] Mobile app for patients and doctors
- [ ] Telemedicine integration
- [ ] AI-powered diagnosis assistant
- [ ] Real-time notifications via WebSocket
- [ ] Advanced analytics and reporting
- [ ] Multi-hospital management
- [ ] Integration with external lab systems
- [ ] Insurance provider integration

---

**Built with ❤️ by Mohamed Masood**
