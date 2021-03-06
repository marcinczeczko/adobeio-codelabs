module.exports = `html, body {
  margin: 0;
  padding: 0;
}

.default {
  padding: 24px 256px 0 52px;
  max-width: 1080px;
  min-width: 304px;
  margin: 0 auto;
  box-sizing: border-box;
}

.spectrum-Body--M img {
  margin-top: 16px;
}

code.spectrum-Code--S {
  border-radius: 4px;
  background-color: rgba(80, 80, 80, 0.02);
  border: 1px solid rgba(50, 50, 50, 0.05);
}

.spectrum--darkest code.spectrum-Code--S {
  background-color: rgba(200, 200, 200, 0.02);
  border-color: rgba(239, 239, 239, 0.05);
}

code.spectrum-Code--S.spectrum-Well {
  display: inline;
  padding: 4px;
}

code.spectrum-Code--S.spectrum-Well.hljs {
  display: block;
  padding: 16px;
}

.spectrum-Table {
  margin: 16px 0;
}

main {
  min-height: calc(100vh - 128px);
  padding-top: 64px;
}

main img {
  max-width: 100%;
}

header {
  position: fixed;
  padding: 16px 0;
  width: 100%;
  display: flex;
  overflow-y: auto;
  background-color: var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));
}

header > .header-item {
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 16px;
}

header > nav {
  flex: 1;
  margin-right: 64px;
}

.side-panel {
  position: fixed;
  top: 64px;
  right: 0;
  padding: 16px;
  box-sizing: border-box;
  width: 256px;
  background-color: var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));
}

.side-panel h3 {
  padding-top: 32px;
}

.side-panel ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.side-panel li {
  padding: 0;
  margin: 0;
}

.footer {
  height: 64px;
  margin: 0 24px;
  overflow: auto;
  white-space: nowrap;
}

.footer-rule,
.footer ul {
  min-width: 600px;
}

.footer ul {
  list-style: none;
  padding: 5px 0;
  margin: 0;
  font-size: 11px;
  display: flex;
  justify-content: flex-end;
}

.footer ul > li {
  padding: 3px 0;
  margin-right: 32px;
}

.footer ul > li:last-child {
  margin-right: 0;
}

.footer ul > li a {
  text-decoration: none;
}

@media screen and (max-width: 960px) {
  .default {
    padding-right: 24px;
    padding-left: 24px;
  }

  .side-panel {
    display: none;
  }
  
  header {
    position: static;
  }
  
  .header-item .spectrum-Breadcrumbs {
    display: block;
  }
  
  main {
    padding-top: 0;
  }
}

.spectrum {
  --hljs-color: var(--spectrum-global-color-gray-800, #383a42);
  --hljs-background: var(--spectrum-global-color-gray-75, #fafafa);
  --hljs-keyword-color: var(--spectrum-global-color-fuchsia-600, #a626a4);
  --hljs-section-color: var(--spectrum-global-color-red-600, #e45649);
  --hljs-literal-color: var(--spectrum-global-color-blue-600, #0184bb);
  --hljs-attribute-color: var(--spectrum-global-color-celery-600, #50a14f);
  --hljs-class-color: var(--spectrum-global-color-yellow-600, #c18401);
  --hljs-variable-color: var(--spectrum-global-color-orange-600, #986801);
  --hljs-title-color: var(--spectrum-global-color-indigo-600, #4078f2);
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: var(--hljs-color, #383a42);
  background: var(--hljs-background, #fafafa);
}

.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
  font-style: italic;
}

.hljs-doctag,
.hljs-formula,
.hljs-keyword {
  color: var(--hljs-keyword-color, #a626a4);
}

.hljs-deletion,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-subst {
  color: var(--hljs-section-color, #e45649);
}

.hljs-literal {
  color: var(--hljs-literal-color, #0184bb);
}

.hljs-addition,
.hljs-attribute,
.hljs-meta-string,
.hljs-regexp,
.hljs-string {
  color: var(--hljs-attribute-color, #50a14f);
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: var(--hljs-class-color, #c18401);
}

.hljs-attr,
.hljs-number,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
  color: var(--hljs-variable-color, #986801);
}

.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-symbol,
.hljs-title {
  color: var(--hljs-title-color, #4078f2);
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}`;