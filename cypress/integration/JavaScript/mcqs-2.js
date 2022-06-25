const conf = {
    myList: [],
    set list(arr) {
    return this.myArray.push(arr);
    },
    };
    
    console.log(conf.list);


    let value = 'sigma'
 
    if (true) {
    var valueNumber2 = 'Beta'
    value = 'Gamma'
    console.log(value)
    console.log(valueNumber2)
    }
    
    console.log(valueNumber2)
    console.log(value)


//     javascript
//  let arr = [1, 2, 5];
 
//  arr.splice(-1, 0, 3, 4);
 
//  console.log(arr);


function getZipFileNames(drive) {
    let driveFiles = null;
    drive.files.list({
    pageSize: 10,
    fields: "nextPageToken, files(id, name)",
    },
    (err, res) => {
    if (err) return console.log("The API returned an error: " + err);
    
    const files = res.data.files;
    const pageToken = null,
    folderId = null;
    
    if (files.length) {
    console.log("Files:");
    console.log(">>>", files.length);
    driveFiles = files;
    }
    }
    );
    
    function listFiles(auth) {
    const drive = google.drive({
    version: "v3",
    auth
    });
    const fileId = "1_tCKjPYcjIfnloGiF318bbwUl7yI7u6U";
    var dest = fs.createWriteStream("/tmp/whatsapp_dump.zip");
    console.log(getZipFileNames(drive));
    
    drive.files.get({
    fileId: fileId,
    alt: "media",
    }).then((res) => {
    console.log(">", zipFileNames);
    });
    }
    }


    var a = null ?? "Hellos"
    var b = 0 ?? "hey"
    console.log(a, b)