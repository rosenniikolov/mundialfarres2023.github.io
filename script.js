function toggleCompletion(element) {
    element.classList.toggle('completed');
    if (element.innerHTML === 'Fet') {
      element.innerHTML = element.getAttribute('data-event');
    } else {
      element.innerHTML = 'Fet';
    }
  }
  