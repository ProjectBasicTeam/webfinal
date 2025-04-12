const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 
const tourBtn = $("#tour-btn"); 
const name = $(".nameInput"); 
const tourSelect = $(".selectTour"); 
const timeInput = $(".timeInput"); 
const timeTour = $(".timeTour"); 
const emailInput = $(".emailInput");
// handle Send mail; 
const sendMail = async (name, tour, date, time, email) => {
//   viết nội dung
    const contentMail =     `Chào bạn ${name}, chúng tôi đã xếp lịch cho bạn vào ngày ${date} <br> 
    trên khắp hành trình của tour ${tour}, chúng tôi rất mong bạn sẽ vui vẻ, thư giãn ở bất cứ điểm dừng trong tour <br> 
    thời gian đi là ${time} 
    chúng tôi hân hạnh được phục vụ quý khách, cảm ơn nhé. 
    `

    const emailValue = email; 

    // gọi yêu cầu lên đường link gửi mail
    const response = await fetch('https://mailsendnode.onrender.com/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        subject: 'Xác nhận đặt tour thành công',
        content: contentMail
      }),
    });
  
    // trả dữ liệu kiểu json
    const data = await response.json();
  
    if (response.ok) {
      alert('✅  email đã gửi đến bạn!'); // gửi mail thành công thì thông báo
    } else {
      alert('❌ Gửi mail thất bại: ' + data.errors); // gửi mail thất bại
      console.error(data.errors);
    }
  };
  

//   lấy thông tin từ form đặt tour
  tourBtn.onclick = function () {
    const nameValue = name.value;  // lấy tên
    const tourIndex = tourSelect.value; // lấy vị trí tour (bắt đầu từ 0)
    const tour = tourSelect[tourIndex].text;  // lấy giá trị của tour
    const timeInputValue  = timeInput.value;   // lấy thời gian (ngày - tháng - năm)
    const timeTourIndex =  timeTour.value;   // lấy thời gian (knung giờ đi tour)
    const timeofTour  = timeTour[timeTourIndex].text; 
    const emailValue = emailInput.value; 

    sendMail(nameValue, tour, timeInputValue, timeofTour, emailValue);  // gọi hàm sendMail ở trên
    // const timeofTour 
  }






  
  

  