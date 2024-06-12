import React from 'react';
import { CodeSnippet, LanguageType } from '../types';

export const useCodeSnippet = (key: string, initial: CodeSnippet) => {
  const [codeSnippet, setCodeSnippet] = React.useState<CodeSnippet>(
    JSON.parse(localStorage.getItem(key)!) ?? initial
  );
  const [currentLanguage, setCurrentLanguage] = React.useState<LanguageType>('html');

  const setSnippet = (snippet: CodeSnippet) => {
    localStorage.setItem(key, JSON.stringify(snippet));
    setCodeSnippet(snippet);
  };

  const changeLanguage = (lang: LanguageType) => {
    setCurrentLanguage(lang);
  };

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(codeSnippet));
  }, [codeSnippet]);

  return {
    codeSnippet,
    setSnippet,
    currentLanguage,
    changeLanguage
  };
};
