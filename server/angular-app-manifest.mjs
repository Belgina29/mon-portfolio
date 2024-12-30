
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Belgina29.github.io/mon-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://Belgina29.github.io/mon-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/https://Belgina29.github.io/mon-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/https://Belgina29.github.io/mon-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/https://Belgina29.github.io/mon-portfolio/contact"
  }
],
  assets: {
    'index.csr.html': {size: 2296, hash: '67e45da24ca124b2121b0e36fb1d90348230631c91c8f78b59ed8dd3dc3b8c8b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1047, hash: '9a9ea2fa0279f105b11cba34e7d6533190e813de8370816b2f0cf3466e2d8881', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32476, hash: '770aa95502d64c9e84e8b5f340fb0f45a3d9171504e687dece014c203475702f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32476, hash: '770aa95502d64c9e84e8b5f340fb0f45a3d9171504e687dece014c203475702f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32476, hash: '770aa95502d64c9e84e8b5f340fb0f45a3d9171504e687dece014c203475702f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 32476, hash: '770aa95502d64c9e84e8b5f340fb0f45a3d9171504e687dece014c203475702f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-ATLH35R2.css': {size: 16191, hash: 'vDF7VtUS5KU', text: () => import('./assets-chunks/styles-ATLH35R2_css.mjs').then(m => m.default)}
  },
};
