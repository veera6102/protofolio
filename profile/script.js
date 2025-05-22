document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbw1NBoX8x5E_ocGsvZ4nyDxvaxUrL-SRyDoQ9PcfDLRL4_3G9459pP0y4_67ZV17nzK/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Form submission failed!");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("An error occurred!");
    });
  });
});
