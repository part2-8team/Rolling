import React from 'react';
import styled from 'styled-components';
import ReactQuill, { Quill } from 'react-quill';
import 'quill/dist/quill.snow.css';

function QuillEditor() {
  let bold = Quill.import('formats/bold');
  bold.tagName = 'b';
  Quill.register(bold, true);

  let italic = Quill.import('formats/italic');
  italic.tagName = 'i';
  Quill.register(italic, true);

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'align',
    'color',
    'background',
  ];

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    },
  };

  return (
    <Container>
      <ReactQuill
        style={{ height: '250px' }}
        theme="snow"
        modules={modules}
        formats={formats}
      />
    </Container>
  );
}

export default QuillEditor;

const Container = styled.div`
  height: 300px;
`;
