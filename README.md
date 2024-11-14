# The Way I Learnt React

This repository is a collection of React projects, each created to explore various concepts, libraries, and best practices within the React ecosystem. These projects serve as building blocks for anyone looking to deepen their understanding of React, with each project focusing on specific principles, features and much more.

## Table of Contents

1. [BasicReact](#basicprjreact01)
2. [BasicReactProject](#basicreact)
3. [React-ReduxToolkit](#react-reduxtoolkit)
4. [ReactBlog](#reactblog)
5. [ReactCurrencyConverter](#reactcurrencyconverter)
6. [ReactDarkLightMode](#reactdarklightmode)
7. [ReactFullFledgedWebsite](#reactfullfledgedwebsite)
8. [ReactModeChanger](#reactmodechanger)
9. [ReactPasswordGenrator](#reactpwgen)
10. [ReactContextChanger](#reactprjbgchanger)
11. [ReactTailwind](#reacttailwind)
12. [ReactToDo](#reacttodo)

---

## 1. BasicReact

**Purpose:** This project introduces the foundational concepts of a React app, focusing on core components and JSX structure.

### Concepts
- **JSX**: Learn how JSX works as a syntax extension for JavaScript.
- **Basic Components**: Structuring UI using reusable components.
- **Props and State**: Basic understanding of stateful vs stateless components.

### Dependencies
- **React** (18.0+)
- **Vite** for fast development.

---

## 2. BasicReactProject

**Purpose:** This project is an extension of the basics, adding interactivity and state management within components.

### Concepts
- **Event Handling**: Learn how to handle user interactions like clicks and form inputs.
- **Conditional Rendering**: Displaying components or elements based on state.
- **Component Lifecycle**: Basic introduction to hooks like `useEffect` for side effects.

### Dependencies
- **React** (18.0+)
- **Vite**

---

## 3. React-ReduxToolkit

**Purpose:** A simple to-do application that uses Redux Toolkit, providing a hands-on experience with Redux for global state management.

### Concepts
- **Redux Toolkit**: Simplified Redux setup using slices and the store.
- **State Management**: Centralized state across components.
- **React-Redux Hooks**: `useSelector`, `useDispatch` for accessing and updating state.

### Dependencies
- **@reduxjs/toolkit**: Provides functions to simplify Redux setup.
- **React-Redux**: Connects Redux state with React components.

---

## 4. ReactBlog

**Purpose:** A full-featured blog application that includes authentication and CRUD functionality for posts. It demonstrates the integration of backend services and more complex state management.

### Concepts
- **Authentication**: User login and signup workflows.
- **CRUD Operations**: Add, edit, and delete blog posts.
- **React Router**: Multi-page navigation within a single-page application.
- **Context API**: Share state across multiple components.

### Dependencies
- **Appwrite**: Provides backend as a service for authentication and database.
- **React Router Dom**: Enables routing for navigating between pages.
- **@mui/material**: For UI components and styling.

---

## 5. ReactCurrencyConverter

**Purpose:** A currency converter application utilizing an API to fetch exchange rates, demonstrating how to work with APIs in React.

### Concepts
- **Custom Hooks**: Created a `useCurrencyInfo` hook for API calls.
- **API Integration**: Using fetch or Axios to retrieve live data from external APIs.
- **Controlled Components**: Manage the state of form elements like input fields.

### Dependencies
- **Axios**: For handling HTTP requests.
- **React Icons**: Provides icons for a better user interface.

---

## 6. ReactDarkLightMode

**Purpose:** This project demonstrates how to implement a theme switcher between dark and light modes using React’s Context API.

### Concepts
- **Context API**: Share theme state globally across components.
- **CSS Variables**: Adjust theme styles based on light or dark mode.
- **Provider and Consumer Patterns**: Manage and consume context.

### Dependencies
- **React** (18.0+)
- **Vite**

---

## 7. ReactFullFledgedWebsite

**Purpose:** A complete multi-page website with sections like Home, About, Contact, and GitHub integration. This project showcases component-based design and basic routing.

### Concepts
- **Component Hierarchy**: Organize the website with reusable components.
- **React Router**: Navigation between pages.
- **External API Integration**: Pull data from GitHub API to display user info.

### Dependencies
- **React Router Dom**
- **Axios** (or fetch): For making HTTP requests to GitHub API.

---

## 8. ReactModeChanger

**Purpose:** A profile app that includes login functionality and theme switching using Context API.

### Concepts
- **Context API**: Manage global state for theme and user login status.
- **Conditional Rendering**: Render different components based on user login state.
- **Component Reusability**: Modular components for Login and Profile.

### Dependencies
- **React** (18.0+)
- **Vite**

---

## 9. ReactPasswordGenerator

**Purpose:** A password generator application that allows users to generate custom passwords.

### Concepts
- **Form Handling**: Configure input to specify password criteria.
- **Randomization Logic**: JavaScript functions to generate passwords.
- **State Management**: Manage password settings.

### Dependencies
- **React** (18.0+)
- **Vite**

---

## 10. ReactContextChanger

**Purpose:** An app to experiment with event handling by changing background colors interactively.

### Concepts
- **Event Handling**: Understand `onClick` events to change UI.
- **CSS-in-JS**: Inline style manipulation based on state.

### Dependencies
- **React** (18.0+)
- **Vite**

---

## 11. ReactTailwind

**Purpose:** Demonstrates the use of Tailwind CSS within a React project to style components using utility-first CSS classes.

### Concepts
- **Utility-First Styling**: Using Tailwind’s classes for rapid UI building.
- **Responsive Design**: Tailwind’s responsive classes for mobile-first design.
- **Custom Tailwind Configuration**: Configure Tailwind for custom themes.

### Dependencies
- **Tailwind CSS**
- **React**

---

## 12. ReactToDo

**Purpose:** A to-do list application using context-based state management.

### Concepts
- **Context API**: Manage a list of tasks across the application.
- **CRUD Functionality**: Add, edit, delete tasks.
- **Custom Hooks**: Create a custom hook for managing tasks.

### Dependencies
- **React** (18.0+)
- **Vite**

---

## Installation and Setup

Each project is self-contained and can be run independently. Follow these steps to run a project locally:

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/TheWayILearntReact.git
   ```

2. **Navigate into the desired project**:
   ```bash
   cd TheWayILearntReact-main/{ProjectName}
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## Built With

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A build tool for fast development.

## License

This repository is licensed under the MIT License.

## Acknowledgements

I would like to express my gratitude to the following individuals and resources that have greatly contributed to the development of this repository:

1. **React Community** - For creating and maintaining the React library, which provides a solid foundation for building user interfaces and managing application state.
   
2. **Redux Community** - For developing `Redux` and `Redux Toolkit`, which simplify state management in `React` applications.

3. **Tailwind CSS Team** - For creating `Tailwind CSS`, a utility-first `CSS` framework that greatly accelerated styling the `React` components in this repository.

4. **Vite** - For building an incredibly fast development environment and build tool that greatly enhanced the development experience.

5. **React Router Dom** - For providing a powerful routing solution, enabling seamless navigation in `React` applications.

6. **TinyMCE** - For offering a real-time rich-text editor that was integrated into the React Blog project, enhancing user interaction with dynamic content creation.

7. **Open Source Contributors** - To the countless contributors who have shared their knowledge and code on `GitHub`, `Stack Overflow`, and other online communities. Your resources and solutions have helped solve challenges throughout the development process.

8. **API Providers** - Acknowledgements to the various `APIs`~ used in the projects, such as the `GitHub API` for the ReactFullFledgedWebsite, which helped provide dynamic content and functionality.


## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.


## Support

For support, email anirudhgirish08@gmail.com.
