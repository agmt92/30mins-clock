# 25 + 5 Clock

This project is an exam part of the freeCodeCamp Front End Development Libraries certification. It is a 25 + 5 clock, also known as a Pomodoro clock, which helps users manage their time by alternating between work sessions and breaks.

Project [Demo](https://agmt92.github.io/30mins-clock/)

You can view the project requirements and test page [here](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock).

## Table of Contents

- Introduction
- Features
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- Usage
- [Project Structure](#project-structure)
- Contributing
- License

## Introduction

The 25 + 5 clock is a timer that allows users to set a 25-minute work session followed by a 5-minute break. This project is built using React and Redux, and it meets the requirements specified in the freeCodeCamp curriculum.

## Features

- **Session and Break Length Adjustment**: Users can increase or decrease the length of the work session and break.
- **Start/Pause Timer**: Users can start or pause the timer.
- **Reset Timer**: Users can reset the timer to the default values.
- **Alarm**: An alarm sounds when the session or break ends.
- **Dynamic Styling**: The timer changes color when the break time is less than 60 seconds.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **SCSS**: For styling the application.
- **JavaScript**: For handling logic and interactions.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/25-5-clock.git
    cd 25-5-clock
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Open the application**:
    Open your web browser and go to [`http://localhost:3000`](http://localhost:3000).

## Usage

- **Adjust Session and Break Length**: Use the increment and decrement buttons to adjust the session and break lengths.
- **Start/Pause Timer**: Click the "Start" button to start the timer. Click the "Pause" button to pause the timer.
- **Reset Timer**: Click the "Reset" button to reset the timer to the default values.

## Project Structure

```
25-5-clock/
│
├── public/                 # Public assets
│   ├── index.html          # Main HTML file
│   └── ...
│
├── src/                    # Source files
│   ├── App.js              # Main App component
│   ├── App.scss            # SCSS styles
│   ├── index.js            # Entry point
│   ├── redux/              # Redux actions and reducers
│   └── ...
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for checking out my 25 + 5 clock project! If you have any questions or feedback, feel free to reach out.
