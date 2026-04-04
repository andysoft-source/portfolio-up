import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useTheme } from "../../../contexts/ThemeContext";
import OptimizedImage from "../../ui/common/OptimizedImage";
import { getThemeFocusRing } from "../../../utils/accessibility";

// Clean animation variants without conflicts
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" } 
    },
};

const hoverVariants = {
    rest: { 
        y: 0, 
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" } 
    },
    hover: { 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const ProjectCard = ({ project, onReadMore }) => {
    const { currentTheme } = useTheme();

    const extraTechnologies =
        project.technologies.others?.length > 0
            ? project.technologies.others
            : project.technologies.additional ?? [];

    // Get theme-specific colors and styles
    const getCardStyles = () => {
        switch (currentTheme) {
            case 'minimal':
                return {
                    card: 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300',
                    cardTitle:
                        'text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-800 via-blue-700 to-violet-600 bg-clip-text text-transparent',
                    description: 'text-gray-600',
                    techBadge:
                        'inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/90 px-2.5 py-1 text-xs font-medium text-indigo-900/85 transition-colors duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-900',
                    liveSite:
                        'rounded-xl border border-indigo-400/35 bg-indigo-600 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-violet-600 hover:border-violet-400/40 active:scale-[0.99]',
                };
            case 'neon':
                return {
                    card: 'bg-black border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/50',
                    cardTitle:
                        'text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 via-teal-200 to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(45,212,191,0.14)]',
                    description: 'text-gray-300',
                    techBadge:
                        'inline-flex items-center rounded-full border border-teal-800/60 bg-teal-950/50 px-2.5 py-1 text-xs font-medium text-teal-200/95 transition-colors duration-200 hover:border-cyan-700/50 hover:bg-teal-900/60 hover:text-cyan-100',
                    liveSite:
                        'rounded-xl border border-teal-400/40 bg-teal-600 py-2.5 text-sm font-medium text-teal-50 shadow-sm transition-colors duration-200 hover:bg-cyan-600 hover:border-cyan-400/45 active:scale-[0.99]',
                };
            case 'corporate':
                return {
                    card: 'bg-slate-50 border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300',
                    cardTitle:
                        'text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-800 via-sky-700 to-blue-600 bg-clip-text text-transparent',
                    description: 'text-slate-600',
                    techBadge:
                        'inline-flex items-center rounded-md border border-sky-200/90 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-900/90 shadow-sm transition-colors duration-200 hover:border-sky-300 hover:bg-sky-100',
                    liveSite:
                        'rounded-lg border border-sky-500/50 bg-sky-600 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-sky-500 hover:border-sky-400 active:scale-[0.99]',
                };
            default: // default theme
                return {
                    card: 'bg-neutral-800 border-neutral-700 shadow-lg hover:shadow-2xl hover:border-neutral-600 shadow-black/20',
                    cardTitle:
                        'text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-violet-200 via-fuchsia-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(167,139,250,0.14)]',
                    description: 'text-neutral-300',
                    techBadge:
                        'inline-flex items-center rounded-full border border-violet-500/35 bg-violet-950/40 px-2.5 py-1 text-xs font-medium text-violet-200/95 transition-colors duration-200 hover:border-fuchsia-500/40 hover:bg-violet-900/50 hover:text-fuchsia-100',
                    liveSite:
                        'rounded-xl border border-violet-400/45 bg-violet-600 py-2.5 text-sm font-medium text-violet-50 shadow-sm transition-colors duration-200 hover:bg-fuchsia-600 hover:border-fuchsia-400/50 active:scale-[0.99]',
                };
        }
    };

    const styles = getCardStyles();

    return (
        <>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="relative h-full group"
            >
                <motion.div
                    variants={hoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="h-full"
                >
                    <div
                        role="group"
                        tabIndex={0}
                        onClick={onReadMore}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onReadMore();
                            }
                        }}
                        aria-label={`${project.title} — press Enter or Space to open details`}
                        className={`rounded-xl py-6 px-3 border flex flex-col h-full transition-all duration-300 cursor-pointer ${styles.card}`}
                        style={{ minHeight: "420px" }}
                    >
                        
                        {/* Project Image */}
                        <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg mb-5"
                            aspectRatio="aspect-video"
                        />

                        {/* Project Title */}
                        <h3 className={`mb-5 w-full text-center ${styles.cardTitle}`}>
                            {project.title}
                        </h3>

                        {/* Tech stack: main + extra in one flowing row */}
                        <div className="mb-4 flex-1 flex flex-col">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.main.map((tech, i) => (
                                    <span
                                        key={`main-${i}-${tech}`}
                                        className={styles.techBadge}
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {extraTechnologies.map((tech, i) => (
                                    <span
                                        key={`extra-${i}-${tech}`}
                                        className={styles.techBadge}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto w-full">
                            <a
                                href={project.url || "#"}
                                {...(project.url
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : { "aria-disabled": true })}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!project.url) e.preventDefault();
                                }}
                                className={`flex w-full justify-center px-4 py-2.5 text-sm transition-all duration-200 ${styles.liveSite} ${getThemeFocusRing(currentTheme)}`}
                                aria-label={
                                    project.url
                                        ? `Visit ${project.title} live site`
                                        : `${project.title} live site not linked`
                                }
                            >
                                Live Site
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.shape({
            summary: PropTypes.string.isRequired
        }).isRequired,
        technologies: PropTypes.shape({
            main: PropTypes.arrayOf(PropTypes.string).isRequired,
            others: PropTypes.arrayOf(PropTypes.string),
            additional: PropTypes.arrayOf(PropTypes.string),
        }).isRequired,
        url: PropTypes.string.isRequired
    }).isRequired,
    onReadMore: PropTypes.func.isRequired
};

export default ProjectCard;
