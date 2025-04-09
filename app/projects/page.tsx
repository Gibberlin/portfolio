'use client'

import { useEffect, useState } from 'react'

interface GitHubRepo {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  topics: string[]
  created_at: string
  updated_at: string
  visibility: string
  fork: boolean
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('updated')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForks, setShowForks] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Gibberlin/repos?sort=updated&per_page=100')
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const filteredRepos = repos.filter(repo => {
    // Filter by search query
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         repo.description?.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Filter by language
    const matchesLanguage = filter === 'all' || repo.language?.toLowerCase() === filter.toLowerCase()
    
    // Filter by fork status
    const matchesForkStatus = showForks || !repo.fork
    
    return matchesSearch && matchesLanguage && matchesForkStatus
  })

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === 'updated') {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    }
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const languages = Array.from(new Set(repos.map(repo => repo.language).filter(Boolean)))

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="animate-spin rounded-full h-12 w-12"></div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen overflow-scroll p-8 md:p-16">
      <div className="max-w-7xl mx-auto  ">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r">
          My Projects
        </h1>

        <div className="mb-8 space-y-4">
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-lg bg-gray-100 dark:bg-green-900 text-gray-900 dark:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900 text-gray-700 dark:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="updated">Recently Updated</option>
                <option value="created">Recently Created</option>
              </select>

              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={showForks}
                  onChange={(e) => setShowForks(e.target.checked)}
                  className="rounded text-green-500 focus:ring-green-500"
                />
                Show Forks
              </label>
            </div>
          </div>

          {/* Language Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === lang
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 h-full ">
          {sortedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white dark:bg-gray-800 shadow-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-foreground"
            >
              <div className="flex items-start justify-between mb-2 overflow-clip">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                {repo.fork && (
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                    Fork
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{repo.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {repo.language || 'Unknown'}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {repo.stargazers_count}
                </span>
              </div>
              {repo.topics && repo.topics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* No Results Message */}
        {sortedRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
