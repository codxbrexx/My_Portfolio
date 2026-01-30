import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GITHUB_USERNAME } from '../utils/data';
import { FaGithub, FaCodeBranch, FaStar, FaRegDotCircle } from "react-icons/fa";
import { BiGitRepoForked, BiGitPullRequest, BiGitCommit } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const ActivityCard = ({ activity, index, theme }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'PushEvent': return <BiGitCommit />;
      case 'PullRequestEvent': return <BiGitPullRequest />;
      case 'WatchEvent': return <FaStar />;
      case 'ForkEvent': return <BiGitRepoForked />;
      case 'CreateEvent': return <FaCodeBranch />;
      case 'IssuesEvent': return <FaRegDotCircle />;
      default: return <FaGithub />;
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative border-b p-4 flex items-center justify-between gap-4 transition-all hover:pl-6 ${theme === 'light'
        ? 'border-gray-200 hover:bg-gray-50 text-gray-900'
        : 'border-white/10 hover:bg-white/5 text-gray-100'
        }`}
      onClick={() => window.open(`https://github.com/${activity.repo.name}`, '_blank')}
    >
      <div className="flex items-center gap-4 flex-1">
        <div className={`font-mono text-xs opacity-50 w-24 tabular-nums ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'}`}>
          {new Date(activity.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </div>

        <div className={`p-2 border transition-colors ${theme === 'light' ? 'border-gray-200 bg-white group-hover:border-black group-hover:text-black' : 'border-white/10 bg-black group-hover:border-white group-hover:text-white'}`}>
          {getIcon(activity.type)}
        </div>

        <div className="flex-1">
          <p className="font-mono text-sm tracking-tight truncate">
            {getDescription(activity)}
          </p>
        </div>
      </div>

      <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const GitHubActivity = ({ theme }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=8`)
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
    <section className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-current">
        <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
          GitHub Logs
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </h3>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-mono text-xs uppercase underline underline-offset-4 decoration-dotted hover:decoration-solid ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
        >
          View Profile_
        </a>
      </div>

      <div className={`flex-1 border-t ${theme === 'light' ? 'border-gray-200' : 'border-white/10'}`}>
        {loading ? (
          <div className="py-12 space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`h-12 w-full animate-pulse ${theme === 'light' ? 'bg-gray-100' : 'bg-white/5'}`} />
            ))}
          </div>
        ) : (
          activities.length > 0 ? (
            <div className="divide-y divide-current">
              {activities.map((activity, index) => (
                <ActivityCard key={activity.id} activity={activity} index={index} theme={theme} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center font-mono text-sm opacity-50">
                // System.out: No recent activity found
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;
