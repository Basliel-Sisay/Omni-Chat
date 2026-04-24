# Omni-Chat

Omni-Chat is a bidirectional messaging application built to demonstrate how WebSockets work. Developed on Day 10 of the 30-Day Full Stack Challenge this project is not a basic request response cycles to provide instantaneous, global broadcasting across multiple client instances.

## Overview

Omni-Chat utilizes Socket.io and Express to create a seamless real time environment. When a message is transmitted from one client, the central server processes and broadcasts the data to all active sockets in milliseconds, ensuring a synchronized experience for all users.

## Core Features

- Bidirectional Sync: Real-time data flow using the WebSocket protocol.

- Global Broadcasting: Automated server-side relaying of messages to every connected peer.

- Dynamic HUD: A clean, responsive interface designed with CSS for high-readability.

- Connection Tracking: Unique session IDs logged server-side for secure monitoring.

##  Technical Architecture

The system is divided into a specialized Client-Server model:

- The Hub (Backend): Built with Node.js and Socket.io to manage active connections and traffic relay.

- The Interface (Frontend): A modular DOM-based UI that handles event emissions and dynamic message rendering

  ## Project Structure

  ```text
  omni-chat/
  ├── node_modules/         # System dependencies
  ├── public/               # Static Assets (Client-Side)
  │   ├── index.html        # The Chat HUD structure
  │   ├── chat.css          # Professional UI styling
  │   └── client.js         # Frontend transmitter logic
  ├── .gitignore            # Deployment safety rules
  ├── LICENSE               # Usage permissions (MIT)
  ├── package.json          # Project manifest and dependencies
  ├── package-lock.json     # Dependency version lock
  └── server.js             # Central broadcasting hub logic
  ```

##  Installation and Setup 

1. Clone the Repository:
```text
git clone https://github.com/Basliel-Sisay/Omni-Chat.git
cd omni-chat
```
2. Install Dependencies:
```text
npm install
```
3. Launch the System:
```text
npm start
```
4. Initiate Communication:
```text
Open http://localhost:3000 in multiple browser windows to test the real-time broadcast capability.
```

## Server(Terminal) Output

![](https://i.ibb.co/mVHx8yv6/Screenshot-2026-04-24-115613.png)

## Clients Output (Live Broadcasting)

![](https://i.ibb.co/nM2mrTnb/Screenshot-2026-04-24-115436.png)

![](https://i.ibb.co/LdXB2r09/Screenshot-2026-04-24-115453.png)

![](https://i.ibb.co/670gH7N2/Screenshot-2026-04-24-115508.png)

## Tech Stack

- Runtime: Node.js

- Web Framework: Express

- Real-time Engine: Socket.io

- Styles: CSS3

## License
 
This project is licensed under the MIT License - see the LICENSE file for details

## Author

[Basliel Sisay G/mariyam](mailto:jackboy2098@gmail.com) ;  Software Engineering student at CTBE, Day 9 of the 30 Day Full Stack Challenge
