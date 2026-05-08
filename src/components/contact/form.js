'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Button } from '@/components/shared';
import { CONTACT } from '@/constants/contact';

const FIELD_SX = {
  width: '100%',
  background: 'var(--bg-1)',
  color: 'var(--fg)',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius)',
  padding: '12px 14px',
  fontFamily: 'inherit',
  fontSize: '0.92rem',
  transition: 'border-color 0.2s var(--ease-smooth)',
  outline: 'none',
  '&:focus': { borderColor: 'var(--accent-line)' },
};

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box
        sx={{
          p: 3,
          border: '1px solid var(--accent-line)',
          background: 'var(--accent-soft)',
          borderRadius: 'var(--radius)',
          color: 'var(--fg)',
          fontSize: '0.94rem',
          lineHeight: 1.55,
        }}
      >
        Thanks — message logged locally. Wire this form to your inbox by
        replacing the submit handler with your endpoint of choice.
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}
    >
      {CONTACT.form.fields.map((f) => (
        <Box key={f.name} sx={{ display: 'flex', flexDirection: 'column', gap: 0.65 }}>
          <Box
            component="label"
            htmlFor={f.name}
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--fg-mute)',
            }}
          >
            {f.label}
            {f.required && (
              <Box component="span" sx={{ color: 'var(--accent)', ml: 0.5 }}>
                *
              </Box>
            )}
          </Box>
          {f.type === 'textarea' ? (
            <Box
              component="textarea"
              id={f.name}
              name={f.name}
              required={f.required}
              rows={5}
              sx={{ ...FIELD_SX, resize: 'vertical', minHeight: 120 }}
            />
          ) : (
            <Box
              component="input"
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              sx={FIELD_SX}
            />
          )}
        </Box>
      ))}
      <Box sx={{ mt: 0.5 }}>
        <Button variant="solid" type="submit">
          {CONTACT.form.submitLabel}
        </Button>
      </Box>
    </Box>
  );
}
