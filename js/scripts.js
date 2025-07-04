const agreeBtn = document.querySelector('.agree-btn');
const footerHeight = window.getComputedStyle(
  document.getElementById('footer')
).height;

document.addEventListener('scroll', () => {
  window.innerHeight + window.scrollY + parseInt(footerHeight) >=
  document.body.scrollHeight
    ? agreeBtn.removeAttribute('disabled')
    : agreeBtn.setAttribute('disabled', `true`);
});

// Navigation button
agreeBtn.addEventListener('click', (e) => {
  // const confirmNavigation = confirm('Thank you for agreeing to our terms! Navigate back to the main page?');
  // if (confirmNavigation) {
    window.location.href = '/';
  });