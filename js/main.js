/* --------------------------------------------------
   Global – Nav Toggle ＋ Contact Form
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. 行動版導覽切換 ---------- */
  const header    = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    header.classList.toggle('nav-open');
  });

  /* ---------- 2. Contact Form ---------- */
  const form = document.getElementById('contact-form');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 鎖定按鈕避免重複送出
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;

    try {
      const res = await fetch('https://example.com/api/contact', {
        method: 'POST',
        body: new FormData(form),
        // 建議加上 CSRF / Header 視後端需求
      });

      const message = res.ok
        ? '感謝您的來信！我們將盡快回覆。'
        : '送出失敗，請稍後再試。';
      alert(message);

      if (res.ok) form.reset();
    } catch {
      alert('送出失敗，請檢查網路連線。');
    } finally {
      submitBtn.disabled = false;
    }
  });
});
