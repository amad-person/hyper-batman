const accent = '#fcef0c'

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#1b1d1e',
    foregroundColor: '#c0c0c0',
    backgroundColor: '#1b1d1e',
    selectionColor: 'rgba(239, 227, 11, 0.3)',
    cursorColor: accent,
    cursorShape: 'UNDERLINE',
    colors: [
      // Normal
      '#1b1d1e',
      '#e6dc44',
      '#c8be46',
      '#f4fd22',
      '#737174',
      '#747271',
      '#62605f',
      '#c6c5bf',
      // Bright
      '#505354',
      '#fff78e',
      '#fff27d',
      '#feed6c',
      '#919495',
      '#9a9a9d',
      '#a3a3a6',
      '#dadbd6' 
      ],
      css: `
      ${config.css || ''}
      .hyper_main {
        border: none;
      }

      .header_header {
        background-color: ${accent}
      }

      .tabs_borderShim {
        display: none
      }

      .tab_tab {
        border: none;
      }

      .tab_icon {
        color: #000;
      }

      .tab_icon:hover {
        background-color: rgba(0, 0, 0, 0.13);
        color: #000;
      }

      .tab_icon:active {
        color: #000;
      }

      .tab_text,
      .term_term {
        opacity: 0.4;
      }

      .tab_text {
        color: rgb(64, 69, 71);
      }

      .tab_active .tab_text,
      .term_active .term_term {
        opacity: 1;
        transition: opacity 0.12s ease-in-out;
      }

      .tab_active .tab_text {
        color: rgb(27, 29, 30);
      }

      .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
        background-color: ${accent} !important;
      }
      `
    });
}