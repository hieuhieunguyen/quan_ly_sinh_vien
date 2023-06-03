function sinhVien(maSV, tenSV, email, matKhau, toan, ly, hoa) {
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.email = email;
    this.matKhau = matKhau;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.tinhDTB = function() {
        return (this.toan + this.ly + this.hoa) / 3;
    };
};