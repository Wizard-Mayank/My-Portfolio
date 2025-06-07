import { useState } from "react";

const Stats = () => {
  const [githubStatsError, setGithubStatsError] = useState(false);
  const [githubLangsError, setGithubLangsError] = useState(false);
  const [leetcodeStatsError, setLeetcodeStatsError] = useState(false);

  return (
    <section id="stats" className="py-16 px-4 bg-white dark:bg-zinc-900 text-center">
      <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-10">
        GitHub & LeetCode Stats
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* GitHub Stats */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
            GitHub Stats
          </h3>
          <img
            src={
              githubStatsError
                ? "/fallback-github-stats.png"
                : "https://github-readme-stats.vercel.app/api?username=Wizard-Mayank&show_icons=true&theme=radical"
            }
            alt="GitHub Stats"
            className="w-full max-w-md rounded-lg shadow"
            onError={() => setGithubStatsError(true)}
          />
        </div>

        {/* GitHub Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
            Top Languages
          </h3>
          <img
            src={
              githubLangsError
                ? "/fallback-github-langs.png"
                : "https://github-readme-stats.vercel.app/api/top-langs/?username=Wizard-Mayank&layout=compact&theme=radical"
            }
            alt="Top Languages"
            className="w-full max-w-md rounded-lg shadow"
            onError={() => setGithubLangsError(true)}
          />
        </div>

        {/* LeetCode Stats */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
            LeetCode Stats
          </h3>
          <img
            src={
              leetcodeStatsError
                ? "/fallback-leetcode-stats.png"
                : "https://leetcard.jacoblin.cool/mindfulpandey?theme=dark&font=Baloo+Bhai&ext=activity"
            }
            alt="LeetCode Stats"
            className="w-full max-w-md rounded-lg shadow"
            onError={() => setLeetcodeStatsError(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
