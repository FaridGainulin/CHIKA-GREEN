document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.checkbox');
  const buttons = document.querySelectorAll('.button');

  checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        buttons[index].classList.remove('btn2');
        buttons[index].classList.add('btn');
        checkboxes[index].classList.remove('checkbox-disable');
        checkboxes[index].classList.add('checkbox-active');
      } else {
        buttons[index].classList.remove('btn');
        buttons[index].classList.add('btn2');
        checkboxes[index].classList.remove('checkbox-active');
        checkboxes[index].classList.add('checkbox-disable');
      }
    });
  });
});
