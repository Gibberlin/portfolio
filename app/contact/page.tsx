'use client';

import EmailForm from '../components/emailJS';
import Head from "next/head";

export default function SocialsPage() {
  return (
    <>
      <Head>
  <title>Contact — Syed Yashin Hussain | Freelance Web Developer</title>

  <meta
    name="description"
    content="Get in touch with Syed Yashin Hussain — Freelance Web Developer. Connect via GitHub, LinkedIn, or email."
  />

  <link rel="canonical" href="https://syeds.in/contact" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Contact Syed Yashin Hussain — Web Developer" />
  <meta
    property="og:description"
    content="Hire or connect with Syed Yashin Hussain — Freelance Web Developer and Software Engineer."
  />
  <meta property="og:url" content="https://syeds.in/contact" />
  <meta property="og:image" content="https://syeds.in/images/preview.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Syed Yashin Hussain — Web Developer" />
  <meta
    name="twitter:description"
    content="Get in touch with Syed Yashin Hussain — Freelance Web Developer."
  />
  <meta name="twitter:image" content="https://syeds.in/images/preview.png" />
</Head>

      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 w-full ">
        <div className="max-w-3xl mx-auto p-5 md:p-20 bg-white dark:bg-transparent bg-opacity-50 border border-gray-200 dark:border-gray-800 dark:backdrop-blur-2xl dark:backdrop-brightness-50 dark:backdrop-contrast-200 rounded-xl">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-12 border-b-2 border-green-500">
            Let&apos;s Connect!
          </h1>

          <div className="grid gap-8">
            {/* Contact Form */}
            <EmailForm /> 

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/Gibberlin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 backdrop-brightness-150 dark:backdrop-brightness-50 dark:backdrop-blur-2xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-shadow-lg hover:transition-transform hover:-translate-y-3 dark:bg-blue-950 border border-blue-200 "
              >
                <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">GitHub</h2>
                  <p className="text-gray-600 dark:text-white">Check out my projects and contributions</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/syed-yashin-hussain-74b206146"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 backdrop-brightness-150 dark:backdrop-brightness-50 dark:backdrop-blur-2xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-shadow-lg hover:transition-transform hover:-translate-y-3 dark:bg-blue-950 border border-blue-200 "
              >
                <svg className="w-8 h-8 mr-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">LinkedIn</h2>
                  <p className="text-gray-600 dark:text-white">Connect with me professionally</p>
                </div>
              </a>
              {/* Instagram*/}
              <a
                href="https://instagram.com/https_yashin_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 backdrop-brightness-150 dark:backdrop-brightness-50 dark:backdrop-blur-2xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-shadow-lg hover:transition-transform hover:-translate-y-3 dark:bg-blue-950 border border-blue-200 "
              >
                <svg className="w-8 h-8 mr-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Instagram</h2>
                  <p className="text-gray-600 dark:text-white">Connect with me personally</p>
                </div>
              </a>
               {/* CodePen */}
               <a
                href="https://codepen.io/gibberlin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 backdrop-brightness-150 dark:backdrop-brightness-50 dark:backdrop-blur-2xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-shadow-lg hover:transition-transform hover:-translate-y-3 dark:bg-blue-950 border border-blue-200 "
              >
                
                

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Codepen</h2>
                  <p className="text-gray-600 dark:text-white">Connect with me personally</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
