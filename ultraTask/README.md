# ultraTask — User Management System

A modern, responsive **User Management System** built with Vue 3, TypeScript, and Tailwind CSS v4. The application allows you to view, search, add, and delete users through a clean, professional interface.

---

## 🚀 Tech Stack

| Technology       | Version | Purpose                          |
|------------------|---------|----------------------------------|
| **Vue 3**        | 3.5+    | UI framework (Composition API)   |
| **TypeScript**   | 5.7     | Type safety                      |
| **Vite**         | 6.2     | Build tool & dev server          |
| **Pinia**        | 2.3     | State management                 |
| **Vue Router**   | 4.5     | Client-side routing              |
| **Axios**        | 1.7     | HTTP client                      |
| **Tailwind CSS** | 4.2     | Utility-first CSS framework      |

---

## 📁 Project Structure

```
ultraTask/
├── public/
├── src/
│   ├── api/                          # API layer
│   │   ├── axios.ts                  # Axios instance configuration
│   │   └── users.ts                  # User API endpoints
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   │   ├── AppHeader.vue         # Navigation header
│   │   │   └── AppFooter.vue         # Page footer
│   │   └── ui/                       # Reusable UI components
│   │       ├── BaseButton.vue        # Button component (variants: primary, secondary, danger)
│   │       ├── BaseInput.vue         # Input component (v-model compatible)
│   │       └── Loader.vue            # Loading spinner
│   ├── features/
│   │   └── users/
│   │       ├── components/           # Feature-specific components
│   │       │   ├── UserTable.vue     # Users data table with delete action
│   │       │   ├── UserFilter.vue    # Search/filter input
│   │       │   └── UserForm.vue      # Create user form
│   │       ├── composables/          # Feature composables
│   │       │   └── useUserValidation.ts
│   │       └── types.ts              # User & CreateUserDto type definitions
│   ├── router/
│   │   └── index.ts                  # Route definitions
│   ├── store/
│   │   └── useUserStore.ts           # Pinia store (users state, CRUD actions, filtering)
│   ├── views/
│   │   ├── UsersView.vue             # Main users page
│   │   └── UserEditView.vue          # User edit page
│   ├── App.vue                       # Root component
│   ├── main.ts                       # Application entry point
│   └── style.css                     # Global styles & Tailwind import
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ultraTask

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The application will be available at **http://localhost:5173/**.

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the production build
npm run preview
```

---

## ✨ Features

### User List
- Fetches users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Displays user data in a responsive table (ID, Name, Email, City)
- Loading state with animated spinner
- Error state with retry functionality

### Search & Filter
- Real-time search by user name
- Instant filtering via Pinia computed properties — no API calls needed

### Add User
- Toggle-able form with Full Name, Email, and City fields
- Creates user via POST request to the API
- Automatically adds the new user to the local state
- Form resets after successful submission

### Delete User
- Confirmation dialog before deletion
- Removes user via DELETE request and updates local state

---

## 🏗️ Architecture

The project follows a **feature-based architecture** with clear separation of concerns:

- **`api/`** — HTTP layer with Axios; encapsulates all API calls
- **`store/`** — Centralized state management with Pinia (Composition API style)
- **`features/`** — Domain-specific components, types, and composables grouped by feature
- **`components/`** — Shared, reusable UI and layout components
- **`views/`** — Page-level components mapped to routes

### Data Flow

```
View → Store (Pinia) → API (Axios) → JSONPlaceholder
                ↕
        Components (props/events)
```

---

## 📝 API Reference

The application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) as a mock REST API:

| Method   | Endpoint         | Description       |
|----------|------------------|-------------------|
| `GET`    | `/users`         | Fetch all users   |
| `POST`   | `/users`         | Create a new user |
| `DELETE` | `/users/:id`     | Delete a user     |

> **Note:** JSONPlaceholder is a fake API — POST and DELETE requests are simulated and won't persist data on the server, but the local state updates accordingly.

---

## 🧪 Scripts

| Script          | Command              | Description                        |
|-----------------|----------------------|------------------------------------|
| `dev`           | `npm run dev`        | Start Vite dev server with HMR     |
| `build`         | `npm run build`      | Type-check + production build      |
| `preview`       | `npm run preview`    | Preview the production build       |

---

## 📄 License

This project is for educational and demonstration purposes.
