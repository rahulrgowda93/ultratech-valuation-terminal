/* ═══════════════════════════════════════════════════
   UltraTech FCFF Valuation · script.js
   Minimal UI interactions — no heavy frameworks
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── NAV SCROLL EFFECT ──
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.boxShadow = '0 1px 24px rgba(0,0,0,.5)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ── STAGGERED CARD ENTRANCE ──
  const animTargets = document.querySelectorAll(
    '.kpi-card, .analysis-card, .thesis-card, .sensitivity-card, .monte-card'
  );

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animTargets.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = `opacity .35s ease ${i * 40}ms, transform .35s ease ${i * 40}ms`;
      io.observe(el);
    });
  }

  // When card becomes visible
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .kpi-card.visible,
      .analysis-card.visible,
      .thesis-card.visible,
      .sensitivity-card.visible,
      .monte-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    </style>
  `);

  // ── UPSIDE BAR ANIMATE ──
  const upsideFill = document.querySelector('.upside-bar-fill');
  if (upsideFill && 'IntersectionObserver' in window) {
    const targetWidth = upsideFill.style.width;
    upsideFill.style.width = '0';
    upsideFill.style.transition = 'width 1s ease .5s';

    const barObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        upsideFill.style.width = targetWidth;
        barObs.disconnect();
      }
    }, { threshold: 0.5 });

    barObs.observe(upsideFill);
  }

  // ── BRIDGE BAR ANIMATE ──
  const bridgeBars = document.querySelectorAll('.br-bar');
  if (bridgeBars.length && 'IntersectionObserver' in window) {
    bridgeBars.forEach(bar => {
      const target = bar.style.width;
      bar.style.width = '0';
      bar.style.transition = 'width .8s ease .2s';
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          bar.style.width = target;
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(bar);
    });
  }

  // ── SENSITIVITY TABLE HOVER HIGHLIGHT ──
  const sensRows = document.querySelectorAll('.sens-table tbody tr');
  sensRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(59,130,246,.06)';
    });
    row.addEventListener('mouseleave', () => {
      if (!row.classList.contains('base-row')) {
        row.style.background = '';
      }
    });
  });

  // ── SCENARIO CARD CLICK EFFECT ──
  const scItems = document.querySelectorAll('.sc-item');
  scItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      scItems.forEach(s => s.style.opacity = '0.5');
      item.style.opacity = '1';
      item.style.transform = 'scale(1.03)';
      setTimeout(() => {
        scItems.forEach(s => {
          s.style.opacity = '1';
          s.style.transform = '';
        });
      }, 1200);
    });
  });

  // ── FCFF TABLE ROW HOVER ──
  const fcffRows = document.querySelectorAll('.fcff-table tbody tr');
  fcffRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(59,130,246,.05)';
    });
    row.addEventListener('mouseleave', () => {
      if (!row.classList.contains('inflection-row')) {
        row.style.background = '';
      }
    });
  });

  // ── TICKER TAPE PAUSE ON HOVER ──
  const tape = document.querySelector('.tape-track');
  if (tape) {
    tape.addEventListener('mouseenter', () => {
      tape.style.animationPlayState = 'paused';
    });
    tape.addEventListener('mouseleave', () => {
      tape.style.animationPlayState = 'running';
    });
  }

  // ── KEYBOARD SHORTCUT: T = Terminal, R = Report ──
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 't' || e.key === 'T') {
      window.location.href = 'terminal.html';
    }
    if (e.key === 'r' || e.key === 'R') {
      window.open('report.pdf', '_blank');
    }
  });

})();
