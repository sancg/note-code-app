import { useEffect, useRef, useState } from 'react'
import * as monaco from 'monaco-editor';
import './App.css'

function App() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Crear una instancia del editor
      const editor = monaco.editor.create(editorRef.current, {
        value: 'console.log("¡Hola, mundo!");',
        language: 'javascript',
        theme: 'vs-light', // Puedes cambiar el tema según tus preferencias
        automaticLayout: true,
        padding: {
          top: 20,
          bottom: 20
        },
        scrollbar: {
          vertical: 'auto',
          verticalHasArrows: false,
          verticalScrollbarSize: 5
        }
      });

      // Opcional: puedes configurar más opciones del editor aquí

      return () => {
        // Limpiar el editor cuando el componente se desmonte
        editor.dispose();
      };
    }
  }, []);

  return (
    <main>
      <img src="/NoteCodeLogo.svg" alt="logo" />
      <h1>Create & Share</h1>
      <h2>Your Code easily</h2>
      <article ref={editorRef} className='editor'></article>
    </main>
  )
}

export default App
