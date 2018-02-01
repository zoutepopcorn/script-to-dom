console.log("script.js");
var zip = new JSZip();
zip.file("hello.txt", "Hello World\n");
zip.generateAsync({
    type: "blob"
  })
  .then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
  });