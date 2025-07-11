/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $isTextNode, isHTMLElement, ParagraphNode, TextNode } from "lexical";

import type { DOMConversionMap, DOMExportOutput, DOMExportOutputMap, Klass, LexicalEditor, LexicalNode } from "lexical";

// import ExampleTheme from "./ExampleTheme";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import { parseAllowedColor, parseAllowedFontSize } from "./styleConfig";
import Theme from "./Theme";
import ToolbarPlugin from "./ToolbarPlugin";
import { parseAllowedColor, parseAllowedFontSize } from "./styleConfig";
import TreeViewPlugin from "./TreeViewPlugin";

const placeholder = "Enter some rich text...";

const removeStylesExportDOM = (editor: LexicalEditor, target: LexicalNode): DOMExportOutput => {
	const output = target.exportDOM(editor);
	if (output && isHTMLElement(output.element)) {
		// Remove all inline styles and classes if the element is an HTMLElement
		// Children are checked as well since TextNode can be nested
		// in i, b, and strong tags.
		for (const el of [output.element, ...output.element.querySelectorAll('[style],[class],[dir="ltr"]')]) {
			el.removeAttribute("class");
			el.removeAttribute("style");
			if (el.getAttribute("dir") === "ltr") {
				el.removeAttribute("dir");
			}
		}
	}
	return output;
};

const exportMap: DOMExportOutputMap = new Map<
	Klass<LexicalNode>,
	(editor: LexicalEditor, target: LexicalNode) => DOMExportOutput
>([
	[ParagraphNode, removeStylesExportDOM],
	[TextNode, removeStylesExportDOM],
]);

const getExtraStyles = (element: HTMLElement): string => {
	// Parse styles from pasted input, but only if they match exactly the
	// sort of styles that would be produced by exportDOM
	let extraStyles = "";
	const fontSize = parseAllowedFontSize(element.style.fontSize);
	const backgroundColor = parseAllowedColor(element.style.backgroundColor);
	const color = parseAllowedColor(element.style.color);
	if (fontSize !== "" && fontSize !== "15px") {
		extraStyles += `font-size: ${fontSize};`;
	}
	if (backgroundColor !== "" && backgroundColor !== "rgb(255, 255, 255)") {
		extraStyles += `background-color: ${backgroundColor};`;
	}
	if (color !== "" && color !== "rgb(0, 0, 0)") {
		extraStyles += `color: ${color};`;
	}
	return extraStyles;
};

const constructImportMap = (): DOMConversionMap => {
	const importMap: DOMConversionMap = {};

	// Wrap all TextNode importers with a function that also imports
	// the custom styles implemented by the playground
	for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
		importMap[tag] = (importNode) => {
			const importer = fn(importNode);
			if (!importer) {
				return null;
			}
			return {
				...importer,
				conversion: (element) => {
					const output = importer.conversion(element);
					if (output === null || output.forChild === undefined || output.after !== undefined || output.node !== null) {
						return output;
					}
					const extraStyles = getExtraStyles(element);
					if (extraStyles) {
						const { forChild } = output;
						return {
							...output,
							forChild: (child, parent) => {
								const textNode = forChild(child, parent);
								if ($isTextNode(textNode)) {
									textNode.setStyle(textNode.getStyle() + extraStyles);
								}
								return textNode;
							},
						};
					}
					return output;
				},
			};
		};
	}

	return importMap;
};

const editorConfig = {
	html: {
		export: exportMap,
		import: constructImportMap(),
	},
	namespace: "H-Gate",
	nodes: [ParagraphNode, TextNode],
	onError(error: Error) {
		throw error;
	},
	theme: Theme,
};

export default function LexicalTextEditor({
	showTreeView,
}: {
	showTreeView?: boolean;
}) {
	return (
		<LexicalComposer initialConfig={editorConfig}>
			<div className="bg-white border border-solid border-stone-300 dark:bg-neutral-800 dark:border-neutral-700 lexical-container">
				<ToolbarPlugin />
				<div className="p-2 relative">
					<RichTextPlugin
						contentEditable={<ContentEditable className="min-h-[150px] border-1 outline-0 p-2" />}
						aria-placeholder={placeholder}
						placeholder={<div className="text-muted-foreground px-2">{placeholder}</div>}
						ErrorBoundary={LexicalErrorBoundary}
					/>
					<HistoryPlugin />
					<AutoFocusPlugin />
					{showTreeView ? <TreeViewPlugin /> : null}
				</div>
			</div>
		</LexicalComposer>
	);
}
