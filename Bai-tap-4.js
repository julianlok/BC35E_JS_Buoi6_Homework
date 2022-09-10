function createDiv() {
    //đầu vào: 10 thẻ div
    
    var divRed = "<div style='background-color:red;color:white;border-radius:3px;padding:6px;'>Div chẵn</div>";
    var divBlue = "<div style='background-color:blue;color:white;border-radius:3px;padding:6px;'>Div lẻ</div>";
    var result4 = "";

    //xử lý vòng lặp
    //tạo biến bước nhảy, điều kiện, xử lý, thay đổi giá trị biến bước nhảy
    for (i = 1; i <= 10; i++) {

        result4 += i % 2 == 0 ? divRed : divBlue;

    }

    //đầu ra in ra kết quả
    document.getElementById("show4").style.display = "block";
    document.getElementById("show4").innerHTML = result4;

}