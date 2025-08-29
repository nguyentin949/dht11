document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử HTML cần thiết bằng ID của chúng
    const giftLink = document.getElementById('giftLink');
    const modal = document.getElementById('myModal');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const submitButton = document.getElementById('submitInfo');
    const fullNameInput = document.getElementById('fullName');
    const dobInput = document.getElementById('dob');
    const errorMessage = document.getElementById('errorMessage');

    // DỮ LIỆU XÁC THỰC CHÍNH XÁC - BẠN CẦN THAY ĐỔI Ở ĐÂY!
    const correctName = "Tín";
    const correctDob = "28/07/2005"; 

    // ĐƯỜNG DẪN ĐẾN TRANG SINH NHẬT - BẠN CÓ THỂ THAY ĐỔI Ở ĐÂY!
    const birthdayPageURL = 'hbbd.html';

    // Lắng nghe sự kiện click trên liên kết hộp quà
    giftLink.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        modal.style.display = 'flex'; // Luôn hiển thị modal khi click
    });

    // Lắng nghe sự kiện click trên nút đóng (X) của modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        errorMessage.style.display = 'none';
        fullNameInput.value = '';
        dobInput.value = ''; 
    });

    // Lắng nghe sự kiện click bên ngoài modal để đóng modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            errorMessage.style.display = 'none';
            fullNameInput.value = '';
            dobInput.value = '';
        }
    });

    // Hàm để định dạng ngày tháng khi người dùng gõ
    dobInput.addEventListener('input', function() {
        errorMessage.style.display = 'none';
        let input = dobInput.value;
        let value = input.replace(/\D/g, '');
        let formattedValue = '';
        if (value.length > 0) {
            formattedValue += value.substring(0, 2);
            if (value.length >= 3) {
                formattedValue += '/' + value.substring(2, 4);
            }
            if (value.length >= 5) {
                formattedValue += '/' + value.substring(4, 8);
            }
        }
        dobInput.value = formattedValue;
        if (dobInput.value.length > 10) {
            dobInput.value = dobInput.value.substring(0, 10);
        }
    });

    // Lắng nghe sự kiện click trên nút "Mở Quà"
    submitButton.addEventListener('click', function() {
        const enteredName = fullNameInput.value.trim();
        const enteredDob = dobInput.value;

        if (enteredName === correctName && enteredDob === correctDob) {
            // Chuyển hướng trình duyệt đến trang sinh nhật
            window.location.href = birthdayPageURL;
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Lắng nghe sự kiện 'input' trên ô nhập tên để ẩn thông báo lỗi
    fullNameInput.addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });
});