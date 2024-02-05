"use strict";


window.addEventListener('resize', function() {
    clearTimeout(window.reloadTimer);
    window.reloadTimer = setTimeout(function() {
        location.reload();
    }, 0.5); // Tải lại sau mỗi giây (500 milliseconds)
});


//Vì yêu cầu asm3 sử dụng masonry Boostrap nên khi click và ViewMore đã bị sập layout (do thư viện masonry tự thêm giá trị tuyệt đối và tương đối vào thẻ mẹ và các phần tử thẻ con khiến cho khi 'Click' nội dụng ViewMore xuất hiện HTML không thể chia layout)
const fixLayout = function() {
    const removeStyleElements = document.querySelectorAll('.masonry, .masonry > div');
    console.log(removeStyleElements);
    removeStyleElements.forEach(function(removeStyleElement) {
        removeStyleElement.removeAttribute('style');
        if (removeStyleElement.getAttribute('data-masonry')) {
            removeStyleElement.removeAttribute('data-masonry');
        }
    })
};


document.addEventListener("DOMContentLoaded", function() {

// Chức năng ẩn thông tin cá nhân
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const form = document.getElementById("myInfo");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailInput = document.getElementById("inputEmail");
        const emailValue = emailInput.value.trim();

        if (regex.test(emailValue)) {
            document.querySelector(".showForm").classList.add("hidden");
            document.querySelector(".elementToShow").classList.remove("hidden");
        }
    
    });

// Chức năng ẩn thông tin nghề nghiệp
    const jobInfoCard = document.querySelectorAll(".jobInfoCard");

    jobInfoCard.forEach(Card => {
        const containerInfo = Card.querySelector(".container-infos")
        const btnMoreLess = Card.querySelector("#viewMoreAndLess")

        btnMoreLess.addEventListener("click", function(){
            fixLayout();
            containerInfo.classList.toggle("hidden");
            btnMoreLess.textContent === "▼ View more" ? btnMoreLess.textContent = "▲ View more" : btnMoreLess.textContent = "▼ View more";
            
        });

    })


});
