import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GITHUB_USERNAME } from '../utils/data';
import { FaGithub, FaCodeBranch, FaStar, FaRegDotCircle } from "react-icons/fa";
import { BiGitRepoForked, BiGitPullRequest, BiGitCommit } from "react-icons/bi";

const ActivityCard = ({ activity, index, theme }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'PushEvent': return <BiGitCommit className={theme === 'light' ? 'text-green-600' : 'text-green-400'} />;
      case 'PullRequestEvent': return <BiGitPullRequest className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'} />;
      case 'WatchEvent': return <FaStar className={theme === 'light' ? 'text-yellow-600' : 'text-yellow-400'} />;
      case 'ForkEvent': return <BiGitRepoForked className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />;
      case 'CreateEvent': return <FaCodeBranch className={theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'} />;
      case 'IssuesEvent': return <FaRegDotCircle className={theme === 'light' ? 'text-red-600' : 'text-red-400'} />;
      default: return <FaGithub className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'} />;
    }
  };

  const getDescription = (activity) => {
    const repo = activity.repo.name.replace(`${GITHUB_USERNAME}/`, '');
    switch (activity.type) {
      case 'PushEvent': return `Pushed ${activity.payload.commits?.length || 1} commits to ${repo}`;
      case 'PullRequestEvent': return `${activity.payload.action} PR in ${repo}`;
      case 'WatchEvent': return `Starred ${repo}`;
      case 'ForkEvent': return `Forked ${repo}`;
      case 'CreateEvent': return `Created ${activity.payload.ref_type} in ${repo}`;
      case 'IssuesEvent': return `${activity.payload.action} issue in ${repo}`;
      default: return `Activity in ${repo}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`flex items-center gap-4 p-4 rounded-xl border transition-colors cursor-pointer group ${theme === 'light'
        ? 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'
        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
        }`}
      onClick={() => window.open(`https://github.com/${activity.repo.name}`, '_blank')}
    >
      <div className={`text-xl p-2 rounded-full ring-1 group-hover:scale-110 transition-transform ${theme === 'light'
        ? 'bg-gray-50 ring-gray-200'
        : 'bg-white/5 ring-white/10'
        }`}>
        {getIcon(activity.type)}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate group-hover:text-blue-400 transition-colors ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          {getDescription(activity)}
        </p>
        <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'}`}>
          {new Date(activity.created_at).toLocaleDateString()} • {new Date(activity.created_at).toLocaleTimeString()}
        </p>
      </div>
    </motion.div>
  );
};

const GitHubActivity = ({ theme }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`)
      .then(res => res.json())
      .then(data => {
        setActivities(data.filter ? data.filter(a => ['PushEvent', 'PullRequestEvent', 'WatchEvent', 'ForkEvent', 'CreateEvent', 'IssuesEvent'].includes(a.type)) : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 relative">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm mb-4 border ${theme === 'light'
            ? 'bg-blue-50 border-blue-200 text-blue-700'
            : 'bg-slate-800/50 border-slate-700/50 text-slate-300'
            }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live Activity
        </motion.div>
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Latest from GitHub</h2>
        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-blue-200/60'}`}>
          See what I&apos;ve been hacking on recently 🚀
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className={`h-20 rounded-xl animate-pulse ${theme === 'light' ? 'bg-gray-200' : 'bg-white/5'}`} />
          ))
        ) : (
          activities.length > 0 ? (
            activities.slice(0, 5).map((activity, index) => (
              <ActivityCard key={activity.id} activity={activity} index={index} theme={theme} />
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">No recent activity</div>
          )
        )}
      </div>

      <div className="text-center mt-10">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 border ${theme === 'light'
            ? 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50 hover:shadow-lg'
            : 'bg-white/5 text-white border-white/5 hover:bg-white/10 hover:scale-105'
            }`}
        >
          <FaGithub /> View Full Profile
        </a>
      </div>
    </section>
  );
};

export default GitHubActivity;
