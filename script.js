function generateTrayek() {
    var inputTextarea = document.getElementById("inputTextarea");
    var trayekBody = document.getElementById("trayekBody");

    // Bersihkan hasil sebelumnya
    trayekBody.innerHTML = "";

    // Ambil data trayek dari textarea
    var trayekData = inputTextarea.value.split(',').map(function(trayek) {
        return trayek.trim().split(' ');
    });

    // Tampilkan hasil dalam tabel
    for (var i = 0; i < trayekData.length; i++) {
        var row = trayekBody.insertRow();
        var cellNo = row.insertCell(0);
        var cellTrayek = row.insertCell(1);

        cellNo.textContent = i + 1;
        cellTrayek.textContent = trayekData[i].join(', ');
    }
}

function resetTrayek() {
    document.getElementById("inputTextarea").value = '';
}
