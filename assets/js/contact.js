document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('contact-status');
  const submitButton = form.querySelector('button[type="submit"]');
  const endpoint = 'https://formsubmit.co/ajax/8c21f9c632e90c9e4c50db25d71d83b1';

  const setStatus = (message, state = '') => {
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    if (formData.get('_honey')) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    setStatus('Sending your message…');

    const senderEmail = formData.get('email');
    const payload = {
      name: formData.get('name'),
      email: senderEmail,
      company: formData.get('company') || 'Not provided',
      subject: formData.get('subject'),
      message: formData.get('message'),
      _replyto: senderEmail,
      _subject: `Portfolio contact — ${formData.get('subject')}`,
      _template: 'table',
      _url: 'https://limapablo.com/contact/'
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Request failed');

      form.reset();
      setStatus('Message sent successfully. Thank you — I’ll get back to you as soon as I can.', 'success');
    } catch (error) {
      setStatus('Something went wrong while sending your message. Please try again in a moment.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send message';
    }
  });
});
