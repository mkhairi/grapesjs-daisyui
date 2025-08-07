import en from './locale/en';
import loadBlocks from './blocks';
import loadCommands from './commands';

export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
      tailwindPlayCdn: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
      daisyuiCdn: 'https://cdn.jsdelivr.net/npm/daisyui@5',
      plugins: [],
      config: {},
      cover: `.object-cover { filter: sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) !important; }`,
      changeThemeText: 'Change Theme',
      openCategory: 'Blog',
    }, ...opts
  };

  // Add blocks
  loadBlocks(editor, options);
  // Add commands
  loadCommands(editor, options);
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n,
  });

  const appendTailwindCss = async (frame) => {
    const iframe = frame.view.getEl();

    if (!iframe) return;

    const { tailwindPlayCdn, daisyuiCdn, plugins, config, cover } = options;
    const init = () => {
      iframe.contentWindow.tailwind.config = config;
    }

    const script = document.createElement('script');
    script.src = tailwindPlayCdn + (plugins.length ? `?plugins=${plugins.join()}` : '');
    script.onload = init;

    const daisyuiCss = document.createElement('link');
    daisyuiCss.rel = 'stylesheet';
    daisyuiCss.href = daisyuiCdn;

    // Append daisyui css
    iframe.contentDocument.head.appendChild(daisyuiCss);

    const cssStyle = document.createElement('style');
    cssStyle.innerHTML = cover;

    // checks iframe is ready before loading Tailwind CSS - issue with firefox
    const f = setInterval(() => {
      const doc = iframe.contentDocument;
      if (doc && doc.readyState && doc.readyState === 'complete') {
        doc.head.appendChild(script);
        doc.head.appendChild(cssStyle);
        clearInterval(f);
      }
    }, 100)
  }

  editor.Canvas.getModel()['on']('change:frames', (m, frames) => {
    frames.forEach(frame => frame.once('loaded', () => appendTailwindCss(frame)));
  });
};
