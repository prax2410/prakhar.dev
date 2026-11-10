import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#090b10] text-slate-900 dark:text-slate-100 px-6">
          <div className="max-w-md w-full p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] space-y-4">
            <h1 className="text-lg font-bold">Prakhar — Senior Full Stack &amp; Backend Engineer</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Something went wrong while rendering the page. Reload the window or reach out directly below.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
              >
                Reload Page
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 font-medium"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

