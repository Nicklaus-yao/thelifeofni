# Ni Yao's Resume Website

This is a static website showcasing my professional resume. The website is built using HTML, CSS, and JavaScript, and is designed to be responsive and modern.

## Project Context for AI Assistance

### Website Overview
- Domain: thelifeofni.com
- Hosting: Cloudflare Pages
- Repository: https://github.com/Nicklaus-yao/thelifeofni
- Owner: Ni Yao (niyao.nyc@gmail.com)

### Key Components
1. **Profile Information**
   - Name: Ni Yao
   - Title: Site Reliability Engineer
   - Location: New York, NY
   - Profile Photo: images/headshot-70.jpg

2. **Social Links**
   - LinkedIn: https://www.linkedin.com/in/niyao/
   - GitHub: https://github.com/Nicklaus-yao

3. **File Structure**
   - `index.html`: Main website content
   - `styles.css`: Styling and responsive design
   - `script.js`: Interactive features
   - `images/`: Contains profile photo
   - `monitor.js`: Website monitoring script

4. **Design Elements**
   - Color Scheme: Blue-based (--primary-color: #2563eb)
   - Font: Inter (Google Fonts)
   - Responsive Design: Mobile-first approach
   - Profile Image: Circular with border and shadow

### Recent Changes
- Added profile photo
- Updated social media links
- Implemented monitoring system
- Deployed to Cloudflare Pages

### Future Considerations
- Potential for adding blog section
- Integration with Cloudflare Analytics
- Performance optimization
- SEO improvements

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Modern animations and transitions
- Clean and professional layout
- Optimized for performance

## Deployment

This website is deployed using Cloudflare Pages. Here's how to deploy it:

1. Push your code to a GitHub repository
2. Log in to your Cloudflare dashboard
3. Go to Pages > Create a project
4. Connect your GitHub repository
5. Configure your build settings:
   - Build command: (leave empty for static site)
   - Build output directory: `/` (root directory)
6. Click "Save and Deploy"

Your site will be automatically deployed to `https://thelifeofni.com`

## Local Development

To run this website locally:

1. Clone the repository
2. Open `index.html` in your web browser
3. Make changes to the files as needed
4. Test your changes locally before deploying

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript functionality
- `monitor.js` - Website monitoring script
- `README.md` - This documentation file
- `images/` - Directory containing website images

## Customization

To customize the website:

1. Update the content in `index.html`
2. Modify styles in `styles.css`
3. Add or remove sections as needed
4. Update the contact information and social links

## Monitoring

The website includes a monitoring system that:
- Checks website health every 5 minutes
- Logs response times and status codes
- Tracks uptime and performance
- Stores monitoring data in monitoring.log

To start monitoring:
```bash
npm start
```

## License

All rights reserved © 2024 Ni Yao 