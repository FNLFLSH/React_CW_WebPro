# React CW - WebPro Assignment

A React application demonstrating fundamental React concepts including components, state management, props, and event handling. This project features a modern blue-themed UI with interactive components.

## 🚀 Features

This project includes three main components:

1. **HelloWorld Component** - Displays a greeting message
2. **Counter Component** - Interactive counter with increment functionality
3. **FilteredList Component** - Searchable and filterable produce list with dropdown filtering

## 🛠️ Technologies Used

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.2.4** - Fast build tool and development server
- **React Bootstrap 2.10.10** - Bootstrap components for React
- **Bootstrap 5.3.8** - CSS framework for styling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/FNLFLSH/React_CW_WebPro.git
cd React_CW_WebPro
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📁 Project Structure

```
React_CW_WebPro/
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── HelloWorld.jsx      # Hello World component
│   ├── Counter.jsx         # Counter component with state
│   ├── FilteredList.jsx   # Filterable list component
│   ├── List.jsx           # List rendering component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── package.json           # Project dependencies
└── vite.config.js        # Vite configuration
```

## 🎯 Key Concepts Demonstrated

- **Components**: Class-based React components
- **JSX**: HTML-like syntax in JavaScript
- **Props**: Passing data from parent to child components
- **State Management**: Using `setState()` to manage component state
- **Event Handling**: `onClick`, `onChange`, and `onSelect` event handlers
- **Unidirectional Data Flow**: Parent components managing state and passing to children
- **Conditional Rendering**: Displaying content based on state/props
- **List Rendering**: Mapping over arrays to render lists

## 🎨 Styling

The project features a modern blue-themed design with:
- Light grey background
- White card-based components
- Blue gradient accents on buttons and headings
- Smooth hover animations and transitions
- Responsive design for mobile devices

## 📝 Components Overview

### HelloWorld
Displays "Hello World!" message with optional personalized greeting.

### Counter
Interactive counter that starts at 5 and increments when the button is clicked. Demonstrates state management with `setState()`.

### FilteredList
A produce list with:
- Search functionality to filter by name
- Dropdown menu to filter by type (All, Fruit, Vegetables)
- Dynamic filtering based on both search and type selection

## 📄 License

This project is part of a WebPro course assignment.
