var selectedRow = null;

function readForData() {
    var formData = {};
    formData["productcode"] = document.getElementById("productcode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perprice"] = document.getElementById("perprice").value;
    return formData;
}
function inserNewRecord(data) {
    var table = document.getElementById("storage").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productcode
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perprice
    // var cell5 =newRow.insertCell(4);
    //     cell5.innerHTML =`<button onclick = "onEdit(this)">Edit</button> <button onclick = "onDelete(this)">Delete</button>`
}



function updateRecord(formData) {
    selectedRow.cell[0].innerHTML = formData.productcode;
    selectedRow.cell[1].innerHTML = formData.product;
    selectedRow.cell[2].innerHTML = formData.qty;
    selectedRow.cell[3].innerHTML = formData.perprice;
}

function onDelete(td) {
    if (confirm("If you want delete this list")) {
        row = td.parentElament.parentElament;
        document.getElementById("storage").onDelete(row.rowIndex);
    }
    resetAll()
}
function onEdit(td) {
    selectedRow = td.parentElament.parentElament
    document.getElementById("productcode").value = selectedRow.cell[0].innerHTML;
    document.getElementById("product").value = selectedRow.cell[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cell[2].innerHTML;
    document.getElementById("perprice").value = selectedRow.cell[3].innerHTML;
}

function resetAll() {
    document.getElementById("productcode").value = " ";
    document.getElementById("product").value = " ";
    document.getElementById("qty").value = " ";
    document.getElementById("perprice").value = " ";
}


