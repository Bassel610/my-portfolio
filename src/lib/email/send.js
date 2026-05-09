const ENDPOINT = 'https://api.web3forms.com/submit';

export async function sendContactEmail(data) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) return { ok: false, reason: 'missing-key' };

  const payload = {
    access_key: accessKey,
    subject: `Portfolio · ${data.name || 'New message'}${data.company ? ' / ' + data.company : ''}`,
    from_name: data.name || 'Portfolio visitor',
    replyto: data.email || '',
    name: data.name || '',
    company: data.company || '',
    email: data.email || '',
    message: data.message || '',
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => null);
    return { ok: !!(json && json.success), reason: json?.message };
  } catch (err) {
    return { ok: false, reason: err?.message || 'network' };
  }
}
