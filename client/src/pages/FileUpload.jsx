import  { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FileContext } from '../context/FileContext';

export const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const { setFileUrl } = useContext(FileContext);
    const history = useHistory();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImage', file);
        formData.append('userId', 'user-id-here'); // Replace with actual user ID

        try {
            const response = await axios.post('http://localhost:5000/api/auth/upload-profile-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
            setFileUrl(response.data.profileImageUrl);
            history.push('/file-display');
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data);
            } else {
                setMessage('Error uploading file');
            }
        }
    };

    return (
        <div>
            <h1>Upload Profile Image</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};
