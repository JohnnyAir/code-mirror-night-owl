import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

// Using https://github.com/sdras/night-owl-vscode-theme as reference for the colors

/// The colors used in the theme.
export const colors = {
  foreground: "#797979",
  editorBackground: "#FBFBFB",
  activeLineBg: "#e7e7e77a",
  selection: "#adcff09e",
  boolean: "#BC5454",
  number: "#AA0982",
  string: "#c82521",
  keyword: "#994CC3",
  variables: "#403F53",
  self: "#0C969B",
  typeColor: "#111111",
  property: "#0C969B",
  propertyDef: "#4876D6",
  invalid: "#ffc4c8",
};

/// The editor theme styles
export const nightOwlLightTheme = EditorView.theme({
  "&": {
    color: colors.foreground,
    backgroundColor: colors.editorBackground,
  },

  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff",
  },

  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#ff01014d",
    outline: "1px solid #ff4545",
  },

  ".cm-activeLine": { backgroundColor: colors.activeLineBg },
  ".cm-selectionMatch": {
    backgroundColor: colors.selection,
    outline: "1px solid",
  },

  ".cm-gutters": {
    backgroundColor: colors.editorBackground,
    color: "#7d8799",
    border: "none",
  },

  ".cm-activeLineGutter": {
    backgroundColor: colors.activeLineBg,
    color: "#003981",
  },
});

export const nightOwlLightHighlightStyle = HighlightStyle.define([
  { tag: [t.meta, t.comment], color: "#637777" },
  { tag: t.number, color: colors.number },
  {
    tag: [t.atom, t.null, t.bool, t.special(t.variableName)],
    color: colors.boolean,
  },
  {
    tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
    color: colors.string,
  },
  {
    tag: [t.keyword, t.modifier, t.operator, t.changed],
    color: colors.keyword,
  },
  { tag: t.self, color: colors.self },
  {
    tag: [
      t.name,
      t.variableName,
      t.labelName,
      t.character,
      t.macroName,
      t.deleted,
    ],
    color: colors.variables,
  },
  {
    tag: [t.typeName, t.className, t.annotation, t.namespace],
    color: colors.typeColor,
  },
  { tag: t.propertyName, color: colors.property },
  {
    tag: [
      t.macroName,
      t.standard(t.name),
      t.definition(t.propertyName),
      t.function(t.name),
      t.function(t.variableName),
      t.function(t.propertyName),
    ],
    color: colors.propertyDef,
  },
  {
    tag: [
      t.constant(t.variableName),
      t.constant(t.name),
      t.special(t.variableName),
    ],
    color: "#82AAFF",
  },
  { tag: t.escape, color: "#F78C6C" },
  { tag: t.regexp, color: "#5CA7E4" },
  { tag: [t.link, t.url], textDecoration: "underline" }, //links and regExp,
  { tag: t.color, color: colors.self },
  { tag: t.attributeName, color: colors.propertyDef },
  { tag: t.invalid, color: colors.invalid },
  { tag: t.heading, fontWeight: "bold", color: "#C5E478" },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.strikethrough, textDecoration: "line-through" },
  { tag: t.angleBracket, color: colors.keyword },
  { tag: t.tagName, color: colors.keyword },
  { tag: t.attributeValue, color: colors.string },
  { tag: t.meta, color: colors.keyword },
]);

export const nightOwlLight: Extension = [
  nightOwlLightTheme,
  syntaxHighlighting(nightOwlLightHighlightStyle),
];
