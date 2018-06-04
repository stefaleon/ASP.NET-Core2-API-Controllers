
// Responds when the user submits the form in the browser, encodes the form
// data as JSON, and sends it to the server using an HTTP POST request.

$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "api/reservation",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                clientName: this.elements["ClientName"].value,
                location: this.elements["Location"].value
            }),
            success: function (data) {
                addTableRow(data);
            }
        })
    });
});
var addTableRow = function (reservation) {
    $("table tbody").append("<tr><td>" + reservation.reservationId + "</td><td>"
        + reservation.clientName + "</td><td>"
        + reservation.location + "</td></tr>");
}