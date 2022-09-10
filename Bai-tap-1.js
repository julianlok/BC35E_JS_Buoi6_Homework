function findMinInt () {
    var sum = 0; 
    var result  = "";
    
    //xử lý vòng lặp:
    //b1 tạo biên bước nhảy, điều kiện,khối xử lý,tăng giá trị biến bước nhảy
    for (var i = 1; sum < 1e+4; i++) {
        sum += i;
    }
    result = "Số nguyên dương nhỏ nhất: " + i;
    
    //đầu ra in ra kết quả
    document.getElementById("show1").style.display = "block";
    document.getElementById("showMinInt").innerHTML = result;
}