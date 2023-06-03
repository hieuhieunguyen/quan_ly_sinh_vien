function renderHTM(dssv) {
    contentHTML = [];
    dssv.forEach(function(sv) {
        var content = `<tr>
            <td>${sv.maSV}</td>
            <td>${sv.tenSV}</td>
            <td>${sv.email}</td>
            <td>${sv.tinhDTB()}</td>
            <td>
            <button onclick="xoaSinhVien('${sv.maSV}')" class="btn btn-danger">xóa</button>
            <button onclick="suaSinhVien('${sv.maSV}')" class="btn btn-warning">sửa</button>
            </td>
        </tr>`;
        contentHTML += content;
    });
    document.getElementById('tbodySinhVien').innerHTML = contentHTML;
};

// kiểm tra để mã sinh viên không được trùng nhau

function kiemTraMaSV(idSV, dssv) {
    var index = dssv.findIndex(function(sv) {
        return sv.maSV == idSV;
    });
    if(index == -1) {
        return true;
    } else {
        document.getElementById('spanMaSV').innerText = 'Mã sinh viên không được trùng !';
        return false;
    };
};
