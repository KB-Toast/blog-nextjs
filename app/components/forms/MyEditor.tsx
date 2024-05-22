"use client"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export default function MyEditor() {
    const [editorValue, setEditorValue] = useState('');

    return (
        <ReactQuill
            value={editorValue}
            onChange={(value) => setEditorValue(value)}
            modules={{
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block']
                ]
            }}
            theme="snow"
        />
    );
}