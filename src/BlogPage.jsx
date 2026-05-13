import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const articleContent = {
    title: "GenZ Revolution – A Day I Will Never Forget",
    date: "August 2024",
    // These paths assume you moved the images to public/Photos/ and renamed them
    sections: [
      {
        text: "There are some days in life that stay with you forever. One such period in my life is called the “GenZ Revolution.” It all started around the time when my semester exams were going on. I remember it clearly because my Python exam was scheduled just two days after Bhadra 23. My world at that time was limited to notes and books, but everything suddenly shifted as news of nationwide protests spread through social media.",
        image: "/Photos/revolution-protest.jpg" 
      },
      {
        text: "The situation escalated quickly. One of the most disturbing reports was about incidents near New Baneshwor, in front of the parliament area. The police started firing gunshots. It was the moment we realized this was no longer just a peaceful protest. For a student in the middle of exams, it became extremely difficult to concentrate as the atmosphere in the country grew tense.",
        image: "/Photos/revolution-clash.jpg"
      },
      {
        text: "By noon, rumors turned into reality: the Prime Minister had resigned. However, the chaos didn't stop. I remember seeing reports of key institutions like Singha Durbar being damaged. There was a total security crisis, and the streets were filled with a mix of anger, hope, and uncertainty.",
        image: "/Photos/revolution-fire.jpg"
      },
      {
        text: "The day finally reached a turning point when the Nepal Army announced they were taking responsibility for national security. That announcement brought a sense of relief after an extremely disturbing day. While life eventually returned to normal, the emotional impact of those days remains one of the most intense chapters of my life.",
        image: "/Photos/revolution-blood.jpg"
      }
    ]
  };

  return (
    <div style={{ 
      padding: '60px 20px', 
      color: '#e0e0e0', 
      backgroundColor: '#030810', 
      minHeight: '100vh',
      fontFamily: "'Sora', sans-serif" 
    }}>
      {/* Navigation Back */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ 
          color: '#00d4ff', 
          textDecoration: 'none', 
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ← Back to Portfolio
        </Link>
      </div>
      
      <article style={{ maxWidth: '800px', margin: '40px auto' }}>
        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            color: 'white', 
            lineHeight: '1.2',
            marginBottom: '16px' 
          }}>
            {articleContent.title}
          </h1>
          <p style={{ color: '#00d4ff', fontWeight: '500', opacity: 0.8 }}>{articleContent.date}</p>
        </header>

        {articleContent.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '80px' }}>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              marginBottom: '32px',
              color: '#cbd5e1' 
            }}>
              {section.text}
            </p>
            <div style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img 
                src={section.image} 
                alt="Revolution Scene" 
                style={{ width: '100%', display: 'block' }} 
              />
            </div>
          </div>
        ))}

        <footer style={{ 
          marginTop: '80px', 
          paddingTop: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.9rem'
        }}>
          <p>Personal Reflection & Journal Entry</p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;