import { useState } from 'react';

function isValidUsername(username) {
  return /^[a-zA-Z0-9._]+$/.test(username); // Alphanumeric, dot, underscore
}

function isValidDomain(domain) {
  return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain); // like gmail.com, example.org
}

function isValidNameTitle(text) {
  return /^[a-zA-Z ]+$/.test(text); // Only alphabets and spaces
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    domain: '',
    title: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isValidNameTitle(formData.name)) {
      newErrors.name = 'Name should contain only letters and spaces.';
    }

    if (!isValidUsername(formData.emailId)) {
      newErrors.emailId = 'Username can only have letters, numbers, dot, underscore.';
    }

    if (!isValidDomain(formData.domain)) {
      newErrors.domain = 'Enter a valid domain like gmail.com.';
    }

    if (!isValidNameTitle(formData.title)) {
      newErrors.title = 'Title should contain only letters and spaces.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting Query');
    
    if (!validateForm()) return;

    const fullEmail = `${formData.emailId}@${formData.domain}`;

    const res = await fetch('/api/Email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: fullEmail,
        title: formData.title,
        message: formData.message,
      }),
    });

    if (res.ok) {
      setStatus('Query Submitted !');
      setFormData({ name: '', emailId: '', domain: '', title: '', message: '' });
      setErrors({});
      setTimeout(setStatus(''),3500);
    } else {
      setStatus('Failed to send message.');
      setTimeout(setStatus(''),3500);
    }
  };

  return (
    <form className="pt-3 flex-fill d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="w-80 mb-3 d-flex flex-row justify-content-between">
        <label className="form-label fs-5">Name</label>
        <input name="name" className="form-control w-75" value={formData.name} onChange={handleChange} />
      </div>

      {/* Email (username + domain) */}
      <div className="mb-3 w-80 d-flex flex-row justify-content-between">
        <label className="form-label fs-5">Email</label>
        <div className="d-flex align-items-center w-75">
          <input name="emailId" className="form-control me-1 w-50" placeholder="username" value={formData.emailId} onChange={handleChange} />
          @
          <input name="domain" className="form-control ms-1 w-50" placeholder="domain.com" value={formData.domain} onChange={handleChange} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-3 w-80 d-flex flex-row justify-content-between">
        <label className="form-label fs-5">Title</label>
        <input name="title" className="form-control w-75" value={formData.title} onChange={handleChange} />
      </div>

      {/* Message */}
      <div className="mb-3 w-80 d-flex flex-row justify-content-between">
        <label className="form-label fs-5">Message</label>
        <textarea name="message" className="form-control w-75" rows="5" value={formData.message} onChange={handleChange} />
      </div>

      {/* Submit */}
      <div className="d-flex w-75 justify-content-center mt-3">
        <button className="btn btn-primary" type="submit">Send your Query</button>
      </div>

      {/* Status */}
      {status && (
        <div className="text-center mt-3 p-2 rounded-2 shadow">
          <p className={status === 'Query Submitted !' ? 'text-success' : status ==='Submitting Query' ? 'text-info' :'text-danger'}>{status}</p>
          {errors.name && <div className="text-danger">{errors.name}</div>}
          {errors.emailId && <div className="text-danger">{errors.emailId}</div>}
          {errors.domain && <div className="text-danger">{errors.domain}</div>}
          {errors.title && <div className="text-danger">{errors.title}</div>}
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>
      )}
    </form>
  );
}
