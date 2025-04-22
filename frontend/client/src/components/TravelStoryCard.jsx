function TravelStoryCard({ story }) {
    return (
      <div className="story-card">
        <h3>{story.title}</h3>
        <p>{story.destination}, {story.country}</p>
      </div>
    );
  }
  
  export default TravelStoryCard;
  