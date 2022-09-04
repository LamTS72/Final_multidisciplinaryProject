# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `python manage.py runserver`
Runs the server with APIs.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


This is a model we use to assiociate to ESP332cam.  Beside using for scanning QR code , it contains a winform which is written by  C# for user easily 
use with one button SCAN QR and one richtextbox to print result. In addition we also associate to some functions to get json from database as well as
update status for ticket before/after scanning QR.

<p align="center"> <img width = "80%" height = "80%" src="src/Screenshot_1.png"/>  </p>

INCLUDE:

In `ScanQRcodeWithPython` folder,`Program.cs` and `ScanQRcodeWithPython/bin/Debug/scanqrcode.py` will be 2 main parts for this project. 

When you click `Scan QR` box, system will be run a thread to compile `scanqrcode.py` . One window live steaming appears for scanning.
