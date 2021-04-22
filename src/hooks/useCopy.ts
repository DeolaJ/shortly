import { useState, useEffect } from 'react';

function useCopy(shortLink: string): { status: boolean; statusText: string; copyLink: () => void } {
  const [status, setStatus] = useState(false);
  const [statusText, setStatusText] = useState('Copy');

  async function executeCopy() {
    try {
      const copyText: string = shortLink;
      const textArea = document.createElement('textarea');
      textArea.value = copyText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('Copy');
      textArea.remove();
    } catch (exception) {
      console.log({ exception });
      setStatus(false);
      setStatusText('Copy');
    }
  }

  async function copyLink() {
    setStatus(true);
    await executeCopy();
    setStatusText('Copied!');
  }

  useEffect(() => {
    // To reset the copy text to default
    if (statusText === 'Copied!') {
      setTimeout(() => {
        setStatusText('Copy');
        setStatus(false);
      }, 2500);
    }
  }, [statusText]);

  return { status, statusText, copyLink };
}

export default useCopy;
