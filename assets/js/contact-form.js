// Contact form: AJAX submit to Formspree + client-side lead-fit scoring.
// Vanilla fetch — no @formspree/ajax dependency needed for one static form.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var PLACEHOLDER = 'YOUR_FORM_ID';
  var isConfigured = form.action.indexOf(PLACEHOLDER) === -1;
  var pendingNotice = document.getElementById('form-pending-notice');
  if (isConfigured && pendingNotice) pendingNotice.remove();

  var successBox = document.getElementById('form-success');
  var errorLine = document.getElementById('form-error');
  var submitBtn = form.querySelector('button[type="submit"]');
  var submitLabel = submitBtn ? submitBtn.querySelector('.btn__label') : null;

  var isItalian = document.documentElement.lang === 'it';
  var STRINGS = isItalian ? {
    sending: 'Invio…',
    notConfigured: 'Il modulo non è ancora collegato — scrivimi direttamente per ora (vedi "Altri modi per contattarmi" qui sotto).',
    genericError: 'Qualcosa è andato storto nell’invio — riprova, oppure scrivimi direttamente.'
  } : {
    sending: 'Sending…',
    notConfigured: 'Form isn’t connected yet — email me directly for now (see “Other ways to reach me” below).',
    genericError: 'Something went wrong sending the form — try again, or email me directly.'
  };

  // High-value project types and budget bands, scored from the site's own
  // published price list (services.html) so the ranking reflects real work,
  // not an arbitrary guess.
  var PROJECT_WEIGHT = {
    'Wedding': 2,
    'Brand & commercial': 2,
    'Hospitality & venue': 2,
    'Motorsport': 2,
    'Event / celebration': 1,
    'Rental only': 0,
    'Something else': 1
  };
  var BUDGET_WEIGHT = {
    '': 1, // "prefer not to say" is not penalized — still a real lead
    'Under €500': 0,
    '€500–1,500': 1,
    '€1,500–4,000': 2,
    '€4,000–10,000': 3,
    '€10,000+': 3
  };

  function scoreLead(data) {
    var score = (PROJECT_WEIGHT[data.project_type] || 0) + (BUDGET_WEIGHT[data.budget] || 0);
    if (data.timeline && data.timeline.trim().length > 2) score += 1;
    if (data.company && data.company.trim().length > 0) score += 1;
    if (score >= 5) return 'HIGH FIT';
    if (score >= 3) return 'MEDIUM FIT';
    return 'LOW FIT';
  }

  var idleLabel = submitLabel ? submitLabel.textContent : '';
  function setSubmitting(state) {
    form.classList.toggle('is-submitting', state);
    if (submitLabel) submitLabel.textContent = state ? STRINGS.sending : idleLabel;
  }

  function showError(message) {
    if (errorLine) errorLine.textContent = message;
  }

  var startTracked = false;
  form.addEventListener('focusin', function () {
    if (startTracked) return;
    startTracked = true;
    if (window.track) window.track('contact_form_start');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!isConfigured) {
      showError(STRINGS.notConfigured);
      return;
    }

    // Honeypot: bots fill every field, humans never see this one.
    if (form.querySelector('[name="_gotcha"]').value) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    showError('');
    var formData = new FormData(form);
    var data = Object.fromEntries(formData.entries());
    var fit = scoreLead(data);
    formData.set('lead_fit', fit);
    formData.set('_subject', '[' + fit + '] ' + (data.project_type || 'New inquiry') + ' — ' + data.first_name + ' ' + data.last_name);

    setSubmitting(true);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          form.classList.add('is-hidden');
          if (successBox) successBox.classList.add('is-visible');
          if (window.track) window.track('contact_form_submit', { lead_fit: fit, project_type: data.project_type });
        } else {
          return response.json().then(function (body) {
            var msg = (body && body.errors && body.errors.length)
              ? body.errors.map(function (err) { return err.message; }).join(', ')
              : STRINGS.genericError;
            throw new Error(msg);
          });
        }
      })
      .catch(function (err) {
        showError(err.message || STRINGS.genericError);
        if (window.track) window.track('contact_form_error', { message: err.message || 'unknown' });
      })
      .finally(function () {
        setSubmitting(false);
      });
  });
})();
