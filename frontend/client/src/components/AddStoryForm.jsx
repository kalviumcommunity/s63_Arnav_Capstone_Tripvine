import { useState } from 'react';

function AddStoryForm() {
  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    country: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Story:', formData);
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
      <button type="submit">Submit Story</button>
    </form>
  );
}

export default AddStoryForm;
