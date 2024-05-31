import { CodeSnippet } from "../types";

export const codeSnippets: CodeSnippet[] = [
  {
    label: '!',
    documentation: 'Basic HTML boilerplate',
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
    `
  }]


export const defaultValue = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
    `

export const addCustomSnippets = (monaco) => {
  monaco.languages.registerCompletionItemProvider('html', {
    provideCompletionItems: () => {
      const suggestions = codeSnippets.map((snippet) => ({
        label: snippet.label,
        kind: monaco.languages.CompletionItemKind.Snippet,
        documentation: snippet.documentation,
        insertText: snippet.body,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      }));
      return { suggestions };
    }
  });
};


