import { useEffect, useRef, useState } from 'react';
import { editor } from 'monaco-editor';
import './App.css';
import { Editor } from '@monaco-editor/react';

function App() {
  const editorRef = useRef(null);

  /*useEffect(() => {
    if (editorRef.current) {
      // Crear una instancia del editor
      const editor = monaco.editor.create(editorRef.current, {
        value: 'console.log("¡Hola, mundo!");',
        language: 'javascript',
        theme: 'vs-light', // Puedes cambiar el tema según tus preferencias
        automaticLayout: true,
        padding: {
          top: 20,
          bottom: 20,
        },
        scrollbar: {
          vertical: 'auto',
          verticalHasArrows: false,
          verticalScrollbarSize: 5,
        },
      });

      // Opcional: puedes configurar más opciones del editor aquí

      return () => {
        // Limpiar el editor cuando el componente se desmonte
        editor.dispose();
      };
    }
  }, []);*/
  function handleEditorChange(value: string | undefined) {
    console.log('here is the current model value:', value);
  }

  return (
    <main>
      <img src='/NoteCodeLogo.svg' alt='logo' />
      <h1>Create & Share</h1>
      <h2>Your Code easily</h2>
      {/* <article ref={editorRef} className='editor'> */}
      <Editor
        // height='100vh'
        className='editor'
        defaultLanguage='javascript'
        defaultValue=''
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
      />
      {/* </article> */}
    </main>
  );
}

export default App;
