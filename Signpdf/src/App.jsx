import {useEffect, useRef} from 'react';
import WebViewer from '../tools/copy-webviewer-files'

export default App = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        licenseKey: 'demo:1715757196837:7fc832310300000000754e70d1bf683b8ce64e2252e0a6d491e9da200d',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      },
      viewer.current,
    ).then((instance) => {
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
};