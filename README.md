# Calendar Task Manager

A sophisticated calendar application built with React and TypeScript that allows users to manage tasks and view worldwide holidays. This project was implemented without using any calendar libraries, showcasing custom calendar logic and modern React practices.

## 🌟 Features

- **Interactive Calendar Grid**
  - Custom-built calendar implementation
  - Responsive and intuitive interface
  - Month navigation and current date highlighting

- **Task Management**
  - Create and edit tasks inline within calendar cells
  - Drag and drop tasks between days
  - Reorder tasks within the same day using drag and drop
  - Task filtering through text search

- **Holiday Integration**
  - Display worldwide holidays for each day
  - Holiday information fetched from [Nager.Date API](https://date.nager.at/)
  - Fixed holiday display at the top of calendar cells

## 🛠️ Technologies

- **Core**
  - React 18
  - TypeScript
  - CSS-in-JS (Styled Components)

- **State Management**
  - React Context API
  - React Hooks

- **Additional Tools**
  - React Beautiful DnD (for drag and drop functionality)
  - Date-fns (for date manipulation)
  - Axios (for API requests)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nikita95727/calendar-task-manager.git
   cd calendar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📖 Usage

1. **Calendar Navigation**
   - Use arrow buttons to navigate between months
   - Current date is automatically highlighted

2. **Task Management**
   - Click on any day cell to add a new task
   - Double-click a task to edit
   - Drag tasks between days or within the same day to reorder
   - Use the search bar to filter tasks across all days

3. **Holiday Information**
   - Holidays are automatically displayed at the top of each day cell
   - Holiday information is fetched and cached for optimal performance

## 🎯 Implementation Details

- Custom calendar grid implementation without external calendar libraries
- Efficient state management using React Context and Hooks
- Responsive design that works across different screen sizes
- Optimized performance with proper React rendering techniques
- Type-safe implementation using TypeScript
- Modern styling approach using CSS-in-JS

## 🔍 Project Structure

```
calendar/
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React contexts
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript types
│   └── App.tsx        # Main application component
├── public/
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🌐 Live Demo

The application is deployed and can be accessed at: https://calendar-task-manager-ten.vercel.app

## 📫 Contact

Your Name - worknikitatretynko95@gmail.com

Project Link: https://github.com/Nikita95727/calendar-task-manager
