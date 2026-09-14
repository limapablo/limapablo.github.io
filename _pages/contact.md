---
layout: single
title: Contact
author_profile: false
classes: wide
---

<section class="content-intro contact-intro">
  <p class="section-kicker">Contact</p>
  <h1>Let’s talk.</h1>
  <p class="content-lead">Use the form below to get in touch about data, analytics, BI, automation, research or professional opportunities.</p>
</section>

<section class="contact-form-section" aria-labelledby="contact-form-title">
  <div class="contact-form-copy">
    <h2 id="contact-form-title">Send a message</h2>
    <p>I usually prefer a short message with enough context to understand what you need, what the opportunity is and how I can help.</p>
    <p class="contact-note">Your message will be sent directly to my inbox.</p>
  </div>

  <form id="contact-form" class="contact-form" novalidate>
    <div class="form-grid">
      <div class="form-field">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" autocomplete="name" required>
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="email" required>
      </div>

      <div class="form-field">
        <label for="company">Company <span>(optional)</span></label>
        <input id="company" name="company" type="text" autocomplete="organization">
      </div>

      <div class="form-field">
        <label for="subject">Subject</label>
        <input id="subject" name="subject" type="text" required>
      </div>
    </div>

    <div class="form-field form-field--full">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="7" required></textarea>
    </div>

    <input class="form-honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">

    <div class="form-actions">
      <button class="btn btn--primary" type="submit">Send message</button>
      <p id="contact-status" class="contact-status" role="status" aria-live="polite"></p>
    </div>
  </form>
</section>
