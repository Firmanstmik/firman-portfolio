import fs from 'node:fs'

const p = 'src/i18n/translations.ts'
let s = fs.readFileSync(p, 'utf8')

const labelMap = {
  "'about.label': '01 — About'": "'about.label': 'About'",
  "'exp.label': '02 — Experience'": "'exp.label': 'Experience'",
  "'stack.label': '03 — Technologies'": "'stack.label': 'Stack'",
  "'projects.label': '04 — Selected Work'": "'projects.label': 'Selected work'",
  "'process.label': '05 — How I Work'": "'process.label': 'Process'",
  "'why.label': '06 — Why Work With Me'": "'why.label': 'Why me'",
  "'testi.label': '07 — Client Feedback'": "'testi.label': 'Client feedback'",
  "'contact.label': '08 — Contact'": "'contact.label': 'Contact'",
  "'about.label': '01 — Tentang'": "'about.label': 'Tentang'",
  "'exp.label': '02 — Pengalaman'": "'exp.label': 'Pengalaman'",
  "'stack.label': '03 — Teknologi'": "'stack.label': 'Teknologi'",
  "'projects.label': '04 — Karya Pilihan'": "'projects.label': 'Karya pilihan'",
  "'process.label': '05 — Cara Kerja'": "'process.label': 'Proses'",
  "'why.label': '06 — Kenapa Saya'": "'why.label': 'Kenapa saya'",
  "'testi.label': '07 — Testimoni Klien'": "'testi.label': 'Testimoni'",
  "'contact.label': '08 — Kontak'": "'contact.label': 'Kontak'",
}

for (const [from, to] of Object.entries(labelMap)) {
  s = s.split(from).join(to)
}

s = s.replaceAll(' — ', ', ')

fs.writeFileSync(p, s)
console.log('emdashes left:', (s.match(/—/g) || []).length)
