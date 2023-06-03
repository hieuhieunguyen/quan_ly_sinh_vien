var dssv = [];

var dataJson = localStorage.getItem('DSSV');
if(dataJson != null) {
    dssv = JSON.parse(dataJson).map(function(sv) {
        return new sinhVien(sv.maSV, sv.tenSV, sv.email, sv.matKhau, sv.toan, sv.ly, sv.hoa);
    });
    renderHTM(dssv);
};

function themSinhVien() {
    var maSV = document.getElementById('txtMaSV').value;
    var tenSV = document.getElementById('txtTenSV').value;
    var email = document.getElementById('txtEmail').value;
    var matKhau = document.getElementById('txtPass').value;
    var toan = Number(document.getElementById('txtDiemToan').value);
    var ly = Number(document.getElementById('txtDiemLy').value);
    var hoa = Number(document.getElementById('txtDiemHoa').value);
    var sv = new sinhVien(maSV,tenSV,email,matKhau,toan,ly,hoa);
    var isValid = kiemTraMaSV(sv.maSV, dssv);
    if(isValid) {
        dssv.push(sv);
        renderHTM(dssv);
        // lưu xuống localStorage
        var dataJson = JSON.stringify(dssv);
        localStorage.setItem('DSSV', dataJson);
        document.getElementById('formQLSV').reset();
    };
};

function xoaSinhVien(id) {
    var index = dssv.findIndex(function(sv) {
        return sv.maSV == id;
    });
    dssv.splice(index, 1);
    renderHTM(dssv);
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem('DSSV', dataJson);
};

function suaSinhVien(id) {
    var index = dssv.findIndex(function(sv) {
        return sv.maSV == id;
    });
    document.getElementById('txtMaSV').value = dssv[index].maSV;
    document.getElementById('txtTenSV').value = dssv[index].tenSV;
    document.getElementById('txtEmail').value = dssv[index].email;
    document.getElementById('txtPass').value = dssv[index].matKhau;
    document.getElementById('txtDiemToan').value = dssv[index].toan;
    document.getElementById('txtDiemLy').value = dssv[index].ly;
    document.getElementById('txtDiemHoa').value = dssv[index].hoa;
};

function capNhatThongTinSV() {
    var id = document.getElementById('txtMaSV').value;
    dssv.forEach(function(sv) {
        if(sv.maSV == id) {
            sv.tenSV = document.getElementById('txtTenSV').value;
            sv.email = document.getElementById('txtEmail').value;
            sv.matKhau = document.getElementById('txtPass').value;
            sv.toan = Number(document.getElementById('txtDiemToan').value);
            sv.ly = Number(document.getElementById('txtDiemLy').value);
            sv.hoa = Number(document.getElementById('txtDiemHoa').value);
        };
    });
    renderHTM(dssv);
    document.getElementById('formQLSV').reset();
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem('DSSV', dataJson);
};

function reset() {
    document.getElementById('formQLSV').reset();
};
