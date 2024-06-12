import './App.css';
import * as monacoEditor from 'monaco-editor';

import { Editor, OnMount, useMonaco } from '@monaco-editor/react';
import { useEffect, useRef } from 'react';
import { AspectRatio, Card, Skeleton } from '@mui/joy';
import { addCustomSnippets, defaultValue } from './utils/editorVars';
import { useCodeSnippet } from './hooks/useCodeSnippet';

const initialState = {
  html: defaultValue,
  css: '',
  javascript: 'js code'
};

function App() {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);
  const monaco = useMonaco();
  const { codeSnippet, setSnippet, currentLanguage, changeLanguage } = useCodeSnippet(
    'code',
    initialState
  );

  useEffect(() => {
    if (monaco) {
      addCustomSnippets(monaco);
    }
  }, [monaco]);

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (value: string | undefined) => {
    setSnippet({ ...codeSnippet, [currentLanguage]: value });
  };

  return (
    <main>
      <img src="/NoteCodeLogo.svg" alt="logo" />
      <h1>Create & Share</h1>
      <h2>Your Code easily</h2>
      <Editor
        height="100"
        theme="vs-light"
        className="editor"
        language={currentLanguage}
        value={codeSnippet[currentLanguage as keyof typeof codeSnippet]}
        onMount={onMount}
        onChange={handleEditorChange}
        options={{
          padding: {
            top: 20,
            bottom: 20
          },
          automaticLayout: true,
          scrollbar: {
            verticalScrollbarSize: 5,
            alwaysConsumeMouseWheel: false
          }
        }}
        loading={
          <Card className="editor" sx={{ width: '100%', overflowY: 'hidden' }}>
            <AspectRatio ratio="9/11">
              <Skeleton variant="overlay" animation={'wave'}>
                <img alt="" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />
              </Skeleton>
            </AspectRatio>
          </Card>
        }
      />
    </main>
  );
}

export default App;
