const fs = require('fs')
fs.writeFile('AsyncFile.text', 'Welcome to Full Stack Development', (err) => {
    if (err) {
        console.log('error creating file: ', err);
        return;
    }
    console.log('1.File created successfully!');
})
fs.readFile('AsyncFile.text', 'utf8', (err, data) => {
        if (err) {
            console.log('error reading File: ', err);
            return;
        }
        console.log('2.File content:');
        console.log(data);
    })
    //Append
fs.appendFile('AsynFile.text', '\nSemester:3', (err) => {

        if (err) {
            console.log('error reading file: ', err);
        } else {
            console.log('\n3. File updated successfully!');
        }
    })
    //updated read
fs.readFile('AsyncFile.text', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading Files: ', err);

    } else {
        console.log('4.file is updated successfully', err);
        console.log('5.file content:', data);
    }
});
//delete
// fs.unlink('AsynFile.text', (err) => {
//     if (err) {
//         console.error('Error Deleting file: ', err);
//     } else {
//         console.log('\n4.File deleted succesfully!');
//     }
// })