const fs = require("fs");
const path = require('path');

const filePath = path.join(__dirname, 'welcome.txt'); 

fs.writeFile(filePath, 'Hello Node', (err) => {
       if (err) {
        console.error('Error creating file:', err);
        return;
       }
       console.log('File "welcome.txt" created successfully.');

fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });

});

