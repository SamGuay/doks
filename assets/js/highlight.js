import hljs from 'js/vendor/highlight.js/lib/core.js';

import javascript from 'js/vendor/highlight.js/lib/languages/javascript';
import json from 'js/vendor/highlight.js/lib/languages/json';
import bash from 'js/vendor/highlight.js/lib/languages/bash';
import xml from 'js/vendor/highlight.js/lib/languages/xml';
import ini from 'js/vendor/highlight.js/lib/languages/ini';
import yaml from 'js/vendor/highlight.js/lib/languages/yaml';
import markdown from 'js/vendor/highlight.js/lib/languages/markdown';
import r from 'js/vendor/highlight.js/lib/languages/r';
import python from 'js/vendor/highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('toml', ini);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('md', markdown);
hljs.registerLanguage('r', r);
hljs.registerLanguage('python', python);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code:not(.language-mermaid)').forEach((block) => {
    hljs.highlightElement(block);
  });
});
