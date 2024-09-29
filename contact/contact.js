function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);

  document.getElementById('sendLetter').addEventListener('click', function() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('sent');

    setTimeout(function() {
        document.querySelector('form').submit();
    }, 3000);
});
