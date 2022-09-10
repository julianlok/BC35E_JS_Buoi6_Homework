function tinhGiaiThua () {
    //đầu vào lấy dữ liệu người dùng
    var iSO = +document.getElementById("iSo").value;
    var giaiThua = 1;
    var result3 = "";

    //xử lý vòng lặp
    //tạo biến bước nhảy, điều kiện, xử lý, thay đổi giá trị biến bước nhảy
    for (i = 1; i <= iSO; i++) {
        giaiThua *= i;
    }

    result3 = "Giai thừa: " + giaiThua;

    //đầu ra in ra kết quả
    document.getElementById("show3").style.display = "block";
    document.getElementById("showGiaiThua").innerHTML = result3;
}