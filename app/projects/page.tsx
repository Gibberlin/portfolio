'use client'
import { TypeAnimation } from 'react-type-animation'
import { Fragment, useEffect, useState } from 'react'
import Head from "next/head";
import { motion } from 'framer-motion'
import { Listbox, Transition } from "@headlessui/react"
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid"

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
const options = [
  {id:1, value: "updated", label: "Recently Updated"},
  {id:2, value: "created", label: "Recently Created"},
]

export default function Projects() {

  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('updated')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForks, setShowForks] = useState(true)
  const [selected,  setSelected] = useState(options[0])
  useEffect(() => {
    let isActive = true

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/Gibberlin/repos?per_page=100'
        )
        const data = await response.json()
        if (isActive) {
          setRepos(data)
        }
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        window.setTimeout(() => {
          if (isActive) {
            setLoading(false)
          }
        }, 1000)
      }
    }
  
    fetchRepos()

    return () => {
      isActive = false
    }
  }, [])

  useEffect(() => {
    console.log("Sorting by:", sortBy)
  }, [sortBy])

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
      <main className='flex min-h-[calc(100vh-4rem)] w-full flex-col px-3 pb-8 pt-24 sm:px-4 sm:pt-28 md:min-h-screen md:p-10'>
        <Head>
          <title>Projects — Syed Yashin Hussain | Web Developer Portfolio</title>
        </Head>

        <div className="w-full border-4 border-[var(--border-color)] bg-white/70 p-4 backdrop-blur-md dark:bg-[#0F172A]/70 sm:p-6 md:p-10 lg:p-16">
          <div className="mx-auto flex min-h-[24rem] max-w-7xl flex-col justify-center">
            <div className="mb-6 border-b-4 border-[var(--border-color)] pb-2 text-center md:mb-8">
              <h1 className="text-3xl font-bold text-[var(--text-color)] sm:text-4xl md:text-5xl">
                My Projects
              </h1>
            </div>

            <div className="flex flex-1 items-center justify-center py-8 text-center">
              <TypeAnimation
                sequence={[
                  "LOADING...",
                  250,
                  "READY!",
                  250,
                ]}
                repeat={Infinity}
                className="text-3xl font-bold tracking-[0.2em] text-emerald-400 md:text-7xl"
              />
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='flex min-h-[calc(100vh-4rem)] w-full flex-col px-3 pb-8 pt-24 sm:px-4 sm:pt-28 md:min-h-screen md:p-10'>
      <Head>
  <title>Projects — Syed Yashin Hussain | Web Developer Portfolio</title>

  <meta
    name="description"
    content="Explore the web development projects of Syed Yashin Hussain. View React, Next.js, JavaScript, and Full Stack applications with GitHub links."
  />

  <link rel="canonical" href="https://syeds.in/projects" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Projects — Syed Yashin Hussain" />
  <meta
    property="og:description"
    content="A collection of web development projects built by Syed Yashin Hussain using modern technologies."
  />
  <meta property="og:url" content="https://syeds.in/projects" />
  <meta property="og:image" content="https://syeds.in/images/preview.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Projects — Syed Yashin Hussain" />
  <meta
    name="twitter:description"
    content="Explore my web development projects built with React, Next.js, and JavaScript."
  />
  <meta name="twitter:image" content="https://syeds.in/images/preview.png" />
</Head>

        <div className="w-full border-4 border-[var(--border-color)] bg-white/70 p-4 backdrop-blur-md dark:bg-[#0F172A]/70 sm:p-6 md:p-10 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="mb-6 border-b-4 border-[var(--border-color)] pb-2 text-3xl font-bold text-[var(--text-color)] sm:text-4xl md:mb-8 md:text-5xl">
              My Projects
            </h1>

            <div className="mb-8 space-y-4">
              {/* Search and Filter Controls */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 text-base bg-emerald-100 border-4 border-emerald-700 text-slate-900 focus:outline-none dark:bg-slate-900 dark:border-emerald-400 dark:text-emerald-100 md:w-64"
                  />
                </div>

                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center md:w-auto">
                <div className="w-full sm:w-60">
      <Listbox
          value={selected}
          onChange={(option) => 
          {setSelected(option) 
          setSortBy(option.value)}}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer border-4 border-emerald-700 bg-emerald-100 py-3 pl-4 pr-10 text-left text-base text-slate-900 focus:outline-none dark:bg-slate-900 dark:border-emerald-400 dark:text-emerald-100">
            <span className="block truncate">{selected.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="h-5 w-5 text-green-600 rounded-sm" >{selected.label}</ChevronUpDownIcon>
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-emerald-50 py-1 border-4 border-emerald-700 focus:outline-none dark:bg-slate-900 dark:border-emerald-400">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 text-slate-900 dark:text-emerald-100 ${
                      active
                        ? "bg-emerald-200 dark:bg-slate-800"
                        : "bg-emerald-50 dark:bg-slate-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {option.label}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>

            <label className="flex min-h-11 items-center gap-2 text-[var(--text-color)]">
                    <input
                      type="checkbox"
                      checked={showForks}
                      onChange={(e) => setShowForks(e.target.checked)}
                      className="rounded border-2 border-[var(--border-color)] text-[var(--text-color)]"
                    />
                    Show Forks
                  </label>
                </div>
              </div>

              {/* Language Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 border-4 transition-colors ${
                    filter === 'all'
                      ? 'bg-[var(--accent-primary)] text-[var(--page-bg)] border-[var(--border-color)]'
                      : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:bg-[var(--accent-secondary)]'
                  }`}
                >
                  All
                </button>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setFilter(lang)}
                    className={`px-4 py-2 border-4 transition-colors ${
                      filter === lang
                        ? 'bg-[var(--accent-primary)] text-[var(--page-bg)] border-[var(--border-color)]'
                        : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:bg-[var(--accent-secondary)]'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div
              className="grid h-full grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
              layout
            >
              {sortedRepos.map((repo, index) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="block border-4 border-[var(--border-color)] bg-[var(--card-bg)] p-4 text-[var(--text-color)] transition-transform hover:-translate-y-1 sm:p-5 md:p-6"
                >
                  <div className="mb-2 flex items-start justify-between gap-3 overflow-hidden transition-transform">
                    <h3 className="min-w-0 break-words text-lg font-semibold sm:text-xl">{repo.name}</h3>
                    {repo.fork && (
                      <span className="surface-badge rounded px-2 py-1 text-xs">
                        Fork
                      </span>
                    )}
                  </div>
                  <p className="surface-copy mb-4 line-clamp-3 text-sm sm:text-base">{repo.description}</p>
                  <div className="surface-copy-muted flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                      {repo.language || 'Unknown'}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
  )
}
