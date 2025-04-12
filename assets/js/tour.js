const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 
const tourBtn = $("#tour-btn"); 
const name = $(".nameInput"); 
const tourSelect = $(".selectTour"); 
const timeInput = $(".timeInput"); 
const timeTour = $(".timeTour"); 
// handle Send mail; 





const sendMail = async (name, tour, date, time) => {
  
    const contentMail =     `Chào bạn ${name}, chúng tôi đã xếp lịch cho bạn vào ngày ${date} <br> 
    trên khắp hành trình của tour ${tour}, chúng tôi rất mong bạn sẽ vui vẻ, thư giãn ở bất cứ điểm dừng trong tour <br> 
    thời gian đi là ${time} 
    chúng tôi hân hạnh được phục vụ quý khách, cảm ơn nhé. 
    `
    const response = await fetch('https://mailsendnode.onrender.com/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: '06022006ducmanh@gmail.com',
        subject: 'Xác nhận đặt tour thành công',
        content: contentMail
      }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert('✅  email đã gửi đến bạn!');
    } else {
      alert('❌ Gửi mail thất bại: ' + data.errors);
      console.error(data.errors);
    }
  };
  

  tourBtn.onclick = function () {
    const nameValue = name.value; 
    const tourIndex = tourSelect.value; 
    const tour = tourSelect[tourIndex].text; 
    const timeInputValue  = timeInput.value; 
    console.log(timeInputValue); 
    const timeTourIndex =  timeTour.value; 
    const timeofTour  = timeTour[timeTourIndex].text; 
    sendMail(nameValue, tour, timeInputValue, timeofTour); 
    // const timeofTour 
  }






  
  

  