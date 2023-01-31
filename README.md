JS Code for Sending Bulk Email
===============================
This is a simple script to send bulk email using node.js and nodemailer. It can send multiple email with different content depends on your needs. You just need JSON file containing email and any content that you want to differentiate.
<br>
<br>
## What you need
1. Node.js installed
2. Postman installed
3. Email with 2FA Activated and App Password configured
<br>
<br>
## How to use
1. Clone this repository
2. Install dependencies
    ```npm install```
3. Create JSON file containing email and content, and create env file containing your email and password
4. Change the JSON file name in ```index.js``` file and email content on ```index.js```
4. Run the script
    ```npm run dev```
5. Open Postman and send POST request to ```http://localhost:5000/email/text-mail```