import React from "react";
import DocumentUploader from "../components/DocumentUploader";
import DocumentList from "../components/DocumentList";

interface TestInput {
  text: string;
}

const NewLine: React.FC<TestInput> = (props:TestInput) => {
  // const text = props?.text
  const { text } = props
  const newText = text.split('\n').map((str: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => <p>{str}</p>);
  
  return (
    <>{newText}</>
  )
}

const Documents: React.FC = () => {
  return (
    <>
      <DocumentUploader />
      <DocumentList />
    </>
  );
};

export default Documents;
