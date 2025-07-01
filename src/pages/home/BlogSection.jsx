import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import subtitleIcon from "../../assets/images/icons/section-title.png";
import blogImage1 from "../../assets/images/blog/blog-image1.jpg";
import blogImage2 from "../../assets/images/blog/blog-image2.jpg";
import blogImage3 from "../../assets/images/blog/blog-image3.jpg";
import "../../assets/css/BlogSection.css";

const BlogSection = () => {
  // Blog data with actual images from blog folder
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch",
      excerpt: "Discover the latest trends and technologies that are shaping the future of web development and how they can benefit your business.",
      image: blogImage1,
      author: "John Smith",
      comments: 12,
      date: "2024-12-10"
    },
    {
      id: 2,
      title: "Digital Transformation Strategies for 2024",
      excerpt: "Learn about the fundamental principles of UI/UX design that every designer should know to create exceptional user experiences.",
      image: blogImage2,
      author: "Sarah Johnson",
      comments: 8,
      date: "2024-12-08"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Companies",
      excerpt: "Explore the best practices for mobile app development that ensure high performance, security, and user satisfaction.",
      image: blogImage3,
      author: "Mike Davis",
      comments: 15,
      date: "2024-12-05"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return { day, month };
  };

  return (
    <section className="blog-section">
      <Container>
        {/* Section Title */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="blog-section-header">
              <img 
                src={subtitleIcon} 
                alt="Section Icon" 
                className="section-icon"
              />
              <span className="section-subtitle">
                Blog & News
              </span>
            </div>
            <h2 className="blog-section-title">
              Explore Blogs and News
            </h2>
          </Col>
        </Row>

        {/* Blog Cards */}
        <Row className="g-4">
          {blogPosts.map((post, index) => {
            const { day, month } = formatDate(post.date);
            return (
              <Col key={post.id} lg={4} md={6}>
                {/* Blog Card */}
                <div className="blog-card">
                  {/* Blog Image */}
                  <div className="blog-image-container">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                    />
                    {/* Date Tag */}
                    <div className="blog-date-tag">
                      <span className="day">{day}</span>
                      <span className="month">{month}</span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="blog-content">
                    {/* Meta Info */}
                    <div className="blog-meta">
                      <div className="blog-meta-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5436 5.19275C14.5436 7.69093 12.499 9.7355 10.0008 9.7355C7.50268 9.7355 5.45811 7.69093 5.45811 5.19275C5.45811 2.69457 7.50264 0.65 10.0008 0.65C12.499 0.65 14.5436 2.69458 14.5436 5.19275Z" stroke="#3C72FC" strokeWidth="1.3"></path>
                          <path d="M18.2644 14.6706C18.1052 14.9458 17.9241 15.2073 17.7169 15.4766L17.7168 15.4765L17.7089 15.4873C17.4204 15.8788 17.0845 16.2373 16.7295 16.5924C16.4326 16.8892 16.0933 17.186 15.7568 17.4385C14.0794 18.6911 12.0622 19.3499 9.97818 19.3499C7.8984 19.3499 5.8851 18.6938 4.2098 17.4461C3.84591 17.1504 3.51371 16.8792 3.2269 16.5924L3.21993 16.5854L3.21276 16.5787C2.85667 16.2436 2.54242 15.8877 2.24749 15.4874L2.24751 15.4873L2.24417 15.4829C2.06196 15.24 1.87324 14.9756 1.71923 14.7169C1.83622 14.4559 1.98458 14.1847 2.14525 13.9526L2.14536 13.9527L2.15288 13.9413C3.06988 12.5556 4.53709 11.6388 6.16646 11.4148L6.18604 11.4121L6.20542 11.4082C6.2309 11.4031 6.29498 11.4117 6.34551 11.4496L6.3455 11.4496L6.34951 11.4525C7.41654 12.2401 8.68633 12.6453 10.0008 12.6453C11.3153 12.6453 12.5851 12.2401 13.6522 11.4525L13.6522 11.4525L13.6562 11.4496C13.6716 11.438 13.7404 11.408 13.8492 11.4167C15.4689 11.6435 16.9121 12.5568 17.8525 13.9468L17.8524 13.9469L17.8564 13.9526C18.0166 14.1839 18.1557 14.4231 18.2644 14.6706Z" stroke="#3C72FC" strokeWidth="1.3"></path>
                        </svg>
                        <span>By {post.author}</span>
                      </div>
                      <div className="blog-meta-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_615_71)">
                            <path d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z" fill="#3C72FC"></path>
                            <path d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z" fill="#3C72FC"></path>
                            <path d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z" fill="#3C72FC"></path>
                            <path d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z" fill="#3C72FC"></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <span>{post.comments} Comments</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="blog-title">
                      {post.title}
                    </h3>

                    {/* Read More Button */}
                    <button className="read-more-btn">
                      Read More
                      <svg 
                        className="read-more-icon"
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12,5 19,12 12,19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection; 