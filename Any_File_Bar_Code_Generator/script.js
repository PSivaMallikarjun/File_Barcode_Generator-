function generateBarcode() {
    const fileInput = document.getElementById("fileInput");
    const barcodeElement = document.getElementById("barcode");
    const fileInfo = document.getElementById("fileInfo");

    if (fileInput.files.length === 0) {
        alert("Please select a file first.");
        return;
    }

    const file = fileInput.files[0];
    const fileName = file.name;

    // Generate barcode
    JsBarcode("#barcode", fileName, {
        format: "CODE128",
        displayValue: true
    });

    // Store file info
    fileInfo.innerHTML = `
        <p><strong>File Name:</strong> ${file.name}</p>
        <p><strong>File Size:</strong> ${file.size} bytes</p>
        <p><strong>File Type:</strong> ${file.type}</p>
    `;
}