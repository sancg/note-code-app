import './App.css';
import * as monacoEditor from 'monaco-editor';

import { Editor, OnMount } from '@monaco-editor/react';
import { useRef, useState } from 'react';
import { AspectRatio, Box, Card, Skeleton } from '@mui/joy';

function App() {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);
  const [codeSnippet, setCodeSnippet] = useState('');

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (value: string | undefined) => {
    console.log(value);
  };

  return (
    <main>
      <img src='/NoteCodeLogo.svg' alt='logo' />
      <h1>Create & Share</h1>
      <h2>Your Code easily</h2>
      {/* <article ref={editorRef} className='editor'> */}
      <Editor
        height='100'
        theme='vs-dark'
        className='editor'
        defaultLanguage='javascript'
        defaultValue=''
        onMount={onMount}
        onChange={handleEditorChange}
        options={{
          padding: {
            top: 20,
            bottom: 20,
          },
          automaticLayout: true,
          scrollbar: {
            verticalScrollbarSize: 5,
          },
        }}
        loading={
          <Card className='editor' sx={{ width: '100%', overflowY: 'hidden' }}>
            <AspectRatio ratio='9/11'>
              <Skeleton
                variant='overlay'
                animation={'wave'}
                // sx={{ width: '80%', height: '90%' }}
              >
                <img alt='' src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' />
              </Skeleton>
            </AspectRatio>
          </Card>
        }
      />
      {/* </article> */}
    </main>
  );
}

export default App;
