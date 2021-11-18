function renderTemplates(templates) {
  const body = document.getElementsByTagName('body')[0];
  let rendered = body.innerHTML;

  for (let key in templates) {
    rendered = rendered.replaceAll(`{{${key}}}`, templates[key]);
  }

  // rendered = body.innerHTML.replaceAll('{{type}}', titleByType[type]);

  body.innerHTML = rendered;
  }
