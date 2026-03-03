# Fenrir - Security Scanning Dashboard

A modern, feature-rich security scanning and vulnerability assessment dashboard built with React, Vite, and Tailwind CSS. Fenrir provides real-time scan monitoring, detailed vulnerability reporting, and comprehensive security analysis with a pixel-perfect user interface.

## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Components](#components)
- [Theme System](#theme-system)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Dashboard & Scanning
- **Real-time Scan Monitoring**: Live progress tracking with visual stage indicators
- **Severity-based Alerts**: Critical, High, Medium, and Low severity vulnerability classification
- **Multiple Scan Types**: Support for Greybox, Blackbox, and Whitebox scanning
- **Scan History**: Comprehensive scan management with status tracking
- **Progressive Scanning**: Multi-stage scanning process (Spidering → Mapping → Testing → Validating → Reporting)

### Vulnerability Management
- **Detailed Finding Logs**: Real-time vulnerability discovery and logging
- **Vulnerability Tracking**: Categorized findings by severity level
- **Exploitation Status**: Track patched and unpatched vulnerabilities
- **Finding Details**: Rich information including endpoints, descriptions, and impact analysis

### User Interface
- **Modern Design**: Clean, intuitive interface with smooth animations
- **Dark/Light Theme**: Full theme support with persistent user preferences
- **Responsive Layout**: Mobile-first design that works on all devices
- **Pixel-Perfect Components**: Meticulously crafted UI components with attention to detail
- **Live Console**: Real-time activity logging and verification logs

### Security Features
- **Role-based Access**: Dashboard and Settings pages with role-based navigation
- **Protected Routes**: Authentication-based access control
- **Audit Trails**: Comprehensive activity and verification logging
- **Credential Management**: Support for authenticated scanning with credential handling

### Advanced Features
- **Search & Filtering**: Quick scan lookup by name or type
- **Column Customization**: Configurable table columns for custom views
- **Pagination**: Efficient data management with pagination controls
- **Export Capabilities**: Generate and export scan reports
- **Settings Panel**: Comprehensive configuration options

## 📸 Screenshots

### Dashboard View
- Main dashboard with severity statistics
- Scan table with progress indicators
- Real-time vulnerability badges
- Search and filter functionality

### Scan Detail View
- Active stage tracking with visual timeline
- Circular progress indicator
- Live scan console with activity logs
- Real-time finding log with severity badges
- Metadata information display
- Status summary bar

### Theme Support
- Light mode for bright environments
- Dark mode for reduced eye strain
- Seamless theme switching

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 14.0 or higher
- **npm**: Version 6.0 or higher (or yarn/pnpm as alternatives)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (ES6+ support required)

### System Requirements
- **CPU**: Intel Core i5 or equivalent
- **RAM**: Minimum 4GB
- **Disk Space**: At least 500MB free space
- **Internet**: Required for initial setup and updates

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fenrir.git
cd fenrir
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Fenrir
VITE_APP_VERSION=1.0.0
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
fenrir/
├── public/                          # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/                      # Images, fonts, and media
│   ├── components/
│   │   ├── dashboard/               # Dashboard-specific components
│   │   │   ├── CircularProgress.jsx
│   │   │   ├── ConsolePanel.jsx
│   │   │   ├── FindingCard.jsx
│   │   │   ├── FindingLogPanel.jsx
│   │   │   ├── FindingSeverityBadge.jsx
│   │   │   ├── MetadataItem.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── ScanRow.jsx
│   │   │   ├── ScanStatusBar.jsx
│   │   │   ├── ScanTable.jsx
│   │   │   ├── SeverityBadge.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── StatusChip.jsx
│   │   │   ├── StageTracker.jsx
│   │   │   └── TableRow.jsx
│   │   ├── layout/                  # Layout components
│   │   │   ├── AppLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── StatusChip.jsx
│   │   │   ├── StepTracker.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   ├── AuthContext.jsx          # Authentication state management
│   │   └── ThemeContext.jsx         # Theme switching state
│   ├── data/
│   │   ├── findings.js              # Sample findings data
│   │   ├── logs.js                  # Console logs data
│   │   └── scans.js                 # Scan history data
│   ├── pages/
│   │   ├── Dashboard.jsx            # Main dashboard page
│   │   ├── Login.jsx                # Authentication page
│   │   └── ScanDetail.jsx           # Detailed scan view
│   ├── App.jsx                      # Main application component
│   ├── index.css                    # Global styles
│   └── main.jsx                     # Application entry point
├── .eslintrc.cjs                    # ESLint configuration
├── eslint.config.js                 # ESLint rules
├── index.html                       # HTML template
├── package.json                     # Project dependencies
├── tailwind.config.js               # Tailwind CSS configuration
├── vite.config.js                   # Vite configuration
└── README.md                        # This file
```

## ⚙️ Configuration

### Vite Configuration

The project uses Vite for fast development and optimized production builds. Configuration is in `vite.config.js`:

```javascript
// Customize development server, build options, etc.
```

### Tailwind CSS Configuration

Customize styles in `tailwind.config.js`:

```javascript
// Theme colors, spacing, fonts, and plugins
```

### ESLint Configuration

Code quality rules are configured in `.eslintrc.cjs`:

```javascript
// Linting rules and plugins
```

## 🎯 Usage

### Authentication

1. Navigate to the login page at `http://localhost:5173`
2. Enter credentials (demo credentials available)
3. Dashboard will display after successful authentication

### Dashboard Navigation

- **Dashboard**: View vulnerability overview and scan history
- **Projects**: Manage security projects
- **Scans**: Browse and manage all scans
- **Schedule**: Plan recurring scans
- **Notifications**: View alerts and updates
- **Settings**: Configure user preferences
- **Support**: Access help and documentation

### Starting a Scan

1. Navigate to the Scans section
2. Click "+ New Scan" button
3. Configure scan parameters:
   - Scan Type (Greybox, Blackbox, Whitebox)
   - Target URL
   - Authentication credentials
   - Scan options
4. Click "Start Scan"
5. Monitor real-time progress in the Scan Detail view

### Viewing Scan Results

1. Click on a completed scan from the scan history
2. Review detailed findings categorized by severity
3. Analyze vulnerability patterns
4. Export report for documentation
5. Track remediation status

### Theme Switching

Click the theme toggle button (☀️/🌙) in the top-right corner to switch between light and dark themes. Your preference is automatically saved.

## 🧩 Components

### Dashboard Components

#### CircularProgress
Displays scan completion percentage with visual progress indicator.

```jsx
<CircularProgress value={65} />
```

#### StageTracker
Shows multi-stage scanning progress with visual timeline.

```jsx
<StageTracker currentStage="Testing" />
```

#### StatCard
Displays severity statistics with trend indicators.

```jsx
<StatCard
  title="Critical Severity"
  count="86"
  change="23 increase than yesterday"
  icon="🔴"
/>
```

#### ScanTable
Comprehensive scan history with sorting, filtering, and pagination.

```jsx
<ScanTable scans={scans} />
```

#### ConsolePanel
Real-time activity logging with tabbed interface.

```jsx
<ConsolePanel />
```

#### FindingLogPanel
Scrollable list of discovered vulnerabilities.

```jsx
<FindingLogPanel />
```

### Layout Components

#### AppLayout
Main layout wrapper with header and sidebar.

```jsx
<AppLayout>
  <Dashboard />
</AppLayout>
```

#### Header
Top navigation bar with branding and actions.

#### Sidebar
Left navigation menu with user profile.

### UI Components

#### Button
Customizable button component with variants.

```jsx
<Button variant="primary">Click me</Button>
```

#### Badge
Status and severity badges.

```jsx
<Badge severity="Critical" />
```

#### Input
Form input with validation support.

```jsx
<Input type="text" placeholder="Search..." />
```

## 🌙 Theme System

### Implementation

The application uses React Context for theme management:

```jsx
import { ThemeContext } from './context/ThemeContext';

const { darkMode, setDarkMode } = useContext(ThemeContext);
```

### Tailwind Dark Mode

All components support dark mode using Tailwind's `dark:` prefix:

```jsx
<div className="bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white">
  Content
</div>
```

### Custom Colors

- **Light Mode**: White backgrounds with gray text
- **Dark Mode**: Dark (#0F0F0F) backgrounds with light text
- **Accent**: Cyan (#06B6D4) for interactive elements

### Theme Persistence

Theme preference is stored in browser localStorage and automatically restored on app load.

## 🚀 Development

### Development Server

```bash
npm run dev
```

Starts Vite development server with hot module replacement (HMR).

### Code Quality

#### ESLint
Check code quality:

```bash
npm run lint
```

#### Code Formatting
Format code (if Prettier is configured):

```bash
npm run format
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `DashboardCard.jsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useFetch.js`)
- **Utilities**: camelCase (e.g., `apiClient.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create Pull Request
```

### Common Development Tasks

#### Adding a New Page

1. Create component in `src/pages/`
2. Add route to `App.jsx`
3. Update navigation in `Sidebar.jsx`

#### Adding a New Component

1. Create component file in appropriate directory
2. Use existing components as templates
3. Include proper propTypes or TypeScript types
4. Add theme support with `dark:` classes

#### Working with Data

Sample data is stored in `src/data/`. In production, replace with API calls:

```jsx
// Before: Static data
import scans from '../data/scans';

// After: API call
const [scans, setScans] = useState([]);
useEffect(() => {
  fetchScans().then(setScans);
}, []);
```

## 🏗️ Building

### Production Build

```bash
npm run build
```

Creates optimized production build in `dist/` directory.

### Build Output

- Minified JavaScript
- Optimized CSS
- Image optimization
- Source maps (optional)
- ~150KB gzipped bundle size

### Preview Production Build

```bash
npm run preview
```

Serves production build locally at `http://localhost:4173`.

## 📦 Deployment

### Deployment Checklist

- [ ] Update environment variables for production
- [ ] Run full test suite
- [ ] Generate production build
- [ ] Verify bundle size
- [ ] Test on staging environment
- [ ] Update documentation
- [ ] Set up monitoring/logging
- [ ] Configure CDN/caching

### Deployment Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Deploy dist/ folder
```

#### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "deploy: production build"
git push
```

#### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:

```bash
docker build -t fenrir .
docker run -p 3000:3000 fenrir
```

## 🛠️ Technologies

### Core Framework
- **React 18**: UI library with hooks
- **React Router 6**: Client-side routing
- **Vite**: Next-generation build tool

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Modules**: Component-scoped styling (optional)

### State Management
- **React Context**: Local state management
- **Custom Hooks**: Reusable logic

### Build & Development
- **Vite**: Fast build tool and dev server
- **ESLint**: Code quality
- **PostCSS**: CSS processing

### Additional Libraries
- **React Router DOM**: Navigation
- **React Icons**: Icon library (optional)

## 📋 Component Documentation

### How to Create a New Component

1. **Functional Component**:
```jsx
function MyComponent({ prop1, prop2 }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] p-6">
      {content}
    </div>
  );
}

export default MyComponent;
```

2. **With Props Documentation**:
```jsx
/**
 * MyComponent displays custom content
 * @param {string} title - Component title
 * @param {array} items - Items to display
 * @param {function} onSelect - Callback when item selected
 */
function MyComponent({ title, items, onSelect }) {
  // ...
}
```

3. **Theme Support**:
Always include both light and dark styles:
```jsx
className="bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white"
```

## 🔒 Security Considerations

- **XSS Protection**: React automatically escapes content
- **CSRF Prevention**: Implement CSRF tokens for API requests
- **Data Validation**: Validate all user inputs
- **Secure Headers**: Configure appropriate HTTP headers
- **Dependency Updates**: Regularly update dependencies
- **Environment Variables**: Never commit sensitive data

## 📝 Troubleshooting

### Common Issues

**Problem**: Styles not applying
**Solution**: Clear cache and rebuild
```bash
rm -rf node_modules dist
npm install && npm run build
```

**Problem**: Hot reload not working
**Solution**: Restart development server
```bash
npm run dev
```

**Problem**: Dark mode not switching
**Solution**: Check ThemeContext provider in App.jsx

**Problem**: Build fails with memory error
**Solution**: Increase Node memory
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

### Code Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commits
4. Ensure code passes linting
5. Submit a pull request

### Types of Contributions

- **Bug Reports**: Submit detailed issue reports
- **Features**: Suggest new features via issues
- **Code**: Submit pull requests with improvements
- **Documentation**: Improve README and docs

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Authors

- **Dipak** - Initial development and design

## 🙏 Acknowledgments

- Design Reference: Security scanning dashboard standards
- Community: React and Tailwind CSS communities
- Contributors: All community members who contributed

## 📈 Roadmap

### Version 1.1 (Planned)
- [ ] Advanced filtering capabilities
- [ ] Custom report generation
- [ ] API integration
- [ ] User authentication improvements

### Version 1.2 (Planned)
- [ ] Multi-language support
- [ ] Real-time notifications
- [ ] Scan scheduling
- [ ] Team collaboration features

### Version 2.0 (Future)
- [ ] Backend API
- [ ] Database integration
- [ ] Advanced analytics
- [ ] Enterprise features

## 📞 Support

For support, email support@fenrir.dev or open an issue on GitHub.

## 🐛 Reporting Bugs

Please report bugs by creating an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information

---

**Fenrir** - Advanced Security Scanning Dashboard  
Built with React, Vite, and Tailwind CSS  
Version 1.0.0 | Last Updated: March 2026
