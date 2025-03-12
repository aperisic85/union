const NewsList = ({ news }) => {
    if (!news || news.length === 0) {
      return <div>Nema dostupnih novosti.</div>;
    }
  
    return (
      <div className="news-list">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="news-card">
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content.substring(0, 150)}...</p>
            <p>Objavljeno: {newsItem.date}</p>
            <Link to={`/news/${newsItem.id}`} className="read-more">Pročitaj više</Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default NewsList;