import { useParams, Link } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // This will be your current portfolio code
import BlogPage from './BlogPage'; // The code you just shared

function App() {
  return (
    <Router>
      <Routes>
        {/* This is your main portfolio/landing page */}
        <Route path="/" element={<Home />} />
        
        {/* This is your new blog article page */}
        <Route path="/genz-revolution" element={<Route element={<BlogPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;

const BlogPage = () => {
  const { id } = useParams();

  // Content from your GenZ Revolution document [cite: 38]
  const articleContent = {
    title: "GenZ Revolution – A Day I Will Never Forget",
    date: "Aug 2024",
    text: [
      "There are some days in life that stay with you forever. One such period in my life is called the “GenZ Revolution.” [cite: 39, 40]",
      "It was a time of intense protests, political uncertainty, and emotional chaos that affected everyone, including students like me. [cite: 41]",
      "One of the most shocking visuals was seeing reports of key institutions such as Singha Durbar being damaged during the chaos. [cite: 59]",
      "The police started firing gunshots near New Baneshwor. It was the moment we realized this was no longer just a peaceful protest. [cite: 50, 51, 52]"
    ],
    images: [
      { url: "/Photos/revolution-protest.jpg", caption: "Standing for change amidst the chaos." },
      { url: "/Photos/revolution-fire.jpg", caption: "The heavy smoke and fire rising from government areas. [cite: 58]" },
      { url: "/Photos/revolution-clash.jpg", caption: "Tense moments on the streets during the escalation." },
      { url: "/Photos/revolution-blood.jpg", caption: "A call for reform: 'No More Corruption.' [cite: 66]" }
    ]
  };

  return (
    <div style={{ padding: '40px', color: '#e0e0e0', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Link to="/" style={{ color: '#00f2ff', textDecoration: 'none' }}>← Back to Portfolio</Link>
      
      <article style={{ maxWidth: '900px', margin: '40px auto' }}>
        <h1 style={{ fontSize: '3rem', color: 'white' }}>{articleContent.title}</h1>
        <p style={{ color: '#888' }}>{articleContent.date}</p>
        
        {/* First part of text */}
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{articleContent.text[0]}</p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{articleContent.text[1]}</p>

        {/* Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '40px 0' }}>
          {articleContent.images.map((img, i) => (
            <div key={i}>
              <img src={img.url} alt="Revolution" style={{ width: '100%', borderRadius: '12px' }} />
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>{img.caption}</p>
            </div>
          ))}
        </div>

        {/* Remainder of text */}
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{articleContent.text[2]}</p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{articleContent.text[3]}</p>
        
        <footer style={{ marginTop: '60px', borderTop: '1px solid #333', paddingTop: '20px', color: '#555' }}>
          *Content derived from personal journal entries regarding the 2024 political events.* [cite: 74]
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;