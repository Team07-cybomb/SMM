import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

// ---- Types ----
type CategoryType = {
  title: string;
  items: { name: string; link: string }[];
};

type PlatformType = {
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  categories: CategoryType[];
};

const platforms: PlatformType[] = [
  {
    name: "Instagram",
    icon: <Icon icon="mdi:instagram" className="w-6 h-6 text-white" />,
    bgColor: "bg-instagram",
    categories: [
      {
        title: "Content Strategy",
        items: [
          { name: "Reels Planning", link: "" },
          { name: "Carousel Designs", link: "" },
          { name: "Caption Copywriting", link: "" },
          { name: "Story Scheduling", link: "" },
          { name: "Content Calendar", link: "" },
        ],
      },
      {
        title: "Paid Ads",
        items: [
          { name: "Audience Targeting", link: "" },
          { name: "Campaign Optimization", link: "" },
          { name: "Retargeting", link: "" },
        ],
      },
    ],
  },
  {
    name: "YouTube",
    icon: <Icon icon="mdi:youtube" className="w-6 h-6 text-white" />,
    bgColor: "bg-youtube",
    categories: [
      {
        title: "Video Optimization",
        items: [
          { name: "Thumbnail Design", link: "" },
          { name: "SEO Optimization", link: "" },
        ],
      },
      {
        title: "Analytics & Reporting",
        items: [{ name: "Performance Reports", link: "" }],
      },
    ],
  },
{
  name: "LinkedIn",
  icon: <Icon icon="mdi:linkedin" className="w-6 h-6 text-white" />,
  bgColor: "bg-linkedin",
  categories: [
    {
      title: "Content Marketing",
      items: [
        { name: "Post Strategy", link: "" },
        { name: "Thought Leadership", link: "" },
      ],
    },
    {
      title: "Lead Generation",
      items: [
        { name: "InMail Campaigns", link: "" },
        { name: "Sales Navigator Setup", link: "" },
      ],
    },
  ],
},
{
  name: "X",
  icon: <Icon icon="simple-icons:x" className="w-6 h-6 text-white" />,
  bgColor: "bg-x",
  categories: [
    {
      title: "Content Strategy",
      items: [
        { name: "Trending Topics", link: "" },
        { name: "Hashtag Campaigns", link: "" },
      ],
    },
    {
      title: "Ads & Growth",
      items: [
        { name: "Follower Growth", link: "" },
        { name: "Retargeting Ads", link: "" },
      ],
    },
  ],
},
{
  name: "Facebook",
  icon: <Icon icon="mdi:facebook" className="w-6 h-6 text-white" />,
  bgColor: "bg-facebook",
  categories: [
    {
      title: "Page Setup",
      items: [
        { name: "Brand Page Setup", link: "" },
        { name: "Group Management", link: "" },
      ],
    },
    {
      title: "Ads & Campaigns",
      items: [
        { name: "Audience Targeting", link: "" },
        { name: "Conversion Ads", link: "" },
      ],
    },
  ],
},
];

// ---- Category Component ----
const Category: React.FC<{ category: CategoryType }> = ({ category }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? category.items : category.items.slice(0, 3);

  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-white">{category.title}</h4>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {displayedItems.map((item, idx) => (
          <motion.li
            key={idx}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="p-2 rounded-md bg-white/20 hover:bg-white/30 transition"
          >
            <a href={item.link} className="block w-full h-full text-white">
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {category.items.length > 3 && (
        <button
            onClick={() => setShowAll(!showAll)}
            className="mt-2 btn-black text-sm"
          >
            {showAll ? "Show Less" : "View More"}
        </button>

      )}
    </div>
  );
};

// ---- Main Section ----
const Content: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl shadow-lg p-6 text-white ${platform.bgColor} hover:brightness-110 transition`}
          >
            {/* Header */}
            <button
              onClick={() =>
                setActive(active === platform.name ? null : platform.name)
              }
              className="w-full text-left flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                {platform.icon}
                <span className="text-xl font-semibold text-white">{platform.name}</span>
              </div>
              <span className="text-2xl text-white">
                {active === platform.name ? "−" : "+"}
              </span>
            </button>

            {/* Collapsible Content */}
            <AnimatePresence initial={false}>
              {active === platform.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
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
