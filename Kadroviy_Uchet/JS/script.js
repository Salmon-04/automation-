function navigateToPage(value) {
    console.log(value);
    
    if (value) {
        window.location.href = value; 
    }
}    


function showPopup(popupId) {
    // Скрываем все всплывающие окна
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        popup.classList.remove('active');
    });

    // Показываем выбранное всплывающее окно
    var popup = document.getElementById(popupId);
    popup.classList.add('active');
}

function hidePopup(popupId) {
    // Скрываем указанное всплывающее окно
    var popup = document.getElementById(popupId);
    popup.classList.remove('active');
}

