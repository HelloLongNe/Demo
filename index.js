/**
 * Cơ chế khai báo biến es6(hay hỏi trong phỏng vấn)
 * var: ( khai báo sau cũng chạy được, khai báo trùng tên biến cũng chạy được, phạm vi hoạt động trên toàn bộ scope, hỗ trợ cơ chế hoisting)
 * let:  (phạm vi trong cùng 1 scope => khai báo biến trùng tên sẽ báo lỗi)
 * const: cũng giống let nhưng không thể gán lại giá trị. Đối với object và array ta không thể gán = object hoặc array khác mà chỉ có thể thay đổi giá trị của thuộc tính trong object, hoặc phần tử trong mảng (array)
 * hoisting: tự động khai báo bến đem lên đầu file
 */


// demo button
var arrButton = document.getElementsByTagName('button') ;
for(let index = 0; index < arrButton.length; index++){
    arrButton[index].onclick = function(){
        alert(arrButton[index].innerHTML);
    }
}


// arrow function
/**
 * Declaration function: Hỗ trợ cơ chế hoisting => vd: function name (){}
 * Expression function: Không hỗ trợ hoisting =>vd: var name = function(){}
 * ArrowFunction: 
 * + Không hỗ trợ hoisting. 
 * + Khi function chỉ có 1 tham số khi định nghĩa không
 * cần dấu ngoặc ()
 * + khi function chỉ có duy nhất 1 lệnh return thì không cần dấu {}
 */
main();

function main(){
    console.log('main')
}
//cú pháp arrowfunction
let showMess = (mess) => {
    console.log(mess)
}

showMess('Cyber')

let Showwmess = messs => 'Hello ' + messs
// let showwmess = (messs) => { //arrow function khai bao day du
//  return 'Hello ' + messs
// }


let result = Showwmess('Cyber')
console.log(result)


// con trỏ this (context)
// ngữ cảnh mặc định : this trỏ về window
// ngữ cảnh object: this chính là object đó
// ngữ cảnh function :this trong function thì this đại diện cho //// function đó

// arrow function != function khi dùng context (con trỏ this)
// Khi khai báo hàm trong hàm => để tránh xung đột ngữ cảnh thì sử dụng arrowFunction thay cho function
var hocVien = {
    maHV: 1,
    hoTen: 'Nguyễn Văn A',
    hienThiThongTin: function (){
        let hienThi= () => {
            console.log(`Mã học viên`, this.maHV);
            console.log(`Tên học viên`, this.hoTen);

        }
        hienThi();
    }
}

hocVien.hienThiThongTin();

/**
 * Bài tập 1: Sử dụng es6 render ra mảng button màu sắc. xây dựng xử lý khi click vào màu nào thì color của thẻ div#home sẽ thay đổi thành màu đó

 */
let arrColor = ['red', 'green', 'blue','yellow','pink','orange', 'silver','black'];

function renderButton (){
    //input: array color
    //output:
    for(let index = 0; index < arrColor.length;index++){
        // mỗi lần duyệt lấy ra 1 màu
        let color = arrColor[index];
        // từ màu sắc tạo ra button
        let button = document.createElement('button');
        button.innerHTML = color;
        button.style.backgroundColor = color;
        button.style.color = '#fff'
        button.className = 'mr-2'
        //mỗi lần tạo ra btn => tạo ra sự kiện click cho btn đó
        button.onclick = function(){
            document.querySelector('#home').style.color = color;
        }

        //mỗi lần tạo ra button dưa button vào mảng
        //sau khi tạo ra 1 button thì in nó lên thẻ div#color
        document.querySelector('#color').appendChild(button)
    }


    //cac Button
}
renderButton();


/*
    Default param
    + Khi mình gọi hàm và truyền tham số thì hàm sẽ lấy giá trị mình chuyền vào. KHi mình không truyền tham số thì hàm sẽ lấy giá trị mặc định
 */

let showInfo = (name = 'Long', year = 1999, age = 2022 - year) => {
    console.log('Họ tên: ', name);
    console.log('Năm Sinh: ', year);
    console.log('Tuổi: ', age);
}
showInfo('Diên',1997);


/**
    rest param
 */
function tinhTong(...restParam){
    switch(restParam.length){
        case 2 : {
            console.log('Kết quả a + b =', restParam[0] + restParam[1]);
        };break;
        case 3 : {
            console.log('Kết quả a + b + c = ', restParam[0] + restParam[1] + restParam[2]);
        };break;
        case 4 : {
            console.log('Kết quả a + b + c + d = ', restParam[0] + restParam[1] + restParam[2] + restParam[3]);
        };break;
        default : {
            console.log('Tham số không hợp lệ')
        }
    }
}
tinhTong(1,2);
tinhTong(1,2,3);
tinhTong();
tinhTong(1,2,3,4);


// Bài 2: Viết chương trình tính điểm trung bình khối A,C

document.querySelector('#btnTinhToanLyHoa').onclick = function (){
    //lay du lieu nguoi dung nhap vao => ep kieu thanh so
    let dToan = Number(document.querySelector('#dToan').value);
    let dLy = Number(document.querySelector('#dLy').value);
    let dHoa = Number(document.querySelector('#dHoa').value);
    let dtb = tinhDiemTrungBinh(dToan,dLy,dHoa);
    document.querySelector('#dToanLyHoa').value = dtb
}

document.querySelector('#btnTinhVanSuDiaAnh').onclick = function (){
    
}

function tinhDiemTrungBinh (...arrDiem){
    let dtb = 0 ;
    let tong = 0
    for(let i = 0; i < arrDiem.length; i++){
        tong += arrDiem[i];
    }
    //tinh output
    dtb = tong/arrDiem.length
    return dtb;
}