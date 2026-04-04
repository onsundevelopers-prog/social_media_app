import React from 'react';
import { useState } from 'react';

const PostForm = () => {
    const [error, setError] = useState('');
    const isGuestUser = false; // Replace with actual user check logic

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isGuestUser) {
            setError('Guest users cannot create posts. Please log in to post.');
            return;
        }
        // Add logic for creating a post
        setError(''); // Clear error on successful submission
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <textarea placeholder="Write your post here..." required></textarea>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;

import React from 'react';

const PostForm = () => {
    // Your form code here
    return (
        <form>
            {/* form fields */}
        </form>
    );
};

export default PostForm;
