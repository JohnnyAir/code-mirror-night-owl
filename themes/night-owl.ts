import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

// Using https://github.com/sdras/night-owl-vscode-theme as reference for the colors
export const colors = {
  foreground: "#ced4d9",
  editorBackground: "#0b253a",
  cursor: "#ffffff",
  activeLineBg: "#0116273b",
  selection: "#1a3b57",
  highlightBrackets: "#bad0f847",
  tooltipBackground: "#005498",
  selectionMatch: "#166cb5",
  panelBg: "#041c30",
  lineNumbers: "#7d8799",
  boolean: "#FF5874",
  number: "#F78C6C",
  string: "#ECC48D",
  keyword: "#C792EA",
  variables: "#D7DBE0",
  self: "#7FDBCA",
  typeColor: "#FFCB8B",
  property: "#BAEBE2",
  propertyDef: "#82AAFF",
  invalid: "#ffc4c8",
  attr: "#C5E478",
  tags: "#CAECE6",
  regexp: "#5CA7E4",
};

/// The editor theme styles.
export const nightOwlTheme = EditorView.theme(
  {
    "&": {
      color: colors.foreground,
      backgroundColor: colors.editorBackground,
    },

    ".cm-content": {
      caretColor: colors.cursor,
    },

    ".cm-cursor, .cm-dropCursor": { borderLeftColor: colors.cursor },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
      { backgroundColor: colors.selection },

    ".cm-panels": {
      backgroundColor: colors.panelBg,
      color: colors.foreground,
    },

    ".cm-activeLine": { backgroundColor: colors.activeLineBg },
    ".cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: colors.highlightBrackets,
    },

    ".cm-gutters": {
      backgroundColor: colors.editorBackground,
      color: colors.lineNumbers,
      border: "none",
    },

    ".cm-activeLineGutter": {
      backgroundColor: colors.activeLineBg,
      color: colors.foreground,
    },

    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

    ".cm-panel.cm-search button": {
      backgroundImage: "linear-gradient(#0d2f4b, #072034)",
      border: "1px solid #595959",
    },

    ".cm-searchMatch, .cm-selectionMatch": {
      backgroundColor: colors.selectionMatch,
      outline: `1px solid ${colors.tooltipBackground}`,
    },

    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: "#ff01014d",
      outline: "1px solid #ff4545",
    },

    ".cm-foldPlaceholder": {
      backgroundColor: colors.selection,
      border: "none",
      color: colors.foreground,
    },

    ".cm-tooltip": {
      border: "none",
      backgroundColor: colors.tooltipBackground,
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: colors.tooltipBackground,
      borderBottomColor: colors.tooltipBackground,
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: colors.selectionMatch,
        color: colors.foreground,
      },
    },
  },
  { dark: true }
);

export const nightOwlHighlightStyle = HighlightStyle.define([
  { tag: [t.meta, t.comment], color: "#637777" }, //comment
  { tag: t.number, color: colors.number }, //numbers
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
    color: colors.propertyDef,
  },
  { tag: t.escape, color: colors.number },
  { tag: t.regexp, color: colors.regexp },
  { tag: [t.link, t.url], textDecoration: "underline" }, 
  { tag: t.color, color: colors.self },
  { tag: t.attributeName, color: colors.attr },
  { tag: t.invalid, color: colors.invalid },
  { tag: t.heading, fontWeight: "bold", color: colors.attr },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.strikethrough, textDecoration: "line-through" },
  { tag: t.angleBracket, color: colors.self },
  { tag: t.tagName, color: colors.tags },
  { tag: t.attributeValue, color: colors.string },
  { tag: t.meta, color: colors.number },
]);

/// Extension to enable theme (both the editor theme and the highlight style).
export const nightOwl: Extension = [
  nightOwlTheme,
  syntaxHighlighting(nightOwlHighlightStyle),
];
