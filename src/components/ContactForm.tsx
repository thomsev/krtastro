import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

const maxWords = 120;

const countWords = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const wordCount = countWords(formState.message);

  const validate = (): Errors => {
    const nextErrors: Errors = {};
    if (!formState.name.trim()) {
      nextErrors.name = 'Vennligst oppgi navn.';
    }
    if (!formState.email.trim()) {
      nextErrors.email = 'Vennligst oppgi e-post.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = 'E-postadressen ser ikke riktig ut.';
    }
    if (!formState.message.trim()) {
      nextErrors.message = 'Skriv en kort melding om hva du trenger hjelp til.';
    }
    return nextErrors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'message') {
      const nextWords = countWords(value);
      if (nextWords > maxWords) {
        const trimmedWords = value.trim().split(/\s+/).slice(0, maxWords).join(' ');
        setFormState((prev) => ({ ...prev, [name]: trimmedWords }));
        return;
      }
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      console.info('Kontaktforespørsel', formState);
      setFormState(initialState);
    }
  };

  return (
    <form className="contact-form-fields" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Navn</label>
        <input id="name" name="name" value={formState.name} onChange={handleChange} required />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="email">E-post</label>
        <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="phone">Telefon (valgfritt)</label>
        <input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label htmlFor="message">Melding</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
        />
        <p className="form-help">Maks {maxWords} ord. {wordCount}/{maxWords} ord brukt.</p>
        {errors.message && <span className="error-text">{errors.message}</span>}
      </div>
      <button className="button" type="submit">Send forespørsel</button>
      {submitted && <p>Takk! Vi tar kontakt så snart som mulig.</p>}
    </form>
  );
}
