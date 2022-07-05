import React, { useState } from 'react';

const FileUploadTest = () => {

    const [ fileInputState, setFileInputState ] = useState('');
    const [ selectedFile, setSelectedFile ] = useState('');
    const [ previewSource, setPreviewSource] = useState([]);

    const handleFileInputChange = e => {
        // if(e.target.files.length > 1){
        //     for(let i = 0; i < 5; i++){
        //         console.log(e.target.files[i]);
        //     }
        //     for(let i = 0; i < e.target.files.length; i++){
        //         previewFile(e.target.files[i])
        //     }
        // }else{
        //     const file = e.target.files[0];
        //     previewFile(file);
        // }
        let files = Object.values(e.target.files);
        console.log(files)
        // files.map(file => {
        //     previewFile(file)
        // })
        previewFiles(files);
    }

    const previewFiles = async (files) => {

        console.log('files: ', files);
        const reader = new FileReader();
        for(let i = 0; i < files.length; i++){
            await reader.readAsDataURL(files[i])
        }

        // files.map(file => {
        //     reader.readAsDataURL(file);
        //     reader.onloadend = () => {
        //         setPreviewSource([
        //             ...previewSource,
        //             file
        //         ])
        //     }
        // })
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //     setPreviewSource(reader.result);
        // }
    }

    const handleSubmitFile = e => {
        e.preventDefault();

        if(!previewSource) return;

        uploadImage(previewSource);
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        try{
            await fetch('http://localhost:9000/api/upload', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-type': 'application/json'}
            })
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={handleSubmitFile}>
                <input 
                    type='file'
                    name='image'
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    multiple
            />
            <button type='submit'>
                Submit
            </button>

            </form>
            {previewSource.length > 0 && (
                previewSource.map(image => {
                    return <img 
                        src={image}
                        alt='testing'
                    />
                })

                // <img 
                //     src={previewSource}
                //     alt='chosen'
                //     style={{height: '300px'}}
                // />
            )}
        </div>
    )

}

export default FileUploadTest;