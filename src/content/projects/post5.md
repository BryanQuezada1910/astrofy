---
title: "YouAccess"
description: "Attendance registration with NFC Cards"
pubDate: "Dec 2024"
images: ["/youaccess/Mockup-YouAccess.webp", "/youaccess/nfc-module.webp", "/youaccess/youaccess-1.webp", "/youaccess/youaccess-2.webp", "/youaccess/youaccess-3.webp", "/youaccess/youaccess-4.webp", "/youaccess/youaccess-5.webp", "/youaccess/youaccess-6.webp", "/youaccess/youaccess-7.webp", "/youaccess/youaccess-8.webp", "/youaccess/youaccess-9.webp", "/youaccess/youaccess-10.webp", "/youaccess/youaccess-11.webp"]
badge: "IoT Project"
tags: ["Esp32", "NFC", "NodeJS", "Express", "MongoDB", "JWT", "WebSockets", "Socket.io", "API REST", "Quasar Framework", "VueJS"]
url: "https://youaccess.netlify.app/"
repoUrl: "https://github.com/BryanQuezada1910/access-control-backend"
order: 3
---

**YouAccess** is a web application for registering people using NFC cards.

In this application, three projects were developed to ensure its functionality:

**Device:** Built with an ESP32 board equipped with an NFC module and NFC cards, programmed in C.

**Backend Code:** Developed using Node.js, Express, and Socket.io. It includes the system's entire logic, database connection to MongoDB, integration with the NFC module, email sending with Nodemailer, JWT-based authentication, and more.

**Frontend Code:** Developed using the Quasar Framework, where the API was consumed to display all data. It features two interfaces:

**-User:** Can register in the system to view all their attendance records.

**-Admin:** Can view the attendance records of any user, generate reports, assign NFC cards, create departments, and more.