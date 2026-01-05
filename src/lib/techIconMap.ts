/**
 * Centralized mapping of technology names to their devicon CSS classes.
 * Used across the portfolio for consistent icon rendering.
 * 
 * @example
 * import { getTechIcon } from '@/lib/techIconMap';
 * const iconClass = getTechIcon('React'); // 'devicon-react-original'
 */

export const techIconMap: Record<string, string> = {
  // Languages
  'C': 'devicon-c-plain',
  'C++': 'devicon-cplusplus-plain',
  'C#': 'devicon-csharp-plain',
  'Python': 'devicon-python-plain',
  'Rust': 'devicon-rust-plain',
  'R': 'devicon-r-plain',
  'Java': 'devicon-java-plain',
  'PHP': 'devicon-php-plain',
  'JavaScript': 'devicon-javascript-plain',
  'TypeScript': 'devicon-typescript-plain',
  'Kotlin': 'devicon-kotlin-plain',

  // Frameworks & Libraries
  'Laravel': 'devicon-laravel-plain',
  'Node.js': 'devicon-nodejs-plain',
  'Vue.js': 'devicon-vuejs-plain',
  'React': 'devicon-react-original',
  'Flutter': 'devicon-flutter-plain',
  'Streamlit': 'devicon-streamlit-plain',
  'Django': 'devicon-django-plain',
  'FastAPI': 'devicon-fastapi-plain',
  'Qt': 'devicon-qt-original',
  'TailwindCSS': 'devicon-tailwindcss-plain',
  '.NET': 'devicon-dot-net-plain',
  'Matplotlib': 'devicon-matplotlib-plain',
  'NumPy': 'devicon-numpy-plain',
  'OpenCV': 'devicon-opencv-plain',
  'Pandas': 'devicon-pandas-plain',
  'PyTorch': 'devicon-pytorch-plain',
  'scikit-learn': 'devicon-scikitlearn-plain',
  'Scikit-Learn': 'devicon-scikitlearn-plain',
  'TensorFlow': 'devicon-tensorflow-original',
  'TensorFlow.js': 'devicon-tensorflow-original',
  'Keras': 'devicon-keras-plain',
  'Next.js': 'devicon-nextjs-original',
  'Hugging Face': 'si si-huggingface', // Requires Simple Icons
  'LIME': 'devicon-python-plain', // Python lib
  'Transfer Learning': 'devicon-pytorch-plain', // Concept, map to PyTorch
  'Vector Search': 'devicon-elasticsearch-plain', // Search engine concept
  'XGBoost': 'devicon-python-plain', // No dedicated icon, use Python

  // Tools & Platforms
  'Docker': 'devicon-docker-plain',
  'Git': 'devicon-git-plain',
  'Jupyter': 'devicon-jupyter-plain',
  'LaTeX': 'devicon-latex-original',
  'MongoDB': 'devicon-mongodb-plain',
  'PostgreSQL': 'devicon-postgresql-plain',
  'MySQL': 'devicon-mysql-plain',
  'Netlify': 'devicon-netlify-plain',
  'Vercel': 'devicon-vercel-plain',
  'Arduino': 'devicon-arduino-plain',
  'Raspberry Pi': 'devicon-raspberrypi-plain',
  'Supabase': 'devicon-supabase-plain',
  'Vector DB': 'devicon-mongodb-plain', // Use MongoDB as fallback
  'Windows API': 'devicon-windows11-original',

  // Operating Systems
  'Windows 11': 'devicon-windows11-original',
  'Ubuntu': 'devicon-ubuntu-plain',
  'Fedora': 'devicon-fedora-plain',
  'Arch Linux': 'devicon-archlinux-plain',
  'Android': 'devicon-android-plain',
  'MacOS': 'devicon-apple-plain',
};

/**
 * Get the devicon class for a technology name.
 * Returns undefined if no mapping exists.
 */
export const getTechIcon = (techName: string): string | undefined => {
  return techIconMap[techName];
};

/**
 * Check if a technology has an icon mapping.
 */
export const hasTechIcon = (techName: string): boolean => {
  return techName in techIconMap;
};
