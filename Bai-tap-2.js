function calSum() {
    //đầu vào lấy dữ liều người dùng
    var soX = +document.getElementById("soX").value;
    var soN = +document.getElementById("soN").value;
    var sum = 0;

    //xử lý vòng lặp
    for (i = 1; i <= soN; i++) {
        sum += Math.pow(soX, i)
    }

    var result2 = "Tổng: " + sum;

    //đầu ra in ra kết quả
    document.getElementById("show2").style.display = "block";
    document.getElementById("showSum").innerHTML = result2;
}