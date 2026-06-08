// Project preview detection and categorization system

export const PROJECT_TYPES = {
  LIVE_DEMO: 'live_demo',           // Direct iframe preview
  AUTH_REQUIRED: 'auth_required',   // Needs authentication
  GITHUB_ONLY: 'github_only',       // Repository-only projects
  EXTENSION: 'extension',           // Browser extensions/userscripts
  GRADIO_APP: 'gradio_app',         // Gradio/Hugging Face apps
  PRIVATE: 'private'                // Private or unavailable demos
};

export const PREVIEW_RESTRICTIONS = {
  IFRAME_BLOCKED: 'iframe_blocked',     // X-Frame-Options restrictions
  AUTHENTICATION: 'authentication',    // Login required
  PAYMENT_GATE: 'payment_gate',        // Premium features
  DEVELOPMENT: 'development',          // Still in development
  SECURITY: 'security'                 // Security restrictions
};

// Detect project type based on URL and project data
export function detectProjectType(project) {
  const { url, title, technologies } = project;
  
  // AI/Chatbot projects — check before URL fallback so local chatbots render properly
  const isChatbotProject = title.toLowerCase().includes('chatbot') ||
    title.toLowerCase().includes('nexus ai') ||
    technologies?.main?.some(tech => tech.toLowerCase().includes('gradio')) ||
    technologies?.main?.some(tech => tech.toLowerCase().includes('groq'));
  
  if (isChatbotProject) {
    return PROJECT_TYPES.GRADIO_APP;
  }
  
  // No URL means GitHub-only or private project
  if (!url) {
    return PROJECT_TYPES.PRIVATE;
  }
  
  // GitHub repository URLs
  if (url.includes('github.com')) {
    return PROJECT_TYPES.GITHUB_ONLY;
  }
  
  // Browser extensions and userscripts
  const extensionKeywords = ['extension', 'userscript', 'chrome', 'firefox', 'monorepo'];
  const hasExtensionTech = technologies?.main?.some(tech => 
    extensionKeywords.some(keyword => tech.toLowerCase().includes(keyword))
  ) || extensionKeywords.some(keyword => title.toLowerCase().includes(keyword));
  
  if (hasExtensionTech) {
    return PROJECT_TYPES.EXTENSION;
  }
  
  // Authentication-required projects (detect by tech stack)
  const authTechnologies = ['clerk', 'nextauth', 'auth0', 'firebase auth', 'supabase auth'];
  const hasAuthTech = technologies?.main?.some(tech => 
    authTechnologies.some(authTech => tech.toLowerCase().includes(authTech.toLowerCase()))
  ) || technologies?.others?.some(tech => 
    authTechnologies.some(authTech => tech.toLowerCase().includes(authTech.toLowerCase()))
  );
  
  // SaaS/Premium project indicators
  const premiumKeywords = ['saas', 'payment', 'subscription', 'premium'];
  const isPremium = premiumKeywords.some(keyword => 
    title.toLowerCase().includes(keyword) || 
    project.description?.summary?.toLowerCase().includes(keyword)
  );
  
  if (hasAuthTech || isPremium) {
    return PROJECT_TYPES.AUTH_REQUIRED;
  }
  
  // Default to live demo if it has a valid URL
  return PROJECT_TYPES.LIVE_DEMO;
}

// Get appropriate preview options based on project type
export function getPreviewOptions(project) {
  const projectType = detectProjectType(project);
  
  const baseOptions = {
    type: projectType,
    canPreview: false,
    alternativeActions: [],
    restrictions: [],
    recommendedAction: null
  };
  
  switch (projectType) {
    case PROJECT_TYPES.LIVE_DEMO:
      return {
        ...baseOptions,
        canPreview: checkIframeCompatibility(project.url),
        recommendedAction: 'iframe_preview'
      };
      
    case PROJECT_TYPES.AUTH_REQUIRED:
      return {
        ...baseOptions,
        canPreview: true, // Can still try iframe
        alternativeActions: [
          {
            type: 'demo_video',
            label: 'Watch Demo Video',
            icon: '🎥',
            description: 'See a recorded walkthrough of key features'
          },
          {
            type: 'screenshot_gallery',
            label: 'View Screenshots',
            icon: '📸',
            description: 'Browse through application screenshots'
          },
          {
            type: 'guest_preview',
            label: 'Try Guest Mode',
            icon: '👤',
            description: 'Limited preview without authentication'
          }
        ],
        restrictions: [PREVIEW_RESTRICTIONS.AUTHENTICATION],
        recommendedAction: 'demo_video'
      };
      
    case PROJECT_TYPES.GITHUB_ONLY:
      return {
        ...baseOptions,
        alternativeActions: [
          {
            type: 'github_preview',
            label: 'Explore Code',
            icon: '💻',
            description: 'Browse the repository and documentation'
          },
          {
            type: 'readme_viewer',
            label: 'Read Documentation',
            icon: '📖',
            description: 'View README and setup instructions'
          },
          {
            type: 'demo_images',
            label: 'View Screenshots',
            icon: '🖼️',
            description: 'See the project in action'
          }
        ],
        recommendedAction: 'github_preview'
      };
      
    case PROJECT_TYPES.EXTENSION:
      return {
        ...baseOptions,
        alternativeActions: [
          {
            type: 'install_guide',
            label: 'Installation Guide',
            icon: '📦',
            description: 'Step-by-step installation instructions'
          },
          {
            type: 'demo_video',
            label: 'See It In Action',
            icon: '🎬',
            description: 'Watch how the extension works'
          },
          {
            type: 'github_preview',
            label: 'View Source',
            icon: '⚡',
            description: 'Explore the extension code'
          }
        ],
        recommendedAction: 'demo_video'
      };
      
    case PROJECT_TYPES.GRADIO_APP:
      return {
        ...baseOptions,
        canPreview: true, // Can use Gradio client
        alternativeActions: [
          {
            type: 'gradio_embed',
            label: 'Interactive Chat',
            icon: '🤖',
            description: 'Chat directly with the AI assistant'
          },
          {
            type: 'open_external',
            label: 'Open in Hugging Face',
            icon: '🤗',
            description: 'Try the full version on Hugging Face Spaces'
          }
        ],
        restrictions: [PREVIEW_RESTRICTIONS.IFRAME_BLOCKED],
        recommendedAction: 'gradio_embed'
      };
      
    case PROJECT_TYPES.PRIVATE:
      return {
        ...baseOptions,
        alternativeActions: [
          {
            type: 'contact_demo',
            label: 'Request Demo',
            icon: '📧',
            description: 'Get in touch for a personalized walkthrough'
          },
          {
            type: 'case_study',
            label: 'Read Case Study',
            icon: '📊',
            description: 'Learn about the technical implementation'
          }
        ],
        recommendedAction: 'contact_demo'
      };
      
    default:
      return baseOptions;
  }
}

// Check if a URL might have iframe restrictions
export function checkIframeCompatibility(url) {
  // Known domains that typically block iframes
  const blockedDomains = [
    'google.com',
    'facebook.com',
    'twitter.com',
    'linkedin.com',
    'github.com',
    'huggingface.co'
  ];
  
  try {
    const domain = new URL(url).hostname;
    return !blockedDomains.some(blocked => domain.includes(blocked));
  } catch {
    return false;
  }
}

// Get a user-friendly display name for a project type
export function getProjectTypeDisplayName(projectType) {
  const names = {
    [PROJECT_TYPES.LIVE_DEMO]: 'Live Demo',
    [PROJECT_TYPES.AUTH_REQUIRED]: 'Auth Required',
    [PROJECT_TYPES.GITHUB_ONLY]: 'Open Source',
    [PROJECT_TYPES.EXTENSION]: 'Browser Extension',
    [PROJECT_TYPES.GRADIO_APP]: 'AI Application',
    [PROJECT_TYPES.PRIVATE]: 'Private Project'
  };
  return names[projectType] || 'Project';
}