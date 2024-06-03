import  { useContext } from 'react';
import { FileContext } from '../context/FileContext';

export const FileDisplay = () => {
    const { fileUrl } = useContext(FileContext);

    return (
        <div>
            <h1>Uploaded Profile Image</h1>
            {fileUrl ? (
                <img src={fileUrl} alt="Profile" style={{ maxWidth: '100%' }} />
            ) : (
                <p>No file uploaded</p>
            )}
        </div>
    );
};
