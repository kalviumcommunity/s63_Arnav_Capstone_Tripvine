import { useState } from 'react';

function AddStoryForm() {
  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    country: '',
    mediaUrls: [], // Add this field for uploaded images
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formDataFile = new FormData(); // Renamed to avoid confusion
    formDataFile.append('file', file);

    try {
      const res = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formDataFile,
      });
      const data = await res.json();
      setFormData((prevData) => ({
        ...prevData,
        mediaUrls: [data.url], // Save uploaded file URL
      }));
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Story:', formData);
    // Optionally send the formData to backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Destination"
        value={formData.destination}
        onChange={e => setFormData({ ...formData, destination: e.target.value })}
      />
      <input
        type="text"
        placeholder="Country"
        value={formData.country}
        onChange={e => setFormData({ ...formData, country: e.target.value })}
      />

      {/* 👇 File input for image upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* 👇 Show uploaded image preview if available */}
      {formData.mediaUrls.length > 0 && (
        <img
          src={formData.mediaUrls[0]}
          alt="Uploaded Preview"
          style={{ width: '200px', marginTop: '10px' }}
        />
      )}

      <button type="submit">Submit Story</button>
    </form>
  );
}

export default AddStoryForm;
