import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryType = {
  title: string;
  items: string[];
};

type PlatformType = {
  name: string;
  categories: CategoryType[];
};

const platforms: PlatformType[] = [
  {
    name: "Instagram",
    categories: [
      {
        title: "Content Strategy",
        items: [
          "Reels Planning",
          "Carousel Designs",
          "Caption Copywriting",
          "Story Scheduling",
          "Content Calendar",
        ],
      },
      {
        title: "Paid Ads",
        items: ["Audience Targeting", "Campaign Optimization", "Retargeting"],
      },
      {
        title: "Analytics & Growth",
        items: ["Hashtag Research", "Growth Reports", "Competitor Analysis"],
      },
    ],
  },
  {
    name: "YouTube",
    categories: [
      { title: "Channel Setup", items: ["Branding", "Keyword Setup"] },
      { title: "Video Optimization", items: ["Thumbnail Design", "SEO Optimization"] },
      { title: "Ads & Promotion", items: ["Targeting", "Retargeting"] },
      { title: "Analytics & Reporting", items: ["Performance Reports"] },
    ],
  },
  {
    name: "LinkedIn",
    categories: [
      { title: "Content Marketing", items: ["Post Strategy", "Thought Leadership"] },
      { title: "Lead Generation", items: ["InMail Campaigns", "Sales Navigator Setup"] },
    ],
  },
  {
    name: "X / Twitter",
    categories: [
      { title: "Content Strategy", items: ["Trending Topics", "Hashtag Campaigns"] },
      { title: "Ads & Growth", items: ["Follower Growth", "Retargeting Ads"] },
    ],
  },
  {
    name: "Facebook",
    categories: [
      { title: "Page Setup", items: ["Brand Page Setup", "Group Management"] },
      { title: "Ads & Campaigns", items: ["Audience Targeting", "Conversion Ads"] },
    ],
  },
];

const Category: React.FC<{ category: CategoryType }> = ({ category }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? category.items : category.items.slice(0, 3);

  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-2">{category.title}</h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-sm">
        {displayedItems.map((item, idx) => (
          <li
            key={idx}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
      {category.items.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-indigo-600 hover:underline text-sm"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      )}
    </div>
  );
};

const Content: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Explore Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            layout
            className="border rounded-2xl shadow-md p-6 bg-white"
          >
            <button
              onClick={() =>
                setActive(active === platform.name ? null : platform.name)
              }
              className="w-full text-left flex justify-between items-center"
            >
              <span className="text-xl font-semibold">{platform.name}</span>
              <span>{active === platform.name ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {active === platform.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  {platform.categories.map((cat, idx) => (
                    <Category key={idx} category={cat} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Content;
