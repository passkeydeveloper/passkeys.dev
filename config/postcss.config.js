const autoprefixer = require('autoprefixer')({})
const cssnano = require('cssnano')({
  preset: ['advanced', {
    discardUnused: {
      fontFace: false  // Preserve all @font-face declarations
    }
  }]
})
const purgeImport = require('@fullhuman/postcss-purgecss')
const purgeCSSPlugin = purgeImport.purgeCSSPlugin || purgeImport.default || purgeImport
const purgecss = purgeCSSPlugin({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])]
  },
  dynamicAttributes: ['aria-expanded', 'data-bs-theme', 'data-bs-main-theme', 'data-bs-theme-animate', 'data-transparent', 'role'],
  fontFace: false,
  safelist: {
    standard: [
      // Bootstrap form validation
      'was-validated',
      // Bootstrap dynamic states
      'show',
      'showing',
      'hiding',
      'active',
      'disabled',
      'collapsed',
      'collapsing',
      // SimpleDatatables modifier classes
      'no-header',
      'no-footer',
      // SimpleDatatables table rendering classes (added by JS)
      'th-inner',
      'sortable',
      'sortable-center',
      'both',
      'desc',
      'asc',
      // SimpleDatatables search component
      'search-data-table',
      'search-input',
      // Bootstrap utilities used by SimpleDatatables
      'float-right',
      'float-left'
    ],
    // Classes with these patterns will be preserved along with their children
    deep: [
      // Bootstrap components that get dynamically modified
      /modal/,
      /dropdown/,
      /carousel/,
      /tooltip/,
      /popover/,
      /collapse/,
      /offcanvas/,
      // SimpleDatatables - preserve structure and all nested elements
      /datatable/,
      // Bootstrap form controls (used by SimpleDatatables)
      /form-select/,
      /form-control/,
      // Bootstrap button groups (used by SimpleDatatables search)
      /btn-group/,
      // Bootstrap responsive tables (used by list component)
      /table-responsive/,
      // Syntax highlighting - preserve Chroma classes and descendants
      /chroma/,
      /syntax-highlight/,
      /codeblock/
    ],
    // Preserve any selector containing these patterns
    greedy: [
      // Third-party library prefixes (well-namespaced, safe to use greedy)
      /^fa-/,              // FontAwesome
      /^leaflet-/,         // Leaflet maps
      /^katex-/,           // KaTeX math (note: using katex- not just katex)
      /^mermaid/,          // Mermaid diagrams
      /datatable/,         // SimpleDatatables (all variants: datatable-*, *-datatable, etc.)
      /^cky-/,             // CookieYes

      // Component-specific prefixes
      /clipboard-/,        // Clipboard component
      /command-/,          // Command component
      /search-/,           // Search functionality (includes search-input, search-data-table)
      /suggestion__/,      // Search suggestions (FlexSearch)
      /testimonial-/,      // Testimonial component
      /preview-/,          // Preview component (mod-blocks)

      // Syntax highlighting - third-party engines (Chroma handled in deep)
      /^hljs-/,            // highlight.js
      /^language-/,        // Prism/generic

      // Pagination and navigation
      /page-item/,
      /page-link/,
      /pagination/,        // Bootstrap pagination classes
      /nav-item/,
      /nav-link/,
      /navbar-/,
      /^nav-/,             // Nav variant classes (nav-callout, nav-panel, nav-pills, nav-tabs, nav-underline)

      // Bootstrap responsive tables
      /table-responsive/,  // All table-responsive-* variants and attribute selectors

      // Color mode toggle - d-none-main-* classes plus [data-bs-main-theme="dark"] compound selectors
      /d-none-main/,

      // Bootstrap transitions and utilities that get added via JS
      /fade/,
      /^translate/         // Bootstrap utilities
    ]
  }
})

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
    purgecss
  ]
}
