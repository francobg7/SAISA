// SAISA Website Deployment Configuration
// This file contains configuration for different hosting platforms

module.exports = {
  // Netlify Configuration
  netlify: {
    buildCommand: 'npm run build',
    publishDirectory: 'dist',
    functionsDirectory: 'netlify/functions',
    redirects: [
      {
        from: '/*',
        to: '/index.html',
        status: 200
      }
    ],
    headers: [
      {
        for: '/*',
        values: {
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      },
      {
        for: '/assets/*',
        values: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    ]
  },

  // Vercel Configuration
  vercel: {
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    framework: 'vite',
    functions: {
      'api/contact.js': {
        runtime: 'nodejs18.x'
      }
    }
  },

  // GitHub Pages Configuration
  githubPages: {
    buildCommand: 'npm run build',
    publishDirectory: 'dist',
    branch: 'gh-pages',
    domain: 'saisa.com.py'
  },

  // Environment Variables for Production
  env: {
    production: {
      NODE_ENV: 'production',
      VITE_APP_ENV: 'production'
    },
    staging: {
      NODE_ENV: 'staging',
      VITE_APP_ENV: 'staging'
    }
  },

  // Build Optimization
  build: {
    minify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
}
